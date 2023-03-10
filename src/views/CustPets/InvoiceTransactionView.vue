<template>
  <v-app>
    <v-container>
      <div class="background my-5">
        <div class="pa-5">
          <div class="invoice-txt">Invoice - INV097362467325</div>
          <div class="row py-3">
            <v-col cols="6" class="txt-capital shp-txt">
              <div>diterbitkan atas nama :</div>
              <div class="pt-2">Mitra</div>
              <div class="pt-2">lovelt pets</div>
            </v-col>
            <v-col cols="4" class="txt-capital">
              <div class="shp-txt">untuk</div>
              <!-- ID -->
              <div class="pt-2">
                <div class="txt-id">ID pesanan</div>
                <div class="txt-id-angka">BKG07324942</div>
              </div>
              <!-- Pembayaran -->
              <div class="pt-2">
                <div class="txt-id">Metode Pembayaran</div>
                <div class="txt-id-angka">QRIS</div>
              </div>
              <!-- Waktu Bayar -->
              <div class="pt-2">
                <div class="txt-id">dibayar pada</div>
                <div class="txt-id-angka">Minggu, 27 Desember | 19.00</div>
              </div>
            </v-col>
          </div>
          <!-- Keterangan -->
          <div class="row">
            <v-col cols="6">
              <div>Nama</div>
              <div class="shp-txt">Biaya Konsultasi</div>
            </v-col>
            <v-col cols="2 align center">
              <div>Harga Satuan</div>
              <div>Rp50.000</div>
            </v-col>
            <v-col cols="2 align center">
              <div>Jumlah</div>
              <div>1</div>
            </v-col>
            <v-col cols="2 align center">
              <div>Subtotal</div>
              <div>Rp50.000</div>
            </v-col>
          </div>
          <div class="my-3"><v-divider></v-divider></div>
          <!-- Total -->
          <div class="d-flex">
            <v-col cols="12">
              <div class="row justify-end pa-2">
                <div>Total:</div>
                <div>Rp50.000</div>
              </div>
              <div class="text-right pa-2 shp-txt">
                <div>Lunas</div>
              </div>
            </v-col>
          </div>
        </div>
      </div>
    </v-container>
  </v-app>
</template>

<script>
export default {};
</script>

<style lang="scss">
.invoice-txt {
  font-size: 20px;
  font-weight: $font-weight-semibold;
  color: $primary-color;
}
.txt-capital {
  text-transform: capitalize;
}
</style>
