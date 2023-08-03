import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/views/HomePage.vue";
import LoginPage from "@/views/LoginPage.vue";
import SitePage from "@/views/SitePage.vue";
import SalesComponent from "@/components/sales/SalesComponent.vue";
import LeadsComponents from "@/components/sales/LeadsComponents.vue";
import ContractsComponents from "@/components/sales/ContractsComponents.vue";
import ProductsComponent from "@/components/products/ProductsComponent.vue";

const routes = [
  {
    path: "/",
    component: SitePage,
  },
  {
    path: "/home",
    component: HomePage,
    children: [
      {
        path: "sales",
        component: SalesComponent,
        children: [
          {
            path: "leads",
            component: LeadsComponents,
          },
          {
            path: "contracts",
            component: ContractsComponents,
          },
        ],
      },
      {
        path: "products",
        component: ProductsComponent,
      },
    ],
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
