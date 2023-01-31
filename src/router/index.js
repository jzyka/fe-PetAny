import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import DefaultV1 from "../components/default-v1-layout.vue";
import DefaultV2 from "../components/default-v2-layout.vue";
import ProfileLayout from "../components/profile-layout.vue";
import ClinicDashboardLayout from "../components/clinic-dashboard-layout.vue";
import FormLayout from "../components/formLayout.vue";
import LoginView from "../views/LoginView.vue";
import RegisterView from "../views/RegisterView.vue";
import RegisterClinicView from "../views/RegisterClinicView.vue";
import RegisterClinicProcessView from "../views/RegisterClinicProcessView.vue";
import VerificationView from "../views/VerificationView.vue";
import PetListEmptyView from "../views/PetListEmptyView.vue";
import CustPetListView from "../views/CustPetListView.vue";
import RegStatusSuccessView from "../views/RegStatusSuccessView.vue";
import ClinicProductListView from "../views/ClinicProductListView.vue";
import StaffSettingView from "../views/StaffSettingView.vue";
import AppointmentLobbyView from "../views/AppointmentLobbyView.vue";
import VetPetLIstView from "../views/VetPetLIstView.vue";
import CustWishlistView from "../views/CustWishlistView.vue"
import BookAppoinmentListView from "../views/BookAppoinmentListView.vue";
import StaffListView from "../views/StaffListView.vue";

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
        path: "/pet-list",
        name: "pet-list",
        component: CustPetListView,
      },
      {
        path: "/book-appoinment",
        name: "book-appoinment",
        component: BookAppoinmentListView,
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
    path: "/",
    name: "",
    component: ProfileLayout,
    children: [
      {
        path: "/registration-status",
        name: "registration-status",
        component: RegStatusSuccessView,
      },
      
      {
        path: "/wishlist",
        name: "wishlist",
        component: CustWishlistView,
      },
    ],
  },
  {
    path: "/",
    name: "",
    component: ClinicDashboardLayout,
    children: [
      {
        path: "/clinic-product-list",
        name: "clinic-product-list",
        component: ClinicProductListView,
      },
      {
        path: "/staff-setting",
        name: "staff-setting",
        component: StaffSettingView,
      },
      {
        path: "/appointment-lobby",
        name: "appointment-lobby",
        component: AppointmentLobbyView,
      },
      {
        path: "/vet-pet-list",
        name: "vet-pet-list",
        component: VetPetLIstView,
      },
      {
        path: "/staff",
        name: "staff",
        component: StaffListView,
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
