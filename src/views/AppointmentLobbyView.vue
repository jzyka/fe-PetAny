<template>
  <v-app>
    <section class="appointment pa-4">
      <v-card>
        <v-tabs v-model="tabs" class="clinic-tab">
          <v-tab v-for="item in items" :key="item"> {{ item }} </v-tab>
        </v-tabs>

        <v-tabs-items v-model="tabs">
          <v-tab-item class="appointment-request">
            <div class="card--appointment">
              <div class="top-section">
                <div class="client-profile">
                  <div class="client-photo">
                    <img src="@/assets/pabs.png" alt="" />
                  </div>
                  <div class="client-detail">
                    <div class="name-weight">
                      <p class="client-name">Pablo</p>
                      <p class="client-weight">5 Kg</p>
                    </div>
                    <p class="client-age">1 Tahun 6 Bulan</p>
                  </div>
                </div>

                <p class="req-time">19.00</p>
              </div>
              <div class="symptoms">
                <p class="symptoms--title">Keluhan:</p>
                <p class="symptoms--desc">Demam, diare</p>
              </div>
              <div class="appointment-detail">
                <p class="doctor-name">drh. Jane Doe</p>
                <p class="appt-schedule">Senin 28 Des, 08:00</p>
              </div>
              <div class="button">
                <v-btn outlined class="reject pa-1"> Tolak </v-btn>
                <v-btn class="accept pa-1"> Terima </v-btn>
              </div>
            </div>
          </v-tab-item>
          <v-tab-item class="clinic-queue">
            <div class="card--queue">
              <div class="client-profile">
                <div class="client-photo">
                  <img src="@/assets/pabs.png" alt="" />
                </div>
                <div class="client-detail">
                  <div class="name-weight">
                    <p class="client-name">Pablo</p>
                    <p class="client-weight">5 Kg</p>
                  </div>
                  <p class="client-age">1 Tahun 6 Bulan</p>
                </div>
              </div>

              <div class="client-schedule">
                <p class="schedule-date">Hari ini</p>
                <p class="schedule-hour">09:00</p>
              </div>
            </div>
          </v-tab-item>
        </v-tabs-items>
      </v-card>
    </section>
  </v-app>
</template>

<script>
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
    };
  },
};
</script>

<style lang="scss" scoped>
section {
  &.appointment {
    .appointment-request {
      display: flex;
      width: 100%;
      justify-content: space-between;
      flex-wrap: wrap;
      background-color: transparent;
    }

    .clinic-tab {
      margin-bottom: 2rem;
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
      object-fit: contain;
      border-radius: 5px;
    }
  }
}

.card {
  &--appointment {
    width: 32%;
    background-color: $white;
    border-radius: 1rem;
    box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.1);
    padding: 1rem;
    gap: 10px;
    display: flex;
    flex-direction: column;

    .top-section {
      display: flex;
      gap: 10px;

      .req-time {
        width: 15%;
        text-align: end;
        color: $granite-gray;
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

  &--queue {
    display: flex;
    justify-content: space-between;
    background-color: $white;
    border-radius: 10px;
    padding: 1rem;
    box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.1);

    .client-profile {
      width: 75%;
    }

    .client-schedule {
      width: 25%;
      display: flex;
      align-items: center;
      justify-content: space-between;

      p {
        margin-bottom: 0;
      }
    }
  }
}
#app {
  background-color: $cultured;
}
.v-card {
  background-color: transparent !important;
  box-shadow: none !important;
}

.v-tabs-items {
  background-color: transparent !important;
}

.v-tabs-bar {
  background-color: transparent !important;
}

.v-slide-group {
  &__wrapper {
    border-bottom: 1px solid $black;
  }
}
</style>
