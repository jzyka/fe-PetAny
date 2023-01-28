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
          <div class="slider--cards__title">
            <p class="slider-title">Buat janji dengan dokter hewan terdekat</p>
            <router-link to="/" class="see-more">Lihat Semua</router-link>
          </div>
          <v-slide-group
            v-model="VetCard"
            selected-class="bg-primary"
            multiple
            show-arrows
          >
            <v-slide-item v-for="n in 15" :key="n">
              <router-link tag="a" to="/" class="card--vetproduct ma-2">
                <div class="card--vetproduct__image">
                  <v-img
                    src="@/assets/vet-img.png"
                    contain
                    class="rounded-lg"
                  ></v-img>
                </div>
                <div class="card--vetproduct__detail">
                  <p class="name">
                    Klinik Hewan Lovely Vets lorem ipsum dolor sit
                  </p>
                  <p class="hours-price">09.00 - 19.00</p>
                  <p class="location">1.2 KM</p>
                </div>
              </router-link>
            </v-slide-item>
          </v-slide-group>
        </v-row>
      </v-container>
    </section>

    <section class="slider--cards__product">
      <v-container>
        <v-row>
          <div class="slider--cards__title">
            <p class="slider-title">Beli Pakan Hewan</p>
            <router-link to="/" class="see-more">Lihat Semua</router-link>
          </div>
          <v-slide-group
            v-model="VetCard"
            selected-class="bg-primary"
            multiple
            show-arrows
          >
            <v-slide-item v-for="n in 15" :key="n">
              <router-link tag="a" to="/" class="card--vetproduct ma-2">
                <div class="card--vetproduct__image">
                  <v-img
                    src="@/assets/vet-img.png"
                    contain
                    class="rounded-lg"
                  ></v-img>
                </div>
                <div class="card--vetproduct__detail">
                  <p class="name">Royal Canin Protein Exigent 1.2Kg</p>
                  <p class="hours-price">Rp999.999</p>
                  <p class="location">Kota Surabaya</p>
                </div>
              </router-link>
            </v-slide-item>
          </v-slide-group>
        </v-row>
      </v-container>
    </section>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    VetCard: [],
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
};
</script>

<style lang="scss">
section {
  padding: 40px 0;
  &.banner-slider {
    .v-carousel {
      height: 250px !important;
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

      .slider-title {
        font-size: 22px;
        font-weight: $font-weight-semibold;
        color: $granite-gray;
        padding-right: 1rem;
        border-right: 2px solid $black;
        line-height: 26px;
        margin-right: 1rem;
        margin-bottom: 0;
      }

      .see-more {
        font-size: 20px;
        font-weight: $font-weight-semibold;
        color: $primary-color;
        text-decoration: none;
        line-height: 20px;
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
