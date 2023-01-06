<template>
  <v-app>
    <div class="background">
      <v-container>
        <v-row>
          <v-col cols="7">
            <v-img src="@/assets/login-vector.png"></v-img>
          </v-col>
          <v-col cols="5">
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
.background {
  background-color: $secondary-color;
  height: 100vh;
}
</style>
