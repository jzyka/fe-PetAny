<template>
  <v-app>
    <v-row>
      <v-container fluid pa-6>
        <div class="create-profile-contain">
          <div class="main-info">
            <div class="choose-profile">
              <div class="image-bg">
                <v-img
                  :src="clinic.petshop_image"
                  aspect-ratio="1"
                  cover
                  class="profile"
                ></v-img>
              </div>
              <v-file-input
                justify-center
                label="File input"
                v-model="clinic.petshop_image"
                prepend-icon="Pilih profil"
                hide-input
                class="image-input"
              ></v-file-input>
            </div>

            <div class="middle-inputs">
              <v-text-field
                label="Nama Klinik"
                placeholder="Nama Klinik"
                outlined
                block
                v-model="clinic.petshop_name"
                hide-details
                :error-messages="
                  errorMessage.errors && errorMessage.errors.petshop_name
                "
                class="mb-3 mid-input"
              ></v-text-field>
              <v-text-field
                label="Alamat"
                placeholder="Alamat"
                outlined
                block
                disabled
                v-model="clinic.petshop_address"
                hide-details
                class="mb-3 mid-input"
              ></v-text-field>
              <div class="contain">
                <v-text-field
                  label="Nomor Telepon Klinik"
                  placeholder="Nomor Telepon Klinik"
                  outlined
                  disabled
                  v-model="clinic.phone_number"
                  block
                  class="mid-input"
                  hide-details
                ></v-text-field>
                <v-text-field
                  label="Email Klinik"
                  placeholder="Email Klinik"
                  class="mid-input"
                  outlined
                  disabled
                  v-model="clinic.petshop_email"
                  block
                  hide-details
                ></v-text-field>
              </div>

              <div class="services">
                <p class="service-title mb-1 mt-3">Layanan Kami</p>
                <div class="checkbox-contain">
                  <v-checkbox
                    v-model="clinic.category"
                    label="Grooming"
                    value="grooming"
                    class="check-services mt-0"
                  ></v-checkbox>
                  <v-checkbox
                    v-model="clinic.category"
                    label="Klinik"
                    value="klinik"
                    class="check-services mt-0"
                  ></v-checkbox>
                  <v-checkbox
                    v-model="clinic.category"
                    label="Laboratorium"
                    value="laboratorium"
                    class="check-services mt-0"
                  ></v-checkbox>
                  <v-checkbox
                    v-model="clinic.category"
                    label="Rawat Inap"
                    value="rawat inap"
                    class="check-services mt-0"
                  ></v-checkbox>
                  <v-checkbox
                    v-model="clinic.category"
                    label="Petshop"
                    value="petshop"
                    class="check-services mt-0"
                  ></v-checkbox>
                  <v-checkbox
                    v-model="clinic.category"
                    label="Menerima Datang Langsung"
                    value="menerima datang langsung"
                    class="check-services mt-0"
                  ></v-checkbox>
                </div>
              </div>
            </div>
          </div>

          <div class="form-contain mt-4">
            <p class="form-title mb-1">Deskripsi Toko</p>
            <v-textarea
              label="Deskripsi Klinik"
              class="form-clinic"
              v-model="clinic.description"
              counter
              maxlength="300"
              full-width
              solo
              outlined
            ></v-textarea>
          </div>

          <div class="form-contain mt-4">
            <p class="form-title mb-1">Link Toko</p>
            <v-text-field
              label="Maksimal 1 link"
              class="form-clinic"
              full-width
              solo
              v-model="clinic.website"
              :error-messages="
                errorMessage.errors && errorMessage.errors.website
              "
              block
              outlined
            ></v-text-field>
          </div>

          <div class="operational-hour" v-if="data != 0">
            <p class="form-title mt-4 mb-3">Jam Operasional</p>

            <v-data-table
              :headers="headers"
              :items="data"
              class="elevation-2 rounded-lg"
              hide-default-footer
            >
              <template v-slot:[`item.is_open`]="{ item }">
                <v-simple-checkbox v-model="item.is_open"></v-simple-checkbox>
              </template>

              <template v-slot:[`item.jam_buka`]="{ item }">
                <v-menu
                  v-model="jamBuka[item.hari_buka]"
                  :close-on-content-click="false"
                  transition="scale-transition"
                  offset-y
                  max-width="290px"
                  min-width="290px"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      hide-details="auto"
                      single-line
                      v-model="item.jam_buka"
                      label="Pilih Jam Buka"
                      readonly
                      :disabled="!item.is_open"
                      class="py-2"
                      v-bind="attrs"
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-time-picker
                    no-title
                    ampm-in-title
                    :disabled="!item.is_open"
                    format="24hr"
                    v-model="item.jam_buka"
                    full-width
                  ></v-time-picker>
                </v-menu>
              </template>

              <template v-slot:[`item.jam_tutup`]="{ item }">
                <v-menu
                  v-model="jamTutup[item.hari_buka]"
                  :close-on-content-click="false"
                  transition="scale-transition"
                  offset-y
                  max-width="290px"
                  min-width="290px"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      hide-details="auto"
                      single-line
                      v-model="item.jam_tutup"
                      label="Pilih Jam Tutup"
                      readonly
                      :disabled="!item.is_open"
                      class="py-2"
                      v-bind="attrs"
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-time-picker
                    no-title
                    ampm-in-title
                    :disabled="!item.is_open"
                    format="24hr"
                    v-model="item.jam_tutup"
                    full-width
                  ></v-time-picker>
                </v-menu>
              </template>
            </v-data-table>
          </div>

          <div class="operational-hour" v-else>
            <p class="form-title mt-4 mb-3">Jam Operasional</p>

            <v-data-table
              :headers="headers"
              :items="operational_hour"
              class="elevation-2 rounded-lg"
              hide-default-footer
            >
              <template v-slot:[`item.is_open`]="{ item }">
                <v-simple-checkbox v-model="item.is_open"></v-simple-checkbox>
              </template>

              <template v-slot:[`item.jam_buka`]="{ item }">
                <v-menu
                  v-model="jamBuka[item.hari_buka]"
                  :close-on-content-click="false"
                  transition="scale-transition"
                  offset-y
                  max-width="290px"
                  min-width="290px"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      hide-details="auto"
                      single-line
                      v-model="item.jam_buka"
                      label="Pilih Jam Buka"
                      readonly
                      :disabled="!item.is_open"
                      class="py-2"
                      v-bind="attrs"
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-time-picker
                    no-title
                    ampm-in-title
                    :disabled="!item.is_open"
                    format="24hr"
                    v-model="item.jam_buka"
                    full-width
                  ></v-time-picker>
                </v-menu>
              </template>

              <template v-slot:[`item.jam_tutup`]="{ item }">
                <v-menu
                  v-model="jamTutup[item.hari_buka]"
                  :close-on-content-click="false"
                  transition="scale-transition"
                  offset-y
                  max-width="290px"
                  min-width="290px"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      hide-details="auto"
                      single-line
                      v-model="item.jam_tutup"
                      label="Pilih Jam Tutup"
                      readonly
                      :disabled="!item.is_open"
                      class="py-2"
                      v-bind="attrs"
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-time-picker
                    no-title
                    ampm-in-title
                    :disabled="!item.is_open"
                    format="24hr"
                    v-model="item.jam_tutup"
                    full-width
                  ></v-time-picker>
                </v-menu>
              </template>
            </v-data-table>
          </div>
          <div class="post-btn">
            <v-btn
              class="crs"
              block
              elevation="2"
              large
              mdi-plus
              tile
              v-if="data != 0"
              @submit.prevent
              @click="
                editOperational();
                postClinicData();
              "
              >Simpan Profil</v-btn
            >
            <v-btn
              class="crs"
              block
              elevation="2"
              large
              mdi-plus
              tile
              v-else
              @submit.prevent
              @click="
                postInitOperational();
                postClinicData();
              "
              >Simpan Profil</v-btn
            >
          </div>
        </div>
      </v-container>
    </v-row>
  </v-app>
