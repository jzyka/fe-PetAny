<template>
  <v-app>
    <section class="background">
      <v-container>
        <v-row>
          <div class="kotak">
            <div class="row pb-5">
              <router-link to="" class="back">
                <v-img src="@/assets/left-arrow.png" max-width="25px"></v-img>
              </router-link>
              <p class="text-add">Jual Produk Baru</p>
            </div>
            <div class="row form-items">
              <div class="col-6">
                <p>Nama Produk</p>
                <div class="">
                  <v-text-field class="input-contain" solo background-color="#F1F1F1"></v-text-field>
                </div>
                <p>Kategori Produk</p>
                <div class="">
                  <v-select class="input-contain" append-icon="mdi-chevron-down" solo background-color="#F1F1F1"></v-select>
                </div>
                <p>Deskripsi Produk</p>
                <div>
                  <v-textarea class="input-contain" solo background-color="#F1F1F1"></v-textarea>
                </div>
              </div>
              <div class="col-6">
                <p>Harga</p>
                <div class="">
                  <v-text-field class="input-contain" solo background-color="#F1F1F1"></v-text-field>
                </div>
                <p>Stok</p>
                <div class="">
                  <v-text-field class="input-contain" solo background-color="#F1F1F1"></v-text-field>
                </div>
                <p>Foto Produk</p>
                <div>
                  <v-file-input class="input-contain" accept="image/*" solo background-color="#F1F1F1"></v-file-input>
                </div>
              </div>
              <div class="an1"><v-btn class="button">Simpan</v-btn></div>
            </div>
          </div>
        </v-row>
      </v-container>
    </section>
  </v-app>
</template>

<script>
export default {};
</script>

<style lang="scss">

.form-items {

  @media (max-width: $bp-md) {
    flex-direction: column;

    .col-6 {
      flex: 0 0 100%;
      max-width: 100%;
    }

    .button {
      min-width: 100px!important;
    }
  }
}

section {
  &.background {
    background-color: $cultured;
    min-height: 100vh;
    display: flex;
    align-items: center;

    .kotak {
      margin: auto;
      padding: 4rem;
      border-radius: 20px;
      background-color: $white;
      align-items: center;
      width: 100%;
    }
    .back {
      padding-right: 1.5rem;
    }
    .input-contain {
      border-radius: 10px;
    }
    .text-add {
      color: $primary-color;
      font-weight: $font-weight-semibold;
      font-size: 20px;
    }
    .button {
      background-color: $primary-color !important;
      color: $white;
      margin-top: 8rem;
      width: 10%;
    }
    .an1 {
      width: 100%;
      display: flex;
      justify-content: flex-end;
    }
  }
}
</style>
