<template>
  <v-app>
    <header class="header-process">
      <v-container>
        <v-row>
          <router-link to="/" class="logo-header"
            ><img src="@/assets/petany-logo-dark.png" alt=""
          /></router-link>

          <router-link to="/" class="profile ml-auto my-auto">
            <p class="username mb-0">{{ localStorage.data.name }}</p>
          </router-link>
        </v-row>
      </v-container>
    </header>
  </v-app>
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
  },
  data() {
    return {
      drawer: false,
      searchIsActive: false,
    };
  },
};
</script>

<style lang="scss" scoped>
::v-deep .v-application--wrap {
  min-height: fit-content;
}
#app {
  margin-bottom: auto;
}
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
  .profile {
    display: flex;
    gap: 10px;
    text-decoration: none;

    p {
      color: $black;
      margin: 0;
    }
  }
}
</style>
