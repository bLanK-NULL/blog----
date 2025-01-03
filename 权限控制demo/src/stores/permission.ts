import { defineStore } from "pinia";
import { fetchPermission } from "@/api";
import allRoutes from "@/router/all-routes";
import router, { dynamicRootRoute } from "@/router/index";
import { recursionRouter, setDefaultRoute } from "@/utils/recursion-router";
import { ref } from "vue";

export const usePermissionStore = defineStore("permission", () => {
  const permissionRoutes = ref<null | Array<any>>(null);
  const sidebarMenu = ref<Array<any>>([]);
  const currentMenu = ref("");
  function SET_PERMISSION(routes: Array<any>) {
    permissionRoutes.value = routes;
  }
  function CLEAR_PERMISSION() {
    permissionRoutes.value = null;
  }
  function SET_MENU(menu: Array<any>) {
    sidebarMenu.value = menu;
  }
  function CLEAR_MENU() {
    sidebarMenu.value = [];
  }
  async function FETCH_PERMISSION() {
    const res = await fetchPermission();
    const receiveRoutes = res.data.data;
    const routes = recursionRouter(receiveRoutes, allRoutes);
    console.log("比较权限后得到的routes", routes);

    dynamicRootRoute.children.push(...routes);
    console.log("准备动态添加", dynamicRootRoute);
    // SET_MENU(dynamicRootRoute.children); //暂时不用
    // setDefaultRoute([dynamicRootRoute]); //* 什么作用？
    //初始化路由
    const initialRoutes = router.options.routes;
    router.addRoute(dynamicRootRoute); //* 动态添加路由
    console.log("router", router);
    SET_PERMISSION([...initialRoutes, dynamicRootRoute]);
  }

  return {
    FETCH_PERMISSION,
    permissionRoutes,
  };
});
