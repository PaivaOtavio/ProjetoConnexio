import Vue from "vue";
import VueRouter from "vue-router";
import AuthRoutes from "@/features/auth";
import DashboardTemplate from "@/core/templates/dashboard-template";
Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "auth",
      component: AuthRoutes,
      meta: {
        auth: false,
      },
    },
    {
      path: "/dashboard",
      component: DashboardTemplate,
      children: [
        {
          path: "/dashboard",
          name: "dashboard",
          meta: {
            auth: true,
          },
          component: () => import("@/features/dashboard"),
        },
        {
          path: "/profile",
          name: "profile",
          meta: {
            auth: true,
          },
          component: () => import("@/features/profile"),
        },
      ],
    },
  ],
});
