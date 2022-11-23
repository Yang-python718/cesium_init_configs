import Vue from 'vue'
import App from './App.vue'

import "cesium/widgets.css";
import * as Cesium from "cesium";

Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI2NmZkYjRmYy03OTU5LTQxOWEtOTBmMi0wYzRmYWM5ZWY5ZTQiLCJpZCI6NTk2NTcsImlhdCI6MTYyNDM2NTUwOX0.yV5qUw4TapdzHASlFKSn63rNjEGVUJ1CPQyNZIAm4Js';

Vue.prototype.Cesium=Cesium;
Vue.config.productionTip = false


new Vue({
  render: h => h(App),
}).$mount('#app')
