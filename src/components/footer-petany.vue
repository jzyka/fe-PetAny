<template>
  <v-app>
    <footer>
      <div class="footer-top">
        <v-container>
          <v-row>
            <div class="footer-top-contain">
              <div class="footer-content">
                <img
                  src="@/assets/petany-logo-bright.png"
                  alt=""
                  class="logo-footer"
                />
                <router-link to="/register" class="links">
                  Tentang Kami
                </router-link>
                <router-link to="/register" class="links">
                  Hak Kekayaan Intelektual </router-link
                ><router-link to="/register" class="links"> Blog </router-link>
              </div>
              <div class="footer-content">
                <p class="content-title">Bantuan dan Panduan</p>
                <router-link to="/register" class="links">
                  Syarat dan ketentuan
                </router-link>
                <router-link to="/register" class="links">
                  Kebijakan privasi </router-link
                ><router-link to="/register" class="links">
                  Bantuan
                </router-link>
              </div>
              <div class="footer-content">
                <p class="content-title">Ikuti Kami</p>
                <div class="social-media">
                  <a href="#"><img src="@/assets/facebook.png" alt="" /></a>
                  <a href="#"><img src="@/assets/twitter.png" alt="" /></a>
                  <a href="#"><img src="@/assets/instagram.png" alt="" /></a>
                </div>
              </div>
              <div class="footer-content">
                <p class="content-title">Anda memiliki klinik hewan?</p>
                <router-link to="/register" class="to-register">
                  Daftar sebagai klinik hewan
                </router-link>
                <router-link to="/register" class="more-info">
                  Informasi lebih lanjut
                </router-link>
              </div>
            </div>
          </v-row>
        </v-container>
      </div>
      <div class="copyright">
        <v-container>
          <v-row>
            <p>©PetAny, 2022. ALL RIGHTS RESERVED</p>
          </v-row>
        </v-container>
      </div>
    </footer>
  </v-app>
</template>

<script>
export default {
  name: "FooterPetany",
};
</script>

<style lang="scss">
footer {
  .footer-top {
    background-color: $white;
    .footer-top-contain {
      width: 100%;
      display: flex;
      justify-content: space-between;
      padding: 2rem 0;

      .footer-content {
        display: flex;
        flex-direction: column;

        .logo-footer {
          height: 45px;
          object-fit: contain;
          margin-right: auto;
          margin-bottom: 20px;
        }

        .content-title {
          margin-bottom: 20px;
          font-size: 18px;
          font-weight: $font-weight-semibold;
          color: $primary-color;
          margin-top: 15px;
        }

        .links {
          text-decoration: none;
          color: $granite-gray;
          font-weight: $font-weight-medium;
          margin-bottom: 10px;
          font-size: 14px;

          &:last-child {
            margin-bottom: 0;
          }
        }

        .social-media {
          display: flex;
          gap: 10px;

          a {
            img {
              width: 20px;
              object-fit: contain;
            }
          }
        }

        .to-register {
          text-decoration: none;
          color: $white;
          background-color: $primary-color;
          padding: 10px 15px;
          font-weight: $font-weight-medium;
          width: fit-content;
          border-radius: 10px;
          font-size: 14px;
        }

        .more-info {
          color: $primary-color;
          margin-top: 5px;
          font-size: 14px;
        }
      }
    }
  }

  .copyright {
    background-color: $primary-color;
    padding: 10px;
    p {
      margin: auto;
      color: $white;
      font-size: 15px;
    }
  }
}
</style>

<style lang="scss" scoped>
::v-deep .v-application--wrap {
  min-height: fit-content;
}
#app {
  margin-top: auto;
}
</style>
