<template>
  <v-container class="my-5">
    <!-- Klinik -->
    <div class="background row">
      <div class="col-1">
        <v-avatar size="70px">
          <v-img src="@/assets/vet-img.png" class=""></v-img>
        </v-avatar>
      </div>
      <div class="col-6 my-auto">
        <div class="txt-klinik">Klinik Hewan Lovely Vets</div>
        <div>Jakarta Utara | Melayani Datang Langsung</div>
      </div>
      <div class="col-3 my-auto alg-center">
        <v-btn class="btn-klinik">Chat Klinik</v-btn>
      </div>
      <div class="my-3"><v-divider vertical></v-divider></div>
      <div class="col-2 my-auto alg-center">
        <div>Jam Operasional</div>
        <div class="txt-jam">08.00 - 18.00</div>
      </div>
    </div>
    <!-- Tab -->
    <v-card class="my-10">
      <v-tabs align-tabs="start">
        <v-tab :value="1">Klinik</v-tab>
        <v-tab :value="2">Toko</v-tab>
      </v-tabs>
    </v-card>

    <!-- Detail Bookappointment -->
    <div class="background">
      <div class="p-3">
        <!-- Title -->
        <div class="py-5 txt-jam">Buat janji pertemuan disini</div>
        <div class="row">
          <div class="col-7">
            <p class="txt-title">Pilih Dokter</p>
            <v-select :items="items" solo background-color="#F1F1F1"></v-select>
            <!-- Pilih Hari -->
            <p class="txt-title">Hari</p>
            <v-item-group class="pb-4">
              <v-row>
                <v-col v-for="n in 6" :key="n" cols="12" md="2">
                  <v-item v-slot="{ isSelected, selectedClass, toggle }">
                    <v-card :color="isSelected ? '537FE7' : ''" :class="['d-flex align-center', selectedClass]" height="100" @click="toggle">
                      <div class="flex-grow- text-center">
                        {{ isSelected ? "Selected" : "Senin 28 Des" }}
                      </div>
                    </v-card>
                  </v-item>
                </v-col>
              </v-row>
            </v-item-group>
            <!-- Pilih Jam -->
            <p class="txt-title">Jam</p>
            <v-item-group>
              <v-row>
                <v-col v-for="n in 6" :key="n" cols="12" md="2">
                  <v-item v-slot="{ isSelected, selectedClass, toggle }">
                    <v-card :color="isSelected ? '537FE7' : ''" :class="['d-flex align-center', selectedClass]" height="40" @click="toggle">
                      <div class="flex-grow-1 text-center">
                        {{ isSelected ? "Selected" : "08.00" }}
                      </div>
                    </v-card>
                  </v-item>
                </v-col>
              </v-row>
            </v-item-group>
          </div>
          <div class="col-5">
            <p class="txt-title">Pasien</p>
            <v-select :items="items" solo background-color="#F1F1F1"></v-select>
            <p class="txt-title">Keluhan</p>
            <div>
              <v-textarea class="input-contain" solo background-color="#F1F1F1"></v-textarea>
            </div>
          </div>
        </div>
        <div>
          <v-btn block class="my-5 btn-janji"> Buat Janji </v-btn>
        </div>
      </div>
    </div>
  </v-container>
</template>
<script>
export default {
  data: () => ({
    items: ["Foo", "Bar", "Fizz", "Buzz"],
  }),
};
</script>
<style lang="scss">
.background {
  background-color: $white;
  border-radius: 7px;
}
.txt-klinik {
  font-size: 20px;
  font-weight: $font-weight-medium;
  color: $primary-color;
}
.btn-klinik {
  flex-direction: column;
  background-color: $primary-color !important;
  color: $white !important;
}
.txt-jam {
  font-weight: $font-weight-medium;
  color: $primary-color;
  font-size: 18px;
}
.alg-center {
  text-align: center;
}
.btn-appoint {
  justify-content: space-between;
}
.btn-janji {
  color: $white !important;
  background-color: $primary-color !important;
}
.bg-item {
  background-color: $primary-color !important;
}
.txt-title {
  font-weight: $font-weight-medium;
  color: $primary-color;
  font-size: 16px;
}
</style>
