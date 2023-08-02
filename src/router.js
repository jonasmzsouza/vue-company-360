import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/views/HomePage.vue";
import LoginPage from "@/views/LoginPage.vue";
import SitePage from "./views/SitePage.vue";

const routes = [
  {
    path: "/",
    component: SitePage,
  },
  {
    path: "/home",
    component: HomePage,
  },
  {
    path: "/login",
    component: LoginPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
