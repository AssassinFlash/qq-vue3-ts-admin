import { InjectionKey } from 'vue'
import { createStore, useStore as baseUseStore, Store } from 'vuex'
import { ITab } from './Type'

export interface State {
  collapse: boolean
  tabList: Array<ITab>
}

export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
  state: {
    collapse: false,
    tabList: []
  },
  mutations: {
    // 设置左侧菜单栏收缩展开
    setCollapse: (state: State, collapse: boolean) => {
      state.collapse = collapse
    },
    // 添加选项卡
    addTab: (state: State, tab: ITab) => {
      if (state.tabList.some((item) => item.path === tab.path)) return
      state.tabList.push(tab)
    }
  },
  getters: {
    getCollapse: (state: State) => {
      return state.collapse
    },
    getTabList: (state: State) => {
      return state.tabList
    }
  }
})

// 导出自定义的 useStore 函数生成 store
export const useStore = () => {
  return baseUseStore(key)
}
