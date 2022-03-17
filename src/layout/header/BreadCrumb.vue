<template>
  <el-breadcrumb separator-icon="ArrowRight" class="breadcrumb">
    <el-breadcrumb-item v-for="item in breadcrumbs" :key="item.path">
      {{ item.meta.title }}
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script lang="ts" setup>
import { useRoute, RouteLocationMatched } from 'vue-router'
import { ref, watch, Ref } from 'vue'

const route = useRoute()

// 选项卡数据
const breadcrumbs: Ref<RouteLocationMatched[]> = ref([])

const getBreadcrumb = () => {
  const matched = route.matched.filter((item) => item.meta && item.meta.title)
  if (matched[0].path !== '/dashboard') {
    matched.unshift({ path: '/dashboard', meta: { title: '首页' } } as any)
  }
  breadcrumbs.value = matched
}
watch(
  () => route.path,
  () => getBreadcrumb(),
  { immediate: true }
)
</script>

<style lang="scss" scoped>
.breadcrumb {
  margin-left: 15px;
}

:deep(.el-breadcrumb__inner) {
  color: black !important;
  font-weight: bold !important;
}
</style>
