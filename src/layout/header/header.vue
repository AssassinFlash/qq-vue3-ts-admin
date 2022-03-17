<template>
  <div class="header">
    <Collapse />
    <BreadCrumb />
  </div>
</template>

<script lang="ts" setup>
import Collapse from './Collapse.vue'
import BreadCrumb from './BreadCrumb.vue'
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
</style>
