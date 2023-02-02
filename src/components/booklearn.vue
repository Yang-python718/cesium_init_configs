<template>
  <div id="cesiumContainer"></div>
</template>

<script>
export default {
  name: "home",
  data(){
    return{
      viewer:null
    }
  },
  methods: {
    init() {
      let that=this;
      const Cesium=this.Cesium
      this.viewer = new Cesium.Viewer("cesiumContainer",{
        animation: false, //动画器件
        baseLayerPicker: true,  //图层选择器
        geocoder: true, //查找控件
        timeline: false, //时间线
        sceneModePicker: true,  //二三维切换控件
        navigationHelpButton: false,  //导航帮助问号控件
        selectionIndicator:false, //鼠标点击显示绿框
        showRenderLoopErrors: true,
        fullscreenButton: true,  //全屏
        fullscreenElement: 'cesiumContainer', //按下全屏按钮时要置于全屏模式的元素或ID
        infoBox: true,
        terrainProvider: Cesium.createWorldTerrain(),
        clock:new Cesium.Clock(),
      });
      const osmBuildings = this.viewer.scene.primitives.add(Cesium.createOsmBuildings());
      this.viewer.infoBox.frame.removeAttribute("sandbox");
      this.viewer.infoBox.frame.src = "about:blank";
      this.viewer._cesiumWidget._creditContainer.style.display="none"; //版权信息
      this.viewer.scene.debugShowFramesPerSecond = true; //帧率显示
      // fly
      this.viewer.camera.flyTo({
        destination: Cesium.Cartesian3.fromDegrees(
            114.296063,
            30.55245,
            20000000
        ),
        orientation: {
          heading: Cesium.Math.toRadians(0),
          pitch: Cesium.Math.toRadians(-90),
          roll: 0.0
        },
        duration: 3 // fly time 10s
      });

    }},
  mounted() {
    this.init();
    // this.$bus.$emit('sendbaseviewer',this.viewer)
  }
}
</script>

<style scoped>
#cesiumContainer {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden;
}
</style>