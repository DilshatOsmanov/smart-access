/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import store from "@/store";

// @ts-ignore
import isAuth from "./middleware/isAuth";
// @ts-ignore
import middlewarePipeline from "./middlewarePipeline";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: () => import("@/views/Home.vue"),
    children: [
      {
        path: "/",
        name: "home",
        component: () => import("@/views/Home.vue"),
        meta: { middleware: [isAuth] },
      },
    ],
  },
  {
    path: "/",
    component: () => import("@/components/Layout.vue"),
    children: [
      {
        path: "/main",
        name: "main",
        component: () => import("@/views/Main.vue"),
        meta: { middleware: [isAuth] },
      },
      {
        path: "/attendance",
        name: "attendance",
        component: () => import("@/views/Attendance.vue"),
        meta: { middleware: [isAuth] },
      },
      {
        path: "/users",
        name: "user-list",
        component: () => import("@/views/UserList.vue"),
        meta: { middleware: [isAuth] },
      },
      {
        path: "/tourniquets",
        name: "tourniquets",
        component: () => import("@/views/Tourniquets.vue"),
        meta: { middleware: [isAuth] },
      },
      {
        path: "/profile",
        name: "profile",
        component: () => import("@/views/Profile.vue"),
        meta: { middleware: [isAuth] },
      },
      {
        path: "/settings",
        name: "settings",
        component: () => import("@/views/Settings.vue"),
        meta: { middleware: [isAuth] },
      },
    ],
  },
  {
    path: "/sign-in",
    component: () => import("@/views/authentication/SignIn.vue"),
    meta: { middleware: [isAuth] },
  },
  {
    path: "/sign-up",
    component: () => import("@/views/authentication/SignUp.vue"),
    meta: { middleware: [isAuth] },
  },
  {
    path: "/reset-password",
    component: () => import("@/views/authentication/PasswordReset.vue"),
    meta: { middleware: [isAuth] },
  },
  {
    path: "/404",
    name: "404",
    component: () => import("@/views/404.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/404",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  // Scroll page to top on every route change
  // But if the route and parameters are the same, preserve the scroll position
  if (!(to.name === from.name && to.params.id === from.params.id)) {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
  }

  // secure routes
  if (!to.meta.middleware) {
    return next();
  }
  const middleware = to.meta.middleware;

  const context = {
    to,
    from,
    next,
    store,
  };

  return (middleware as any)[0]({
    ...context,
    nextMiddleware: middlewarePipeline(context, middleware, 1),
  });
});

export default router;
