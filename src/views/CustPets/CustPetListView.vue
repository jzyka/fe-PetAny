<template>
  <v-app>
    <section class="pet-list">
      <v-container>
        <v-row>
          <div class="background empty" v-if="data.length === 0">
            <div class="my-4">
              <img src="@/assets/petlist.png" alt="" class="empty-img" />
            </div>
            <div class="text my-4">anda belum mengisi data peliharaan anda</div>

            <div class="btnn p-4">
              <router-link to="/create-pet" class="py-2 cr"
                >buat data peliharaan</router-link
              >
            </div>
          </div>
          <div class="wrap" id="pet-list" v-else>
            <h1 id="remove">Profil Peliharaan</h1>
            <div class="pet-list-wrap">
              <v-card
                class="card--pet rounded-lg"
                v-for="(petData, i) in data"
                :key="i"
              >
                <router-link :to="petData.links.self" class="route-link">
                  <v-img
                    alt=""
                    class="card--pet__image"
                    :src="petData.pet_image"
                  />
                  <div class="card--pet__text">
                    <div class="name-weight">
                      <p class="name">{{ petData.pet_name }}</p>
                      <p class="weight">{{ petData.weight }} Kg</p>
                    </div>
                    <p class="age">{{ petData.age }} year young</p>
                  </div>
                </router-link>
              </v-card>
            </div>
          </div>
        </v-row>
      </v-container>
    </section>
  </v-app>
</template>

<script>
import Axios from "axios";
export default {
  data: () => ({
    data: [],
  }),

  async created() {
    await this.getPetList();
  },

  methods: {
    async getPetList() {
      try {
        const res = await Axios.get(`${this.$api}/get-pet`);
        console.log(res);
        const arrayL = res.data;
        for (let i = 0; i < arrayL.length; i++) {
          const index0 = arrayL;
          const finalData = index0[i];
          const arrayLength = this.data;
          console.log(arrayLength.length);
          this.data.push(finalData);
        }
        console.log(this.data);
        // console.log(this.data[0].pet_name);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style lang="scss">
section {
  &.pet-list {
    padding: 40px 0;
    .wrap {
      display: flex;
      flex-direction: column;
      width: 100%;

      h1 {
        font-size: 22px;
        color: $primary-color;
        margin-bottom: 2rem;
        font-weight: $font-weight-semibold;
      }

      .pet-list-wrap {
        display: flex;
        flex-wrap: wrap;
        gap: 2%;
        width: 100%;
        row-gap: 20px;
      }
    }
  }
}

.empty {
  &.background {
    background-color: $white;
    border-radius: 10px;
    width: 100%;
  }
  .empty-img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 35%;

    @include sm-max {
      width: 50%;
    }

    @include xs-max {
      width: 65%;
    }

    @include xxs-max {
      width: 75%;
    }
  }
  .text {
    text-transform: capitalize;
    text-align: center;
    font-size: 20px;
    color: $primary-color;
    font-weight: 600;

    @include sm-max {
      font-size: 18px;
      padding: 0 30px;
    }

    @include xs-max {
      font-size: 16px;
    }
  }
  .cr {
    background-color: $primary-color;
    color: $white;
    text-decoration: none;
    width: 100%;
    justify-content: center;
    text-align: center;
    text-transform: capitalize;
    border-radius: 10px;

    @include md-max {
      width: 95%;
    }

    @include sm-max {
      width: 85%;
    }
  }
  .btnn {
    display: flex;
    justify-content: center;
  }
}

.card {
  &--pet {
    width: 15%;
    background-color: $white;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    height: 205px;
    box-shadow: 0px 1px 10px 1px rgba(0, 0, 0, 0.1);

    .route-link {
      text-decoration: none;
    }

    &__image {
      width: 100%;
      height: 130px;
      object-fit: cover;
      border-radius: 10px 10px 0 0;
    }

    &__text {
      padding: 10px;
      margin-top: auto;

      p {
        margin: 0;
      }

      .name-weight {
        display: flex;
        margin-bottom: 5px;

        .name {
          color: $primary-color;
          font-weight: $font-weight-medium;
          padding-right: 5px;
          border-right: 2px solid $secondary-color;
          margin-right: 5px;
        }

        .weight {
          color: $granite-gray;
        }
      }

      .age {
        color: $steel-blue;
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
