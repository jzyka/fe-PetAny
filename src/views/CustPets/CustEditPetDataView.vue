<template>
  <div class="background mx-8 my-5" style="">
    <div class="p-5">
      <p class="tx-add">Tambah data kesehatan Pablo</p>
      <div class="row">
        <div class="col-6">
          <p class="tx">Judul</p>
          <div class="">
            <v-text-field class="input-contain" solo background-color="#F1F1F1"></v-text-field>
          </div>
          <p class="tx">Deskripsi</p>
          <div>
            <v-textarea class="input-contain" solo background-color="#F1F1F1"></v-textarea>
          </div>
          <p class="tx">Pengobatan</p>
          <div class="">
            <v-text-field class="input-contain" solo background-color="#F1F1F1"></v-text-field>
          </div>
        </div>
        <div class="col-6">
          <p class="tx">Tanggal</p>
          <div class="">
            <v-menu v-model="menu2" :close-on-content-click="false" :nudge-right="40" transition="scale-transition" offset-y min-width="auto">
              <template v-slot:activator="{ on, attrs }">
                <v-text-field class="input-contain" solo v-model="date" readonly background-color="#F1F1F1" v-bind="attrs" v-on="on"></v-text-field>
              </template>
              <v-date-picker v-model="date" @input="menu2 = false"></v-date-picker>
            </v-menu>
          </div>
          <p class="tx">Lampiran</p>
          <div class="">
            <v-file-input accept="file/*" solo background-color="#F1F1F1" multiple> </v-file-input>
          </div>
          <div class="btns">
            <v-btn class="sty mr-5" elevation="2">Edit Data</v-btn>
            <v-btn class="sty" elevation="2">Kembali</v-btn>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000).toISOString().substr(0, 10),
    menu: false,
    modal: false,
    menu2: false,
  }),
};
</script>

<style lang="scss">
.background {
  background-color: $white;
  border-radius: 7px;
}
.btns {
  display: flex;
  justify-content: flex-end;
}
.sty {
  background-color: $primary-color !important;
  color: $white !important;
  text-transform: capitalize;
  border-radius: 7px;
  position: relative;
  margin-top: 30%;
}
</style>
