<template>
  <div class="background mx-8 my-5" style="">
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
            <v-file-input accept="file/*" solo background-color="#F1F1F1" multiple> </v-file-input>
          </div>
          <div class="btns">
            <v-btn class="sty mr-5" elevation="2">Edit Data</v-btn>
            <v-btn :to="prevRoutePath" class="sty" elevation="2">Kembali</v-btn>
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
  next(vm => {
    vm.prevRoute = from
  })
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
  }
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
  position: relative;
  margin-top: 30%;
}
</style>
