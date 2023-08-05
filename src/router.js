import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/views/HomePage.vue";
import LoginPage from "@/views/LoginPage.vue";
import SitePage from "@/views/SitePage.vue";
import DashboardComponent from "@/components/dashboard/DashboardComponent.vue";
import SalesComponent from "@/components/sales/SalesComponent.vue";
import SalesDefault from "@/components/sales/SalesDefault.vue";
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
            path: "",
            component: SalesDefault,
          },
          {
            path: "leads",
            component: LeadsComponent,
            name: "leads",
          },
          {
            path: "leads/:id",
            component: LeadComponent,
            name: "lead",
          },
          {
            path: "contracts",
            component: ContractsComponents,
            name: "contracts",
          },
        ],
      },
      {
        path: "products",
        component: ProductsComponent,
        name: "products",
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
