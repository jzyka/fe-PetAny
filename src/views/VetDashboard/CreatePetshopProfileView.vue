<template>
  <v-app>
    <v-row>
      <v-container fluid pa-6>
        <div class="create-profile-contain">
          <div class="main-info">
            <div class="choose-profile">
              <div class="image-bg">
                <v-img
                  v-if="imagePreviewURL"
                  :src="imagePreviewURL"
                  aspect-ratio="1"
                  cover
                  class="profile"
                ></v-img>
              </div>
              <v-file-input
                justify-center
                label="File input"
                @change="onFileChange"
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
                hide-details
                class="mb-2 mid-input"
              ></v-text-field>
              <v-text-field
                label="Alamat"
                placeholder="Alamat solat"
                outlined
                block
                hide-details
                class="mb-2 mid-input"
              ></v-text-field>
              <div class="contain">
                <v-text-field
                  label="Nomor Telepon Klinik"
                  placeholder="Nomor Telepon Klinik"
                  outlined
                  block
                  class="mid-input"
                  hide-details
                ></v-text-field>
                <v-text-field
                  label="Email Klinik"
                  placeholder="Email Klinik"
                  class="mid-input"
                  outlined
                  block
                  hide-details
                ></v-text-field>
              </div>

              <div class="services">
                <p class="service-title mb-1 mt-3">Layanan Kami</p>
                <div class="checkbox-contain">
                  <v-checkbox
                    v-model="services"
                    label="Grooming"
                    value="Grooming"
                    class="check-services mt-0"
                  ></v-checkbox>
                  <v-checkbox
                    v-model="services"
                    label="Klinik"
                    value="Klinik"
                    class="check-services mt-0"
                  ></v-checkbox>
                  <v-checkbox
                    v-model="services"
                    label="Laboratorium"
                    value="Laboratorium"
                    class="check-services mt-0"
                  ></v-checkbox>
                  <v-checkbox
                    v-model="services"
                    label="Rawat Inap"
                    value="Rawat Inap"
                    class="check-services mt-0"
                  ></v-checkbox>
                  <v-checkbox
                    v-model="services"
                    label="Petshop"
                    value="Petshop"
                    class="check-services mt-0"
                  ></v-checkbox>
                </div>
              </div>
            </div>

            <div class="post-btn">
              <v-btn
                class="crs"
                block
                elevation="2"
                large
                mdi-plus
                tile
                @submit.prevent
                >Simpan Profil</v-btn
              >
            </div>
          </div>
          <div class="operational-hour">
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
                <v-dialog
                  :retain-focus="false"
                  ref="jamBuka"
                  v-model="jamBuka"
                  :return-value="item"
                  persistent
                  width="290px"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      v-model="item.jam_buka"
                      label="Pilih Jam Buka"
                      readonly
                      v-bind="attrs"
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-time-picker
                    v-if="jamBuka"
                    v-model="item.jam_buka"
                    full-width
                  >
                    <v-spacer></v-spacer>
                    <v-btn text color="primary" @click="jamBuka = false">
                      Cancel
                    </v-btn>
                    <v-btn
                      text
                      color="primary"
                      @click="$refs.jamBuka.save(item.jam_buka)"
                    >
                      OK
                    </v-btn>
                  </v-time-picker>
                </v-dialog>
              </template>

              <template v-slot:[`item.jam_tutup`]="{ item }">
                <v-dialog
                  ref="jamTutup"
                  v-model="dialogTutup"
                  :return-value.sync="item.jam_tutup"
                  persistent
                  width="290px"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      v-model="item.jam_tutup"
                      label="Pilih Jam tutup"
                      readonly
                      v-bind="attrs"
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-time-picker
                    v-if="dialogTutup"
                    v-model="item.jam_tutup"
                    full-width
                  >
                    <v-spacer></v-spacer>
                    <v-btn text color="primary" @click="dialogTutup = false">
                      Cancel
                    </v-btn>
                    <v-btn
                      text
                      color="primary"
                      @click="$refs.jamTutup.save(item.jam_tutup)"
                    >
                      OK
                    </v-btn>
                  </v-time-picker>
                </v-dialog>
              </template>
            </v-data-table>
          </div>

          <div class="form-contain mt-4">
            <p class="form-title mb-1">Deskripsi Toko</p>
            <v-textarea
              label="Deskripsi Klinik"
              class="form-clinic"
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
              block
              outlined
            ></v-text-field>
          </div>
        </div>
      </v-container>
    </v-row>
  </v-app>
</template>

<script>
// import axios from "axios";
import ImagePreviewMixin from "@/mixins/ImagePreviewMixin";

export default {
  mixins: [ImagePreviewMixin],

  data: () => ({
    services: [],
    jamBuka: false,
    dialogTutup: false,
    ckinic_desc: "",
    operational_hour: [
      {
        is_open: true,
        hari_buka: "Senin",
        jam_buka: "",
        jam_tutup: "",
      },
      {
        is_open: true,
        hari_buka: "Selasa",
        jam_buka: "",
        jam_tutup: "",
      },
      {
        is_open: true,
        hari_buka: "Rabu",
        jam_buka: "",
        jam_tutup: "",
      },
      {
        is_open: true,
        hari_buka: "Kamis",
        jam_buka: "",
        jam_tutup: "",
      },
      {
        is_open: true,
        hari_buka: "Jumat",
        jam_buka: "",
        jam_tutup: "",
      },
      {
        is_open: true,
        hari_buka: "Sabtu",
        jam_buka: "",
        jam_tutup: "",
      },
      {
        is_open: true,
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
        value: "hari_buka",
      },
      {
        text: "Jam Buka",
        value: "jam_buka",
      },
      {
        text: "Jam Tutup",
        value: "jam_tutup",
      },
    ],
  }),
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
      width: 65%;

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

    .post-btn {
      width: 15%;
      margin-left: auto;

      .crs {
        background-color: $primary-color !important;
        color: $white !important;
        text-transform: capitalize;
        border-radius: 7px;
      }
    }
  }
}
</style>
