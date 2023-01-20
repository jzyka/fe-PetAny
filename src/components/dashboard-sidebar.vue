<template>
  <v-app>
    <nav class="clinic-sidebar">
      <v-container fluid>
        <v-row>
          <div class="nav-clinic">
            <v-img
              src="@/assets/logo-light.png"
              contain
              max-width="80%"
              max-height="50px"
              class="mx-auto"
            ></v-img>

            <div class="dashboard-nav">
              <router-link to="/" class="menu">E-Commerce</router-link>
              <router-link to="/clinic-product-list" class="menu"
                >Produk</router-link
              >
              <router-link to="/staff-setting" class="menu">Staff</router-link>
              <router-link to="/" class="menu">Data Hewan</router-link>
              <router-link to="/appointment-lobby" class="menu"
                >Klinik</router-link
              >
              <router-link to="/" class="menu">Pesanan</router-link>
              <router-link to="/" class="menu">Kasir</router-link>
              <router-link to="/" class="menu">Profil</router-link>
              <router-link to="/" class="menu">Pengaturan</router-link>
            </div>

            <router-link class-active="active" to="/" class="profile-menu"
              ><v-img src="@/assets/user-img.png" max-width="25%"></v-img>John
              Doe</router-link
            >
          </div>
        </v-row>
      </v-container>
    </nav>
  </v-app>
</template>

<script>
export default {};
</script>

<style lang="scss">
.clinic-sidebar {
  // height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  width: 16.6%;
  background-color: $primary-color;

  .nav-clinic {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    position: relative;
    padding: 1rem 0;

    .dashboard-nav {
      margin-top: 2rem;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 10px;

      .menu {
        text-decoration: none;
        color: $white;
        padding: 10px 1rem;
        width: 100%;

        &.router-link-exact-active {
          background-color: $white;
          color: $primary-color;
        }

        &:hover {
          background-color: $white;
          color: $primary-color;
        }
      }
    }

    .profile-menu {
      margin-top: auto;
      display: flex;
      gap: 10px;
      align-items: center;
      color: $white;
      text-decoration: none;
      padding: 0 1rem;
    }
  }
}
</style>
