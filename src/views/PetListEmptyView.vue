<template>
  <div class="background mx-8 my-5" style="">
    <div class="my-4"><img src="@/assets/petlist.png" alt="" /></div>
    <div class="text my-4">anda belum mengisi data peliharaan anda</div>
    <div class="btnn p-4"><button class="py-2 btn-cr">buat data peliharaan</button></div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.background {
  background-color: $white;
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
  color: $primary-color;
  font-weight: 600;
}
.btn-cr {
  background-color: $primary-color;
  color: $white;
  width: 95%;
  text-transform: capitalize;
  border-radius: 7px;
}
.btnn {
  display: flex;
  justify-content: center;
}
</style>
