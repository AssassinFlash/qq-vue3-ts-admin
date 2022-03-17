<template>
  <el-tabs
    v-model="activeTab"
    type="card"
    closable
    @tab-click="tabClick"
    @tab-remove="removeTab"
  >
    <el-tab-pane
      v-for="tab in tabList"
      :key="tab.path"
      :label="tab.title"
      :name="tab.path"
    />
  </el-tabs>
</template>

<script lang="ts" setup>
// el-tab-pane 中，label是展示的名字，name是activeTab的内容
import { ITab } from '@/store/Type'
import { useRoute, useRouter } from 'vue-router'
import { useStore } from '@/store'
import { ref, computed, watch, onMounted } from 'vue'

const store = useStore()
const route = useRoute()
const router = useRouter()

// 当前激活的选项卡
const activeTab = ref('')
// 获取选项卡数组
const tabList = computed(() => store.getters.getTabList)

// 设置激活的选项卡
const setActive = () => {
  activeTab.value = route.path
}

// 添加选项卡
const addTab = () => {
  const { path, meta } = route
  const tab: ITab = {
    title: meta.title as string,
    path
  }
  store.commit('addTab', tab)
}

// 点击选项卡，回调参数：tab，被点击的标签
const tabClick = (tab: any) => {
  const { props } = tab
  router.push(props.name)
}

// 删除选项卡，回调参数：name，被删除的标签的名字
const removeTab = (targetName: string) => {
  const tabs = tabList.value
  let activeName = activeTab.value
  // 1. 如果当前激活的选项卡是要被删除的选项卡
  if (activeName === targetName) {
    tabs.forEach((tab: ITab, index: number) => {
      if (tab.path === targetName) {
        // 2. 将当前激活的选项卡位置向后移，如果是最后一位，则向前移
        const nextTab = tabs[index + 1] || tabs[index - 1]
        if (nextTab) {
          activeName = nextTab.path
        }
      }
    })
  }
  // 3. 更新当前激活的选项卡，从选项卡数组中删除指定选项卡
  activeTab.value = activeName
  store.state.tabList = tabs.filter((tab: ITab) => tab.path !== targetName)
  router.push({ path: activeName })
}

// 解决刷新数据丢失的问题
const beforeUnload = () => {
  // 1. 监听beforeunload事件，刷新前将选项卡数组存入sessionStorage
  window.addEventListener('beforeunload', () => {
    sessionStorage.setItem('tabList', JSON.stringify(tabList.value))
  })
  // 2. 刷新后从sessionStorage中取出选项卡数组，进行赋值
  const tabSession = sessionStorage.getItem('tabList')
  if (tabSession) {
    const oldTabList = JSON.parse(tabSession)
    if (oldTabList.length > 0) {
      store.state.tabList = oldTabList
    }
  }
}

onMounted(() => beforeUnload())

// 监听路由的变化
watch(
  () => route.path,
  () => {
    setActive()
    addTab()
  },
  { immediate: true }
)
</script>

<style lang="scss" scoped>
:deep(.el-tabs__header) {
  margin: 0;
}

:deep(.el-tabs__item) {
  height: 26px !important;
  line-height: 26px !important;
  text-align: center !important;
  margin: 0 3px !important;
  padding: 0 10px !important;
  border: 1px solid #d8dce5 !important;
  color: #495060;
  font-size: 12px !important;
}

:deep(.el-tabs__nav) {
  border: none !important;
}

:deep(.is-active) {
  background-color: #42b983 !important;
  border: 1px solid #42b983 !important;
  border-bottom: 1px solid transparent !important;
  color: #fff !important;
}

:deep(.el-tabs__item:hover) {
  color: #495060 !important;
}

:deep(.is-active:hover) {
  color: #fff !important;
}
</style>
