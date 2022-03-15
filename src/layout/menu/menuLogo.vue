<template>
  <div class="logo">
    <img src="@/assets/logo.png" alt="" />
    <span class="title">Vue3+Typescript后台</span>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.logo {
  height: 50px;
  line-height: 50px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;

  img {
    width: 32px;
    height: 32px;
    margin-right: 12px;
  }

  .title {
    font-size: 16px;
    font-weight: 600;
    vertical-align: middle;
  }
}
</style>
