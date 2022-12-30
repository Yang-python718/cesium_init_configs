import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

import "cesium/Source/Widgets/widgets.css";
import * as Cesium from "cesium";
import router from "@/router";

window.CESIUM_BASE_URL = "/";

Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI2NmZkYjRmYy03OTU5LTQxOWEtOTBmMi0wYzRmYWM5ZWY5ZTQiLCJpZCI6NTk2NTcsImlhdCI6MTYyNDM2NTUwOX0.yV5qUw4TapdzHASlFKSn63rNjEGVUJ1CPQyNZIAm4Js';

Vue.prototype.Cesium=Cesium;
Vue.config.productionTip = false


new Vue({
  render: h => h(App),
  router,
  beforeCreate() {
    Vue.prototype.$bus=this
  }
}).$mount('#app')
