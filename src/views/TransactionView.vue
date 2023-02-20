<template>
  <v-app>
    <v-card class="content" flat>
      <v-tabs class="tabs-header" background-color="transparent" v-model="tab">
        <v-tab flat solo class="tab-item" v-for="item in items" :key="item.tab">{{ item.tab }}</v-tab>
      </v-tabs>
      <div class="divisor"></div>
      <v-tabs-items v-model="tab">
        <v-tab-item v-for="item in items" :key="item.tab">
          <v-card v-for="it in item.items" :key="it" class="d-flex flex-row justify-space-between p-4">
            <div class="d-flex flex-column">
              <div class="d-flex flex-row">
                <v-card-text class="shop-title">{{ it.toko.nama }}</v-card-text>
                <v-divider vertical class="shop-divider"></v-divider>
                <v-card-text class="shop-id">{{it.toko.id}}</v-card-text>
                <v-card-text class="shop-status">{{it.toko.status}}</v-card-text>
              </div>
              <div class="d-flex flex-grow-1">
                <img class="product-img" :draggable="false" src="@/assets/item.png" alt="gambar"
                  v-if="item.tab == items[1].tab">
                <div v-if="item.tab == items[1].tab" class="flex-grow-1">
                  <v-card-text class="product-detail-title">{{it.name}}</v-card-text>
                  <v-card-text class="product-detail-amount">{{`Total ${it.jumlah} Produk`}}</v-card-text>
                </div>
                <div v-else class="flex-grow-1">
                  <v-card-text class="clinic-detail-type">{{it.type}}</v-card-text>
                  <v-card-text class="clinic-detail-price">{{intl.format(it.harga)}}</v-card-text>
                </div>
              </div>
            </div>
            <div class="d-flex flex-column align-end" v-if="item.tab == items[1].tab">
              <v-card-text class="text-end total">Total</v-card-text>
              <v-card-text class="text-end price">{{intl.format(it.harga)}}</v-card-text>
              <div class="d-flex utility-buttons">
                <v-btn class="track-button p-4" plain>Lacak Pesanan</v-btn>
                <v-btn class="detail-button p-4" plain>Detil Pesanan</v-btn>
              </div>
            </div>
            <div v-else class="d-flex align-end justify-end">
              <v-btn plain class="p-4 button-detail">
                Detil Pesanan
              </v-btn>
            </div>
          </v-card>
        </v-tab-item>
      </v-tabs-items>
    </v-card>
  </v-app>
</template>
  
<script>


export default {
  methods: {
    onclick(e) {
      console.log(e);

    }
  },
  data() {
    return {
      intl: new Intl.NumberFormat('id-ID',{style:'currency',currency:'IDR'}),
      items: [
        {
          tab: "Transaksi Klinik", items: [
            {
              toko: {
                nama: "Klinik Hewan Lovely Vets",
                id: "BKG07324942",
                status: "Menunggu Konfirmasi"
              },
              type: "Variable",
              harga: 50000
            }
          ]
        },
        {
          tab: "Transaksi Produk", items: [
            {
              toko: {
                nama: "Klinik Hewan Lovely Vets",
                id: "BKG07324942",
                status: "Menunggu Konfirmasi"
              },
              src: ",",
              name: "RC - Second Age Kitten",
              harga: 50000,
              jumlah : 1
            }
          ]
        }
      ],
      tab: null
    }
  }
};
</script>
  
<style scoped lang="scss">
.divisor {
  height: 12px;
  background-color: transparent;
  opacity: 0;
}

.content {
  background-color: transparent !important;
  ;
}

.shop-title {
  font-size: 16px;
  white-space: nowrap;
  padding: 0;
  color: $primary-color;
  font-weight: $font-weight-medium;
}

.shop-id {
  font-size: 18px;
  white-space: nowrap;
  padding: 0;
  color: $steel-blue;
  font-weight: $font-weight-medium;
}

.shop-status {
  font-size: 14px;
  background-color: #FFF59A;
  text-align: center;
  white-space: nowrap;
  border-radius: 5px;
  padding: 0 15px;
  margin: 0 8px;
}

.button-detail {
  background-color: $primary-color;
  color: white;
  border-radius: 10px;
}

.shop-divider {
  border-color: $primary-color;
  margin: 0 8px;
}

.clinic-detail-type {
  font-size: 18px;
  font-weight: $font-weight-medium;
  color: $primary-color;
  padding: 8px 0;
}

.clinic-detail-price {
  font-size: 20px;
  font-weight: $font-weight-semibold;
  color: $primary-color;
  padding: 8px 0;
}

.utility-buttons {
  gap: 8px;

  .track-button {
    border: 3px solid $primary-color;
    border-radius: 10px;
    color: $primary-color;
    font-size: 16px;
  }

  .detail-button {
    border: 3px solid $primary-color;
    border-radius: 10px;
    background-color: $primary-color;
    color: white;
    font-size: 16px;
  }
}

.total {
  font-size: 20px;
  color: black;
}

.price {
  font-size: 20px;
  color: $primary-color;
  font-weight: $font-weight-semibold;
}

.product-img {
  aspect-ratio: 1/1;
  object-fit: fill;
}

.product-detail-title {
  font-size: 20px;
  font-weight: $font-weight-medium;
  color: $primary-color;
  padding: 8px 0;
}

.product-detail-amount {
  font-size: 14px;
  color: $granite-gray;
  padding: 8px 0;
}

.tabs-header {
  border-bottom: 3px solid $primary-color;

  .tab-item * {
    outline-style: none !important;
    border-style: none !important;
  }

  .tab-item[aria-selected=true] {
    background-color: $primary-color;
    color: white;
    border-radius: 5px;
  }
}

.tab-item[aria-selected=false] {
  color: $primary-color !important;
  border-radius: 5px;
}

.v-tabs-slider-wrapper {
  height: 0 !important;
}</style>
  