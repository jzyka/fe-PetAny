import Vue from "vue";
import VueRouter from "vue-router";
// import HomeView from "../views/HomeView.vue";
// import AboutView from "../views/AboutView.vue";
// import HelloWorldLayout from "../components/HelloWorld.vue";
import FormLayout from "../components/formLayout.vue";
import LoginView from "../views/LoginView.vue";
import RegisterView from "../views/RegisterView.vue";

Vue.use(VueRouter);

const routes = [
  // {
  //   path: "/",
  //   name: "",
  //   component: HelloWorldLayout,
  //   children: [
  //     {
  //       path: "/home",
  //       name: "home",
  //       component: HomeView,
  //     },
  //     {
  //       path: "/about",
  //       name: "about",
  //       component: AboutView,
  //     },
  //   ],
  // },

  {
    path: "/",
    name: "",
    component: FormLayout,
    children: [
      {
        path: "/login",
        name: "login",
        component: LoginView,
      },
      {
        path: "/register",
        name: "register",
        component: RegisterView,
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
