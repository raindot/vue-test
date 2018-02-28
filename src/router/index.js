import Vue from "vue";
import Router from "vue-router";
import App from "@/App";

import Order from "@/components/Order";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      component: App,
      children: [
        {
          path: "order/:storeId?/:orderId?",
          name: "order",
          component: Order
        }
      ]
    }
  ]
});
