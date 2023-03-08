<template>
  <v-container class="my-5">
    <!-- Klinik -->
    <div class="background py-4 rounded-lg">
      <div class="col-1">
        <v-avatar size="70px">
          <v-img :src="clinic.petshop_image" class=""></v-img>
        </v-avatar>
      </div>
      <div class="col-6 my-auto">
        <div class="txt-klinik">{{ clinic.petshop_name }}</div>
        <div class="petshop-info">
          <div class="petshop-district">{{ clinic.district }}</div>
          <div class="services">
            <p
              class="service-card"
              v-for="(value, i) in clinic.category"
              :key="i"
            >
              {{ value }}
            </p>
          </div>
        </div>
      </div>
      <div class="col-2 ml-auto my-auto alg-center">
        <v-btn class="btn-klinik">Chat Klinik</v-btn>
      </div>
      <div class="my-3"><v-divider vertical></v-divider></div>
      <div class="col-2 my-auto alg-center">
        <div>Jam Operasional</div>
        <div class="txt-jam">{{ clinic.jam_buka }}-{{ clinic.jam_tutup }}</div>
      </div>
    </div>
    <!-- Tab -->
    <v-card class="mt-4 mb-2">
      <v-tabs align-tabs="start" v-model="tabs">
        <v-tab v-for="item in tabPetshop" :key="item">{{ item }}</v-tab>
      </v-tabs>
    </v-card>
    <v-tabs-items v-model="tabs">
      <v-tab-item>
        <div class="background roundeed-lg">
          <div class="wrapper">
            <!-- Title -->
            <div class="py-5 txt-jam">Buat janji pertemuan disini</div>
            <div>
              <div>
                <p class="txt-title">Pilih Dokter</p>
                <v-select
                  :items="items"
                  solo
                  background-color="#F1F1F1"
                ></v-select>
                <!-- Pilih Hari -->
                <p class="txt-title">Hari</p>
                <v-btn-toggle
                  v-model="text"
                  tile
                  color="deep-purple accent-3"
                  group
                >
                  <v-btn value="left" class="group-btn"> Left </v-btn>

                  <v-btn value="center"> Center </v-btn>

                  <v-btn value="right"> Right </v-btn>

                  <v-btn value="justify"> Justify </v-btn>
                </v-btn-toggle>
                <!-- Pilih Jam -->
                <p class="txt-title">Jam</p>
                <v-btn-toggle
                  v-model="text"
                  tile
                  color="deep-purple accent-3"
                  group
                >
                  <v-btn value="left"> Left </v-btn>

                  <v-btn value="center"> Center </v-btn>

                  <v-btn value="right"> Right </v-btn>

                  <v-btn value="justify"> Justify </v-btn>
                </v-btn-toggle>
              </div>
              <div>
                <p class="txt-title">Pasien</p>
                <v-select
                  :items="items"
                  solo
                  background-color="#F1F1F1"
                ></v-select>
                <p class="txt-title">Keluhan</p>
                <div>
                  <v-textarea
                    class="input-contain"
                    solo
                    background-color="#F1F1F1"
                  ></v-textarea>
                </div>
              </div>
            </div>
            <div>
              <v-btn block class="my-5 btn-janji"> Buat Janji </v-btn>
            </div>
          </div>
        </div>
      </v-tab-item>

      <v-tab-item><h1>fjvfju</h1></v-tab-item>
    </v-tabs-items>

    <!-- Detail Bookappointment -->
  </v-container>
</template>
<script>
import axios from "axios";

export default {
  data: () => ({
    items: ["Foo", "Bar", "Fizz", "Buzz"],
    tabPetshop: ["klinik", "Toko"],
    tabs: null,
    clinic: [],
  }),

  async mounted() {
    await this.getClinicData();
  },

  methods: {
    async getClinicData() {
      try {
        const clinicData = await axios.get(
          `${this.$api}/get-petshop/` + this.$route.params.id
        );
        const clinic = clinicData.data.data;
        this.clinic = clinic;
        console.log(this.$route.params.id);
        console.log(this.clinic);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.background {
  background-color: $white;
  border-radius: 7px;
  display: flex;

  .wrapper {
    padding: 1rem;
    width: 100%;
    .group-btn {
      width: fit-content;
      padding: 10px;
      border-radius: 10px !important;
      background-color: $white;
      box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.15);
      &::before {
        background-color: $white;
      }

      &:hover,
      &:focus {
        background-color: $white !important;
        box-shadow: 0px 1px 10px rgba(63, 114, 175, 0.35);

        &::before {
          background-color: $white !important;
        }
      }
    }
  }
}
.txt-klinik {
  font-size: 20px;
  font-weight: $font-weight-medium;
  color: $primary-color;
}
.btn-klinik {
  flex-direction: column;
  background-color: $primary-color !important;
  color: $white !important;
}
.txt-jam {
  font-weight: $font-weight-medium;
  color: $primary-color;
  font-size: 18px;
}
.alg-center {
  text-align: center;
}
.btn-appoint {
  justify-content: space-between;
}
.btn-janji {
  color: $white !important;
  background-color: $primary-color !important;
}
.bg-item {
  background-color: $primary-color !important;
}
.txt-title {
  font-weight: $font-weight-medium;
  color: $primary-color;
  font-size: 16px;
}

.petshop-info {
  display: flex;
  .petshop-district {
    display: flex;
    align-items: center;
    padding-right: 20px;
    border-right: 2px solid $gainsboro;
    margin-right: 20px;
  }
  .services {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    gap: 10px;
    .service-card {
      background-color: $secondary-color;
      border-radius: 100px;
      padding: 5px 15px;
      text-transform: capitalize;
      margin-bottom: 0 !important;
      width: fit-content;
    }
  }
}
</style>
