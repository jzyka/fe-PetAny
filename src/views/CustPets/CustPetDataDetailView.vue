<template>
  <div class="background mx-8 my-5">
    <div class="p-5">
      <p class="tx-add">Data kesehatan {{ medicalRecord.pet_id.pet_name }}</p>
      <div class="row">
        <div class="col-6">
          <div class="pet-data-contain">
            <p class="pet-data-title mb-1">Judul :</p>
            <p class="pet-data-content">{{ medicalRecord.title }}</p>
          </div>
          <div class="pet-data-contain">
            <p class="pet-data-title mb-1">Deskripsi :</p>
            <p class="pet-data-content">{{ medicalRecord.description }}</p>
          </div>
          <div class="pet-data-contain">
            <p class="pet-data-title mb-1">Pengobatan :</p>
            <p class="pet-data-content">{{ medicalRecord.treatment }}</p>
          </div>
        </div>
        <div class="col-6">
          <div class="pet-data-contain">
            <p class="pet-data-title mb-1">Tanggal :</p>
            <p class="pet-data-content">{{ medicalRecord.date }}</p>
          </div>
          <p class="tx">Lampiran</p>
          <div class="">
            <v-file-input
              accept="file/*"
              solo
              background-color="#F1F1F1"
              multiple
            >
            </v-file-input>
          </div>
          <div class="btns">
            <v-dialog transition="dialog-bottom-transition" max-width="450">
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  color="#112d4e"
                  class="sty mr-5 white--text mt-7"
                  v-bind="attrs"
                  v-on="on"
                  >Hapus Data Kesehatan</v-btn
                >
              </template>
              <template v-slot:default="dialog">
                <v-card>
                  <v-card-text class="pt-4 black--text">
                    Anda yakin ingin menghapus data kesehatan peliharaan anda?
                  </v-card-text>
                  <v-card-actions class="justify-end">
                    <v-btn
                      color="#112d4e"
                      class="white--text"
                      @click="dialog.value = false"
                      >Close</v-btn
                    >
                    <v-btn
                      outlined
                      color="#112d4e"
                      @click="deleteMedicalRecordDetail"
                      >Hapus Profil Pet</v-btn
                    >
                  </v-card-actions>
                </v-card>
              </template>
            </v-dialog>
            <v-btn class="sty mr-5 mt-7" elevation="2">Edit Data</v-btn>
            <v-btn :to="prevRoutePath" class="sty mt-7" elevation="2"
              >Kembali</v-btn
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Axios from "axios";

export default {
  data: () => ({
    medicalRecord: [],
    prevRoute: null,
  }),
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      vm.prevRoute = from;
    });
  },
  async mounted() {
    await this.getMedicalRecordDetail();
  },
  methods: {
    async getMedicalRecordDetail() {
      try {
        const res = await Axios.get(
          `${this.$api}/get-medicalrecord/` + this.$route.params.id
        );
        const medicalRecord = res.data.data;
        this.medicalRecord = medicalRecord;
      } catch (error) {
        console.log(error);
      }
    },
    async deleteMedicalRecordDetail() {
      try {
        const response = await Axios.get(
          `${this.$api}/get-medicalrecord/` + this.$route.params.id
        );
        const medicalRecord = response.data.data;
        this.medicalRecord = medicalRecord;
        const res = await Axios.delete(
          `${this.$api}/delete-medicalrecord/` + this.$route.params.id
        );

        if (res.status == 200) {
          this.$router.push(`/api/get-pet/${medicalRecord.pet_id.id}`);
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style lang="scss">
.background {
  background-color: $white;
  border-radius: 7px;
}
.pet-data-content {
  font-size: 16px;
  color: $steel-blue;
  // border-bottom: 1px solid $gainsboro;
  padding-bottom: 5px;
}
.pet-data-title {
  font-size: 18px;
  font-weight: $font-weight-medium;
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
