<template>
  <template v-for="menu in menuList" :key="menu.path">
    <!-- 折叠菜单栏 -->
    <el-sub-menu
      v-if="menu.children && menu.children.length > 0"
      :index="menu.path"
    >
      <template #title>
        <el-icon>
          <component :is="menu.meta.icon" />
        </el-icon>
        <span>{{ menu.meta.title }}</span>
      </template>

      <!-- 该菜单项有 children，则将 children 数组送进去迭代 -->
      <MenuItem :menu-list="menu.children" />
    </el-sub-menu>

    <!-- 具体菜单栏 -->
    <el-menu-item v-else :index="menu.path" style="color: #f4f4f5">
      <el-icon>
        <component :is="menu.meta.icon" />
      </el-icon>
      <template #title>{{ menu.meta.title }}</template>
    </el-menu-item>
  </template>
</template>

<script lang="ts" setup>
defineProps(['menuList'])
</script>

<style lang="scss" scoped></style>
