<template>
  <v-app>
    <div class="logreg">
      <v-container>
        <v-row class="justify-center items-center form-layout">
          <v-col cols="7" class="d-flex align-center login-image">
            <v-img src="@/assets/login-vector.png"></v-img>
          </v-col>
          <v-col class="d-flex align-center form-container">
            <router-view />
          </v-col>
        </v-row>
      </v-container>
    </div>
  </v-app>
</template>

<script>
export default {
  name: "FormLayout",
};
</script>

<style lang="scss" scoped>
@media screen and (max-width: $bp-sm){
  .form-layout {
    display: flex;
    flex-flow: column!important;
    align-items: center;
  }

  .form-container {
    width: 80%;
  }

  .logreg {
    width: 100%;
  }

}
.logreg {
  background-color: $secondary-color;
  min-height: 100vh;
  position: relative;
  display: flex;

  .container {
    margin: auto;
  }
}
</style>
