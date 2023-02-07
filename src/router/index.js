import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import NewsView from "../views/NewsView.vue";
import PlanView from "../views/PlanView.vue";
import AdddropView from "../views/AdddropView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },{
      path: "/news",
      name: "news",
      component: NewsView,
    },
    {
      path: "/plan",
      name: "plan",
      component: PlanView,
    },
    {
      path: "/adddrop",
      name: "adddrop",
      component: AdddropView,
    },
  ],
});

export default router;
