<template>
  <v-app>
    <section class="register-clinic-form">
      <v-container>
        <v-row>
          <div class="clinic-form-all">
            <h1 class="form-title">Daftar sebagai klinik hewan</h1>

            <div class="form--register-clinic">
              <div class="form--register-clinic__half">
                <div class="form--logreg__group">
                  <p>Nama klinik</p>
                  <v-text-field
                    label="Nama klinik"
                    single-line
                    outlined
                  ></v-text-field>
                </div>
                <div class="form--logreg__group">
                  <p>Nama perusahaan</p>
                  <v-text-field
                    label="Nama perusahaan"
                    single-line
                    outlined
                  ></v-text-field>
                </div>
                <div class="form--logreg__group">
                  <p>Nama pemilik</p>
                  <v-text-field
                    label="Nama pemilik"
                    single-line
                    outlined
                  ></v-text-field>
                </div>
                <div class="form--logreg__group">
                  <p>Nomor telepon klinik</p>
                  <v-text-field
                    label="Nomor telepon klinik"
                    single-line
                    outlined
                  ></v-text-field>
                </div>
                <div class="form--logreg__group">
                  <p>Email klinik</p>
                  <v-text-field
                    label="Email klinik"
                    single-line
                    outlined
                  ></v-text-field>
                </div>
                <div class="form--logreg__group">
                  <p>Surat Izin Usaha Klinik Hewan</p>
                  <label for="input-permit" class="custom-file-upload">
                    <img src="@/assets/upload.png" alt="" />
                  </label>
                  <input
                    type="file"
                    multiple
                    @change="onFileChange"
                    id="input-permit"
                  />
                </div>
              </div>
              <div class="form--register-clinic__half">
                <div class="form--logreg__group">
                  <p>Provinsi</p>
                  <v-select
                    :items="province"
                    :menu-props="{ top: true, offsetY: true }"
                    label="Pilih provinsi"
                    single-line
                    outlined
                  >
                    ></v-select
                  >
                </div>
                <div class="form--logreg__group">
                  <p>Kota</p>
                  <v-select
                    :items="city"
                    :menu-props="{ top: true, offsetY: true }"
                    label="Pilih kota"
                    single-line
                    outlined
                  >
                    ></v-select
                  >
                </div>
                <div class="form--logreg__group">
                  <p>Kecamatan</p>
                  <v-select
                    :items="district"
                    :menu-props="{ top: true, offsetY: true }"
                    label="Pilih kecamatan"
                    single-line
                    outlined
                  >
                    ></v-select
                  >
                </div>
                <div class="form--logreg__group">
                  <p>Kode pos</p>
                  <v-text-field
                    label="Kode pos"
                    single-line
                    outlined
                  ></v-text-field>
                </div>
                <div class="form--logreg__group">
                  <p>Detil alamat</p>
                  <v-textarea
                    color="teal"
                    single-line
                    outlined
                    hide-details="true"
                  >
                    <template v-slot:label>
                      <div>
                        Detil alamat
                        <small>(Nama jalan, blok, nomor bangunan)</small>
                      </div>
                    </template>
                  </v-textarea>
                </div>
              </div>
            </div>
            <div v-for="(image, key) in images" :key="image.id">
              <div class="file-name" :id="key">
                {{ image.name }}
                <button type="button" @click="removeImage(key)">&times;</button>
              </div>
            </div>
            <v-btn block class="text-capitalize btn-clinic-register"
              >Daftar</v-btn
            >
          </div>
        </v-row>
      </v-container>
    </section>
  </v-app>
</template>

<script>
export default {
  name: "RegisterClinic",
  data() {
    return {
      images: [],
      province: ["Foo", "Bar", "Fizz", "Buzz"],
    };
  },
  methods: {
    onFileChange(e) {
      var selectedFiles = e.target.files;
      for (let i = 0; i < selectedFiles.length; i++) {
        this.images.push(selectedFiles[i]);
      }

      // console.log(this.images);
    },
    removeImage(i) {
      // alert(i);

      this.images.splice(i, 1);
    },
  },
};
</script>

<style lang="scss">
section {
  &.register-clinic-form {
    padding: 40px;
    background-color: $cultured;

    .clinic-form-all {
      display: flex;
      flex-direction: column;
      width: 100%;
      padding: 2rem;
      border-radius: 20px;
      background-color: $white;

      .btn-clinic-register {
        height: auto !important;
        padding: 10px !important;
        background-color: $primary-color !important;
        border-radius: 10px !important;
        margin-top: 4rem;

        span {
          color: $white;
          font-weight: $font-weight-reg;
          font-size: 18px;
          letter-spacing: 0;
        }
      }

      img {
        width: 20px;
        margin: auto;
      }

      .form-title {
        font-size: 22px;
        color: $primary-color;
        font-weight: $font-weight-semibold;
        margin-bottom: 2rem;
      }

      .v-input {
        // &__control {
        //   min-height: 45px !important;
        // }

        // &__slot {
        //   background: $white !important;
        //   box-shadow: 0px 2px 4px 1px rgba(0, 0, 0, 0.15) !important;
        // }

        label {
          color: $granite-gray;
        }
        input {
          color: $granite-gray;
        }
      }

      .custom-file-upload {
        border: 2px solid $primary-color;
        display: flex;
        justify-content: center;
        padding: 6px 12px;
        border-radius: 10px;
        height: 56px;
        width: 100%;
        cursor: pointer;
      }

      input[type="file"] {
        display: none;
      }

      .file-name {
        margin-top: 10px;
        padding: 10px;
        border-radius: 10px;
        box-shadow: 0px 1px 4px 1px rgba(0, 0, 0, 0.15);
        background-color: $anti-flash;
        display: flex;
        justify-content: space-between;
        align-items: center;
        button {
          font-size: 20px;
          line-height: 1;
        }
      }
    }
  }
}

.form {
  &--register-clinic {
    display: flex;
    width: 100%;
    justify-content: space-between;
    &__half {
      width: 45%;

      .input-permit {
        -moz-user-select: none;
        -ms-user-select: none;
        -webkit-user-select: none;
        user-select: none;
      }

      .v-input {
        &__icon {
          height: unset;

          .mdi-menu-down {
            font-size: unset;

            &::before {
              content: url("@/assets/chevron-down.png");
            }
          }
        }
      }
    }
  }
}
</style>

<style lang="scss" scoped>
::v-deep .v-application--wrap {
  min-height: fit-content;
}
</style>
