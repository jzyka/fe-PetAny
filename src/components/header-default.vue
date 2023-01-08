<template>
  <v-app>
    <header class="header-process">
      <v-container>
        <v-row>
          <router-link to="/" class="logo-header"
            ><img src="@/assets/petany-logo-dark.png" alt=""
          /></router-link>
          <div class="header-right">
            <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              label="Cari disini"
              solo
              hide-details
            ></v-text-field>
            <router-link to="/" class="to-my-pet"
              ><img src="@/assets/paw.png" alt="" />Peliharaan saya</router-link
            >
            <router-link to="/" class="btn-to cart"
              ><img src="@/assets/cart.png" alt=""
            /></router-link>
            <router-link to="/" class="btn-to notification"
              ><img src="@/assets/notification.png" alt=""
            /></router-link>
            <router-link to="/" class="profile"
              ><img src="@/assets/user-img.png" alt="" />
              <p class="username">John Doe</p>
            </router-link>
          </div>
        </v-row>
      </v-container>
    </header>
  </v-app>
</template>

<script>
export default {};
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
</style>
