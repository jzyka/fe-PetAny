<template>
  <v-app>
    <nav class="cust-profile-sidebar">
      <v-container>
        <v-row>
          <div class="customer-nav">
            <router-link class-active="active" to="/" class="profile-menu">
              <v-img src="@/assets/user-img.png" max-width="25%"></v-img>
              <div class="profile-text">
                <p>John Doe</p>
              </div>
            </router-link>
            <router-link to="/" class="menu">Wishlist</router-link>
            <router-link to="/" class="menu">Kotak Masuk</router-link>
            <router-link to="/" class="menu">Transaksi</router-link>
            <router-link to="/" class="menu">Status Pendaftaran</router-link>
            <router-link to="/" class="menu">Bantuan</router-link>
            <router-link to="/" class="menu">Pengaturan</router-link>
          </div>
        </v-row>
      </v-container>
    </nav>
  </v-app>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
qw .customer-nav {
  background: $white;
  box-shadow: 0px 1px 10px 1px rgba(0, 0, 0, 0.15);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  padding: 1rem 0;
  gap: 10px;
  .menu {
    text-decoration: none;
    font-size: 14px;
    color: $black;
    padding: 10px 1rem;
    width: 100%;
    &.router-link-exact-active {
      background-color: $primary-color;
      color: $white;
    }
    &:hover {
      background-color: $primary-color;
      color: $white;
    }
  }
  .profile-menu {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: $black;
    text-decoration: none;
  }
  .profile-text {
    margin-top: 10px;
    font-weight: $font-weight-medium;
  }
}
</style>
