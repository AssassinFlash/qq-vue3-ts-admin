import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Layout from '@/layout/index.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: '/dashboard',
        component: () => import('@/layout/dashboard/index.vue'),
        name: 'dashboard',
        meta: {
          title: '首页',
          icon: 'HomeFilled'
        }
      }
    ]
  },
  {
    path: '/system',
    component: Layout,
    name: 'system',
    meta: {
      title: '系统管理',
      icon: 'Menu',
      roles: ['sys:manage'],
      parentId: 0
    },
    children: [
      {
        path: '/department',
        component: () => import('@/views/system/department/department.vue'),
        name: 'department',
        meta: {
          title: '机构管理',
          icon: 'Briefcase',
          roles: ['sys:dept']
        }
      },
      {
        path: '/userList',
        component: () => import('@/views/system/User/UserList.vue'),
        name: 'userList',
        meta: {
          title: '用户管理',
          icon: 'User',
          roles: ['sys:user']
        }
      },
      {
        path: '/roleList',
        component: () => import('@/views/system/Role/RoleList.vue'),
        name: 'RoleList',
        meta: {
          title: '角色管理',
          icon: 'Avatar',
          roles: ['sys:role']
        }
      },
      {
        path: '/menuList',
        component: () => import('@/views/system/Menu/MenuList.vue'),
        name: 'menuList',
        meta: {
          title: '权限管理',
          icon: 'Monitor',
          roles: ['sys:menu']
        }
      }
    ]
  },
  {
    path: '/goods',
    component: Layout,
    name: 'goods',
    meta: {
      title: '商品管理',
      icon: 'GoodsFilled',
      roles: ['sys:goods']
    },
    children: [
      {
        path: '/goodCategory',
        component: () =>
          import('@/views/goods/goodsCategory/goodsCategoryList.vue'),
        name: 'goodCategory',
        meta: {
          title: '商品分类',
          icon: 'Present',
          roles: ['sys:goodsCategory']
        }
      }
    ]
  },
  {
    path: '/systenConfig',
    component: Layout,
    name: 'systenConfig',
    meta: {
      title: '系统工具',
      icon: 'Tools',
      roles: ['sys:systenConfig']
    },
    children: [
      {
        path: '/document',
        component: () => import('@/views/system/config/systemDocument.vue'),
        name: 'http://119.45.133.128:8098',
        meta: {
          title: '接口文档',
          icon: 'Document',
          roles: ['sys:document']
        }
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
