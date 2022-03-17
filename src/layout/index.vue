<template>
  <el-container class="layout">
    <el-aside class="aside" width="auto">
      <MenuBar />
    </el-aside>

    <el-container class="layout">
      <el-header class="header">
        <Header />
      </el-header>

      <el-main class="main">
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts" setup>
import Header from './header/header.vue'
import MenuBar from './menu/menuBar.vue'
</script>

<style lang="scss" scoped>
.layout {
  height: 100%;
  overflow: hidden;

  .aside {
    background: #304156;
    overflow: hidden;
  }

  .header {
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid #e5e5e5;
  }

  .main {
    background: darkcyan;
  }
}
</style>
