<template>
  <v-app>
    <div class="logreg">
      <v-container>
        <v-row>
          <v-col cols="7" class="d-flex align-center login-image">
            <v-img src="@/assets/login-vector.png"></v-img>
          </v-col>
          <v-col cols="5" class="d-flex align-center">
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
