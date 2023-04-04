<template>
  <v-app>
    <v-container class="py-5">
      <v-row>
        <div class="background pa-8" style="">
          <div class="mb-5">
            <p class="tx-add d-flex">
              Isi data untuk menambahkan data peliharaan
            </p>
          </div>
          <div class="row align-center">
            <v-col cols="12" md="3" class="justify-center">
              <!-- <img class="pets" src="@/assets/user-img.png" alt="" />
        <input type="file" ref="file" style="display: none" />
        <button @click="$refs.file.click()" class="btnfoto m-5">
          ubah foto
        </button> -->

              <div class="image-bg">
                <v-img
                  v-if="imagePreviewURL"
                  :src="imagePreviewURL"
                  aspect-ratio="1"
                  cover
                  class="rounded-lg"
                ></v-img>
              </div>
              <v-file-input
                justify-center
                label="File input"
                v-model="imageData"
                @change="onFileChange"
                prepend-icon="Pilih profil"
                hide-input
                class="image-input"
              ></v-file-input>
              <p class="img-error">
                {{ errorMessage.errors && errorMessage.errors.pet_image[0] }}
              </p>
            </v-col>
            <v-col cols="12" md="9">
              <v-row>
                <v-col cols="12" md="6">
                  <p class="tx">Nama Hewan</p>
                  <div class="">
                    <v-text-field
                      class="input-contain"
                      solo
                      v-model="petName"
                      :error-messages="
                        errorMessage.errors && errorMessage.errors.pet_name
                      "
                      background-color="#F1F1F1"
                    ></v-text-field>
                  </div>
                  <p class="tx">Usia</p>
                  <div class="">
                    <v-text-field
                      class="input-contain"
                      solo
                      v-model="petAge"
                      :error-messages="
                        errorMessage.errors && errorMessage.errors.age
                      "
                      suffix="Tahun"
                      hint="Hanya gunakan angka dan . sebagai desimal"
                      background-color="#F1F1F1"
                    ></v-text-field>
                  </div>
                  <p class="tx">Alergi</p>
                  <div class="">
                    <v-text-field
                      class="input-contain"
                      solo
                      v-model="petAllergies"
                      :error-messages="
                        errorMessage.errors && errorMessage.errors.allergies
                      "
                      hint="Opsional"
                      background-color="#F1F1F1"
                    ></v-text-field>
                  </div>
                </v-col>
                <v-col cols="12" md="6">
                  <p class="tx">Jenis Hewan</p>
                  <div class="">
                    <v-text-field
                      class="input-contain"
                      solo
                      v-model="petGenus"
                      :error-messages="
                        errorMessage.errors && errorMessage.errors.pet_genus
                      "
                      hint="contoh: anjing, kucing, ayam"
                      background-color="#F1F1F1"
                    ></v-text-field>
                  </div>
                  <p class="tx">Ras</p>
                  <div class="">
                    <v-text-field
                      class="input-contain"
                      solo
                      v-model="petSpecies"
                      :error-messages="
                        errorMessage.errors && errorMessage.errors.pet_species
                      "
                      hint="contoh: persia, siberian husky"
                      background-color="#F1F1F1"
                    ></v-text-field>
                  </div>
                  <p class="tx">Berat Badan</p>
                  <div class="">
                    <v-text-field
                      class="input-contain"
                      solo
                      v-model="petWeight"
                      :error-messages="
                        errorMessage.errors && errorMessage.errors.weight
                      "
                      suffix="Kg"
                      hint="Gunakan . untuk desimal e.g: 2.5"
                      background-color="#F1F1F1"
                    ></v-text-field>
                  </div>
                </v-col>
              </v-row>
            </v-col>
          </div>
          <div>
            <div class="btns pt-5">
              <v-btn
                class="crs"
                block
                elevation="2"
                large
                mdi-plus
                tile
                @submit.prevent
                @click="createPet"
                >Buat profil peliharaan</v-btn
              >
            </div>
          </div>
        </div>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import axios from "axios";
import ImagePreviewMixin from "@/mixins/ImagePreviewMixin";

export default {
  name: "LoginView",
  mixins: [ImagePreviewMixin],
  data: () => ({
    petName: "",
    petAge: "",
    petAllergies: "",
    petGenus: "",
    petSpecies: "",
    petWeight: "",
    imageData: "",
    models: {},
    errorMessage: {},
    vModel: [
      {
        id: 1,
        model: "pet_name",
      },
      {
        id: 2,
        model: "age",
      },
      {
        id: 3,
        model: "allergies",
      },
      {
        id: 4,
        model: "pet_genus",
      },
      {
        id: 5,
        model: "pet_species",
      },
      {
        id: 6,
        model: "weight",
      },
      {
        id: 7,
        model: "pet_image",
      },
    ],
  }),
  methods: {
    chooseImage() {
      this.$refs.fileInput.click();
    },

    onSelectFile() {
      const input = this.$refs.fileInput;
      const files = input.files;
      if (files && files[0]) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.imageData = e.target.result;
        };
        reader.readAsDataURL(files[0]);
        this.$emit("input", files[0]);
      }
    },

    async createPet() {
      try {
        console.log(this.imageData);
        const formData = new FormData();

        formData.append("pet_name", this.petName);
        formData.append("age", this.petAge);
        formData.append("allergies", this.petAllergies);
        formData.append("pet_genus", this.petGenus);
        formData.append("pet_species", this.petSpecies);
        formData.append("weight", this.petWeight);
        formData.append("pet_image", this.imageData);

        const res = await axios({
          method: "post",
          url: `${this.$api}/add-pet`,
          data: formData,
          headers: {
            "Content-Type": `multipart/form-data;`,
          },
        });
        console.log(res.data);
        if (res.status == 200) {
          this.$router.push({ name: "pet-list" });
        }
      } catch (error) {
        console.log(error);
        const errorMessage = error.response.data;

        this.errorMessage = errorMessage;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.image-bg {
  background-color: $gainsboro;
  width: 150px;
  //height: 100px;
  border-radius: 10px;
  display: block;
  margin: auto;
  padding: auto;

  @include sm-max {
    //columns: 7;
  }
}
.background {
  background-color: $white;
  border-radius: 20px;
  width: 100%;
  box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.1);
}
.tx-add {
  font-size: 20px;
  color: $primary-color;
  font-weight: $font-weight-semibold;

  @include sm-max {
    display: flex;
    justify-content: center;
    text-align: center;
  }
}
.img-error {
  width: 100%;
  text-align: center;
  margin: auto;
  font-size: 12px;
  color: $orange-red;
}
.tx {
  font-size: 16px;
  color: $primary-color;
  font-weight: $font-weight-medium;
}
.pets {
  width: 70%;
}
.crs {
  background-color: $primary-color !important;
  color: $white !important;
  text-transform: capitalize;
  border-radius: 7px;
}
.data-pet {
  border-style: groove;
  border-radius: 7px;
}
.end-txt {
  text-align: end;
}

.placeholder {
  background: #f0f0f0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #333;
  font-size: 18px;
  font-family: Helvetica;
}
.file-input {
  display: none;
}
</style>

<style lang="scss">
.image-input {
  .v-input {
    &__prepend-outer {
      width: 100%;

      button {
        font-size: 16px;
        color: $steel-blue;
      }
    }
  }
}
</style>

<style scoped>
::v-deep .v-application--wrap {
  min-height: fit-content;
}
</style>
