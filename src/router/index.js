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
import PetListEmptyView from "../views/PetListEmptyView.vue";
import CustAddPetView from "../views/CustAddPetView.vue";
import CustPetDetailView from "../views/CustPetDetailView.vue";
import CustAddPetDataView from "../views/CustAddPetDataView.vue";
import CustEditPetDataView from "../views/CustEditPetDataView.vue";

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
      {
        path: "/cust-add-pet",
        name: "cust-add-pet",
        component: CustAddPetView,
      },
      {
        path: "/cust-detail-pet",
        name: "cust-detail-pet",
        component: CustPetDetailView,
      },
      {
        path: "/cust-add-pet-data",
        name: "cust-add-pet-data",
        component: CustAddPetDataView,
      },
      {
        path: "/cust-edit-pet-data",
        name: "cust-edit-pet-data",
        component: CustEditPetDataView,
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
];

const router = new VueRouter({
  routes,
});

export default router;
