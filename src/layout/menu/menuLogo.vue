<template>
  <div class="logo">
    <img src="@/assets/logo.png" alt="" />
    <transition name="moveRight">
      <span v-if="!isCollapse" class="title">Vue3+Typescript后台</span>
    </transition>
  </div>
</template>

<script lang="ts" setup>
import { useStore } from '@/store'
import { computed } from 'vue'

const store = useStore()

const isCollapse = computed(() => store.getters.getCollapse)
</script>

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
  }

  .title {
    position: relative;
    display: inline-block;
    margin-left: 12px;
    font-size: 16px;
    font-weight: 600;
    vertical-align: middle;
  }
}

.moveRight-enter-from,
.moveRight-leave-to {
  // opacity: 0;
  transform: transition(-50px, 0);
}

.moveRight-enter-to,
.moveRight-leave-from {
  // opacity: 1;
  transform: translate(0, 0);
}

.moveRight-enter-active,
.moveRight-leave-active {
  transition: all 0.3s ease;
}
</style>
