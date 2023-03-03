<template>
  <v-app>
    <v-container class="">
      <div class="row">
        <v-col cols="2">
          <Sidebar />
        </v-col>
        <v-col cols="10">
          <v-card>
            <v-tabs color="#112D4E" slider-color="#112D4E">
              <v-tab>Transaksi Klinik</v-tab>
              <v-tab>Transaksi Produk</v-tab>
            </v-tabs>
          </v-card>
          <div class="background my-5">
            <v-row class="pa-5 d-flex">
              <div class="shp-txt">Klinik Hewan Lovely Vets</div>
              <div class="ml-5 txt-bold">BKG07324942</div>
              <div class="status-transaksi ml-5">Menunggu Konfirmasi</div>
            </v-row>
            <div>
              <v-row class="pa-2">
                <!-- Rincian -->
                <v-col cols="6 shp-txt">
                  <div class="rincian">Konsultasi</div>
                  <div class="">Rp 50.000</div>
                </v-col>
                <v-col cols="6">
                  <div class="btns"><v-btn elevation="2" class="button-detail">Detail Pesanan</v-btn></div>
                </v-col>
              </v-row>
            </div>
          </div>
        </v-col>
      </div>
    </v-container>
  </v-app>
</template>

<script>
import Sidebar from "@/components/cust-profile-sidebar.vue";

export default {
  components: {
    Sidebar,
  },
};
</script>

<style lang="scss">
.status-transaksi {
  background-color: #fff59a;
}
.txt-bold {
  font-weight: $font-weight-medium;
  color: $steel-blue;
}
.button-detail {
  background-color: $primary-color !important;
  color: $white !important;
}
</style>
