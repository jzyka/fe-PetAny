<template>
  <section class="clinic-staff mx-4">
    <v-card class="elevation-1 rounded-lg pa-4">
      <h4 class="section-title">Tambah Staff</h4>
      <div class="form-add-staff d-flex">
        <div class="field-contain">
          <p class="field-name">Email</p>

          <v-text-field
            v-model="search"
            label="Masukkan Alamat Email"
            outlined
            hide-details
          ></v-text-field>
        </div>

        <div class="field-contain">
          <p class="field-name">Peran</p>

          <v-select
            :roles="roles"
            label="Peran"
            outlined
            hide-details
          ></v-select>
        </div>

        <v-btn color="primary" elevation="2" class="add-btn">Tambah</v-btn>
      </div>
    </v-card>

    <div class="staff-cards mt-4">
      <v-card class="rounded-lg elevation-1 d-flex px-4 py-2 staff-card">
        <p class="username">John Doe</p>
        <p class="staff-email">johndoe@gmail.com</p>
        <v-select
          :items="items"
          label="Standard"
          dense
          class="role-select"
        ></v-select>
        <v-btn color="primary" elevation="2" outlined class="delete-btn"
          >Hapus</v-btn
        >
      </v-card>
    </div>
  </section>
</template>

<script>
export default {
  data: () => ({
    roles: ["role-1", "role-2", "role-3", "role-4"],
    items: ["Foo", "Bar", "Fizz", "Buzz"],
  }),
};
</script>

<style lang="scss" scoped>
section {
  &.clinic-staff {
    .section-title {
      color: $black;
      font-size: 2rem;
      margin-bottom: 20px;
    }

    .form-add-staff {
      align-items: center;
      gap: 20px;
      width: 100%;

      .field-contain {
        width: 40%;
      }

      .add-btn {
        width: 20%;
      }
    }

    .staff-cards {
      .staff-card {
        gap: 2rem;
        align-items: center;

        .username {
          width: 55%;
          margin-bottom: 0;
        }

        .staff-email,
        .role-select,
        .delete-btn {
          width: 15%;
          margin-bottom: 0;
        }
      }
    }
  }
}
</style>
