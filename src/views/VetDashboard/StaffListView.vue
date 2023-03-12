<template>
  <section class="clinic-staff mx-4">
    <v-card class="elevation-1 rounded-lg pa-4">
      <h4 class="section-title">Tambah Staff</h4>
      <div class="form-add-staff d-flex">
        <div class="field-contain">
          <p class="field-name">Email</p>

          <v-text-field
            v-model="email"
            label="Masukkan Alamat Email"
            outlined
            solo
            hide-details
          ></v-text-field>
        </div>

        <div class="field-contain">
          <p class="field-name">Peran</p>

          <v-select
            :items="roles"
            label="Peran"
            outlined
            multiple
            solo
            v-model="selectedRoles"
            hide-details
          ></v-select>
        </div>

        <v-btn
          color="primary"
          elevation="2"
          class="add-btn"
          @click="postAddStaff"
          >Tambah</v-btn
        >
      </div>
    </v-card>

    <div class="staff-cards mt-4">
      <v-card
        v-for="(staffData, i) in staffDatas"
        :key="i"
        class="rounded-lg elevation-1 d-flex px-3 py-3 staff-card"
      >
        <div class="left-section pr-4">
          <p class="username">{{ staffData.staff[i].name }}</p>
          <div class="wrap">
            <v-chip v-for="(role, i) in staffData.staff[i].roleUser" :key="i">{{
              role
            }}</v-chip>
          </div>
        </div>

        <p class="staff-email ml-auto">{{ staffData.staff[i].email }}</p>
        <!-- <v-select
          :items="roles"
          label="Standard"
          v-model="staffData.roleNames"
          dense
          chips
          multiple
          class="role-select"
        ></v-select> -->

        <router-link
          class="edit-doctor"
          to="/"
          v-if="staffData.staff[i].roleUser !== 'dokter'"
          >Edit Dokter</router-link
        >

        <v-btn
          color="primary"
          elevation="2"
          outlined
          class="delete-btn"
          v-if="!staffData.staff[i].roleUser.includes('petshop_owner')"
          @click="removeStaff(staffData.staff[i].id)"
          >Hapus</v-btn
        >
      </v-card>
    </div>
  </section>
</template>

<script>
import axios from "axios";
export default {
  data: () => ({
    roles: ["dokter", "cashier", "product_manager"],
    rolesLabel: ["Dokter", "Cashier", "Product Manager"],
    items: ["Foo", "Bar", "Fizz", "Buzz"],
    selectedRoles: "",
    email: "",
    staffDatas: [],
    finalData: [],
  }),

  async created() {
    await this.getStaffList();
  },

  // watch: {
  //   staffDatas: function () {
  //     this.getStaffList();
  //   },
  // },

  methods: {
    async getStaffList() {
      try {
        this.localStorage = JSON.parse(localStorage.getItem("data"));

        const petshopID = this.localStorage.data.petshop_id;
        const staffList = await axios.get(
          `${this.$api}/get-staffs/${petshopID}`
        );
        const staffDatas = staffList.data;

        for (let i = 0; i < staffDatas.length; i++) {
          const stafAll = staffDatas;
          const staffAllData = stafAll[i].staff;
          for (let j = 0; j < staffAllData.length; j++) {
            const userRole = staffAllData[j].roles;
            const roleUser = [];

            for (let k = 0; k < userRole.length; k++) {
              const userRoles = userRole[k];
              roleUser.push(userRoles.name);
            }
            staffAllData[j].roleUser = roleUser;
          }
        }

        this.staffDatas = staffDatas;
        this;
        console.log("ini staffdata", this.staffDatas);

        // console.log(staffDatas);
      } catch (error) {
        console.log(error);
      }
    },
    async postAddStaff() {
      try {
        const addStaff = await axios.post(`${this.$api}/add-staff`, {
          email: this.email,
          roles: this.roles,
        });
        console.log("ini staff baru", addStaff);
        // if (addStaff.status == 200) {
        // }
        this.getStaffList();
      } catch (error) {
        console.log(error);
      }
    },

    async removeStaff(id) {
      try {
        await axios.delete(`${this.$api}/remove-staff?user_id=${id}`);
        // remove the staff from the staffDatas array
        this.staffDatas = this.staffDatas.filter((staff) => staff.id !== id);
        this.getStaffList();
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
section {
  &.clinic-staff {
    ::v-deep .v-input__slot {
      box-shadow: none !important;
      fieldset {
        border-color: $primary-color !important;
      }
    }
    .section-title {
      color: $black;
      font-size: 2rem;
      margin-bottom: 20px;
    }

    .form-add-staff {
      align-items: center;
      gap: 20px;
      width: 100%;

      .field-contain {
        width: 40%;
      }

      .add-btn {
        width: 20%;
      }
    }

    .staff-cards {
      display: flex;
      flex-direction: column;
      gap: 10px;
      .staff-card {
        gap: 2rem;
        align-items: center;

        .left-section {
          width: 40%;
        }

        .wrap {
          display: flex;
          gap: 5px;
          flex-wrap: wrap;
        }

        .username {
          width: fit-content;
          margin-bottom: 0;
          font-size: 18px;
          font-weight: $font-weight-medium;
          color: $primary-color;
          margin-bottom: 5px;
        }

        .edit-doctor {
          text-decoration: none;
          font-weight: $font-weight-medium;
          color: $white;
          background-color: $primary-color;
          padding: 0.5rem 1rem;
          border-radius: 10px;
        }

        .staff-email,
        .role-select,
        .delete-btn {
          width: 15%;
          margin-bottom: 0;
        }
      }
    }
  }
}
</style>
