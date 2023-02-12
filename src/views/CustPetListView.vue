<template>
  <v-app>
    <section class="pet-list">
      <v-container>
        <v-row>
          <div class="wrap">
            <h1>Profil Peliharaan</h1>
            <div class="pet-list-wrap">
              <v-card
                class="card--pet rounded-lg"
                v-for="(petData, i) in data"
                :key="i"
              >
                <router-link :to="petData.links.self">
                  <v-img alt="" class="card--pet__image" />
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

  async mounted() {
    await this.getPetList();
  },

  methods: {
    async getPetList() {
      try {
        const res = await Axios.get(`${this.$api}/get-pet`);
        const arrayL = res.data;
        for (let i = 0; i < arrayL[0].length; i++) {
          const index0 = arrayL[0];
          const finalData = index0[i];
          // console.log(finalData);
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

.card {
  &--pet {
    width: 15%;
    background-color: $white;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    height: 205px;
    box-shadow: 0px 1px 10px 1px rgba(0, 0, 0, 0.1);

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
