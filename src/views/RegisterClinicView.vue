<template>
  <v-app>
    <section class="register-clinic-form">
      <v-container>
        <v-row>
          <div class="clinic-form-all">
            <h1>Daftar sebagai klinik hewan</h1>

            <div class="form--register-clinic">
              <div class="form--register-clinic__half"></div>
            </div>
          </div>
        </v-row>
      </v-container>
    </section>
  </v-app>
</template>

<script>
export default {};
</script>

<style lang="scss">
section {
  &.register-clinic-form {
    background-color: $cultured;
  }
}
</style>

<style lang="scss" scoped>
::v-deep .v-application--wrap {
  min-height: fit-content;
}
</style>
