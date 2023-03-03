<template>
  <v-app>
    <v-container class="my-5">
      <v-row>
        <v-col cols="12" md="6" class="d-flex justify-center">
          <v-img src="@/assets/item.png" max-width="65%" contain></v-img>
        </v-col>
        <v-col cols="12" md="6">
          <!-- Nama Produk -->
          <div>
            <div class="merk">Royal Canin</div>
            <div class="product-txt">RC - Second Age Kitten</div>
          </div>
          <div class="my-3"><v-divider></v-divider></div>
          <!-- Harga -->
          <div class="my-4">
            <v-row>
              <v-col>
                <div class="price-txt">Rp50.000</div>
              </v-col>
              <v-col cols="3 d-flex justify-end align-end">
                <div class="stock">Tersedia</div>
              </v-col>
            </v-row>
          </div>
          <!-- Berat -->
          <div>Berat</div>
          <v-item-group class="my-2">
            <v-row>
              <v-col v-for="n in 3" :key="n" cols="3" md="3">
                <v-item v-slot="{ isSelected, selectedClass, toggle }">
                  <v-card :color="isSelected ? '537FE7' : ''" :class="['d-flex align-center', selectedClass]" height="40" @click="toggle">
                    <div class="flex-grow-1 text-center">
                      {{ isSelected ? "Selected" : "2kg" }}
                    </div>
                  </v-card>
                </v-item>
              </v-col>
            </v-row>
          </v-item-group>
          <!-- Button -->
          <div class="my-4">
            <v-btn class="btn-shp" block elevation="2">Pesan Sekarang</v-btn>
          </div>
          <div class="my-4">
            <v-btn class="btn-outline" block outlined elevation="1">Masukan Keranjang</v-btn>
          </div>
          <v-btn fab small>
            <v-icon> mdi-heart </v-icon>
          </v-btn>
        </v-col>
      </v-row>
      <v-container class="my-10 d-flex justify-center">
        <div>
          <v-row>
            <v-avatar>
              <img src="@/assets/pabs.png" />
            </v-avatar>
            <v-col>
              <div class="petshop-name">Sipp Petshop</div>
              <div class="addres">Jalan Sukun Raya No.09, Besito Kulon, Besito, Kec. Gebog, Kabupaten Kudus, Jawa Tengah 59333</div>
            </v-col>
          </v-row>
        </div>
      </v-container>
      <div class="my-5">
        <v-row>
          <v-col cols="12" md="4" class="d-flex tebal"> Deskripsi </v-col>
          <v-col cols="12" md="8" class="addres d-flex justify-md-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad earum minima blanditiis culpa! Accusamus, sit rerum error quaerat ab nostrum obcaecati maxime, ipsa recusandae eius, voluptatum delectus nulla dignissimos sed.
          </v-col>
        </v-row>
      </div>
      <div class="my-5">
        <v-row>
          <v-col cols="12" md="4" class="d-flex tebal">Lainnya di toko ini</v-col>
          <v-col cols="12" md="8">
            <v-container class="d-sm-flex">
              <v-row class="justify-sm-center">
                <v-slide-item v-for="n in 6" :key="n">
                  <router-link tag="a" to="/" class="card--vetproduct ma-2">
                    <div class="card--vetproduct__image">
                      <v-img src="@/assets/item.png" contain class="rounded-lg"></v-img>
                    </div>
                    <div class="card--vetproduct__detail">
                      <p class="name">Royal Canin Protein Exigent 1.2Kg</p>
                      <p class="hours-price">Rp999.999</p>
                      <p class="location">Kota Surabaya</p>
                    </div>
                  </router-link>
                </v-slide-item>
              </v-row>
            </v-container>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </v-app>
</template>

<script>
export default {};
</script>

<style lang="scss">
.tebal {
  font-weight: $font-weight-bold;
  font-size: 26px;
  color: $primary-color;
}
.petshop-name {
  font-weight: $font-weight-semibold;
  font-size: 20px;
}
.addres {
  font-size: 15px;
  font-weight: $font-weight-reg;
}
.btn-outline {
  color: $primary-color !important;
}
.merk {
  font-weight: $font-weight-semibold;
  color: 656565;
  font-size: 15px;
}
.product-txt {
  font-weight: $font-weight-bold;
  font-size: 30px;
}
.price-txt {
  font-weight: $font-weight-bold;
  font-size: 25px;
}
.stock {
  color: $steel-blue;
  font-size: 12px;
}
</style>
