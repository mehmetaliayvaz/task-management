import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";

const routes = [
  { path: "/", component: HomePage, name: "home" },
  { path: "/about", component: AboutPage, name: "about" },
  { path: "*", redirect: "/" },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
