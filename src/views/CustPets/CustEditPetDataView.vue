<template>
  <v-app>
    <v-container class="pt-10">
      <div class="background pa-5">
        <v-container>
          <p class="tx-add">Tambah data kesehatan Pablo</p>
          <div class="row">
            <v-col cols="12" md="6">
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
            </v-col>
            <v-col cols="12" md="6">
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
              <div class="btns mt-lg-15">
                <v-col class="d-flex justify-end">
                  <v-btn class="sty" elevation="2">Simpan</v-btn>
                </v-col>
                <v-col class="d-flex justify-end">
                  <v-btn class="sty" elevation="2">Kembali</v-btn>
                </v-col>
              </div>
            </v-col>
          </div>
        </v-container>
      </div>
    </v-container>
  </v-app>
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
  //position: relative;
  //margin-top: 30%;
}
</style>
