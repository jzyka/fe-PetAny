<template>
  <v-app>
    <HeaderProcess />
    <router-view />
    <FooterPetany />
  </v-app>
</template>

<script>
import FooterPetany from "./footer-petany.vue";
import HeaderProcess from "./header-process.vue";

export default {
  components: {
    FooterPetany,
    HeaderProcess,
  },
};
</script>

<style lang="scss" scoped>
#app {
  background-color: $cultured;
}
</style>
