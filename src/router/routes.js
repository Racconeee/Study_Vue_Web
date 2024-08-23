const routes = [
  {
    path: "/",
    alias: "/home",
    name: "home",
    component: () => import("layouts/HomeLayouts.vue"),

    children: [
      {
        path: "",
        name: "basichome",
        component: () => import("pages/HomeView.vue"),
      },
    ],
  },
  {
    path: "/Test/top",
    component: () => import("pages/TestTopView.vue"),
  },
  {
    path: "/about",
    component: () => import("pages/AboutView.vue"),
  },
  {
    path: "/quiz/:id",
    component: () => import("pages/Quiz/QuizView.vue"),
  },
  {
    path: "/result",
    component: () => import("pages/Result/ResultView.vue"),
  },
  {
    path: "/none-miss",
    component: () => import("pages/TestTopView.vue"),
  },
  {
    path: "/admin",
    alias: "/admin/home",
    name: "admin",
    component: () => import("layouts/AdminLayouts.vue"),
    children: [
      {
        path: "",
        name: "adminhome",
        component: () => import("pages/admin/AdminMain.vue"),
      },
      {
        path: "info",
        name: "testinfo",
        component: () => import("pages/admin/AdminTestInfo.vue"),
      },
      {
        path: "traffic",
        name: "traffic",
        component: () => import("pages/admin/AdminTraffic.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
