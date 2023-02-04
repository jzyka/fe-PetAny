<template>
  <v-app>
    <v-container class="main">
        <div class="profile">
          <img src="@/assets/Ellipse 1.png" alt="">
          <div class="profile-info">
            <p>Klinik Hewan</p>
            <div class="badges">
              <img src="@/assets/Badge 1.svg" alt="">
              <img src="@/assets/Badge 2.svg" alt="">
              <img src="@/assets/Badge 3.svg" alt="">
            </div>
          </div>
        </div>
        <div class="content">
          <p>Jam Operasional</p>        
            <v-data-table 
            hide-default-footer
            :headers="headers"
            disable-sort
            :items="items" class="table">
              
            </v-data-table>
          <p>Deskripsi Toko</p>
          <v-textarea :readonly="true" class="txt-desc" flat solo auto-grow value="AEZAKMI HESOYAM">
            </v-textarea>
        </div>
        <v-btn class="edit-btn" color="primary">
          Edit profile
        </v-btn>
      </v-container>
  </v-app>
</template>

<script>
export default {
  data (){
    return{
      headers:[
        {
          text: "Hari",
          value: "hari",
          class: "text-header"
        },
        {
          text: "Buka",
          value: "buka",
          class: "text-header"
        },
        {
          text: "Tutup",
          value: "tutup",
          class: "text-header"
        },
      ],
      items: [
        {
          hari: "Senin",
          buka: "08:00",
          tutup: "16:00",
        },
        {
          hari: "Selasa",
          buka: "08:00",
          tutup: "16:00",
        },
        {
          hari: "Rabu",
          buka: "08:00",
          tutup: "16:00",
        },
        {
          hari: "Kamis",
          buka: "08:00",
          tutup: "16:00",
        },
        {
          hari: "Jum'at",
          buka: "08:00",
          tutup: "16:00",
        },
        {
          hari: "Sabtu",
          buka: "08:00",
          tutup: "16:00",
        },
        {
          hari: "Minggu",
          buka: "-",
          tutup: "-",
        },
        
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.main {
  background-color:$white;
  display: flex;
  flex-flow: column;
  align-items: flex-end;
  gap: 35px;
  height: 100%;
  margin-top: 1%;
  margin-bottom: 2%;
  border-radius: 15px;

  & > div{
    width: 100%;
  }

  .profile{
    display: flex;
    gap: 24px;
    .profile-info{
      display: flex;
      flex-flow: column;
      justify-content: space-around;
      p{
        font-size: 32px;
        font-weight: $font-weight-bold;
        font-family: $font-family;
        color: $primary-color;
      }
      .badges{
        display: flex;
        gap: 16px;
      }
    }
  }
  .content{
    flex: 1;
    display: flex;
    flex-flow: column;
    gap: 16px;
    .txt-desc{
      border: 1px solid rgba(0, 0, 0, 0.3);      width: 50%;
    }
    .table{
      color: black;
      .text-header{
        background-color: $primary-color ;
      }
    }
  }
  
}
</style>