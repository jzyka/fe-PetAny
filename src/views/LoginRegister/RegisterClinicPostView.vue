<template>
  <v-app>
    <section class="register-clinic-form">
      <v-container>
        <v-row>
          <div class="clinic-form-all">
            <h1 class="form-title">Daftar sebagai klinik hewan</h1>

            <div class="form--register-clinic">
              <div class="form--register-clinic__half">
                <div v-for="(model, i) in formData" :key="i">
                  <div
                    class="form--logreg__group"
                    v-if="
                      model.name !== 'postal_code' &&
                      model.name !== 'petshop_address' &&
                      model.name !== 'province' &&
                      model.name !== 'city' &&
                      model.name !== 'district'
                    "
                  >
                    <p>{{ model.label }}</p>
                    <v-text-field
                      v-model="models[model.name]"
                      v-if="
                        model.name == 'petshop_name' ||
                        model.name == 'company_name' ||
                        model.name == 'owner' ||
                        model.name == 'phone_number' ||
                        model.name == 'petshop_email'
                      "
                      :label="model.label"
                      single-line
                      outlined
                    ></v-text-field>
                  </div>

                  <div class="form--logreg__group">
                    <v-file-input
                      v-model="models[model.name]"
                      class="custom-file-upload"
                      v-if="model.name == 'permit'"
                      type="file"
                      multiple
                      chips
                      id="input-permit"
                    />
                  </div>
                </div>
              </div>

              <div class="form--register-clinic__half">
                <div v-for="(model, i) in formData" :key="i">
                  <div
                    class="form--logreg__group"
                    v-if="
                      model.name !== 'petshop_name' &&
                      model.name !== 'company_name' &&
                      model.name !== 'owner' &&
                      model.name !== 'phone_number' &&
                      model.name !== 'petshop_email' &&
                      model.name !== 'permit'
                    "
                  >
                    <p>{{ model.label }}</p>
                    <v-select
                      v-model="models[model.name]"
                      :items="province"
                      single-line
                      outlined
                      :label="model.label"
                      v-if="model.name == 'province'"
                      :menu-props="{ top: true, offsetY: true }"
                    ></v-select>

                    <v-select
                      v-model="models[model.name]"
                      :items="province"
                      single-line
                      outlined
                      :label="model.label"
                      v-if="model.name == 'city'"
                      :menu-props="{ top: true, offsetY: true }"
                    ></v-select>

                    <v-select
                      v-model="models[model.name]"
                      :items="province"
                      single-line
                      outlined
                      :label="model.label"
                      v-if="model.name == 'district'"
                      :menu-props="{ top: true, offsetY: true }"
                    ></v-select>

                    <v-text-field
                      v-if="model.name == 'postal_code'"
                      :label="model.label"
                      single-line
                      outlined
                      v-model="models[model.name]"
                    ></v-text-field>

                    <v-textarea
                      color="teal"
                      single-line
                      outlined
                      :label="model.label"
                      hide-details="true"
                      v-if="model.name == 'petshop_address'"
                      v-model="models[model.name]"
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
            </div>

            <v-btn
              @click="regClinic"
              block
              class="text-capitalize btn-clinic-register"
              >Daftar</v-btn
            >
          </div>
        </v-row>
      </v-container>
    </section>
  </v-app>
</template>

<script>
import Axios from "axios";
export default {
  name: "RegisterClinic",
  data() {
    return {
      images: [],
      data: [],
      formData: [],
      models: {},
      src: "",
      province: ["Foo", "Bar", "Fizz", "Buzz"],
    };
  },

  async mounted() {
    await this.getFormData();
  },
  methods: {
    async getFormData() {
      try {
        const formData = await Axios.get(`${this.$api}/petshop-form`);
        const fixedFormData = formData.data;
        this.formData = fixedFormData;
      } catch (error) {
        console.log(error);
      }
    },
    async regClinic() {
      try {
        const obj = this.models;

        let data = new FormData();
        for (const key in obj) {
          if (key == "permit") {
            data.append("permit[]", ...obj["permit"]);
          } else {
            data.append(`${key}`, obj[key]);
          }
        }
        const register = await Axios({
          method: "post",
          url: `${this.$api}/create-petshop`,
          data: data,
          headers: {
            "Content-Type": `multipart/form-data;`,
          },
        });
        if (register.status == 200) {
          let localStorageData = JSON.parse(localStorage.getItem("data"));
          localStorageData.data.petshop_id = register.data.data.id;
          console.log(localStorageData);
          localStorage.setItem("data", JSON.stringify(localStorageData));
          this.$router.push({ name: "create-petshop-profile" });
        }

        console.log(register);
      } catch (error) {
        console.log(error);
      }
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
