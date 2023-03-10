<template>
  <div class="background mx-8 my-5" style="">
    <div class="p-5">
      <p class="tx-add">Tambah data kesehatan Pablo</p>
      <div class="row">
        <div class="col-6">
          <p class="tx">Judul</p>
          <div class="">
            <v-text-field
              class="input-contain"
              solo
              v-model="medRecTitle"
              background-color="#F1F1F1"
            ></v-text-field>
          </div>
          <p class="tx">Deskripsi</p>
          <div>
            <v-textarea
              class="input-contain"
              solo
              v-model="medRecDescription"
              background-color="#F1F1F1"
            ></v-textarea>
          </div>
          <p class="tx">Pengobatan</p>
          <div class="">
            <v-text-field
              class="input-contain"
              solo
              v-model="medRecTreatment"
              background-color="#F1F1F1"
            ></v-text-field>
          </div>
        </div>
        <div class="col-6">
          <p class="tx">Tanggal</p>
          <div class="">
            <v-menu
              v-model="menu2"
              :close-on-content-click="false"
              :nudge-right="40"
              transition="scale-transition"
              offset-y
              min-width="auto"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  class="input-contain"
                  solo
                  v-model="date"
                  readonly
                  background-color="#F1F1F1"
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker
                v-model="date"
                @input="menu2 = false"
              ></v-date-picker>
            </v-menu>
          </div>
          <p class="tx">Lampiran</p>
          <div class="">
            <v-file-input
              solo
              v-model="medRecAttachment"
              background-color="#F1F1F1"
            >
            </v-file-input>
          </div>
          <div class="btns">
            <v-btn
              class="sty"
              @submit.prevent
              @click="createMedRec"
              elevation="2"
              >Simpan Data</v-btn
            >
          </div>
        </div>
  <v-app>
    <v-container class="pt-10">
      <div class="background pa-5">
        <v-container>
          <p class="tx-add">Tambah data kesehatan Pablo</p>
          <div class="row">
            <v-col cols="12" md="6">
              <p class="tx">Judul</p>
              <div class="">
                <v-text-field class="input-contain" solo v-model="medRecTitle" background-color="#F1F1F1"></v-text-field>
              </div>
              <p class="tx">Deskripsi</p>
              <div>
                <v-textarea class="input-contain" solo v-model="medRecDescription" background-color="#F1F1F1"></v-textarea>
              </div>
              <p class="tx">Pengobatan</p>
              <div class="">
                <v-text-field class="input-contain" solo v-model="medRecTreatment" background-color="#F1F1F1"></v-text-field>
              </div>
            </v-col>
            <v-col cols="12" md="6">
              <p class="tx">Tanggal</p>
              <div class="">
                <v-menu v-model="menu2" :close-on-content-click="false" :nudge-right="40" transition="scale-transition" offset-y min-width="auto">
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field class="input-contain" solo v-model="date" readonly background-color="#F1F1F1" v-bind="attrs" v-on="on"></v-text-field>
                  </template>
                  <v-date-picker v-model="date" @input="menu2 = false"></v-date-picker>
                </v-menu>
              </div>
              <p class="tx">Lampiran</p>
              <div class="">
                <v-file-input solo v-model="medRecAttachment" background-color="#F1F1F1"> </v-file-input>
              </div>
              <div class="btns">
                <v-btn class="sty" @submit.prevent @click="createMedRec" elevation="2">Simpan Data</v-btn>
              </div>
            </v-col>
          </div>
        </v-container>
      </div>
    </v-container>
  </v-app>
</template>

<script>
import axios from "axios";

export default {
  data: () => ({
    date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
      .toISOString()
      .substr(0, 10),
    menu: false,
    modal: false,
    menu2: false,
    medRecTitle: "",
    medRecDescription: "",
    medRecTreatment: "",
    medRecAttachment: [],
    models: {},
    vModel: [
      {
        id: 1,
        model: "title",
      },
      {
        id: 2,
        model: "description",
      },
      {
        id: 3,
        model: "treatment",
      },
      {
        id: 4,
        model: "date",
      },
      {
        id: 5,
        model: "attachment",
      },
    ],
  }),
  methods: {
    chooseFile() {
      this.$refs.fileInput.click();
    },
    async createMedRec() {
      try {
        console.log(this.imageData);
        const formData = new FormData();

        formData.append("title", this.medRecTitle);
        formData.append("description", this.medRecDescription);
        formData.append("treatment", this.medRecTreatment);
        formData.append("date", this.date);
        formData.append("attachment", this.medRecAttachment);

        const res = await axios({
          method: "post",
          url:
            `${this.$api}/add-medicalrecord?pet_id=` + this.$route.query.pet_id,
          data: formData,
          headers: {
            "Content-Type": `multipart/form-data;`,
          },
        });
        console.log(res.data);
        if (res.status == 200) {
          this.$router.push("/api/get-pet/" + this.$route.query.pet_id);
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
  margin-top: 30%;

  @include md-max {
    width: 100%;
  }

  @include md-max {
    margin-top: 10px;
  }
}

.tx-add {
  font-size: 20px;
  color: $primary-color;
  font-weight: $font-weight-semibold;

  @include sm-max {
    display: flex;
    justify-content: center;
    text-align: center;
  }
}
</style>
