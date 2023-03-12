<template>
  <v-app>
    <v-container>
      <div class="wrapper">
        <p class="textt">Daftar Produk</p>
        <router-link to="/add-product" class="to-add-prod"
          >Tambah Product</router-link
        >
      </div>

      <div class="containerrounded-lg p-2">
        <div class="sose">
          <v-data-table
            :headers="headers"
            :items="products"
            class="elevation-1 rounded-lg"
          >
          </v-data-table>
        </div>
      </div>
    </v-container>
  </v-app>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      // tab: null,
      // switch1: null,
      // text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      headers: [
        { text: "Product Name", value: "name" },
        { text: "Stock", value: "stock" },
        { text: "Price", value: "price" },
      ],
      products: [],
    };
  },
  async created() {
    await this.getProductList();
  },
  methods: {
    async getProductList() {
      try {
        const productList = await axios.get(`${this.$api}/get-product`);
        this.products = productList.data.map((item) => {
          const { name, price, stock } = item.data;
          return {
            name,
            price,
            stock,
            ...item.data,
          };
        });
        console.log(this.products);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-content: center;

  .to-add-prod {
    text-decoration: none;
    color: $white;
    font-weight: $font-weight-medium;
    background-color: $primary-color;
    border-radius: 5px;
    height: fit-content;
    padding: 5px 10px;
    margin-top: 0.5rem;
  }
}
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
