<template>
  <v-app>
    <header class="header-process">
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Cari disini"
        solo
        hide-details
      ></v-text-field>
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
