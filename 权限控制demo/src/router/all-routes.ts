const Order = () => import("@/views/order-manage/index.vue");
const OrderList = () => import("@/views/order-manage/order-list/index.vue");
const ProductManage = () =>
  import("@/views/order-manage/product-manage/index.vue");
const ReviewManage = () =>
  import("@/views/order-manage/product-manage/review-manage/index.vue");
const ReturnGoods = () =>
  import("@/views/order-manage/product-manage/return-goods/index.vue");
const ProductList = () =>
  import("@/views/order-manage/product-manage/production-list/index.vue");

const Goods = () => import("@/views/goods-manage/index.vue");
const GoodsList = () => import("@/views/goods-manage/goods-list/index.vue");
const goodsClassify = () =>
  import("@/views/goods-manage/goods-classify/index.vue");

export default [
  {
    path: "/order",
    component: Order,
    name: "order",
    meta: {
      name: "订单管理",
      icon: "icon-email",
    },
    children: [
      {
        path: "list",
        name: "order-list",
        component: OrderList,
        meta: {
          name: "订单列表",
          icon: "icon-quit",
        },
      },
      {
        path: "product",
        name: "product-manage",
        component: ProductManage,
        meta: {
          name: "生产管理",
          icon: "icon-service",
        },
        children: [
          {
            path: "list",
            name: "product-list",
            component: ProductList,
            meta: {
              name: "生产列表",
              icon: "icon-nav",
            },
          },
          {
            path: "review",
            name: "review-manage",
            component: ReviewManage,
            meta: {
              name: "审核管理",
              icon: "icon-finance-manage",
            },
          },
        ],
      },
      {
        path: "returnGoods",
        name: "return-goods",
        component: ReturnGoods,
        meta: {
          name: "退货管理",
          icon: "icon-product-manage",
        },
      },
    ],
  },
  {
    path: "/goods",
    component: Goods,
    name: "goods",
    meta: {
      name: "产品管理",
      icon: "icon-order-manage",
    },
    children: [
      {
        path: "list",
        name: "goods-list",
        component: GoodsList,
        meta: {
          name: "产品列表",
          icon: "icon-home",
        },
      },
      {
        path: "classify",
        name: "goods-classify",
        component: goodsClassify,
        meta: {
          name: "产品分类",
          icon: "icon-product-manage",
        },
      },
    ],
  },
];
