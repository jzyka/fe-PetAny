<template>
  <div class="background-1 mx-8 my-5">
    <div class="p-4">
      <p class="txt-clinic">Rincian Pembayaran</p>
    </div>
    <div class="row p-3">
      <div class="col-9">
        <div class="txt-rincian px-3">langganan biaya Layanan 3 Bulan</div>
      </div>
      <div class="col-3">
        <div class="row px-5 txt-align">
          <div>Harga Satuan</div>
          <div>Jumlah</div>
          <div>Subtotal</div>
        </div>
        <div class="row px-5 py-3 txt-align-2">
          <div>Rp. 99.000</div>
          <div>1</div>
          <div>Rp. 99.000</div>
        </div>
      </div>
    </div>
    <div class="px-6">
      <v-divider class="py-3"></v-divider>
      <!-- Total -->
      <div class="total row p-3">
        <div>Total</div>
        <div class="mx-2 harga">Rp10.000</div>
      </div>
      <!-- Total -->
      <div class="flex row my-5">
        <div class="col-9">
          <div class="txt-id">ID Pesanan</div>
          <div class="txt-id-angka">BKG07324942</div>
        </div>
        <div class="col-3">
          <div class="m-3 center">QRIS</div>
          <v-img src="@/assets/barcode-1.png" class="barcode"></v-img>
        </div>
      </div>
      <!-- Tombol -->
      <div class="pa-8">
        <v-btn block elevation="2" class="button-bayar"> Cek Pesanan </v-btn>
      </div>
      <!-- Tombol -->
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss">
.background-1 {
  background-color: $white;
  border-radius: 7px;
  min-height: 70vh;
}
.harga {
  color: $steel-blue;
  font-weight: $font-weight-semibold;
}
.txt-id {
  font-size: 16px;
  font-weight: $font-weight-medium;
}
.txt-id-angka {
  font-size: 18px;
  font-weight: $font-weight-medium;
  color: $steel-blue;
}
.barcode {
  width: 60%;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
.center {
  text-align: center;
}
</style>
