<template>
  <el-icon class="hamburger" @click.prevent="changeIcon">
    <component :is="isCollapse ? 'Expand' : 'Fold'" />
  </el-icon>
</template>

<script lang="ts" setup>
import { useStore } from '@/store'
import { ref, computed } from 'vue'

const store = useStore()

const isCollapse = computed(() => store.getters.getCollapse)
const changeIcon = () => {
  store.commit('setCollapse', !isCollapse.value)
}
</script>

<style lang="scss" scoped>
.hamburger {
  font-size: 22px;
  color: #303133;
  cursor: pointer;
}
</style>
