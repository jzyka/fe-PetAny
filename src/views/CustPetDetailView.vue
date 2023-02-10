<template>
  <div class="background mx-8 my-5" style="">
    <div class="p-5">
      <p class="tx-add">Isi data untuk menambahkan data peliharaan</p>
    </div>
    <div class="row">
      <div class="col-3 p-5">
        <img class="pets" src="@/assets/user-img.png" alt="" />
        <input type="file" ref="file" style="display: none" />
        <button @click="$refs.file.click()" class="btnfoto m-5">ubah foto</button>
      </div>
      <div class="col-4 mb-5">
        <p class="tx">Nama Produk</p>
        <div class="">
          <v-text-field class="input-contain" solo background-color="#F1F1F1"></v-text-field>
        </div>
        <p class="tx">Usia</p>
        <div class="">
          <v-text-field class="input-contain" solo background-color="#F1F1F1"></v-text-field>
        </div>
        <p class="tx">Alergi</p>
        <div class="">
          <v-text-field class="input-contain" solo background-color="#F1F1F1"></v-text-field>
        </div>
      </div>
      <div class="col-4">
        <p class="tx">Jenis Hewan</p>
        <div class="">
          <v-text-field class="input-contain" solo background-color="#F1F1F1"></v-text-field>
        </div>
        <p class="tx">Ras</p>
        <div class="">
          <v-text-field class="input-contain" solo background-color="#F1F1F1"></v-text-field>
        </div>
        <p class="tx">Berat Badan</p>
        <div class="">
          <v-text-field class="input-contain" solo background-color="#F1F1F1"></v-text-field>
        </div>
      </div>
    </div>
    <div class="px-8">
      <p class="tx">Data Kesehatan</p>
    </div>
    <div class="mx-8">
      <hr />
      <div class="btns p-3">
        <v-btn class="crs" block elevation="2" large mdi-plus tile>Simpan Profil Perubahan</v-btn>
      </div>
      <v-col cols="12">
        <div class="m-2 rounded-3 data-pet row">
          <div class="col-6">
            <p>Pablo Demam</p>
          </div>
          <div class="col-6">
            <p class="end-txt">Senin, 21 November 2021</p>
          </div>
        </div>
      </v-col>
      <div class="btns p-4">
        <v-btn class="crs" block elevation="2" fab mdi-plus tile>
          <v-icon>mdi-plus</v-icon>
        </v-btn>
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
.tx-add {
  font-size: 20px;
  color: $primary-color;
  font-weight: $font-weight-semibold;
}
.tx {
  font-size: 16px;
  color: $primary-color;
  font-weight: $font-weight-medium;
}
.pets {
  width: 70%;
}
.crs {
  background-color: $primary-color !important;
  color: $white !important;
  text-transform: capitalize;
  border-radius: 7px;
}
.data-pet {
  border-style: groove;
  border-radius: 7px;
}
.end-txt {
  text-align: end;
}
</style>
