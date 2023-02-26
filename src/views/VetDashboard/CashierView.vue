<template>
  <v-container>
    <v-row class="pt-8">
      <div class="col-7">
        <v-text-field v-model="search" append-icon="mdi-magnify" label="Cari berdasarkan nama atau ID" solo hide-details></v-text-field>
        <!-- Per-Item -->
        <div class="backnota my-5">
          <div class="row m-auto">
            <div class="col-2">
              <v-img src="@/assets/item.png" max-width="45px" class=""></v-img>
            </div>
            <div class="col-3">
              <p class="txt-item">Whiskas 500gr</p>
            </div>
            <div class="col-3">
              <p class="txt-item">Rp 99.000</p>
            </div>
            <div class="col-4 row m-auto">
              <v-btn outlined fab small>
                <v-icon>mdi-minus</v-icon>
              </v-btn>
              <div class="txt-item mx-7">1</div>
              <v-btn outlined fab small>
                <v-icon>mdi-plus</v-icon>
              </v-btn>
            </div>
          </div>
        </div>
        <!-- Per-Item -->
        <div class="backnota my-5">
          <div class="row m-auto">
            <div class="col-2">
              <v-img src="@/assets/item.png" max-width="45px" class=""></v-img>
            </div>
            <div class="col-3">
              <p class="txt-item">Whiskas 500gr</p>
            </div>
            <div class="col-3">
              <p class="txt-item">Rp 99.000</p>
            </div>
            <div class="col-4 row m-auto">
              <v-btn outlined fab small>
                <v-icon>mdi-minus</v-icon>
              </v-btn>
              <div class="txt-item mx-7">1</div>
              <v-btn outlined fab small>
                <v-icon>mdi-plus</v-icon>
              </v-btn>
            </div>
          </div>
        </div>
      </div>
      <div class="col-5">
        <div class="backnota">
          <div class="title-nota">Nota</div>
          <div class="row px-10 tle-not">
            <!-- Barang -->
            <div class="col-5">
              <p>Whiskas 500gr Rp99.000</p>
            </div>
            <!-- Jumlah -->
            <div class="col-3">
              <p>2x</p>
            </div>
            <!-- Total -->
            <div class="col-4">
              <p>Rp 198.000</p>
            </div>
          </div>
        </div>
        <div class="backnota my-10">
          <div class="metode">metode Pembayaran</div>
          <div class="px-5">
            <select class="metodebayar" name="pembayaran" id="">
              <option value="1">QRIS</option>
              <option value="2">GOPAY</option>
              <option value="3">OVO</option>
              <option value="4">SHOPEEPAY</option>
              <option value="5">DANA</option>
            </select>
            <!-- select -->
            <div class="row py-5">
              <p class="col-5">Total</p>
              <p class="col-6 total">Rp 198.000</p>
            </div>
            <div class="an1"><v-btn class="btn-cetak">Print Nota</v-btn></div>
          </div>
        </div>
      </div>
    </v-row>
  </v-container>
</template>

<script>
export default {};
</script>

<style lang="scss">
.backnota {
  background-color: $white;
  border-radius: 7px;
  height: fit-content;
}
.title-nota {
  padding: 2rem;
  font-weight: $font-weight-medium;
  font-size: 25px;
}
.metodebayar {
  margin-top: 10px;
  background-color: $anti-flash;
  padding: 10px;
  width: 100%;
  text-align: start;
  padding-left: 10px;
  border-radius: 8px;
  font-size: medium;
  color: lightslategray;
}
.metode {
  font-size: medium;
  font-weight: 500;
  text-transform: capitalize;
  padding: 2rem;
}
.an1 {
  width: 100%;
  display: flex;
  justify-content: center;
  padding-bottom: 2rem;
}
.btn-cetak {
  color: $white !important;
  background-color: $primary-color !important;
  width: 100%;
}
.total {
  display: flex;
  justify-content: flex-end;
}
.txt-item {
  margin: 0.5rem;
}
.border-itm {
  border-style: solid;
}
</style>
