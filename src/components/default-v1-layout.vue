<template>
  <v-app>
    <HeaderDefault />
    <router-view />
    <FooterPetany />
  </v-app>
</template>

<script>
import FooterPetany from "./footer-petany.vue";
import HeaderDefault from "./header-default.vue";

export default {
  components: {
    FooterPetany,
    HeaderDefault,
  },
};
</script>

<style lang="scss" scoped>
#app {
  background-color: $cultured;
}
</style>
