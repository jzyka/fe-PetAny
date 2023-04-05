<template>
  <v-app>
    <v-card class="content" flat>
      <v-tabs
        v-model="tabs"
        class="tabs-header mb-4"
        background-color="transparent"
      >
        <v-tab v-for="item in items" :key="item"> {{ item }} </v-tab>
      </v-tabs>

      <v-tabs-items v-model="tabs" class="tabs-all">
        <v-tab-item class="appointment-request">
          <v-card
            v-for="(appointment, i) in appointments"
            :key="i"
            class="d-flex flex-row justify-space-between p-4 mb-3"
          >
            <div class="d-flex flex-column">
              <div class="d-flex align-center flex-row">
                <v-card-text
                  class="shop-title"
                  v-for="(petshopName, j) in appointment.petshop"
                  :key="j"
                  >{{ petshopName.petshop_name }}</v-card-text
                >
                <v-divider vertical class="shop-divider"></v-divider>
                <div
                  class="d-flex"
                  v-for="(order, k) in appointment.orders"
                  :key="k"
                >
                  <v-card-text class="shop-id">{{
                    order.order_id
                  }}</v-card-text>
                </div>
                <v-card-text class="shop-status">{{
                  appointment.status
                }}</v-card-text>
              </div>
              <div class="d-flex flex-grow-1">
                <div class="flex-grow-1">
                  <v-card-text class="product-detail-title"
                    >{{ appointment.doctor }} | {{ appointment.date }}
                    {{ appointment.shift }}</v-card-text
                  >
                  <div
                    class="ammount"
                    v-for="(price, i) in appointment.orders"
                    :key="i"
                  >
                    <v-card-text class="product-detail-amount">
                      {{ price.amount }}
                    </v-card-text>
                  </div>
                </div>
                <div class="flex-grow-1">
                  <v-card-text class="clinic-detail-type"></v-card-text>
                  <v-card-text class="clinic-detail-price"></v-card-text>
                </div>
              </div>
            </div>
          </v-card>
        </v-tab-item>
        <v-card
          v-for="(product, i) in products"
          :key="i"
          class="d-flex flex-row justify-space-between p-4 mb-3"
        >
          <div class="d-flex flex-column">
            <div class="d-flex align-center flex-row">
              <v-card-text
                class="shop-title"
                v-for="(petshopName, j) in product.petshop"
                :key="j"
                >{{ petshopName.petshop_name }}</v-card-text
              >
              <v-divider vertical class="shop-divider"></v-divider>
              <div class="d-flex" v-for="(order, k) in product.orders" :key="k">
                <v-card-text class="shop-id">{{ order.order_id }}</v-card-text>
                <v-card-text class="shop-status">{{
                  order.status
                }}</v-card-text>
              </div>
            </div>
            <div class="d-flex flex-grow-1">
              <v-img
                class="product-img rounded-lg mr-4"
                :draggable="false"
                :src="product.image"
                alt="gambar"
                max-width="100px"
                aspect-ratio="1"
                contain
              />
              <div class="flex-grow-1">
                <v-card-text class="product-detail-title">{{
                  product.name
                }}</v-card-text>
                <div class="ammount">
                  <v-card-text class="product-detail-amount">
                    Qty: {{ product.quantity }}
                  </v-card-text>
                </div>
              </div>
            </div>
          </div>
          <div class="d-flex flex-column align-end">
            <v-card-text class="text-end total">Total</v-card-text>
            <v-card-text class="text-end price">{{
              product.amount
            }}</v-card-text>
            <div class="d-flex utility-buttons">
              <v-btn class="track-button" plain>Lacak Pesanan</v-btn>
              <v-btn class="detail-button" plain>Detil Pesanan</v-btn>
            </div>
          </div>
          <div class="d-flex align-end justify-end">
            <!-- <v-btn plain class="p-4 button-detail"> Detil Pesanan </v-btn> -->
          </div>
        </v-card>
      </v-tabs-items>
    </v-card>
  </v-app>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      // intl: new Intl.NumberFormat("id-ID", {
      //   style: "currency",
      //   currency: "IDR",
      // }),
      items: ["Transaksi Klinik", "Transaksi Produk"],
      tabs: null,

      appointments: [],
      products: [],
    };
  },

  async created() {
    await this.getBookedAppt();
    await this.getProductTrs();
  },

  methods: {
    async getBookedAppt() {
      try {
        const appointmentAll = await axios.get(
          `${this.$api}/get-user-bookappoinment`
        );
        const appointments = appointmentAll.data;
        this.appointments = appointments;
        console.log(this.appointments);
      } catch (error) {
        console.log(error);
      }
    },

    async getProductTrs() {
      try {
        const productAll = await axios.get(
          `${this.$api}/get-user-product-transaction`
        );
        const products = productAll.data;
        this.products = products;
        console.log(this.products);
      } catch (error) {
        console.log(error);
      }
    },
  },
  computed: {
    bookedAppt() {
      return this.appointments;
    },
  },
};
</script>

<style scoped lang="scss">
.divisor {
  height: 12px;
  background-color: transparent;
  opacity: 0;
}

.tabs-all {
  background-color: transparent;
}

.content {
  background-color: transparent !important;
}

.shop-title {
  font-size: 16px;
  white-space: nowrap;
  padding: 0;
  color: $primary-color;
  font-weight: $font-weight-medium;
}

.shop-id {
  white-space: nowrap;
  padding: 0;
  color: $steel-blue;
  font-weight: $font-weight-medium;
}

.shop-status {
  font-size: 14px;
  background-color: #fff59a;
  text-align: center;
  white-space: nowrap;
  border-radius: 5px;
  padding: 3px 15px;
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
  font-size: 17px;
  font-weight: $font-weight-medium;
  color: $primary-color;
  padding: 5px 0;
}

.product-detail-amount {
  font-size: 18px;
  color: $primary-color;
  font-weight: $font-weight-medium;
  padding: 5px 0;
}

.tabs-header {
  border-bottom: 3px solid $primary-color;

  .tab-item * {
    outline-style: none !important;
    border-style: none !important;
  }

  .tab-item[aria-selected="true"] {
    background-color: $primary-color;
    color: white;
    border-radius: 5px;
  }
}

.tab-item[aria-selected="false"] {
  color: $primary-color !important;
  border-radius: 5px;
}

.v-tabs-slider-wrapper {
  height: 0 !important;
}
</style>
