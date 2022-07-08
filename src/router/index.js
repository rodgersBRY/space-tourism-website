import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/destination",
    name: "Destination",
    component: () => import("../views/Destination.vue"),
  },
  {
    path: "/crew",
    component: () => import("../views/Crew.vue"),
  },
  {
    path: "/technology",
    component: () => import("../views/Technology.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
