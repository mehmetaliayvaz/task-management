import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import HomePage from "./pages/HomePage";

const routes = [
  { path: "/", component: HomePage },
  { path: "*", redirect: "/" },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
