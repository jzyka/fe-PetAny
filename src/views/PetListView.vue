<template>
  <div class="background mx-8 my-5" style="">
    <div class="my-4"><img src="@/assets/petlist.png" alt="" /></div>
    <div class="text my-4">anda belum mengisi data peliharaan anda</div>
    <div class="btnn p-4"><button class="py-2">buat data peliharaan</button></div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.background {
  background-color: #ffff;
  border-radius: 7px;
}
img {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 30%;
}
.text {
  text-transform: capitalize;
  text-align: center;
  font-size: 20px;
  color: #112d4e;
  font-weight: 600;
}
button {
  background-color: #112d4e;
  color: #ffff;
  width: 95%;
  text-transform: capitalize;
  border-radius: 7px;
}
.btnn {
  display: flex;
  justify-content: center;
}
</style>
