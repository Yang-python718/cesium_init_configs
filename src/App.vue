<template>
  <div id="app">
    <home/>
  </div>
</template>

<script>
import home from "@/components/home";

export default {
  name: 'App',
  components: {
    home
  }
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
