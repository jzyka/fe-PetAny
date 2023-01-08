<template>
  <v-app>
    <header class="header-process">
      <v-container>
        <v-row>
          <router-link to="/" class="logo-header"
            ><img src="@/assets/petany-logo-dark.png" alt=""
          /></router-link>
          <div class="header-right">
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

<style lang="scss" scoped>
::v-deep .v-application--wrap {
  min-height: fit-content;
}
#app {
  margin-bottom: auto;
}
</style>
