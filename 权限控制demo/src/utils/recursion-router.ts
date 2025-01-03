/**
 *
 * @param {Array} userRoutes 用户权限
 * @param {Array} allRoutes 所有路由
 * @returns 根据用户权限生成的用户路由
 */
function recursionRouter(userRoutes: Array<any>, allRoutes: Array<any>) {
  const realRoutes: Array<any> = [];
  userRoutes.forEach((u, i) => {
    const v = allRoutes.find((v) => v.meta.name === u.name);
    if (!v) return; //不匹配
    if (v.children && u.children) {
      const subRouter = recursionRouter(u.children, v.children);
      realRoutes.push({ ...v, children: subRouter });
    } else realRoutes.push({ ...v, children: [] });
  });
  // console.log(realRoutes);
  return realRoutes;
}

function setDefaultRoute(routes: Array<any>) {
  console.log(routes);
  routes.forEach((v, i) => {
    if (v.children) {
      v.redirect = {
        name: v.children[0].name,
      };
      setDefaultRoute(routes.children);
    }
  });
}

export { recursionRouter, setDefaultRoute };
