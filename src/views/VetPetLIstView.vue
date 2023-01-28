<template>
  <v-app>
    <v-container>
      <section class="vet-pet-list pa-4">
        <v-card class="top-data-bar elevation-1 mb-8 rounded-lg pa-3">
          <h2 class="title-bar">Data Hewan</h2>
          <div class="pet-search-add d-flex align-center">
            <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              label="Cari berdasarkan nama, ID atau nama pemilik"
              outlined
              hide-details
            ></v-text-field>
            <v-btn color="primary" v-bind="attrs" v-on="on"> New Item </v-btn>
          </div>
        </v-card>
        <v-data-table
          :headers="headers"
          :items="data"
          :search="search"
          class="elevation-1 rounded-lg"
        >
        </v-data-table>
      </section>
    </v-container>
  </v-app>
</template>

<script>
import Axios from "axios";
export default {
  data: () => ({
    search: "",
    dialog: false,
    dialogDelete: false,
    headers: [
      {
        text: "Pet Name",
        sortable: false,
        value: "pet_name",
      },
      {
        text: "Jenis Hewan",
        value: "pet_genus",
        sortable: false,
      },
      {
        text: "Pemilik Hewan",
        value: "pet_species",
        sortable: false,
      },
      {
        text: "Kode",
        value: "id",
        sortable: false,
      },
    ],
    data: [],
    accessToken: "",
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "New Item" : "Edit Item";
    },
  },

  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    },
  },

  async mounted() {
    await this.getPetList();
  },

  methods: {
    async getPetList() {
      try {
        var x = JSON.parse(localStorage.getItem("data"));
        this.accessToken = x.access_token;
        const headers = {
          Authorization: `Bearer ${this.accessToken}`,
        };
        const petData = await Axios.get(`${this.$api}/get-pet`, { headers });
        const data = petData.data.data;
        this.data = data;
      } catch (error) {
        console.log(error);
      }
    },

    // async addPetList() {
    //   try {
    //      var x = JSON.parse(localStorage.getItem("data"));
    //     this.accessToken = x.access_token;
    //     const headers = {
    //       Authorization: `Bearer ${this.accessToken}`,
    //     };
    //   } catch (error) {
    //     console.log(error);
    //   }
    // },

    //   async addPetList(petId) {
    //   try {
    //      var x = JSON.parse(localStorage.getItem("data"));
    //     this.accessToken = x.access_token;
    //     const headers = {
    //       Authorization: `Bearer ${this.accessToken}`,
    //     };
    //   } catch (error) {
    //     console.log(error);
    //   }
    // },
  },
};
</script>

<style lang="scss">
section {
  &.vet-pet-list {
    .top-data-bar {
      .title-bar {
        font-weight: $font-weight-medium;
        font-size: 22px;
        margin-bottom: 1rem;
      }
      .pet-search-add {
        gap: 1rem;
      }
    }
  }
}
</style>
