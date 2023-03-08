<template>
  <v-app class="flex-grow-1">
    <section class="register-clinic-process">
      <v-container>
        <v-row>
          <div class="clinic-process">
            <h1>Pendaftaran klinik anda sedang di proses</h1>
            <img src="@/assets/clinic-process.png" alt="" />
            <div class="buttons">
              <router-link to="/" class="btn white">
                Kembali ke Beranda
              </router-link>
              <router-link to="/register" class="btn blue-deep">
                Cek Pendaftaran
              </router-link>
            </div>
          </div>
        </v-row>
      </v-container>
    </section>
  </v-app>
</template>

<script>
export default {};
</script>

<style lang="scss">
section {
  &.register-clinic-process {
    background-color: $cultured;
    padding: 40px;

    .clinic-process {
      display: flex;
      flex-direction: column;
      width: 100%;
      align-items: center;
      border-radius: 20px;
      padding: 3rem;
      background-color: $white;
      box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.1);

      h1 {
        font-size: 24px;
        font-weight: $font-weight-semibold;
        color: $primary-color;
        width: auto;
        text-align: center;
      }

      img {
        width: 30%;
        margin: 2rem 0;
      }

      .buttons {
        display: flex;
        flex-direction: row;
        width: 100%;
        gap: 1rem;

        @media (max-width:$bp-sm) {
          flex-direction: column;
        }

        .btn {
          display: flex;
          justify-content: center;
          width: 50%;
          box-shadow: 0px 2px 10px rgba(17, 45, 78, 0.25);
          text-decoration: none;
          padding: 10px;
          border-radius: 10px;
          font-weight: $font-weight-medium;

          @media (max-width:$bp-sm) {
            width: 100%;
        }
        }

        .white {
          background-color: $white;
          color: $primary-color;
        }

        .blue-deep {
          background-color: $primary-color;
          color: $white;
        }
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
