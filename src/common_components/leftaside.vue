<template>
  <div class="el-aside">

  <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
    <el-radio-button :label="false">展开</el-radio-button>
    <el-radio-button :label="true">收起</el-radio-button>
  </el-radio-group>

  <el-menu :default-active="this.$route.path" router class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
    <el-menu-item index="/home">
      <i class="el-icon-s-home"></i>
      <span slot="title">基本控件</span>
    </el-menu-item>

    <el-menu-item index="/add_entity">
      <i class="el-icon-location"></i>
      <span slot="title">加载实体</span>
    </el-menu-item>
    <el-menu-item index="/add_3DTiles">
      <i class="el-icon-document"></i>
      <span slot="title">加载3DTiles</span>
    </el-menu-item>
    <el-menu-item index="4">
      <i class="el-icon-setting"></i>
      <span slot="title">导航四</span>
    </el-menu-item>
  </el-menu>
  </div>
</template>

<script>
export default {
  name:'leftaside',
  data() {
    return {
      isCollapse: false

    }},
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style scoped>
.el-aside{
  position: absolute;
  top: 0;
  z-index: 100;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>