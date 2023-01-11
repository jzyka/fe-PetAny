<template>
  <v-app>
    <HeaderDefault />
    <section class="profile">
      <v-container>
        <v-row>
          <v-col cols="2">
            <CustProfileSidebar />
          </v-col>
          <v-col cols="10">
            <router-view />
          </v-col>
        </v-row>
      </v-container>
    </section>
    <FooterPetany />
  </v-app>
</template>

<script>
import FooterPetany from "./footer-petany.vue";
import HeaderDefault from "./header-default.vue";
import CustProfileSidebar from "./cust-profile-sidebar.vue";

export default {
  components: {
    FooterPetany,
    HeaderDefault,
    CustProfileSidebar,
  },
};
</script>

<style lang="scss" scoped>
#app {
  background-color: $cultured;
}
</style>
