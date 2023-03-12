<template>
  <card>
    <header class="header-process">
      <v-container>
        <v-row>
          <router-link to="/" class="logo-header"><img src="@/assets/petany-logo-dark.png" alt="" /></router-link>
          <div class="header-right" v-if="isXSmallScreenSize">
            <v-text-field append-icon="mdi-magnify" label="Cari disini" solo hide-details></v-text-field>
            <router-link to="/pet-list" class="to-my-pet" v-if="localStorage"><img src="@/assets/paw.png" alt="" />Peliharaan saya</router-link>
            <router-link to="/" class="btn-to cart" v-if="localStorage"><img src="@/assets/cart.png" alt="" /></router-link>
            <router-link to="/" class="btn-to notification" v-if="localStorage"><img src="@/assets/notification.png" alt="" /></router-link>
            <router-link to="/login" class="to-login" v-if="!localStorage">
              <p class="login">Masuk/Daftar</p>
            </router-link>
            <router-link to="/transaction" class="profile" v-if="localStorage"
              ><img src="@/assets/user-img.png" alt="" />
              <p class="username">{{ localStorage.data.name }}</p>
            </router-link>
          </div>

          <v-spacer v-if="!isXSmallScreenSize"></v-spacer>

          <div v-if="!isXSmallScreenSize" class="d-flex">
            <v-btn @click="searchIsActive = !searchIsActive" fab class="align-self-center align-center mx-1" flat style="box-shadow: none; width: 36px; height: 36px">
              <v-icon style="color: rgba(0, 0, 0, 0.54)"> mdi-magnify </v-icon>
            </v-btn>
            <v-app-bar-nav-icon class="text-black align-self-center" @click="drawer = !drawer"> </v-app-bar-nav-icon>
          </div>
        </v-row>
        <v-row v-if="!isXSmallScreenSize && searchIsActive" class="justify-center mt-3">
          <div class="d-flex custom-mobile-search">
            <v-text-field class="align-self-center" append-icon="mdi-magnify" label="Cari disini" solo hide-details></v-text-field>
          </div>
        </v-row>
      </v-container>
    </header>
    <v-navigation-drawer absolute v-model="drawer" right temporary class="d-flex flex-column">
      <v-list nav>
        <v-list-item class="py-0 d-flex justify-end">
          <v-btn icon flat width="30" height="30" @click="drawer = false">
            <v-icon> mdi-close </v-icon>
          </v-btn>
        </v-list-item>
        <v-list-item class="py-0 d-flex mt-2 custom-profile" @click="$router.push('/transaction')">
          <img src="@/assets/user-img.png" alt="" />
          <p class="username">John Doe</p>
        </v-list-item>
        <v-list-item class="py-0 d-flex mt-1 custom-btn-to cart" @click="$router.push('/')">
          <div class="d-flex">
            <img src="@/assets/cart.png" alt="" />
            <p class="ml-2 username">Keranjang</p>
          </div>
        </v-list-item>
        <v-list-item class="py-0 d-flex mt-1 custom-btn-to notification" @click="$router.push('/')">
          <img src="@/assets/notification.png" alt="" />
          <p class="ml-2 username">Notifikasi</p>
        </v-list-item>
        <v-list-item class="py-0 d-flex mt-1">
          <router-link to="/pet-list" class="custom-to-my-pet"><img src="@/assets/paw-dark.png" alt="" />Peliharaan saya</router-link>
        </v-list-item>
        <v-list-item class="py-0 d-flex mt-1">
          <router-link to="/login" class="custom-to-login" v-if="!localStorage">
            <p class="login">Masuk/Daftar</p>
          </router-link>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </card>
</template>

<script>
export default {
  created() {
    this.getLocalStorage();
  },
  methods: {
    getLocalStorage() {
      this.localStorage = JSON.parse(localStorage.getItem("data"));
    },

    logout() {
      localStorage.clear();
      this.$router.push({ name: "login" });
    },
  },
  data() {
    return {
      drawer: false,
      searchIsActive: false,
    };
  },
  watch: {
    isXSmallScreenSize() {
      console.log(this.$vuetify.breakpoint);
    },
  },
  computed: {
    isXSmallScreenSize() {
      return this.$vuetify?.breakpoint?.mdAndUp;
    },
  },
};
</script>

<style lang="scss">
header {
  background-color: $white;
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.07);
  padding: 10px;

  .logo-header {
    margin: auto 0;
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
    width: 75%;
    justify-content: flex-end;
    align-items: center;

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
