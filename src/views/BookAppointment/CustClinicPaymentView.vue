<template>
  <div class="background mx-8 my-5">
    <!-- Title -->
    <div class="p-4">
      <p class="txt-clinic">Detil Pembelian Langganan Layanan Manajemen</p>
    </div>
    <!-- Title -->
    <div class="px-6">
      <v-row class="py-2">
        <div class="col-7">
          <!-- Pilih -->
          <div class="txt-rincian">Pilih Langganan</div>
          <div class="py-3">
            <v-btn variant="outlined" v-for="n in 4" :key="n" class="ml-3"> 3 Bulan </v-btn>
          </div>
          <!-- Pilih -->
          <div class="txt-clinic py-5">Rincian Pembayaran</div>
          <div class="txt-rincian py-3">langganan biaya Layanan 3 Bulan</div>
        </div>
        <!-- Pembayaran -->
        <div class="col-5">
          <div class="txt-rincian">Metode Pembayaran</div>
          <div class="py-3">
            <v-select :items="pembayaran" solo background-color="#F1F1F1"></v-select>
          </div>
          <!-- Pembayaran -->
          <div>
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
      </v-row>
      <v-divider class="py-3"></v-divider>
      <div class="flex row py-4">
        <!-- Checlist -->
        <div class="col-9">
          <div>
            <form action="">
              <input type="checkbox" />
              <label> Saya setuju dengan syarat dan ketentuan PetAny</label><br />
            </form>
          </div>
        </div>
        <!-- Checlist -->
        <!-- Total -->
        <div class="col-3">
          <div class="total row py-3">
            <div>Total</div>
            <div class="mx-2 harga">Rp10.000</div>
          </div>
        </div>
        <!-- Total -->
      </div>
      <!-- Tombol -->
      <div class="pa-8">
        <v-btn block elevation="2" class="button-bayar"> Bayar </v-btn>
      </div>
      <!-- Tombol -->
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    pembayaran: ["Q-RIS", "GOPAY", "OVO", "SHOPEEPAY", "DANA"],
  }),
};
</script>
<style lang="scss">
.background {
  background-color: $white;
  border-radius: 7px;
}
.txt-clinic {
  font-size: 20px;
  color: $primary-color;
  font-weight: $font-weight-semibold;
}
.txt-rincian {
  text-transform: capitalize;
  font-weight: $font-weight-medium;
  color: $primary-color;
}
.txt-align {
  justify-content: space-between;
}
.txt-align-2 {
  justify-content: space-between;
  color: $steel-blue;
  font-weight: $font-weight-semibold;
}
.button-bayar {
  background-color: $primary-color !important;
  color: $white !important;
}
</style>
