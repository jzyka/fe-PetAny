import Vue from "vue";
import VueRouter from "vue-router";

// Views
import HomeView from "../views/ECommerce/HomeView.vue";
import LoginView from "../views/LoginRegister/LoginView.vue";
import RegisterView from "../views/LoginRegister/RegisterView.vue";
import RegisterClinicProcessView from "../views/LoginRegister/RegisterClinicProcessView.vue";
import VerificationView from "../views/LoginRegister/VerificationView.vue";
import CustAddPetView from "../views/CustPets/CustAddPetView.vue";
import CustPetDetailView from "../views/CustPets/CustPetDetailView.vue";
import CustAddPetDataView from "../views/CustPets/CustAddPetDataView.vue";
import CustEditPetDataView from "../views/CustPets/CustEditPetDataView.vue";
import CustCreatePetView from "../views/CustPets/CustCreatePetView.vue";
import CustPetListView from "../views/CustPets/CustPetListView.vue";
import RegStatusSuccessView from "../views/CustProfile/RegStatusSuccessView.vue";
import ClinicProductListView from "../views/VetDashboard/ClinicProductListView.vue";
import StaffSettingView from "../views/VetDashboard/StaffSettingView.vue";
import AppointmentLobbyView from "../views/BookAppointment/AppointmentLobbyView.vue";
import VetPetLIstView from "../views/VetDashboard/VetPetLIstView.vue";
import BookAppoinmentListView from "../views/BookAppointment/BookAppoinmentListView.vue";
import StaffListView from "../views/VetDashboard/StaffListView.vue";
import AddProductView from "../views/VetDashboard/AddProductView.vue";
import EditProductView from "../views/ECommerce/EditProductView.vue";
import CashierView from "../views/VetDashboard/CashierView.vue";
import CustClinicPaymentView from "../views/BookAppointment/CustClinicPaymentView.vue";
import CustClinicPaymentDetailView from "../views/ECommerce/CustClinicPaymentDetailView.vue";
import ShoppingCartView from "../views/ECommerce/ShoppingCartView.vue";
import RegisterClinicPostView from "../views/LoginRegister/RegisterClinicPostView.vue";
import TransactionView from "../views/ECommerce/TransactionView.vue";
import BookAppointmentDetailView from "../views/BookAppointment/BookAppointmentDetailView.vue";
import CustPetDataDetailView from "../views/CustPets/CustPetDataDetailView.vue";
import ProductDetailView from "../views/ECommerce/ProductDetailView.vue";
import CustTransactionAppointView from "../views/CustPets/CustTransactionAppointView.vue";
import CustTransactionProductView from "../views/CustPets/CustTransactionProductView.vue";
import InvoiceTransaction from "../views/CustPets/InvoiceTransactionView.vue";
import CreatePetshopProfileView from "../views/VetDashboard/CreatePetshopProfileView.vue";
import PetshopProfileView from "../views/VetDashboard/PetshopProfileView.vue";
import EditDoctorView from "../views/VetDashboard/EditDoctorView.vue";

// Layouts
import DefaultV1 from "../components/default-v1-layout.vue";
import DefaultV2 from "../components/default-v2-layout.vue";
import ProfileLayout from "../components/profile-layout.vue";
import ClinicDashboardLayout from "../components/clinic-dashboard-layout.vue";
import FormLayout from "../components/formLayout.vue";

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
        path: "api/get-petshop/:id",
        name: "book-appoinment-detail",
        component: BookAppointmentDetailView,
      },
      {
        path: "/product",
        name: "product",
        component: ProductDetailView,
      },
      {
        path: "/transaction-appoint",
        name: "transaction-appoint",
        component: CustTransactionAppointView,
      },
      {
        path: "/transaction-product",
        name: "transaction-product",
        component: CustTransactionProductView,
      },
      {
        path: "/invoice",
        name: "invoice",
        component: InvoiceTransaction,
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
    path: "/dash",
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
      {
        path: "/create-petshop-profile",
        name: "create-petshop-profile",
        component: CreatePetshopProfileView,
      },
      {
        path: "/petshop-profile",
        name: "petshop-profile",
        component: PetshopProfileView,
      },
      {
        path: "/edit-dokter",
        name: "edit-dokter",
        component: EditDoctorView,
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
