import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import DefaultV1 from "../components/default-v1-layout.vue";
import DefaultV2 from "../components/default-v2-layout.vue";
import FormLayout from "../components/formLayout.vue";
import LoginView from "../views/LoginView.vue";
import RegisterView from "../views/RegisterView.vue";
import RegisterClinicView from "../views/RegisterClinicView.vue";
import RegisterClinicProcessView from "../views/RegisterClinicProcessView.vue";
import VerificationView from "../views/VerificationView.vue";
<<<<<<< HEAD
import PetListView from "../views/PetListView.vue";
=======
import PetListEmptyView from "../views/PetListEmptyView.vue";
>>>>>>> 704edae706a86709475ea8f66d0e5e2c85b2fe09

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "",
    component: DefaultV1,
    children: [
      {
        path: "/",
        name: "home",
        component: HomeView,
      },
      {
        path: "/pet-list-empty",
        name: "pet-list-empty",
        component: PetListEmptyView,
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
      {
        path: "/register-clinic-process",
        name: "register-clinic-process",
        component: RegisterClinicProcessView,
      },
    ],
  },
  {
    path: "/verification",
    name: "verification",
    component: VerificationView,
  },
  {
    path: "/",
    name: "",
    component: DefaultV1,
    children: [
      {
        path: "/petlist",
        name: "petlist",
        component: PetListView,
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
