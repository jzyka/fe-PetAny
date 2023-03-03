<template>
  <v-app>
    <v-container class="my-5">
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
            <v-container>
              <v-row class="pa-5 d-flex">
                <div class="shp-txt">Klinik Hewan Lovely Vets</div>
                <div class="ml-5 txt-bold">BRG07324942</div>
                <div class="status-transaksi ml-5">Dikirim</div>
              </v-row>
              <div>
                <v-row class="pa-2">
                  <img src="@/assets/item.png" />
                  <v-col cols="6">
                    <div class="shp-txt">RC-Second Age Kitten</div>
                    <div class="txt-small">Total 1 Produk</div>
                  </v-col>
                  <v-col class="btns"> Rp. 50.000 </v-col>
                </v-row>
                <v-row class="justify-end">
                  <v-btn class="ma-2" outlined> Lacak Pesanan </v-btn>
                  <v-btn class="ma-2 button-detail">Detail Pesanan </v-btn>
                </v-row>
              </div>
            </v-container>
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
.txt-small {
  font-size: 12px;
}
</style>
