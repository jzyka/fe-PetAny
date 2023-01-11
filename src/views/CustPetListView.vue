<template>
  <v-app>
    <section class="pet-list">
      <v-container>
        <v-row>
          <div class="wrap">
            <h1>Profil Peliharaan</h1>
            <div class="pet-list-wrap">
              <router-link class="card--pet" tag="div" to="/">
                <img src="@/assets/pabs.png" alt="" class="card--pet__image" />
                <div class="card--pet__text">
                  <div class="name-weight">
                    <p class="name">Pablo</p>
                    <p class="weight">5 Kg</p>
                  </div>
                  <p class="age">1 Tahun 6 Bulan</p>
                </div>
              </router-link>
            </div>
          </div>
        </v-row>
      </v-container>
    </section>
  </v-app>
</template>

<script>
export default {};
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

    &__image {
      width: 100%;
      height: 130px;
      object-fit: fill;
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
