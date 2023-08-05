import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/views/HomePage.vue";
import LoginPage from "@/views/LoginPage.vue";
import SitePage from "@/views/SitePage.vue";
import DashboardComponent from "@/components/dashboard/DashboardComponent.vue";
import SalesComponent from "@/components/sales/SalesComponent.vue";
import LeadsComponent from "@/components/sales/LeadsComponent.vue";
import LeadComponent from "@/components/sales/LeadComponent.vue";
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
        path: "dashboard",
        component: DashboardComponent,
      },
      {
        path: "sales",
        component: SalesComponent,
        children: [
          {
            path: "leads",
            component: LeadsComponent,
          },
          {
            path: "leads/:id",
            component: LeadComponent,
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
