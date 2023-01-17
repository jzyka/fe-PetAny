<template>
  <v-app>
    <v-container fluid pa-0>
      <v-row no-gutters>
        <v-col cols="2">
          <ClinicDashboardSidebar />
        </v-col>
        <v-col cols="10">
          <router-view />
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import ClinicDashboardSidebar from "./dashboard-sidebar.vue";

export default {
  components: {
    ClinicDashboardSidebar,
  },
};
</script>

<style></style>
