<template>
  <div class="row m-5">
    <!-- Item -->
    <div class="col-8">
      <div class="background">
        <div class="px-5 pt-3 row">
          <div class="col-6"><p class="shp-txt">Klinik Hewan Lovely Vets</p></div>
          <div class="col-6"><p class="txt-tot">Total</p></div>
        </div>
        <div class="row">
          <div class="pl-8">
            <v-checkbox v-model="checkbox"></v-checkbox>
          </div>
          <div class="col-2">
            <div class="shop"><img src="@/assets/item.png" alt="" /></div>
          </div>
          <div class="col-4">
            <div class="end-shp d-flex align-center justify-end">RC - Second Age kitten</div>
          </div>
          <div class="col-2">
            <div class="end-shp d-flex align-center justify-end">2x</div>
          </div>
          <div class="col-3">
            <div class="end-shp d-flex align-center justify-end">Rp 99.000</div>
          </div>
        </div>
      </div>
    </div>
    <!-- Item -->
    <div class="col-3">
      <div class="background">
        <div class="p-4">
          <p>Ringkasan Pembayaran</p>
          <div class="row">
            <div class="col-6">Total Harga</div>
            <div class="col-6 end-txt">Rp 250.000</div>
          </div>
          <v-btn class="mt-8 btn-shp" elevation="2" block> Beli</v-btn>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.background {
  background-color: $white;
  border-radius: 7px;
}
.shp-txt {
  color: $primary-color;
  font-weight: $font-weight-medium;
  font-size: 16px;
}
.shop {
  width: 120%;
}
.btn-shp {
  background-color: $primary-color !important;
  color: $white !important;
  border-radius: 7px;
}
.txt-tot {
  text-align: end;
  font-size: 20px;
}
.end-shp {
  height: 100%;
}
</style>
