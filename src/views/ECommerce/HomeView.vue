<template>
  <v-app>
    <section class="banner-slider">
      <v-container>
        <v-row>
          <v-carousel cycle height="400" hide-delimiter-background>
            <v-carousel-item
              v-for="(banner, i) in banners"
              :key="i"
              :src="banner.src"
              reverse-transition="fade-transition"
              transition="fade-transition"
            ></v-carousel-item>
          </v-carousel>
        </v-row>
      </v-container>
    </section>

    <section class="slider--cards__clinic">
      <v-container>
        <v-row>
          <v-cols cols="12">
            <div class="slider--cards__title">
              <p class="slider-title">
                Buat janji dengan dokter hewan terdekat
              </p>
              <!-- <router-link to="/book-appoinment" class="see-more">Lihat Semua</router-link> -->
            </div>
            <v-slide-group
              v-model="VetCard"
              selected-class="bg-primary"
              multiple
              show-arrows
            >
              <v-slide-item v-for="(vetAll, i) in vetAlls" :key="i">
                <router-link
                  tag="a"
                  :to="vetAll.links.self"
                  class="card--vetproduct ma-2"
                >
                  <div class="card--vetproduct__image">
                    <v-img
                      :src="vetAll.petshop_image"
                      cover
                      :aspect-ratio="4 / 3"
                      class="rounded-lg elevation-1"
                    ></v-img>
                  </div>
                  <div class="card--vetproduct__detail">
                    <p class="name">{{ vetAll.petshop_name }}</p>
                    <p class="hours-price">
                      {{ vetAll.jam_buka }}-{{ vetAll.jam_tutup }}
                    </p>
                    <p class="location">{{ vetAll.district }}</p>
                  </div>
                </router-link>
              </v-slide-item>
            </v-slide-group>
          </v-cols>
        </v-row>
      </v-container>
    </section>

    <section class="slider--cards__product">
      <v-container>
        <v-row>
          <div>
            <div class="slider--cards__title">
              <p class="slider-title">Beli Product</p>
              <!-- <router-link to="/" class="see-more">Lihat Semua</router-link> -->
            </div>
            <v-slide-group
              v-model="VetCard"
              selected-class="bg-primary"
              multiple
              show-arrows
            >
              <v-slide-item v-for="(productAll, i) in productAlls" :key="i">
                <router-link
                  tag="a"
                  :to="productAll.link"
                  class="card--vetproduct ma-2"
                >
                  <div class="card--vetproduct__image">
                    <v-img
                      :src="productAll.data.image"
                      cover
                      :aspect-ratio="4 / 3"
                      class="rounded-lg"
                    ></v-img>
                  </div>
                  <div class="card--vetproduct__detail">
                    <p class="name">{{ productAll.data.name }}</p>
                    <p class="hours-price">Rp {{ productAll.data.price }}</p>
                    <p class="location">Tersisa {{ productAll.data.stock }}</p>
                  </div>
                </router-link>
              </v-slide-item>
            </v-slide-group>
          </div>
        </v-row>
      </v-container>
    </section>

    <v-snackbar v-model="verifSnackbar" :timeout="timeout" top>
      Cek Email anda dan verifikasi akun

      <template v-slot:action="{ attrs }">
        <v-btn color="blue" text v-bind="attrs" @click="verifSnackbar = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </v-app>
</template>

<script>
import axios from "axios";

export default {
  data: () => ({
    VetCard: [],
    vetAlls: [],
    verifSnackbar: false,
    productAlls: [],
    timeout: 2000,
    banners: [
      {
        src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg",
      },
      {
        src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg",
      },
      {
        src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg",
      },
      {
        src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
      },
    ],
  }),

  async mounted() {
    await this.getVetAll();
    await this.getProductAll();
  },

  created() {
    this.getLocalStorage();
  },

  methods: {
    getLocalStorage() {
      this.localStorage = JSON.parse(localStorage.getItem("data"));
      console.log("ini local", localStorage.data.email_verified_at);

      if (this.localStorage.data.email_verified_at === null) {
        this.verifSnackbar = true;
      }
    },
    async getVetAll() {
      try {
        const res = await axios.get(`${this.$api}/get-petshop-with-schedule`);
        const vetAlls = res.data;
        this.vetAlls = vetAlls;

        console.log(vetAlls);
      } catch (error) {
        console.log(error);
      }
    },

    async getProductAll() {
      try {
        const res = await axios.get(`${this.$api}/get-product`);
        this.productAlls = res.data.map((product) => ({
          data: product.data,
          link: product.links,
        }));
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style lang="scss">
section {
  padding: 40px 0;
  &.banner-slider {
    .v-carousel {
      height: 250px !important;

      @include md-max {
        padding: 0 20px;
      }
    }
    .v-image {
      &__image {
        border-radius: 20px;
        height: 250px !important;
      }
    }
  }
}

.slider {
  &--cards {
    &__title {
      display: flex;
      align-items: center;
      margin-bottom: 1.5rem;

      @include md-max {
        margin-left: 20px;
      }

      .slider-title {
        font-size: 22px;
        font-weight: $font-weight-semibold;
        color: $granite-gray;
        padding-right: 1rem;
        // border-right: 2px solid $black;
        line-height: 26px;
        margin-right: 1rem;
        margin-bottom: 0;

        @include md-max {
          font-size: 20px;
        }
        @include sm-max {
          font-size: 18px;
        }
      }

      .see-more {
        font-size: 20px;
        font-weight: $font-weight-semibold;
        color: $primary-color;
        text-decoration: none;
        line-height: 20px;

        @include md-max {
          font-size: 18px;
        }
        @include sm-max {
          font-size: 16px;
        }
      }
    }
  }
}
.v-slide-group {
  &__prev {
    left: -7%;
    top: 50%;
    position: absolute;
    transform: translate(0, -50%);
  }

  &__next {
    right: -7%;
    top: 50%;
    position: absolute;
    transform: translate(0, -50%);
  }
}

.card {
  &--vetproduct {
    text-decoration: none;
    padding: 1rem;
    background-color: $white;
    box-shadow: 0px 4px 10px 4px rgba(0, 0, 0, 0.05);
    border-radius: 10px;
    height: auto;
    width: 200px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 1rem;

    &__image {
      background-color: $cultured;
      border-radius: 10px;
    }

    &__detail {
      display: flex;
      flex-direction: column;
      gap: 10px;
      .name {
        color: $black;
        height: 2.1rem;
        line-height: 1;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: break-spaces;
        font-weight: $font-weight-medium;
      }
      .hours-price {
        color: $black;
        font-weight: $font-weight-semibold;
      }
      .location {
        color: $granite-gray;
        font-size: 12px;
      }
      p {
        margin-bottom: 0;
      }
    }
  }
}
</style>
