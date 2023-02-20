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
import CustAddPetView from "../views/CustAddPetView.vue";
import CustPetDetailView from "../views/CustPetDetailView.vue";
import CustAddPetDataView from "../views/CustAddPetDataView.vue";
import CustEditPetDataView from "../views/CustEditPetDataView.vue";
import CustCreatePetView from "../views/CustCreatePetView.vue";
import CustPetListView from "../views/CustPetListView.vue";
import RegStatusSuccessView from "../views/RegStatusSuccessView.vue";
import ClinicProductListView from "../views/ClinicProductListView.vue";
import StaffSettingView from "../views/StaffSettingView.vue";
import AppointmentLobbyView from "../views/AppointmentLobbyView.vue";
import VetPetLIstView from "../views/VetPetLIstView.vue";
import BookAppoinmentListView from "../views/BookAppoinmentListView.vue";
import StaffListView from "../views/StaffListView.vue";
import AddProductView from "../views/AddProductView.vue";
import EditProductView from "../views/EditProductView.vue";
import CashierView from "../views/CashierView.vue";
import CustClinicPaymentView from "../views/CustClinicPaymentView.vue";
import CustClinicPaymentDetailView from "../views/CustClinicPaymentDetailView.vue";
import ShoppingCartView from "../views/ShoppingCartView.vue";
import RegisterClinicPostView from "../views/RegisterClinicPostView.vue";
import TransactionView from "../views/TransactionView.vue";
import BookAppointmentDetailView from "../views/BookAppointmentDetailView.vue";
import CustPetDataDetailView from "../views/CustPetDataDetailView.vue";

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
        path: "/api/get-pet/:id",
        name: "cust-detail-pet",
        component: CustPetDetailView,
      },
      {
        path: "/create-pet",
        name: "create-pet",
        component: CustCreatePetView,
      },
      {
        path: "/api/add-medicalrecord",
        name: "cust-add-pet-data",
        component: CustAddPetDataView,
      },
      {
        path: "/cust-edit-pet-data",
        name: "cust-edit-pet-data",
        component: CustEditPetDataView,
      },
      {
        path: "/api/get-medicalrecord/:id",
        name: "cust-medical-record-detail",
        component: CustPetDataDetailView,
      },
      {
        path: "/book-appoinment",
        name: "book-appoinment",
        component: BookAppoinmentListView,
      },
      {
        path: "/pet-list",
        name: "pet-list",
        component: CustPetListView,
      },
      {
        path: "/shopping-cart",
        name: "shopping-cart",
        component: ShoppingCartView,
      },
      {
        path: "/book-appoinment-detail",
        name: "book-appoinment-detail",
        component: BookAppointmentDetailView,
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
      {
        path: "/cust-clinic-payment",
        name: "clinic-payment",
        component: CustClinicPaymentView,
      },
      {
        path: "/cust-clinic-detail",
        name: "clinic-detail",
        component: CustClinicPaymentDetailView,
      },

      {
        path: "/register-as-clinic",
        name: "register-as-clinic",
        component: RegisterClinicPostView,
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
        path: "/transaction",
        name: "transaction",
        component: TransactionView,
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
      {
        path: "/cashier",
        name: "cashier",
        component: CashierView,
      },
    ],
  },
  {
    path: "/verification",
    name: "verification",
    component: VerificationView,
  },
  {
    path: "/add-product",
    name: "addproduct",
    component: AddProductView,
  },
  {
    path: "/edit-product",
    name: "editproduct",
    component: EditProductView,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
