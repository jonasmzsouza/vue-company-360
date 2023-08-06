import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/views/HomePage.vue";
import LoginPage from "@/views/LoginPage.vue";
import SitePage from "@/views/SitePage.vue";
import PageNotFound from "@/views/PageNotFound.vue";
import DashboardComponent from "@/components/dashboard/DashboardComponent.vue";
import DashboardFooterComponent from "@/components/dashboard/DashboardFooterComponent.vue";
import SalesComponent from "@/components/sales/SalesComponent.vue";
import SalesDefault from "@/components/sales/SalesDefault.vue";
import LeadsComponent from "@/components/sales/LeadsComponent.vue";
import LeadComponent from "@/components/sales/LeadComponent.vue";
import ContractsComponents from "@/components/sales/ContractsComponents.vue";
import ProductsComponent from "@/components/products/ProductsComponent.vue";
import ProductComponent from "@/components/products/ProductComponent .vue";
import OptionsComponent from "@/components/products/OptionsComponent.vue";
import IndicatorsComponent from "@/components/products/IndicatorsComponent.vue";

const routes = [
  {
    path: "/",
    component: SitePage,
  },
  {
    path: "/home",
    alias: "/app",
    component: HomePage,
    children: [
      {
        path: "dashboard",
        components: {
          default: DashboardComponent,
          footer: DashboardFooterComponent,
        },
      },
      {
        path: "sales",
        component: SalesComponent,
        children: [
          {
            path: "",
            name: "sales",
            component: SalesDefault,
          },
          {
            path: "leads",
            component: LeadsComponent,
            name: "leads",
          },
          {
            path: "leads/:id",
            alias: ["/l/:id", "/le/:id"],
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
        children: [
          {
            path: ":id",
            alias: "/p/:id",
            components: {
              default: ProductComponent,
              options: OptionsComponent,
              indicators: IndicatorsComponent,
            },
            name: "product",
          },
        ],
      },
    ],
  },
  {
    path: "/login",
    component: LoginPage,
  },
  {
    path: "/redirection-1",
    redirect: "/home/products",
  },
  {
    path: "/redirection-2",
    redirect: { name: "leads" },
  },
  {
    path: "/redirection-3",
    redirect: "/home/sales",
  },
  {
    path: "/redirection-4",
    redirect: { name: "sales" },
  },
  {
    path: "/redirection-5",
    redirect: (to) => {
      // we can program something before the redirection takes effect
      console.log(to);
      return { name: "sales" };
    },
  },
  {
    path: "/:cathAll(.*)*", //Vue2 = *
    component: PageNotFound,
  },
  // {
  //   path: "/:cathAll(.*)*", //Vue2 = *
  //   redirect: "/",
  // },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
