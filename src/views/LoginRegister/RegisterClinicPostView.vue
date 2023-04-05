<template>
  <v-app class="flex-grow-1">
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
                      solo
                      :error-messages="
                        errorMessage.errors && errorMessage.errors[model.name]
                      "
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
                      placeholder="File must be .pdf"
                      chips
                      :error-messages="
                        errorMessage.errors && errorMessage.errors[model.name]
                      "
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
                    <v-text-field
                      v-model="models[model.name]"
                      :items="province"
                      solo
                      outlined
                      :label="model.label"
                      :error-messages="
                        errorMessage.errors && errorMessage.errors[model.name]
                      "
                      v-if="model.name == 'province'"
                      :menu-props="{ top: true, offsetY: true }"
                    ></v-text-field>

                    <v-text-field
                      v-model="models[model.name]"
                      :items="province"
                      solo
                      :error-messages="
                        errorMessage.errors && errorMessage.errors[model.name]
                      "
                      outlined
                      :label="model.label"
                      v-if="model.name == 'city'"
                      :menu-props="{ top: true, offsetY: true }"
                    ></v-text-field>

                    <v-text-field
                      v-model="models[model.name]"
                      :items="province"
                      solo
                      :error-messages="
                        errorMessage.errors && errorMessage.errors[model.name]
                      "
                      outlined
                      :label="model.label"
                      v-if="model.name == 'district'"
                      :menu-props="{ top: true, offsetY: true }"
                    ></v-text-field>

                    <v-text-field
                      v-if="model.name == 'postal_code'"
                      :label="model.label"
                      solo
                      :error-messages="
                        errorMessage.errors && errorMessage.errors[model.name]
                      "
                      outlined
                      v-model="models[model.name]"
                    ></v-text-field>
                    <v-text-field
                      color="teal"
                      solo
                      outlined
                      :error-messages="
                        errorMessage.errors && errorMessage.errors[model.name]
                      "
                      :label="model.label"
                      v-if="model.name == 'petshop_address'"
                      v-model="petshop_address"
                    ></v-text-field>
                  </div>
                </div>

                <div id="mapid" style="height: 300px">
                  <v-geosearch :options="geosearchOptions"></v-geosearch>
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
import L from "leaflet";
import "leaflet-control-geocoder";
import "leaflet-control-geocoder/dist/Control.Geocoder.css";
import { OpenStreetMapProvider } from "leaflet-geosearch";
export default {
  name: "RegisterClinic",
  data() {
    return {
      images: [],
      data: [],
      errorMessage: {},
      formData: [],
      models: {},
      src: "",
      petshop_address: "",
      province: ["Foo", "Bar", "Fizz", "Buzz"],
      provider: new OpenStreetMapProvider(),
    };
  },

  async mounted() {
    await this.getFormData();

    const mymap = L.map("mapid").setView(
      [-6.175781231550431, 106.82724098708343],
      13
    );

    // Add a tile layer to the map
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors',
      maxZoom: 19,
    }).addTo(mymap);

    let marker = null;

    // Add an event listener to update the marker's position and reverse geocode the petshop_address when the user clicks on the map
    mymap.on("click", async (e) => {
      if (marker) mymap.removeLayer(marker);

      marker = L.marker(e.latlng).addTo(mymap);
      const result = await this.reverseGeocode(e.latlng);
      if (result && result.display_name) {
        this.petshop_address = result.display_name;
      } else {
        this.petshop_address = e.latlng.lat + "," + e.latlng.lng;
      }
    });

    L.Control.geocoder({
      position: "topleft",
      placeholder: "Search for an address...",
      geocoder: L.Control.Geocoder.nominatim({
        geocodingQueryParams: {
          countrycodes: "ID",
        },
      }),
      collapsed: true,
    })
      .on("markgeocode", function (e) {
        console.log("markgeocode event triggered", e);
        if (marker) mymap.removeLayer(marker);
        marker = L.marker(e.geocode.center).addTo(mymap);
      })
      .addTo(mymap);

    mymap.on("markgeocode", async (event) => {
      const { name, center } = event.geocode;
      console.log(`Selected address: ${name}`);
      console.log(`Latitude: ${center.lat}, Longitude: ${center.lng}`);
      const result = await this.reverseGeocode(center);
      if (result && result.display_name) {
        this.petshop_address = result.display_name;
      } else {
        this.petshop_address = `${center.lat},${center.lng}`;
      }
    });
  },

  methods: {
    async reverseGeocode(latlng) {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latlng.lat}&lon=${latlng.lng}`
      );
      const data = await response.json();
      return data;
    },
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

        // Append petshop_address to the request data
        data.append("petshop_address", obj.petshop_address);

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
        console.log(error.response);
        const errorMessage = error.response.data;

        this.errorMessage = errorMessage;
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

        @media (max-width: $bp-sm) {
          text-align: center;
        }
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
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    justify-content: space-between;

    @media (max-width: $bp-sm) {
      gap: 16px;
      flex-direction: column;
    }
    &__half {
      @media (max-width: $bp-sm) {
        width: 100%;
      }

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

.custom-file-upload::v-deep .v-input {
  &__slot {
    margin-bottom: 1.5rem;
  }
}

.custom-file-upload::v-deep .v-text-field {
  &__details {
    position: relative;
    right: 4%;
  }
}
</style>
