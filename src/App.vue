<template>
  <div id="app">
    <leftaside/>
    <router-link to="/home"></router-link>
    <router-link to="/add_entity"></router-link>
    <router-link to="/add_3DTiles"></router-link>
    <router-view/>
  </div>
</template>

<script>
import leftaside from "@/common_components/leftaside";
export default {
  name: 'App',
  components: {
    leftaside,
  },

}
</script>

<style>
html,
body,
#app {
  height: 100%;
  width: 100%;
  padding: 0;
  margin: 0;
  color: #000;
  overflow: hidden;
}
</style>
