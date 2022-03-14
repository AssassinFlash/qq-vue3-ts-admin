import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue()],
	server: {
		host: '0.0.0.0', // 解决 vite use --host to expose
		port: 8080,
		open: true,
	},
	// 配置 @ 路径别名
	resolve: {
		alias: [
			{
				find: '@',
				replacement: resolve(__dirname, 'src'),
			},
		],
	},
})
