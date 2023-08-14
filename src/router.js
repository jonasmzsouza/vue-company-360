import { createRouter, createWebHistory } from "vue-router";

const HomePage = () => import("@/views/HomePage.vue");
const LoginPage = () => import("@/views/LoginPage.vue");
const SitePage = () => import("@/views/SitePage.vue");
const PageNotFound = () => import("@/views/PageNotFound.vue");
const DashboardComponent = () => import(/* webpackChunkName: "dashboard" */ "@/components/dashboard/DashboardComponent.vue");
const DashboardFooterComponent = () => import(/* webpackChunkName: "dashboard" */ "@/components/dashboard/DashboardFooterComponent.vue");
const SalesComponent = () => import(/* webpackChunkName: "sales" */ "@/components/sales/SalesComponent.vue");
const SalesDefault = () => import(/* webpackChunkName: "sales" */ "@/components/sales/SalesDefault.vue");
const LeadsComponent = () => import(/* webpackChunkName: "sales" */ "@/components/sales/LeadsComponent.vue");
const LeadComponent = () => import(/* webpackChunkName: "sales" */ "@/components/sales/LeadComponent.vue");
const ContractsComponents = () => import(/* webpackChunkName: "sales" */ "@/components/sales/ContractsComponents.vue");
const ProductsComponent = () => import(/* webpackChunkName: "products" */ "@/components/products/ProductsComponent.vue");
const ProductComponent = () => import(/* webpackChunkName: "products" */ "@/components/products/ProductComponent .vue");
const OptionsComponent = () => import(/* webpackChunkName: "products" */ "@/components/products/OptionsComponent.vue");
const IndicatorsComponent = () => import(/* webpackChunkName: "products" */ "@/components/products/IndicatorsComponent.vue");

const routes = [
  {
    path: "/",
    component: SitePage,
    meta: { requiresAuthorization: false },
  },
  {
    path: "/home",
    alias: "/app",
    meta: { requiresAuthorization: true },
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
            //to, fromm, next
            beforeEnter() {
              //we can check if the user has permission to load the route
              console.log("Route guard - beforeEnter");
            },
          },
          {
            path: "leads/:id",
            props: true,
            /*
            props: {
              id: 1000,
            },
            */
            /*
            props: (route) => {
              return {
                id: route.params.id,
              };
            },
            */
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
            props: {
              default: true,
              options: true,
              indicators: true,
            },
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
  scrollBehavior(to, from, savedPosition) {
    // return { left: 0, top: 150 }; //left = x, top = y
    if (savedPosition) {
      return savedPosition;
    }

    if (to.hash) {
      return { el: to.hash };
    }

    return { left: 0, top: 0 };
  },
  routes,
});

// to, from, next
router.beforeEach(() => {
  // if (to.meta.requiresAuthorization) {
  //   console.log("Validate access");
  // } else {
  //   console.log("Just follow the navigation");
  // }
  console.log("Global guard - beforeEach");
});

// to, from
router.afterEach(() => {
  //executed after completion of navigation
  console.log("Global guard - afterEach");
});

router.beforeResolve(() => {
  console.log("Global guard - beforeResolve");
});

export default router;
