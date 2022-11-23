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
        animation: false,
        baseLayerPicker: false,
        geocoder: true,
        timeline: false,
        sceneModePicker: true,
        navigationHelpButton: false,
        showRenderLoopErrors: true,
        fullscreenButton: true,
        fullscreenElement: 'cesiumContainer',
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
            20000000
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