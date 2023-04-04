<template>
  <v-app>
    <section class="background">
      <v-container>
        <v-row>
          <div class="kotak">
            <div class="pb-5">
              <router-link to="/clinic-product-list" class="back">
                <v-img src="@/assets/left-arrow.png" max-width="25px"></v-img>
              </router-link>
              <p class="text-add">Tambah Produk</p>
            </div>
            <div class="form-items">
              <div class="mb-4">
                <p>Nama Produk</p>
                <div class="">
                  <v-text-field
                    class="input-contain"
                    solo
                    :error-messages="
                      errorMessage.errors && errorMessage.errors.name
                    "
                    v-model="name"
                    background-color="#F1F1F1"
                  ></v-text-field>
                </div>
                <p>Deskripsi Produk</p>
                <div>
                  <v-textarea
                    class="input-contain"
                    solo
                    :error-messages="
                      errorMessage.errors && errorMessage.errors.descripion
                    "
                    v-model="description"
                    background-color="#F1F1F1"
                  ></v-textarea>
                </div>
              </div>
              <div>
                <p>Harga</p>
                <div class="">
                  <v-text-field
                    class="input-contain"
                    solo
                    prefix="Rp"
                    hint="tanpa titik (contoh: 999999)"
                    :error-messages="
                      errorMessage.errors && errorMessage.errors.price
                    "
                    v-model="price"
                    background-color="#F1F1F1"
                  ></v-text-field>
                </div>
                <p>Stok</p>
                <div class="">
                  <v-text-field
                    class="input-contain"
                    solo
                    hint="Hanya gunakan angka"
                    :error-messages="
                      errorMessage.errors && errorMessage.errors.stock
                    "
                    v-model="stock"
                    background-color="#F1F1F1"
                  ></v-text-field>
                </div>
                <p>Foto Produk</p>
                <div>
                  <v-file-input
                    class="input-contain"
                    accept="image/*"
                    solo
                    placeholder="png or jpg only"
                    :error-messages="
                      errorMessage.errors && errorMessage.errors.image
                    "
                    v-model="image"
                    background-color="#F1F1F1"
                  ></v-file-input>
                </div>
              </div>
              <div class="an1">
                <v-btn class="button" @click="createMedRec">Simpan</v-btn>
              </div>
            </div>
          </div>
        </v-row>
      </v-container>
    </section>
  </v-app>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      name: "",
      description: "",
      price: "",
      stock: "",

      image: null,
      errorMessage: {},
    };
  },

  methods: {
    async createMedRec() {
      try {
        this.localStorage = JSON.parse(localStorage.getItem("data"));

        const petshopID = this.localStorage.data.petshop_id;
        console.log(this.imageData);
        const formData = new FormData();

        formData.append("petshop_id", petshopID);
        formData.append("name", this.name);
        formData.append("description", this.descripion);
        formData.append("image", this.image);
        formData.append("stock", this.stock);
        formData.append("price", this.price);

        const res = await axios({
          method: "post",
          url: `${this.$api}/add-product`,
          data: formData,
          headers: {
            "Content-Type": `multipart/form-data;`,
          },
        });
        console.log(res.data);
        if (res.status == 200) {
          this.$router.push({ name: "clinic-product-list" });
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

<style lang="scss">
.form-items {
  @media (max-width: $bp-sm) {
    flex-direction: column;
    .col-6 {
      flex: 0 0 100%;
      max-width: 100%;
    }
    .button {
      min-width: 100px !important;
    }
  }
}

section {
  &.background {
    background-color: $cultured;
    min-height: 100vh;
    display: flex;
    align-items: center;

    .kotak {
      margin: auto;
      padding: 2rem;
      border-radius: 20px;
      background-color: $white;
      align-items: center;
      width: 100%;
    }
    .back {
      padding-right: 1.5rem;
    }
    .input-contain {
      border-radius: 10px;
    }
    .text-add {
      color: $primary-color;
      font-weight: $font-weight-semibold;
      font-size: 20px;
    }
    .button {
      background-color: $primary-color !important;
      color: $white;
      margin-top: 1rem;
      width: 10%;
    }
    .an1 {
      width: 100%;
      display: flex;
      justify-content: flex-end;
    }
  }
}
</style>
