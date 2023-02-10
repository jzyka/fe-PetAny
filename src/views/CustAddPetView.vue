<template>
  <div class="background mx-8 my-5" style="">
    <div class="p-5">
      <p class="tx-add">Isi data untuk menambahkan data peliharaan</p>
    </div>
    <div class="row">
      <div class="col-3 p-5">
        <img class="pets" src="@/assets/user-img.png" alt="" />
        <input type="file" ref="file" style="display: none" />
        <button @click="$refs.file.click()" class="btnfoto m-5">Ubah Foto</button>
      </div>
      <div class="col-4">
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
    <div class="btns p-5">
      <v-btn class="crs" block elevation="2" large mdi-plus tile>Simpan Profil Perubahan</v-btn>
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
  background-color: $primary-color;
  color: $white;
  width: 95%;
  text-transform: capitalize;
  border-radius: 7px;
}
.btns {
  display: flex;
  justify-content: center;
}
.btnfoto {
  text-transform: capitalize;
  color: $steel-blue;
  font-size: large;
}
</style>
