<template>
  <div class="p-5">
    <div class="kotak p-3">
      <div class="title1">Rincian Pembayaran</div>
      <div class="flex row p-3">
        <div class="col-8">
          <div class="rownya row">
            <div>
              <img class="cartkecil" src="@/assets/cart-item1.png" />
            </div>
            <div class="titleprod column">RC - Second Age Kitten</div>
          </div>
        </div>
        <div class="col-4">
          <div class="rincikanan row px-5">
            <div>Harga Satuan</div>
            <div>Jumlah</div>
            <div>Subtotal</div>
          </div>
          <div class="rincibawah row px-5">
            <div>Rp.50.000</div>
            <div>1</div>
            <div>Rp.50.000</div>
          </div>
        </div>
      </div>
      <div class="my-4">
        <hr />
        <div class="flex row p-3">
          <div class="col-9"></div>
          <div class="col-3">
            <div class="total row py-3">
              <div>Subtotal pengiriman</div>
              <div class="mx-2 harga">Rp10.000</div>
            </div>
            <div class="total row">
              <div>Total</div>
              <div class="mx-2 harga">Rp60.000</div>
            </div>
          </div>
        </div>
      </div>
      <div class="detail flex row">
        <div class="ki col-9">
          <div class="p-3">
            <div class="status">ID Pesanan</div>
            <div class="ket">PR07324942</div>
          </div>
          <div class="p-3">
            <div class="status">Metode Pembayaran</div>
            <div class="ket">QRIS</div>
          </div>
          <div class="p-3">
            <div class="status">Batas Pembayaran</div>
            <div class="ket">Minggu, 27 Desember | 19.00</div>
          </div>
        </div>
        <div class="col-3">
          <div class="m-3 center">QRIS</div>
          <div><img class="barcode" src="@/assets/barcode.png" /></div>
        </div>
      </div>
      <div class="btnn p-4"><button class="py-2">Cek Pesanan</button></div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.center {
  text-align: center;
}
.barcode {
  width: 50%;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
.ket {
  color: $steel-blue;
  font-weight: $font-weight-medium;
}
.status {
  font-weight: $font-weight-semibold;
  color: $primary-color;
  font-size: small;
}
</style>
