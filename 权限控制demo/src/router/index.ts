import {
  createRouter,
  createWebHistory,
  createWebHashHistory,
} from "vue-router";
import allRoutes from "./all-routes";
import Home from "@/views/home/index.vue";
import Login from "@/views/login/index.vue";
import NotFound from "@/views/errorPage/404.vue";
import Forbidden from "@/views/errorPage/403.vue";
import Layout from "@/views/layout/index.vue";
import Order from "@/views/order-manage/index.vue";
import Goods from '@/views/goods-manage/index.vue';

import { useLoginStore } from "@/stores";
import { usePermissionStore } from "@/stores/permission";

const router = createRouter({
  // history: createWebHistory(import.meta.env.BASE_URL),
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/login",
      name: "login",
      component: Login,
    },
    {
      path: "/403",
      component: Forbidden,
    },
    {
      path: "/404",
      name: "404",
      component: NotFound,
    },
    // {
    //   path: "/:pathMatch(.*)*",
    //   redirect: "/404",
    // },
    // {
    //   path: "/",
    //   name: "Layout",
    //   component: Layout,
    //   children: [
    //     {
    //       path: "home",
    //       component: Home,
    //     },
    //     {
    //       path: "order",
    //       component: Order,
    //     },
    //   ],
    // },
  ],
});
export const dynamicRootRoute = {
  path: "", // 为什么为空? 是为了方便 访问/home 可以直接访问到children里的Home
  component: Layout,
  name: "layout",
  meta: {
    requiresAuth: true, // 添加到其chilren下的动态路由都要权限
  },
  children: [
    {
      path: "/home",
      component: Home,
      name: "home",
      meta: {
        name: "首页",
        icon: "icon-name",
      },
    },
    // {
    //   path: "/goods",
    //   component: Goods,
    //   name: "goods",
    //   meta: {
    //     name: "产品管理",
    //     icon: "icon-order-manage",
    //   },
    // },
  ],
};

router.addRoute(dynamicRootRoute);
// console.log(router)

router.beforeEach((to, from, next) => {
  const loginStore = useLoginStore();
  // console.log(loginStore.userToken);
  // 没有token
  if (!loginStore.userToken)
    if (
      //无需登录
      !to.matched.some((record) => {
        record.meta.requiresAuth;
      })
    )
      next();
    //需要登陆
    else {
      next({
        name: "login",
      });
    }
  //有token
  else {
    const permissionStore = usePermissionStore();
    // console.log(permissionStore.permissionRoutes);
    //用户已登录，未处理处理 路由权限
    if (!permissionStore.permissionRoutes) {
      console.log("开始处理路由权限");
      permissionStore.FETCH_PERMISSION().then((res) => {
        next(to.fullPath);
      });
    }
    // 已经拥有路由权限
    else {
      // if (to.path !== "/login") next();
      // else next(from.fullPath);
      next();
    }
  }
});
 
export default router;

/**
 * 待解决：
 * 1. 初次访问出现没有该路由的警告⚠怎么处理
 * 2. 不同角色登录，拥有不同路由
 */
