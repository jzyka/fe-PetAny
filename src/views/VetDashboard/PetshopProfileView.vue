<template>
  <v-app>
    <v-row>
      <v-container fluid pa-6>
        <div class="create-profile-contain">
          <div class="top-section">
            <div class="profile-img">
              <v-img
                src="@/assets/petany-logo-bright.png"
                aspect-ratio="1"
                cover
                class="profile"
              ></v-img>
            </div>
            <div class="main-info">
              <p class="clinic-name">Klinik Hewan Lorem</p>
              <p class="petshop-address">
                Jl. Sukun Raya No.09, Besito Kulon, Besito, Kec. Gebog, Kab.
                Kudus, Jawa Tengah
              </p>
              <div class="flex-info">
                <p class="phone-number">0851-5555-8909</p>
                <p class="email">kliniklorem@gmail.com</p>
              </div>

              <div class="link-contain">
                <div class="bg-link">
                  <v-img
                    src="@/assets/link-icon.png"
                    class="link-img"
                    cover
                    max-width="15px"
                  ></v-img>
                </div>
                <a href="https://github.com/jzyka/fe-PetAny">Link</a>
              </div>

              <div class="services">
                <p class="service-card">Grooming</p>
              </div>
            </div>
            <div class="edit-btn">
              <v-btn
                class="crs"
                block
                elevation="2"
                large
                mdi-plus
                tile
                @submit.prevent
                >Edit Profil</v-btn
              >
            </div>
          </div>
          <div class="operational-data my-5">
            <p class="operational-title">Jam Operasional Klinik</p>
            <v-data-table
              :headers="headers"
              :items="data"
              hide-default-footer
              class="elevation-1 rounded-lg"
            >
            </v-data-table>
          </div>

          <div class="bottom-section">
            <div class="desc-contain">
              <p class="data-title">Deskripsi Toko</p>
              <p class="data-content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        </div>
      </v-container>
    </v-row>
  </v-app>
</template>

<script>
import axios from "axios";

export default {
  data: () => ({
    headers: [
      {
        text: "Hari",
        align: "center",
        sortable: false,
        value: "hari_buka",
      },
      {
        text: "Jam Buka",
        align: "center",
        value: "jam_buka",
        sortable: false,
      },
      {
        text: "Jam Tutup",
        align: "center",
        value: "jam_tutup",
        sortable: false,
      },
    ],
    data: [],
  }),

  async mounted() {
    await this.getOperationalHour();
  },
  created() {
    this.getLocalStorage();
  },

  methods: {
    getLocalStorage() {
      this.localStorage = JSON.parse(localStorage.getItem("data"));
    },

    async getOperationalHour() {
      try {
        const petshopID = this.localStorage.data.petshop_id;
        const operational = await axios.get(
          `${this.$api}/petshop/get-jam-operasional/${petshopID}`
        );
        console.log(operational);
        const data = operational.data;
        this.data = data;
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
::v-deep .v-data-table-header {
  tr {
    background-color: $primary-color;

    th {
      span {
        color: $white;
        font-size: 14px;
        font-weight: $font-weight-medium;
      }
    }
  }
}

::v-deep .v-data-table__wrapper {
  border-radius: 8px 8px 0 0;

  tbody {
    tr {
      &:hover {
        background: transparent !important;
      }
    }
  }
}
.create-profile-contain {
  box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.1);
  background-color: $white;
  width: 100%;
  border-radius: 20px;
  padding: 1rem;

  .top-section {
    display: flex;
    gap: 1rem;

    p {
      margin-bottom: 5px;
      color: $primary-color;
    }

    .profile-img {
      border-radius: 20px;
      width: 13%;
      box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.1);

      .profile {
        border-radius: 20px;
      }
    }

    .main-info {
      width: 65%;

      .clinic-name {
        font-size: 22px;
        font-weight: $font-weight-semibold;
      }

      .link-contain {
        display: flex;
        align-items: center;
        gap: 10px;
        margin-bottom: 10px;

        .bg-link {
          padding: 7px;
          border-radius: 100px;
          background-color: $secondary-color;
        }
        a {
          text-decoration: none;
          color: $steel-blue;
        }
      }

      .services {
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        .service-card {
          background-color: $secondary-color;
          border-radius: 100px;
          padding: 5px 15px;
          margin-bottom: 0 !important;
          width: fit-content;
        }
      }

      .flex-info {
        display: flex;

        .phone-number {
          padding-right: 10px;
          margin-right: 10px;
          border-right: 2px solid $primary-color;
        }
      }
    }

    .edit-btn {
      width: 15%;
      margin-left: auto;

      .crs {
        background-color: $primary-color !important;
        color: $white !important;
        text-transform: capitalize;
        border-radius: 7px;
      }
    }
  }

  .operational-data {
    .operational-title {
      margin-bottom: 10px;
      font-size: 18px;
      font-weight: $font-weight-medium;
    }
  }

  .bottom-section {
    margin-bottom: 0;
    .desc-contain {
      .data-title {
        font-size: 18px;
        font-weight: $font-weight-medium;
        margin-bottom: 5px;
      }
    }
  }
}
</style>
