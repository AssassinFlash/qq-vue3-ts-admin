import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { store, key } from './store'

// 导入 element-plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// 导入全局样式
import './styles/index.scss'

// 导入所有 el-icon
import installIcons from './icons'

const app = createApp(App)
installIcons(app)
app.use(router).use(store, key).use(ElementPlus).mount('#app')
