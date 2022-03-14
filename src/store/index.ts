import { InjectionKey } from 'vue'
import { createStore, useStore as baseUseStore, Store } from 'vuex'

export interface State {
  count: number
}

export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
  state: {
    count: 0
  },
  mutations: {
    setCount: (state: State, count: number) => {
      state.count = count
    }
  },
  getters: {
    getCount: (state: State) => {
      return state.count
    }
  }
})

// 导出自定义的 useStore 函数生成 store
export const useStore = () => {
  return baseUseStore(key)
}
