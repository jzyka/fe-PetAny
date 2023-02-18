<template>
  <v-app>
    <v-container class="py-5">
      <v-row>
        <div class="background pa-8" style="">
          <div class="mb-5">
            <p class="tx-add">Data {{ petDetail.pet_name }}</p>
          </div>
          <div class="row">
            <div class="col-3 justify-center">
              <div class="image-bg">
                <v-img
                  :src="petDetail.pet_image"
                  aspect-ratio="1"
                  cover
                  class="rounded-lg"
                ></v-img>
              </div>
              <router-link to="/" class="to-edit"
                >Edit Profil Peliharaan</router-link
              >
            </div>
            <v-col cols="9">
              <v-row>
                <div class="col-6 mb-5 pl-4">
                  <div class="pet-data-contain">
                    <p class="pet-data-title mb-1">Nama Hewan :</p>
                    <p class="pet-data-content">{{ petDetail.pet_name }}</p>
                  </div>
                  <div class="pet-data-contain">
                    <p class="pet-data-title mb-1">Usia :</p>
                    <p class="pet-data-content">{{ petDetail.age }}</p>
                  </div>
                  <div class="pet-data-contain">
                    <p class="pet-data-title mb-1">Alergi :</p>
                    <p class="pet-data-content">{{ petDetail.allergies }}</p>
                  </div>
                </div>
                <div class="col-6">
                  <div class="pet-data-contain">
                    <p class="pet-data-title mb-1">Jenis Hewan :</p>
                    <p class="pet-data-content">{{ petDetail.pet_genus }}</p>
                  </div>
                  <div class="pet-data-contain">
                    <p class="pet-data-title mb-1">Ras :</p>
                    <p class="pet-data-content">{{ petDetail.pet_species }}</p>
                  </div>
                  <div class="pet-data-contain">
                    <p class="pet-data-title mb-1">Berat Badan :</p>
                    <p class="pet-data-content">{{ petDetail.weight }}</p>
                  </div>
                </div>
              </v-row>
            </v-col>
          </div>
          <div>
            <div class="">
              <p class="tx mb-2 mt-4 medrec-title">Data Kesehatan</p>
            </div>
            <div class="mt-4">
              <div class="btns">
                <v-btn class="crs" block elevation="2" fab mdi-plus tile>
                  <v-icon>mdi-plus</v-icon>
                </v-btn>
              </div>
              <div class="mt-2 rounded-3 data-pet d-flex">
                <div class="col-6">
                  <p class="mb-0">Pablo Demam</p>
                </div>
                <div class="col-6">
                  <p class="end-txt mb-0">Senin, 21 November 2021</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import Axios from "axios";

export default {
  data: () => ({
    petDetail: [],
  }),
  async mounted() {
    await this.getPetDetail();
  },
  methods: {
    async getPetDetail() {
      try {
        const res = await Axios.get(
          `${this.$api}/get-pet/` + this.$route.params.id
        );
        const petDetail = res.data;
        this.petDetail = petDetail;
        console.log(petDetail);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.image-bg {
  background-color: $gainsboro;
  // width: 200px;
  // height: 200px;
  border-radius: 10px;
}
.background {
  background-color: $white;
  border-radius: 20px;
  width: 100%;
  box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.1);
}
.tx-add {
  font-size: 20px;
  color: $primary-color;
  font-weight: $font-weight-semibold;
}

.medrec-title {
  font-size: 18px;
  font-weight: $font-weight-medium;
  color: $primary-color;
  width: 100%;
  padding-bottom: 5px;
  border-bottom: 1px solid $gainsboro;
}

.pet-data-title {
  font-size: 18px;
  font-weight: $font-weight-medium;
}
.pet-data-content {
  font-size: 16px;
  color: $steel-blue;
  // border-bottom: 1px solid $gainsboro;
  padding-bottom: 5px;
}
.pets {
  width: 70%;
}

.to-edit {
  text-decoration: none;
  width: 100%;
  text-align: center;
  display: flex;
  justify-content: center;
  margin-top: 10px;
}
.crs {
  background-color: $primary-color !important;
  color: $white !important;
  text-transform: capitalize;
  border-radius: 7px;
}
.data-pet {
  border-radius: 10px;
  box-shadow: 0px 1px 10px 1px rgba(0, 0, 0, 0.1);

  &:hover {
    box-shadow: 0px 1px 10px 5px rgba(63, 114, 175, 0.35);
  }
}
.end-txt {
  text-align: end;
}

.placeholder {
  background: #f0f0f0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #333;
  font-size: 18px;
  font-family: Helvetica;
}
.file-input {
  display: none;
}
</style>

<style lang="scss">
.image-input {
  .v-input {
    &__prepend-outer {
      width: 100%;

      button {
        font-size: 16px;
        color: $steel-blue;
      }
    }
  }
}
</style>

<style scoped>
::v-deep .v-application--wrap {
  min-height: fit-content;
}
</style>
