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
        <div class="clinic-contact d-flex">
          <p class="petshop-phone mb-3 mt-2 left-contact">
            {{ clinic.phone_number }}
          </p>
          <p class="petshop-phone mb-3 mt-2">{{ clinic.petshop_email }}</p>
        </div>
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
    <v-tabs-items v-model="tabs" class="rounded-lg">
      <v-tab-item>
        <div class="background rounded-lg">
          <div class="wrapper">
            <!-- Title -->
            <div class="py-4 txt-jam">Buat janji pertemuan disini</div>
            <div>
              <div>
                <p class="txt-title">Pilih Dokter</p>
                <v-select
                  :items="docNames"
                  item-text="name"
                  item-value="id"
                  solo
                  @change="onSelectDoctor"
                  v-model="selectedDoctor"
                  background-color="#F1F1F1"
                ></v-select>
                <!-- Pilih Hari -->
                <p class="txt-title">Hari</p>
                <v-btn-toggle
                  tile
                  color="deep-purple accent-3"
                  group
                  v-model="selectedDate"
                  mandatory
                  class="mb-4"
                >
                  <v-btn
                    class="group-btn"
                    v-for="(date, index) in tanggalArr"
                    :key="index"
                    :value="date"
                    >{{ date }}</v-btn
                  >
                </v-btn-toggle>
                <!-- Pilih Jam -->
                <p class="txt-title">Jam</p>
                <v-btn-toggle
                  tile
                  color="deep-purple accent-3"
                  group
                  v-model="selectedDoctorShift"
                  class="mb-4 btn-date"
                >
                  <v-btn
                    v-for="(shift, index) in doctorShift"
                    :key="index"
                    class="group-btn"
                    :value="shift"
                  >
                    {{ shift }}
                  </v-btn>
                </v-btn-toggle>
              </div>
              <div>
                <p class="txt-title">Pasien</p>
                <v-select
                  :items="petNames"
                  item-text="name"
                  item-value="id"
                  v-model="selectedPet"
                  solo
                  background-color="#F1F1F1"
                ></v-select>
                <p class="txt-title">Keluhan</p>
                <div>
                  <v-textarea
                    class="input-contain"
                    solo
                    background-color="#F1F1F1"
                    v-model="symptoms"
                  ></v-textarea>
                </div>
              </div>
            </div>
            <div>
              <v-btn block class="my-4 btn-janji" @click="postBookAppt">
                Buat Janji
              </v-btn>
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
    doctor: [],
    docNames: [],
    selectedDoctor: "",
    operationalHour: "",
    tanggalArr: [],
    selectedDoctorShift: "",
    selectedDate: "",
    petNames: [],
    selectedPet: "",
    symptoms: "",
  }),

  async created() {
    await this.getDoctor();
    await this.getPet();
  },

  async mounted() {
    await this.getClinicData();
    this.selectedDoctor = this.docNames[0].id;
    this.getOperationalHour();
    // console.log(window.snap);
    window.snap.skip = true;
    console.log(window.snap);
  },
  watch: {
    selectedDoctor: function () {
      this.getOperationalHour();
    },
  },
  computed: {
    doctorShift() {
      const selectedData = this.operationalHour.find(
        (data) => data.tanggal === this.selectedDate
      );
      if (selectedData) {
        return [selectedData.shift1, selectedData.shift2];
      } else {
        return [];
      }
    },
  },
  methods: {
    async postBookAppt() {
      try {
        const res = await axios.post(`${this.$api}/add-bookappoinment`, {
          doctor: this.selectedDoctor,
          date: this.selectedDate,
          pets: this.selectedPet,
          complaint: this.symptoms,
          shift: this.selectedDoctorShift,
        });
        if (res.status == 200) {
          console.log("berhasil book, bayar gih");
          this.$router.push({ name: "pay-appointment" });
          const midtransToken = res.data.midtrans_token;
          const vm = this;
          // const paymentUrl = res.data.payment_url;
          window.snap.pay(midtransToken, {
            onSuccess: function (result) {
              console.log("Payment successful", result);
              vm.$router.push({ name: "transaction" });

              // Redirect to a success page or do something else
            },
            onError: function (result) {
              console.log("Payment error", result);
              // Redirect to an error page or do something else
            },
            onClose: function () {
              console.log("Payment dialog closed");
              // Redirect to a cancel page or do something else
            },
          });
        }
      } catch (error) {
        console.log(error);
      }
    },
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
    async getDoctor() {
      try {
        const doctorAll = await axios.get(
          `${this.$api}/get-doctors/` + this.$route.params.id
        );
        const doctor = doctorAll.data;
        const docNames = [];

        for (let i = 0; i < doctor.length; i++) {
          const docList = doctor[i].user;

          const docName = {
            id: docList.id,
            name: docList.name,
          };

          docNames.push(docName);
        }

        this.docNames = docNames;
        this.selectedDoctor = this.docNames[0].id;

        console.log("ini dokter", this.docNames);
      } catch (error) {
        console.log("error dokter", error);
      }
    },

    async getPet() {
      try {
        const petAll = await axios.get(`${this.$api}/get-pet`);
        const petsList = petAll.data;
        const petNames = [];

        petsList.forEach((pet) => {
          const petName = {
            id: pet.id,
            name: pet.pet_name,
          };

          petNames.push(petName);
        });

        this.petNames = petNames;
        this.selectedPet = this.petNames[0].id;

        console.log("ini pet", this.petNames);
        console.log("ini pet all", petsList);
      } catch (error) {
        console.log("error pet", error);
      }
    },

    async getOperationalHour() {
      try {
        const response = await axios.get(
          `${this.$api}/dokter/jam-operasional/${this.selectedDoctor}`
        );
        this.operationalHour = response.data.data;

        // Extract "tanggal" property from each object in "operationalHour" array
        const tanggalArr = this.operationalHour.map((oh) => oh.tanggal);

        // Set "tanggalArr" as a new property in Vue data object
        this.tanggalArr = tanggalArr;

        console.log("ini jadwal dokter", this.operationalHour);
        console.log("ini hari dokter", this.tanggalArr);
      } catch (error) {
        console.log(error);
      }
    },

    async onSelectDoctor() {
      try {
        const response = await axios.get(
          `${this.$api}/dokter/jam-operasional/${this.selectedDoctor}`
        );
        const doctor = response.data;
        this.doctor = doctor;
        this.getOperationalHour();
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
  display: flex;

  .wrapper {
    padding: 1rem;
    width: 100%;
    .v-btn {
      &--active {
        background-color: $primary-color !important;
        color: $white;

        &:hover {
          background-color: $primary-color !important;
        }

        &::before {
          display: none;
        }
      }
    }
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
        background-color: $white;
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

.clinic-contact {
  display: flex;
  .petshop-phone {
    color: $steel-blue;
  }
  .left-contact {
    margin-right: 5px;
    padding-right: 5px;
    border-right: 2px solid $gainsboro;
  }
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

.v-item-group {
  flex-wrap: wrap !important;
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
