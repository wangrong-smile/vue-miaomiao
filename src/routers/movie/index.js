// 按需载入方法
export default {
  path: '/movie',
  component: () => import('@/views/Movie')
}
