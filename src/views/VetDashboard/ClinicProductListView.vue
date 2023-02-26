<template>
  <v-app>
    <v-container>
      <p class="textt">Daftar Produk</p>

      <div class="container white rounded-lg p-2">
        <div class="row sose">
          <div class="col-3">
            <v-tabs fixed-tabs flat v-model="tab" background-color="transparent" color="black" indicator-color="red">
              <v-tab class="text-caption text-capitalize"> Semua Produk </v-tab>
              <v-tab class="text-caption text-capitalize"> Nonaktif </v-tab>
            </v-tabs>
          </div>
          <div class="col-6"></div>
          <div class="col-3 anu1">
            <div class="ros">
              <v-text-field class="tfield" label="Cari produk" solo dense>
                <v-icon slot="append"> mdi-magnify </v-icon>
              </v-text-field>
            </div>
          </div>
        </div>
      </div>
      <!-- <v-divider inset></v-divider> -->
      <!-- isi ============================================================== -->

      <v-tabs-items v-model="tab">
        <v-tab-item>
          <v-card flat>
            <div>
              <v-data-table :headers="headers" :items="content" hide-default-footer class="elevation-1">
                <template #[`item.image`]="{ item }">
                  <div class="p-2">
                    <v-img :src="item.image" :alt="item.name" height="100px"></v-img>
                  </div>
                </template>
                <template #[`item.aktif`]="{ item }">
                  <v-switch v-model="item.aktif"></v-switch>
                </template>
              </v-data-table>
            </div>
          </v-card>
        </v-tab-item>
        <v-tab-item>
          <v-card flat>
            <div>tes</div>
          </v-card>
        </v-tab-item>
      </v-tabs-items>
    </v-container>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      tab: null,
      switch1: null,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      headers: [
        { text: "", value: "  ", sortable: false },
        {
          text: "NAMA",
          value: "name",
          width: "70%",
        },
        { text: "HARGA", value: "harga" },
        { text: "STOK", value: "stok" },
        { text: "AKTIF", value: "aktif" },
      ],
      content: [
        {
          image: "facebook.png",
          name: "Pakan",
          anu: "222",
          harga: "Rp.99.000",
          stok: "99",
          aktif: null,
        },
        {
          name: "Pelet",
          anu: "111",
          harga: "Rp.199.000",
          stok: "99",
          aktif: null,
        },
        {
          name: "biji",
          anu: "212",
          harga: "Rp.939.000",
          stok: "99",
          aktif: null,
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.textt {
  color: $black;
  font-weight: $font-weight-medium;
  font-size: 30px;
}
.ros {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-top: 8px;
}
.tfield {
  width: 30%;
}
.tbt {
  width: 70%;
}
.tb1 {
  width: 10%;
}
.tb2 {
  width: 10%;
}
.tb3 {
  width: 10%;
}
</style>