</template>

<script>
import axios from "axios";
// import ImagePreviewMixin from "@/mixins/ImagePreviewMixin";

export default {
  // mixins: [ImagePreviewMixin],

  data: () => ({
    categories: [],
    jamBuka: [],
    formData: [],
    jamTutup: [],
    clinic: [],
    errorMessage: {},
    operational_hour: [
      {
        is_open: false,
        hari_buka: "Senin",
        jam_buka: "",
        jam_tutup: "",
      },
      {
        is_open: false,
        hari_buka: "Selasa",
        jam_buka: "",
        jam_tutup: "",
      },
      {
        is_open: false,
        hari_buka: "Rabu",
        jam_buka: "",
        jam_tutup: "",
      },
      {
        is_open: false,
        hari_buka: "Kamis",
        jam_buka: "",
        jam_tutup: "",
      },
      {
        is_open: false,
        hari_buka: "Jumat",
        jam_buka: "",
        jam_tutup: "",
      },
      {
        is_open: false,
        hari_buka: "Sabtu",
        jam_buka: "",
        jam_tutup: "",
      },
      {
        is_open: false,
        hari_buka: "Minggu",
        jam_buka: "",
        jam_tutup: "",
      },
    ],
    headers: [
      {
        text: "buka/tutup",
        align: "start",
        sortable: false,
        value: "is_open",
      },
      {
        text: "Hari",
        sortable: false,
        value: "hari_buka",
      },
      {
        text: "Jam Buka",
        sortable: false,
        value: "jam_buka",
      },
      {
        text: "Jam Tutup",
        sortable: false,
        value: "jam_tutup",
      },
    ],
    data: [],
  }),

  async mounted() {
    await this.getOperationalHour();
    await this.getClinicData();
  },

  methods: {
    async postClinicData() {
      try {
        const petshopID = this.localStorage.data.petshop_id;
        let obj = this.clinic;

        let data = new FormData();

        for (const key in obj) {
          if (key == "category") {
            for (let i = 0; i < obj["category"].length; i++) {
              data.append("category[]", obj["category"][i]);
            }
          } else if (key == "petshop_image") {
            if (obj["petshop_image"] instanceof File) {
              data.append("petshop_image", obj["petshop_image"]);
              console.log(obj["petshop_image"] instanceof File);
            }
          } else {
            data.append(`${key}`, obj[key]);
          }
        }
        const res = await axios({
          method: "post",
          url: `${this.$api}/update-petshop/${petshopID}`,
          data: data,
          headers: {
            "Content-Type": `multipart/form-data;`,
          },
        });
        if (res.status == 200) {
          let localStorageData = JSON.parse(localStorage.getItem("data"));
          localStorageData.data.petshop_id = res.data.data.id;
          console.log(localStorageData);
          localStorage.setItem("data", JSON.stringify(localStorageData));
          this.$router.push({ name: "petshop-profile" });
        }
      } catch (error) {
        console.log(error);
        const errorMessage = error.response.data;

        this.errorMessage = errorMessage;
      }
    },
    async postInitOperational() {
      try {
        let operationalHour = this.operational_hour;
        const petshopID = this.localStorage.data.petshop_id;

        const res = await axios({
          method: "post",
          url: `${this.$api}/petshop/create-jam-operasional/${petshopID}`,
          data: operationalHour,
        });
        console.log(res);
        if (res.status == 200) {
          this.$router.push({ name: "petshop-profile" });
        }
      } catch (error) {
        console.log(error);
        const errorMessage = error.response.data;

        this.errorMessage = errorMessage;
      }
    },
    async editOperational() {
      try {
        let operationalHour = this.data;
        const petshopID = this.localStorage.data.petshop_id;

        const res = await axios({
          method: "post",
          url: `${this.$api}/petshop/create-jam-operasional/${petshopID}`,
          data: operationalHour,
        });
        console.log(res);
        if (res.status == 200) {
          this.$router.push({ name: "petshop-profile" });
        }
      } catch (error) {
        console.log(error);
      }
    },
    async getClinicData() {
      try {
        this.localStorage = JSON.parse(localStorage.getItem("data"));

        const petshopID = this.localStorage.data.petshop_id;
        const clinicData = await axios.get(
          `${this.$api}/get-petshop/${petshopID}`
        );
        let clinic = clinicData.data.data;
        this.clinic = clinic;
        let categories = clinic.category;
        this.categories = categories;
        var image = this.clinic.petshop_image;
        console.log("image", image);
        console.log(clinic);
        this.clinic.petshop_image = image;
      } catch (error) {
        console.log(error);
      }
    },
    async getOperationalHour() {
      try {
        this.localStorage = JSON.parse(localStorage.getItem("data"));

        const petshopID = this.localStorage.data.petshop_id;
        const operational = await axios.get(
          `${this.$api}/petshop/get-jam-operasional/${petshopID}`
        );
        console.log(operational);
        const data = operational.data;
        this.data = data;
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
::v-deep .v-data-table-header {
  tr {
    background-color: $primary-color;

    th {
      span {
        color: $white;
        font-size: 14px;
        font-weight: $font-weight-medium;
      }
    }
  }
}

::v-deep .v-data-table__wrapper {
  border-radius: 8px 8px 0 0;
}
.create-profile-contain {
  box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.1);
  background-color: $white;
  width: 100%;
  border-radius: 20px;
  padding: 1rem;

  .form-title {
    font-weight: $font-weight-medium;
    font-size: 18px;
  }

  .form-clinic::v-deep .v-input__slot {
    box-shadow: none !important;
    fieldset {
      border-color: rgba(63, 114, 175, 0.5) !important;
    }
  }

  .main-info {
    display: flex;
    gap: 1rem;
    .choose-profile {
      width: 10%;
      .image-bg {
        background-color: $gainsboro;
        border-radius: 100px;

        .profile {
          border-radius: 50%;
        }
      }
    }

    .middle-inputs {
      width: 90%;

      .mid-input::v-deep .v-input__slot {
        min-height: 40px;

        fieldset {
          border-color: rgba(63, 114, 175, 0.5) !important;
        }

        .v-label {
          top: 25%;
          font-size: 14px;
        }
      }

      .contain {
        display: flex;
        gap: 1rem;

        > {
          width: 50%;
        }
      }

      .checkbox-contain {
        display: flex;
        gap: 10px;
        flex-wrap: wrap;

        .check-services::v-deep .v-input__slot {
          width: fit-content;
          padding: 5px 10px;
          border-radius: 30px;
          background-color: $secondary-color;

          .v-label {
            font-size: 14px;
          }
        }
      }
    }
  }
}

.post-btn {
  width: 15%;
  margin-top: 2rem;
  margin-left: auto;

  .crs {
    background-color: $primary-color !important;
    color: $white !important;
    text-transform: capitalize;
    border-radius: 7px;
  }
}
</style>
