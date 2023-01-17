<template>
  <v-app>
    <section class="notif-section">
      <v-container>
        <v-row>
          <h1 class="notif">Notifikasi</h1>
          <v-card class="container-card">
            <div>
              <h1 class="order-arrived">Pesanan sudah sampai</h1>
              <h1 class="checking">Cek kelengkapan barang anda</h1>
            </div>

            <div>
              <h1 class="date-clock">25 Nov 2022</h1>
              <h1 class="date-clock">12:31</h1>
            </div>
          </v-card>
          <v-card class="container-card">
            <div>
              <h1 class="order-arrived">Pesanan sudah sampai</h1>
              <h1 class="checking">Cek kelengkapan barang anda</h1>
            </div>

            <div>
              <h1 class="date-clock">25 Nov 2022</h1>
              <h1 class="date-clock">12:31</h1>
            </div>
          </v-card>
          <v-card class="container-card">
            <div>
              <h1 class="order-arrived">Pesanan sudah sampai</h1>
              <h1 class="checking">Cek kelengkapan barang anda</h1>
            </div>

            <div>
              <h1 class="date-clock">25 Nov 2022</h1>
              <h1 class="date-clock">12:31</h1>
            </div>
          </v-card>
          <v-card class="container-card">
            <div>
              <h1 class="order-arrived">Pesanan sudah sampai</h1>
              <h1 class="checking">Cek kelengkapan barang anda</h1>
            </div>

            <div>
              <h1 class="date-clock">25 Nov 2022</h1>
              <h1 class="date-clock">12:31</h1>
            </div>
          </v-card>
        </v-row>
      </v-container>
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
.notif {
  font-size: 30px;
  height: 45px;
  width: 100%;
  margin-bottom: 35px;
  padding: auto;
  text-align: left;
  color: $primary-color;

}
.container-card {
  display: flex; 
  justify-content: space-between;
  width: 100%;
  height: auto;
  padding: 2rem;
  border-radius: 20px;
  margin-bottom: 1rem;
}
.order-arrived {
  font-size: 22px;
  height: 33px;
  width: 100%;
  padding: auto;
  text-align: left;
  color: $primary-color;
}
.checking {
  font-size: 16px;
  height: 24px;
  width: 100%;
  color: $granite-gray;
}
.date-clock {
  font-size: 16px;
  height: auto;
  width: 100%;
  margin-right: 35px;
  text-align: right;
  color: $granite-gray;
}

.notif-section {
  padding-top: 2rem;
  padding-bottom: 5rem;
}
</style>
