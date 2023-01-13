<template>
  <v-app>
    <section>
      <v-container> 
        <v-row>
          <v-card class="container-card">
            <h1 class="title">Pendaftaran klinik anda ditolak</h1>
            <h1 class="rejected">Pendaftaran anda ditolak karena:</h1>
            <ul class="list">
              <li>Surat izin anda tidak valid</li>
              <li>Aezakmi</li>
              <li>Hesoyam</li>
            </ul>
            <v-btn block class="btn-retry">Daftar ulang</v-btn>
          </v-card>
        </v-row>
      </v-container>
    </section>
  </v-app>
</template>

<script>
export default {

}
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
  width: 100%;
  height: auto;
  padding: 2rem;
  border-radius: 20px;

}
.title {
  font-size: 30px;
  height: auto;
  width: 100%;
  top: 35px;
  left: 282px;
  margin-bottom: 53px;
  margin-top: 35px;
  padding: auto;
  text-align: center;
  font-weight: $font-weight-bold;
  color: $primary-color;
}
.rejected {
  font-size: 15px;
        height: auto;
        width: 100%;
        top: 35px;
        left: 282px;
        margin-bottom: 10px;
        margin-left: 35px;
        padding: auto;
        text-align: left;
        font-weight: $font-weight-semibold;
        color: $primary-color;
}
.list {
  font-size: 15px;
        height: auto;
        width: 100%;
        top: 35px;
        left: 282px;
        margin-left: 35px;
        padding: auto;
        text-align: left;
        font-weight: $font-weight-semibold;
        color: $primary-color;
        
}
.btn-retry {
  background-color: $primary-color !important;
        color: $white;
        font-weight: $font-weight-medium;
        letter-spacing: 0;
        box-shadow: inset;
        padding: 15px;
        min-height: unset;
        height: 50px;
        border-radius: 10px;
        margin-bottom: 35px;
        margin-top: 253px;
}
</style>