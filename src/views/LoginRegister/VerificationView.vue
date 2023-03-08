<template>
  <v-app>
    <section class="otp">
      <v-container>
        <v-row>
          <div class="otp-contain">
            <p class="instruction">Masukkan Kode Verifikasi (OTP)</p>
            <p class="sent-note">Kode verifikasi (OTP) telah dikirim ke:</p>
            <p class="otp-sent-to">email123@gmail.com</p>
            <router-link to="/register" class="back-to-register">
              <v-img src="@/assets/left-arrow.png" max-width="25px"></v-img>
            </router-link>
            <v-otp-input
              length="6"
              plain
              type="number"
              class="input-otp"
            ></v-otp-input>
            <p class="no-otp">Tidak menerima kode verifikasi (OTP)?</p>
            <button class="resend-otp">Kirim ulang</button>
            <v-btn block class="btn-verify">Verifikasi</v-btn>
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
  &.otp {
    background-color: $secondary-color;
    min-height: 100vh;
    display: flex;
    align-items: center;

    .otp-contain {
      width: 40%;
      margin: auto;
      height: auto;
      padding: 4rem;
      border-radius: 20px;
      background-color: $white;
      position: relative;
      z-index: 1;
      display: flex;
      flex-direction: column;
      align-items: center;

      @media (max-width: $bp-xl) {
        width: 55%;
      }

      @media (max-width: $bp-lg) {
        width: 55%;
      }

      @media (max-width: $bp-md) {
        width: 70%;
      }

      .back-to-register {
        position: absolute;
        z-index: 2;
        top: 1.5rem;
        left: 1.5rem;
      }

      p {
        text-align: center;
      }

      .btn-verify {
        background-color: $primary-color;
        color: $white;
        font-weight: $font-weight-medium;
        letter-spacing: 0;
        box-shadow: none;
        padding: 15px;
        min-height: unset;
        height: auto;
        border-radius: 10px;
      }

      .instruction {
        font-size: 22px;
        margin-bottom: 2rem;
      }

      .sent-note {
        margin-bottom: 0;
      }

      .otp-sent-to {
        color: $steel-blue;
      }

      .input-otp {
        margin-top: 4rem;
        margin-bottom: 2rem;

        .v-input {
          input {
            font-size: 25px;
            font-weight: 400;
          }
        }
      }

      .no-otp {
        margin: 0;
      }

      .resend-otp {
        color: $steel-blue;
        margin-bottom: 2rem;
      }
    }
  }
}
</style>
