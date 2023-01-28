<template>
  <v-app>
    <section class="register-clinic-process p-0">
      <div class="clinic-process">
        <h1>Pendaftaran klinik anda berhasil dibuat!</h1>
        <img src="@/assets/registersucces.png" alt="" />
        <div class="buttons">
          <router-link to="/" class="btn white">
            Detil tentang layanan manajemen
          </router-link>
          <router-link to="/register" class="btn blue-deep">
            Bayar langganan layanan manajemen
          </router-link>
        </div>
      </div>
    </section>
  </v-app>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
::v-deep .v-application--wrap {
  min-height: fit-content;
}

.container-card {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  width: 80%;
}

.button-card {
  display: flex;
  justify-content: center;
  gap: 1.25rem;
}
.btn-detail {
  background-color: $primary-color;
  color: $primary-color;
  font-weight: $font-weight-medium;
  letter-spacing: 0;
  box-shadow: inset;
  padding: 15px;
  min-height: unset;
  height: auto;
  border-radius: 10px;
}

.btn-payment {
  background-color: $primary-color !important;
  color: $white;
  font-weight: $font-weight-medium;
  letter-spacing: 0;
  box-shadow: inset;
  padding: 15px;
  min-height: unset;
  height: auto;
  border-radius: 10px;
}
.title {
  font-size: 30px;
  height: auto;
  width: 100%;
  top: 35px;
  left: 282px;
  padding: auto;
  text-align: center;
  color: $primary-color;
}
.button-card {
  width: 45%;
}
</style>
