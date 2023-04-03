<template>
  <v-app>
    <section class="appointment pa-4">
      <v-card>
        <v-tabs v-model="tabs" class="clinic-tab">
          <v-tab v-for="item in items" :key="item"> {{ item }} </v-tab>
        </v-tabs>

        <v-tabs-items v-model="tabs">
          <v-tab-item class="appointment-request">
            <p class="warning-appt">
              Pertemuan otomatis batal jika tidak di konfirmasi lebih dari 1 jam
            </p>
            <v-row class="card--appointments">
              <div
                class="card--appointment"
                v-for="appointment in appointments"
                :key="appointment._id"
              >
                <div
                  class="top-section"
                  v-for="(petsInfo, i) in appointment.pets"
                  :key="i"
                >
                  <div class="client-profile">
                    <div class="client-photo">
                      <img :src="petsInfo.pet_image" alt="" />
                    </div>
                    <div class="client-detail">
                      <div class="name-weight">
                        <p class="client-name">{{ petsInfo.pet_name }}</p>
                        <p class="client-weight">
                          {{ petsInfo.pet_weight }} Kg
                        </p>
                      </div>
                      <p class="client-age">{{ petsInfo.pet_age }} Tahun</p>
                    </div>
                  </div>

                  <div
                    class="loop-time"
                    v-for="(time, j) in appointment.orders"
                    :key="j"
                  >
                    <p class="req-time">{{ time.time }}</p>
                  </div>
                </div>
                <div class="symptoms">
                  <p class="symptoms--title">Keluhan:</p>
                  <p class="symptoms--desc">{{ appointment.complaint }}</p>
                </div>
                <div class="appointment-detail">
                  <p class="doctor-name">{{ appointment.doctor }}</p>
                  <p class="appt-schedule">
                    {{ appointment.date }},
                    {{ appointment.shift }}
                  </p>
                </div>
                <div class="button">
                  <v-btn
                    outlined
                    class="reject pa-1"
                    @click="rejectAppt(appointment.apptID)"
                  >
                    Tolak
                  </v-btn>
                  <v-btn
                    class="accept pa-1"
                    @click="acceptAppt(appointment.apptID)"
                  >
                    Terima
                  </v-btn>
                </div>
              </div>
            </v-row>
          </v-tab-item>
          <v-tab-item class="clinic-queue">
            <div class="header-appt"></div>
            <v-card
              v-for="(queue, i) in appointmentsQueue"
              :key="i"
              class="queue-card"
            >
              <div class="pet-info" v-for="(pet, j) in queue.pets" :key="j">
                <v-img
                  :src="pet.pet_image"
                  aspect-ratio="1"
                  max-width="45px"
                  class="rounded-lg"
                  cover
                ></v-img>
                <div class="pet-data">
                  <div class="d-flex">
                    <p class="pet-name">{{ pet.pet_name }}</p>
                    <p class="pet-weight">{{ pet.pet_weight }} Kg</p>
                  </div>

                  <div class="pet-age">{{ pet.pet_age }} Tahun</div>
                </div>
                <div class="book-data">
                  <p>{{ queue.date }}</p>
                  <p>{{ queue.shift }}</p>
                  <router-link :to="pet.add_medical_record" class="visit"
                    >Kunjungi</router-link
                  >
                  <v-btn class="done" @click="finishAppt(queue.queueID)"
                    >Selesai</v-btn
                  >
                </div>
              </div>
            </v-card>
          </v-tab-item>
        </v-tabs-items>
      </v-card>
    </section>
  </v-app>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      items: ["Lobi", "Antrean"],
      tabs: null,
      // text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",

      data: [
        {
          routing: "lobi",
        },
        {
          routing: "antrean",
        },
      ],

      desserts: [
        {
          name: "Pablo",
          date: "10 - 12 - 2023",
          hour: "08.00 ",
        },
      ],
      headers: [
        {
          text: "Nama Pasien",
          align: "start",
          sortable: false,
          value: "name",
        },
        { text: "Tanggal", value: "date" },
        { text: "Jam", value: "hour" },
      ],

      appointments: [],
      appointmentsQueue: [],
      key: Date.now(),
    };
  },
  async created() {
    await this.getBookedAppt();
    await this.getBookedQueue();
    setInterval(() => {
      this.getBookedAppt();
    }, 10000);
  },

  // computed: {
  //   appointmentNew: {
  //     get() {
  //       return this.appointments;
  //     },
  //   },
  // },
  watch: {
    appointments: {
      handler: function (newVal, oldVal) {
        console.log("Appointments changed", newVal);
        this.key = Date.now(); // update key to trigger re-render

        console.log("old", oldVal);
      },
      deep: true,
    },
  },

  methods: {
    async getBookedAppt() {
      try {
        const appointmentAll = await axios.get(
          `${this.$api}/get-all-bookappoinment`
        );
        const appointments = appointmentAll.data;
        for (let i = 0; i < appointments.length; i++) {
          const apptAll = appointments[i];
          const apptsAll = apptAll.orders;
          let apptID = null;
          for (let j = 0; j < apptsAll.length; j++) {
            const apptsOrder = apptsAll[j];
            apptID = apptsOrder.order_id;
          }
          apptAll.apptID = apptID;
        }
        this.appointments = appointments;
        console.log(this.appointments);
      } catch (error) {
        console.log(error);
      }
    },
    async getBookedQueue() {
      try {
        const appointmentQueueAll = await axios.get(
          `${this.$api}/get-today-bookappoinment`
        );
        const appointmentsQueue = appointmentQueueAll.data;
        for (let i = 0; i < appointmentsQueue.length; i++) {
          const queueAll = appointmentsQueue[i];
          const queueOrders = queueAll.orders;
          let queueID = null;
          for (let j = 0; j < queueOrders.length; j++) {
            const queueOrder = queueOrders[j];
            queueID = queueOrder.order_id;
          }
          queueAll.queueID = queueID;
        }
        this.appointmentsQueue = appointmentsQueue;
        console.log(this.appointmentsQueue);
      } catch (error) {
        console.log(error);
      }
    },
    async finishAppt(queueId) {
      try {
        const response = await axios.post(
          `${this.$api}/finish-bookappoinment/${queueId}`
        );
        console.log(response.data); // log the response data to the console
        // update the appointments queue by calling the getBookedQueue() method again
        if (response.status == 200) {
          this.getBookedQueue();
        }
      } catch (error) {
        console.error(error);
      }
    },
    async rejectAppt(apptId) {
      try {
        const response = await axios.post(
          `${this.$api}/reject-bookappoinment/${apptId}`
        );
        console.log(response.data); // log the response data to the console
        // update the appointments queue by calling the getBookedQueue() method again
        if (response.status == 200) {
          this.getBookedAppt();
          this.getBookedQueue();
        }
      } catch (error) {
        console.error(error);
      }
    },
    async acceptAppt(apptId) {
      try {
        const response = await axios.post(
          `${this.$api}/accept-bookappoinment/${apptId}`
        );
        console.log(response.data); // log the response data to the console
        // update the appointments queue by calling the getBookedQueue() method again
        if (response.status == 200) {
          this.getBookedAppt();
          this.getBookedQueue();
        }
        await this.getBookedQueue();
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
section {
  &.appointment {
    .appointment-request {
      display: flex;
      width: 100%;
      flex-direction: column;
      justify-content: center;
      background-color: transparent;

      .warning-appt {
        color: rgba(0, 0, 0, 0.45);
        width: 100%;
        text-align: center;
        font-size: 14px;
      }
    }

    .clinic-tab {
      margin-bottom: 1rem;
    }

    .card--appointments {
      display: flex;
      flex-wrap: wrap;
      gap: 16px;
      margin: 0;

      @media (max-width: $bp-md) {
        justify-content: center;
      }
    }
  }
}
.queue-card {
  .pet-info {
    background: $white !important;
    box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.1) !important;
    width: 100%;
    padding: 10px;
    border-radius: 20px;
  }
  p {
    margin-bottom: 0;
  }

  .pet-info {
    display: flex;
    align-items: center;

    .pet-data {
      margin-left: 1rem;
      .pet-name {
        color: $primary-color;
        font-weight: $font-weight-medium;
        padding-right: 5px;
        margin-right: 5px;
        border-right: 2px solid $secondary-color;
      }
    }

    .book-data {
      margin-left: auto;
      display: flex;
      width: fit-content;
      gap: 1rem;
      align-items: center;
      float: right;

      p {
        text-align: center;
      }

      .visit {
        background-color: $primary-color;
        border: 2px solid $primary-color;
        color: $white;
        padding: 5px 10px;
        border-radius: 5px;
        text-decoration: none;
      }
      .done {
        background-color: $primary-color;
        border: 2px solid $primary-color;
        color: $white;
      }
    }
  }
}
.client-profile {
  display: flex;
  width: 85%;
  align-items: center;
  gap: 10px;

  .client-detail {
    width: 80%;

    .client-age {
      margin-bottom: 0;
      color: $steel-blue;
    }

    .name-weight {
      display: flex;

      .client-name {
        color: $primary-color;
        font-weight: $font-weight-medium;
        padding-right: 5px;
        border-right: 2px solid $secondary-color;
        margin-right: 5px;
        margin-bottom: 0;
      }

      .client-weight {
        color: $granite-gray;
        margin-bottom: 0;
      }
    }
  }

  .client-photo {
    width: 45px;
    height: 45px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 5px;
    }
  }
}

.card {
  &--appointment {
    flex: 0 0 max(300px, 30%);
    background-color: $white;
    border-radius: 1rem;
    box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.1);
    padding: 1rem;
    gap: 10px;
    display: flex;
    flex-direction: column;

    @media (max-width: $bp-md) {
      flex: 1 0 max(300px, 30%);
    }

    .top-section {
      display: flex;
      gap: 10px;

      .loop-time {
        width: 15%;

        .req-time {
          text-align: end;
          color: $granite-gray;
        }
      }
    }

    .symptoms {
      p {
        margin-bottom: 0;
      }

      &--title {
        font-weight: $font-weight-medium;
      }
    }

    .appointment-detail {
      p {
        margin-bottom: 0;
      }

      .doctor-name {
        font-weight: $font-weight-medium;
      }

      .appt-schedule {
        color: $granite-gray;
      }
    }

    .button {
      display: flex;
      gap: 10px;
      width: 100%;
      justify-content: flex-end;
      .v-btn {
        height: unset !important;
      }

      .reject {
        background-color: $white;
        border: 2px solid $primary-color;
        color: $primary-color;
      }

      .accept {
        background-color: $primary-color;
        border: 2px solid $primary-color;
        color: $white;
      }
    }
  }

  // &--queue {
  //   display: flex;
  //   justify-content: space-between;
  //   background-color: $white;
  //   border-radius: 10px;
  //   padding: 1rem;
  //   box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.1);

  //   .client-profile {
  //     width: 75%;
  //   }

  //   .client-schedule {
  //     width: 25%;
  //     display: flex;
  //     align-items: center;
  //     justify-content: space-between;

  //     p {
  //       margin-bottom: 0;
  //     }
  //   }
  // }
}
#app {
  background-color: $cultured;
}
.v-card {
  background-color: transparent !important;
  box-shadow: none !important;
}

.v-tabs-bar {
  background-color: transparent !important;
}
</style>

<style scoped>
.theme--light.v-tabs > .v-tabs-bar {
  background-color: transparent;
}

.theme--light.v-tabs-items {
  background-color: transparent;
}
.v-slide-group__wrapper {
  border-bottom: 1px solid black;
}
</style>
