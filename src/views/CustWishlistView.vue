<template>
  <v-app>
    <section class="wishlist">
      <v-container>
        <v-row>
          <div class="product">
            <h1 class="title">10 Produk</h1>
              <div class="wishlist-wrap">
                <router-link class="card--list" tag="div" to="/">
                <img src="@/assets/Rectangle 33.png" alt="" class="card--list__image"/>
                <div class="card--list__text">
                  <div class="product-name">
                    <p class="name">Royal Canin</p>
                    <p class="price">Rp999.999</p>
                    <div class="container-card">
                      <p class="country">Kota Surabaya</p>
                    <img src="@/assets/heart.png" alt="" class="heart">
                    </div>
                  </div>
                </div>
                </router-link>

                <router-link class="card--list" tag="div" to="/">
                <img src="@/assets/Rectangle 33.png" alt="" class="card--list__image"/>
                <div class="card--list__text">
                  <div class="product-name">
                    <p class="name">Royal Canin</p>
                    <p class="price">Rp999.999</p>
                    <div class="container-card">
                      <p class="country">Kota Surabaya</p>
                    <img src="@/assets/heart.png" alt="" class="heart">
                    </div>
                  </div>
                </div>
                </router-link>
                
                <router-link class="card--list" tag="div" to="/">
                <img src="@/assets/Rectangle 33.png" alt="" class="card--list__image"/>
                <div class="card--list__text">
                  <div class="product-name">
                    <p class="name">Royal Canin</p>
                    <p class="price">Rp999.999</p>
                    <div class="container-card">
                      <p class="country">Kota Surabaya</p>
                    <img src="@/assets/heart.png" alt="" class="heart">
                    </div>
                  </div>
                </div>
               </router-link>

                <router-link class="card--list" tag="div" to="/">
                <img src="@/assets/Rectangle 33.png" alt="" class="card--list__image"/>
                <div class="card--list__text">
                  <div class="product-name">
                    <p class="name">Royal Canin</p>
                    <p class="price">Rp999.999</p>
                    <div class="container-card">
                      <p class="country">Kota Surabaya</p>
                    <img src="@/assets/heart.png" alt="" class="heart">
                    </div>
                  </div>
                </div>
                </router-link>

                <router-link class="card--list" tag="div" to="/">
                <img src="@/assets/Rectangle 33.png" alt="" class="card--list__image"/>
                <div class="card--list__text">
                  <div class="product-name">
                    <p class="name">Royal Canin</p>
                    <p class="price">Rp999.999</p>
                    <div class="container-card">
                      <p class="country">Kota Surabaya</p>
                    <img src="@/assets/heart.png" alt="" class="heart">
                    </div>
                  </div>
                </div>
                </router-link>

                <router-link class="card--list" tag="div" to="/">
                <img src="@/assets/Rectangle 33.png" alt="" class="card--list__image"/>
                <div class="card--list__text">
                  <div class="product-name">
                    <p class="name">Royal Canin</p>
                    <p class="price">Rp999.999</p>
                    <div class="container-card">
                      <p class="country">Kota Surabaya</p>
                    <img src="@/assets/heart.png" alt="" class="heart">
                    </div>
                  </div>
                </div>
                </router-link>

                <router-link class="card--list" tag="div" to="/">
                <img src="@/assets/Rectangle 33.png" alt="" class="card--list__image"/>
                <div class="card--list__text">
                  <div class="product-name">
                    <p class="name">Royal Canin</p>
                    <p class="price">Rp999.999</p>
                    <div class="container-card">
                      <p class="country">Kota Surabaya</p>
                    <img src="@/assets/heart.png" alt="" class="heart">
                    </div>
                  </div>
                </div>
                </router-link>

                <router-link class="card--list" tag="div" to="/">
                <img src="@/assets/Rectangle 33.png" alt="" class="card--list__image"/>
                <div class="card--list__text">
                  <div class="product-name">
                    <p class="name">Royal Canin</p>
                    <p class="price">Rp999.999</p>
                    <div class="container-card">
                      <p class="country">Kota Surabaya</p>
                    <img src="@/assets/heart.png" alt="" class="heart">
                    </div>
                  </div>
                </div>
                </router-link>

                <router-link class="card--list" tag="div" to="/">
                <img src="@/assets/Rectangle 33.png" alt="" class="card--list__image"/>
                <div class="card--list__text">
                  <div class="product-name">
                    <p class="name">Royal Canin</p>
                    <p class="price">Rp999.999</p>
                    <div class="container-card">
                      <p class="country">Kota Surabaya</p>
                    <img src="@/assets/heart.png" alt="" class="heart">
                    </div>
                  </div>
                </div>
                </router-link>

                <router-link class="card--list" tag="div" to="/">
                <img src="@/assets/Rectangle 33.png" alt="" class="card--list__image"/>
                <div class="card--list__text">
                  <div class="product-name">
                    <p class="name">Royal Canin</p>
                    <p class="price">Rp999.999</p>
                    <div class="container-card">
                      <p class="country">Kota Surabaya</p>
                    <img src="@/assets/heart.png" alt="" class="heart">
                    </div>
                  </div>
                </div>
                </router-link>
              
              </div>
          </div>
        </v-row>
      </v-container>
    </section>
  </v-app>
</template>

<script>
export default {}
</script>

<style lang="scss">
section {
  &.wishlist {
    padding: 0px 0;
      .title {
        font-size: 22px;
        color: $primary-color;
        margin-bottom: 2rem;
        font-weight: $font-weight-semibold;
      }

      .wishlist-wrap {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        gap: 2%;
        width: 100%;
      }
    }
  }


.card {
  &--list {
    width: 100%;
    background-color: $white;
    padding: 0px 5px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    height: 292px;
    top: 227px;
    box-shadow: 0px 1px 10px 1px rgba(0, 0, 0, 0.1);

    &__image {
      width: 100%;
      height: auto;
      object-fit: cover;
      border-radius: 10px 10px 0 0;}

    &__text {
      padding: 10px;
      margin-top: auto;
    

    .product-name {
      display: flex;
      flex-flow: column;
      align-items: flex-end;
      margin-bottom: 5px;
      .name {
        width: 100%;  
        color: $black;
        font-weight: $font-weight-bold;
        text-align: start;
      }
      .price {
        width: 100%; 
        color: $black;
        font-weight: $font-weight-bold;
      }
      .container-card {
        width: 100%;
        display: flex;
        justify-content: space-between;
          .country {
            color: $granite-gray;
            font-weight: $font-weight-light;
            font-size: 12px;
          }
          .heart{
            width: fit-content;
            height: fit-content;
          }
        }
      }
    }
  }
}
</style>

<style lang="scss" scoped>
::v-deep .v-application--wrap {
  min-height: fit-content;
}
</style>