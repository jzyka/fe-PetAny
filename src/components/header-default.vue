<template>
  <header class="header-process">
    <v-container>
      <v-row>
        <router-link to="/" class="logo-header"
          ><img src="@/assets/petany-logo-dark.png" alt=""
        /></router-link>
        <div class="header-right" v-if="!localStorage">
          <v-text-field
            append-icon="mdi-magnify"
            label="Cari disini"
            solo
            outlined
            class="search-all"
            hide-details
          ></v-text-field>

          <div v-if="!petShopId">
            <router-link to="/register-as-clinic" class="to-register"
              ><img src="@/assets/clinic-icon-blue.png" alt="" />
              Klinik
            </router-link>
          </div>

          <router-link to="/login" class="to-login">
            <p class="login">Masuk/Daftar</p>
          </router-link>
        </div>

        <div class="header-right" v-if="localStorage">
          <v-text-field
            append-icon="mdi-magnify"
            label="Cari disini"
            solo
            outlined
            class="search-all"
            hide-details
          ></v-text-field>

          <router-link to="/pet-list" class="to-my-pet"
            ><img src="@/assets/paw.png" alt="" />Peliharaan</router-link
          >

          <router-link to="/petshop-profile" v-if="petShopId" class="to-clinic"
            ><img src="@/assets/clinic-icon-blue.png" alt="" />
            Klinik
          </router-link>
          <router-link to="/" class="btn-to cart"
            ><img src="@/assets/cart.png" alt=""
          /></router-link>
          <router-link to="/" class="btn-to notification"
            ><img src="@/assets/notification.png" alt=""
          /></router-link>

          <router-link to="/transaction" class="profile">
            <!-- <img src="@/assets/user-img.png" alt="" /> -->
            <p class="username">{{ localStorage.data.name }}</p>
          </router-link>
        </div>
        <!-- 
          <v-spacer v-if="!isXSmallScreenSize"></v-spacer>

          <div v-if="!isXSmallScreenSize" class="d-flex">
            <v-btn
              @click="searchIsActive = !searchIsActive"
              fab
              class="align-self-center align-center mx-1"
              flat
              style="box-shadow: none; width: 36px; height: 36px"
            >
              <v-icon style="color: rgba(0, 0, 0, 0.54)"> mdi-magnify </v-icon>
            </v-btn>
            <v-app-bar-nav-icon
              class="text-black align-self-center"
              @click="drawer = !drawer"
            >
            </v-app-bar-nav-icon>
          </div> -->
      </v-row>
      <!-- <v-row
          v-if="!isXSmallScreenSize && searchIsActive"
          class="justify-center mt-3"
        >
          <div class="d-flex custom-mobile-search">
            <v-text-field
              class="align-self-center"
              append-icon="mdi-magnify"
              label="Cari disini"
              solo
              hide-details
            ></v-text-field>
          </div>
        </v-row> -->
    </v-container>
  </header>
</template>

<script>
export default {
  data: () => ({
    localStorage: null,
    petShopId: null,
  }),
  created() {
    this.getLocalStorage();
    console.log(this.localStorage.data.petshop_id);
  },
  methods: {
    getLocalStorage() {
      this.localStorage = JSON.parse(localStorage.getItem("data"));
      this.petShopId = this.localStorage.data.petshop_id;
      console.log(this.petShopId);
    },

    logout() {
      localStorage.clear();
      this.$router.push({ name: "login" });
    },
  },
  // data() {
  //   return {
  //     drawer: false,
  //     searchIsActive: false,
  //   };
  // },
  // watch: {
  //   isXSmallScreenSize() {
  //     console.log(this.$vuetify.breakpoint);
  //   },
  // },
  // computed: {
  //   isXSmallScreenSize() {
  //     return this.$vuetify?.breakpoint?.mdAndUp;
  //   },
  // },
};
</script>

<style lang="scss" scoped>
header {
  background-color: $white;
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.07);
  padding: 10px;

  .logo-header {
    margin: auto 0;
    width: 10%;
    img {
      height: 45px;
      object-fit: contain;
    }
  }
  .header-right {
    margin-left: auto;
    display: flex;
    gap: 1rem;
    align-items: center;
    width: 90%;
    justify-content: flex-end;
    align-items: center;

    .search-all::v-deep .v-input {
      &__control {
        min-height: 35px;
      }
      &__slot {
        min-height: 35px;
        background: none !important;
        box-shadow: none !important;

        fieldset {
          border-width: 1px !important;
          border-color: #646464 !important;
        }
      }

      label {
        color: $granite-gray;
      }
      input {
        color: $granite-gray;
      }
    }

    .to-my-pet {
      text-decoration: none;
      color: $white;
      display: flex;
      align-items: center;
      padding: 10px;
      border-radius: 10px;
      background-color: $primary-color;
      gap: 5px;
      max-height: 35px;
      font-size: 14px;

      img {
        width: 15px;
      }
    }
    .to-register,
    .to-clinic {
      text-decoration: none;
      color: $primary-color;
      font-weight: 500;
      display: flex;
      align-items: center;
      gap: 5px;
      max-height: 35px;
      // font-size: 14px;
      img {
        width: 20px;
      }
    }

    .btn-to {
      display: flex;
      align-items: center;

      img {
        width: 25px;
        height: 25px;
        object-fit: contain;
      }
    }

    .profile {
      display: flex;
      gap: 10px;
      text-decoration: none;
      align-items: center;

      img {
        object-fit: contain;
        width: 35px;
      }

      p {
        color: $black;
        margin: 0;
      }
    }
  }
}
</style>

<style lang="scss" scoped>
::v-deep .v-application--wrap {
  min-height: fit-content;
}
#app {
  margin-bottom: auto;
}

.to-login {
  text-decoration: none;
  padding: 10px 15px;
  border-radius: 10px;
  background-color: $primary-color;
  .login {
    color: $white;
    font-weight: $font-weight-reg;
    margin: auto 0;
    line-height: 16px;
  }
}
.custom-to-my-pet {
  text-decoration: none;
  color: $black;
  display: flex;
  align-items: center;
  padding: 10px;
  border-radius: 10px;
  //background-color: $primary-color;
  gap: 5px;
  max-height: 35px;
  font-size: 14px;
  width: 100%;

  img {
    width: 15px;
  }
}

.custom-btn-to {
  display: flex;
  align-items: center;

  img {
    width: 25px;
    height: 25px;
    object-fit: contain;
  }
}
.custom-btn-to:hover {
  background-color: rgba(0, 0, 0, 0.1);
}
.custom-profile {
  display: flex;
  gap: 10px;
  text-decoration: none;
  align-items: center;

  img {
    object-fit: contain;
    width: 35px;
  }

  p {
    color: $black;
    margin: 0;
  }
}
.custom-profile:hover {
  background-color: rgba(0, 0, 0, 0.1);
}
.custom-mobile-search {
  .v-input {
    &__control {
      min-height: 35px !important;
    }

    &__slot {
      background: $anti-flash !important;
      box-shadow: 0px 2px 4px 1px rgba(0, 0, 0, 0.15) !important;
    }

    label {
      color: $granite-gray;
    }
    input {
      color: $granite-gray;
    }
  }
}
.custom-to-login {
  text-decoration: none;
  padding: 10px 15px;
  border-radius: 10px;
  background-color: $primary-color;
  width: 100%;
  .login {
    color: $white;
    font-weight: $font-weight-reg;
    margin: auto 0;
    line-height: 16px;
  }
}
</style>
