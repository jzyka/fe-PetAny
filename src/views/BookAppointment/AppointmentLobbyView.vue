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
                  <v-btn outlined class="reject pa-1"> Tolak </v-btn>
                  <v-btn class="accept pa-1"> Terima </v-btn>
                </div>
              </div>
            </v-row>
          </v-tab-item>
          <v-tab-item class="clinic-queue">
            <template>
              <v-data-table
                :headers="headers"
                :items="desserts"
                item-key="name"
                class="elevation-1"
              ></v-data-table>
            </template>
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
          data: [
            {
              text: "lorem20",
              cardData: "card",
              etc: "etc",
            },
          ],
        },
        {
          routing: "antrean",
          data: [
            {
              text: "lorem20",
              cardData: "card",
              etc: "etc",
            },
          ],
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
      key: Date.now(),
    };
  },
  async created() {
    await this.getBookedAppt();
    // setInterval(() => {
    //   this.getBookedAppt();
    // }, 10000);
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
        this.appointments = appointments;
        console.log(this.appointments);
      } catch (error) {
        console.log(error);
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
