<template>
<div id="cesiumContainer"></div>
</template>

<script>
export default {
  name: "home",
  methods: {
    init() {
      const Cesium=this.Cesium
      let viewer = new Cesium.Viewer("cesiumContainer",{
        animation: false, //动画器件
        baseLayerPicker: true,  //图层选择器
        geocoder: true, //查找控件
        timeline: false, //时间线
        sceneModePicker: true,  //二三维切换控件
        navigationHelpButton: false,  //导航帮助问号控件
        showRenderLoopErrors: true,
        fullscreenButton: false,  //全屏
        fullscreenElement: 'cesiumContainer', //按下全屏按钮时要置于全屏模式的元素或ID
        infoBox: true
      });
      viewer.infoBox.frame.removeAttribute("sandbox");
      viewer.infoBox.frame.src = "about:blank";
      viewer._cesiumWidget._creditContainer.style.display="none";
      // fly
      viewer.camera.flyTo({
        destination: Cesium.Cartesian3.fromDegrees(
            114.296063,
            30.55245,
            2000000
        ),
        orientation: {
          heading: Cesium.Math.toRadians(0),
          pitch: Cesium.Math.toRadians(-90),
          roll: 0.0
        },
        duration: 10 // fly time 10s
      });

    }},
  mounted() {
   this.init();
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