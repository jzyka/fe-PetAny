<template>
  <v-container class="jk">
    <!-- Item -->
    <v-row>
      <v-col cols="12" md="8">
        <div class="background container">
          <v-row>
            <div class="pa-5 row">
              <div class="col-12"><p class="shp-txt">Klinik Hewan Lovely Vets</p></div>
            </div>
          </v-row>

          <div class="container">
            <v-row>
              <v-col cols="1" class="d-flex align-center justify-center">
                <v-checkbox v-model="checkbox"></v-checkbox>
              </v-col>
              <v-col cols="2" class="center align-center center">
                <img src="@/assets/item-2.webp" class="shop" />
              </v-col>
              <v-col cols="4" sm="3">
                <div class="end-shp d-flex align-center">RC-Second Age kitten</div>
              </v-col>
              <v-col cols="1">
                <div class="end-shp d-flex align-center justify-end">2x</div>
              </v-col>
              <v-col cols="4">
                <div class="end-shp d-flex align-center justify-end">Rp 99.000</div>
              </v-col>
            </v-row>
          </div>
        </div>
      </v-col>

      <!-- Pembayaran -->
      <v-col cols="12" md="4">
        <div class="background container">
          <div class="p-4">
            <div class="pb-5">Ringkasan Pembayaran</div>
            <div class="row">
              <v-col cols="6">Total Harga</v-col>
              <v-col cols="6" class="d-flex justify-end">Rp 250.000</v-col>
            </div>
            <v-btn class="mt-8 btn-shp" elevation="2"> Beli</v-btn>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {};
</script>

<style lang="scss">
.background {
  background-color: $white;
  border-radius: 10px;
}
.shp-txt {
  color: $primary-color;
  font-weight: $font-weight-medium;
  font-size: 16px;
}
.shop {
  width: 60px;
  object-fit: fill;

  @include lg-min {
    width: 55%;
  }
}
.btn-shp {
  background-color: $primary-color !important;
  color: $white !important;
  border-radius: 7px;
  width: 100%;
}
.txt-tot {
  text-align: end;
  font-size: 20px;
}
.end-shp {
  height: 100%;
}
.jk {
  @include md-max {
    padding: 40px 20px;
  }
}
</style>
