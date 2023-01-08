import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import DefaultV1 from "../components/default-v1-layout.vue";
import DefaultV2 from "../components/default-v2-layout.vue";
import FormLayout from "../components/formLayout.vue";
import LoginView from "../views/LoginView.vue";
import RegisterView from "../views/RegisterView.vue";
import RegisterClinicView from "../views/RegisterClinicView.vue";
import VerificationView from "../views/VerificationView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "",
    component: DefaultV1,
    children: [
      {
        path: "/home",
        name: "home",
        component: HomeView,
      },
    ],
  },

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
  {
    path: "/",
    name: "",
    component: DefaultV2,
    children: [
      {
        path: "/register-clinic",
        name: "register-clinic",
        component: RegisterClinicView,
      },
    ],
  },
  {
    path: "/verification",
    name: "verification",
    component: VerificationView,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
