<template>
  <div id="cesiumContainer"></div>
</template>

<script>
export default {
  name: "class2-add_entity",
  data() {
    return {
      // viewer: null
    }
  },
  methods: {
    // receiveviewer(value) {
    //   this.viewer=value;
    // },
    init() {
      const Cesium = this.Cesium
      const viewer = new Cesium.Viewer('cesiumContainer',{
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
      viewer.scene.debugShowFramesPerSecond = true; //帧率显示
      const redBox = viewer.entities.add({ //添加实体盒子
        name: 'Red box with black outline',
        position: Cesium.Cartesian3.fromDegrees(-107.0, 40.0, 300000.0),
        box: {
          dimensions: new Cesium.Cartesian3(400000.0, 300000.0, 500000.0),
          material: Cesium.Color.RED.withAlpha(0.5),
          outline: true,
          outlineColor: Cesium.Color.BLACK
        }
      });
     viewer.zoomTo(viewer.entities);
    }
  },
  mounted() {
    // this.$bus.$on('sendbaseviewer', this.receiveviewer)
    this.init()
  }
}
</script>

<style scoped>

</style>