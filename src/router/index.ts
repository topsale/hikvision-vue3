import type { App } from 'vue'
import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHashHistory } from 'vue-router'

/**
 * 定义路由
 * 每个路由都需要映射到一个组件
 */
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Root',
    component: () => import('@/views/Main.vue'),
  },
]

/**
 * 创建路由实例并传递 routes 配置
 */
export const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior: () => ({ left: 0, top: 0 }),
})

/**
 * 将 App 组件和定义的路由放入到 vue 应用
 * 并挂载到模板页面 id 为 app 的元素上
 * @param app App 组件
 */
export async function setRouter(app: App) {
  app.use(router)
  await router.isReady()
}
