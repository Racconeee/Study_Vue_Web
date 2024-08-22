const routes = [
  {
    path: '/',
    alias : '/home',
    name: 'home',
    component: () => import('layouts/HomeLayouts.vue'),
    children: [
      { path: '', component: () => import('pages/HomeView.vue') }
    ]
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
