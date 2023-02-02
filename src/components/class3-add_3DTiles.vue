<template>
  <div>
    <div id="cesiumContainer"></div>
    <div id="height">输入高度：<input v-model="height"></div>
  </div>
</template>

<script>
export default {
  name: "class3-add_3DTiles",
  data() {
    return {
      height: "",
    }
  },
  methods: {
    init() {
      const Cesium = this.Cesium
      const viewer = new Cesium.Viewer('cesiumContainer', {
        animation: false, //动画器件
        baseLayerPicker: true,  //图层选择器
        geocoder: true, //查找控件
        timeline: false, //时间线
        sceneModePicker: true,  //二三维切换控件
        navigationHelpButton: false,  //导航帮助问号控件
        showRenderLoopErrors: true,
        fullscreenButton: true,  //全屏
        fullscreenElement: 'cesiumContainer', //按下全屏按钮时要置于全屏模式的元素或ID
        infoBox: true,
      });
      viewer.infoBox.frame.removeAttribute("sandbox");
      viewer.infoBox.frame.src = "about:blank";
      viewer._cesiumWidget._creditContainer.style.display = "none"; //版权信息
      viewer.scene.debugShowFramesPerSecond = false; //帧率显示
      viewer.zoomTo(viewer.entities);
      // 加载3Dtile数据
      // 3D Tiles的位置偏移》》创建位置偏移变换矩阵
      const x = 360.0;
      const y = -920.0;
      const z = -820.0;
      // 创建变换矩阵 方法一
      const m = Cesium.Matrix4.fromArray([
        1.0, 0.0, 0.0, 0.0,
        0.0, 1.0, 0.0, 0.0,
        0.0, 0.0, 1.0, 0.0,
        x, y, z, 1.0
      ]);
      // 创建变换矩阵 方法二
      // const translation=Cesium.Cartesian3.fromArray([x, y, z]);
      // m= Cesium.Matrix4.fromTranslation(translation);
      const tileset = viewer.scene.primitives.add(
          new Cesium.Cesium3DTileset({
            url: '../../model/class3data/Scene/testm3DTiles.json',
            maximumScreenSpaceError: 2,
            maximumNumberOfLoadedTiles: 1000, //最大加载瓦片个数
            modelMatrix: m //形状变换矩阵
          }));
      // 3DTiles旋转》》创建旋转矩阵
      const m1=Cesium.Matrix3.fromRotationX(Cesium.Math.toRadians(0));
      tileset.modelMatrix=Cesium.Matrix4.multiplyByMatrix3(m,m1,new Cesium.Matrix4());

      // 所有瓦片加载完毕的promise
      tileset.readyPromise.then(
          function () {
            console.log('加载3D瓦片完成');
            const boundingSphere = tileset.boundingSphere;
            viewer.camera.viewBoundingSphere(boundingSphere, new Cesium.HeadingPitchRange(0, -2.0, 0));
            viewer.camera.lookAtTransform(Cesium.Matrix4.IDENTITY);
          }
      );
    },
    changeHeight() {
      const height = Number(this.height);
      if (isNaN(height)) {
        return;
      }
      const cartographic = this.Cesium.Cartographic.fromCartesian(this.tileset.boundingSphere.center);
      const surface = this.Cesium.Cartesian3.fromRadians(cartographic.longitude, cartographic.latitude, cartographic.height);
      const offset = this.Cesium.Cartesian3.fromRadians(cartographic.longitude, cartographic.latitude, height);
      const translation = this.Cesium.Cartesian3.subtract(offset, surface, new this.Cesium.Cartesian3());
      this.tileset.modelMatrix = this.Cesium.Matrix4.fromTranslation(translation);
    }
  },
  watch:{
    height:{
      handler(){
        this.changeHeight()
      },
      immediate:true
    }
  },
  mounted() {
    this.init()
  }
}
</script>

<style scoped>
#height {
  position: relative;
  top: 20px;
  left: 50px;
  z-index: 999;
}
</style>