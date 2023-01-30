<template>
  <div class="p-5">
    <div class="kotak p-3">
      <div class="title">Detail Pemesanan</div>
      <div class="row p-3">
        <div class="col-8">
          <div>
            <div class="alamat">Alamat</div>
          </div>
          <div class="address">Jl. Cijengkol Setu No 31, Rt 001 Rw 10, Desa Cijengkol, Kecamatan Setu, Kabupaten Bekasi, Provinsi Jawa Barat, 17320</div>
        </div>
        <!-- +++++++ -->
        <div class="col-4">
          <div>
            <div class="metode">metode Pembayaran</div>
            <div>
              <select class="metodebayar" name="pembayaran" id="">
                <option value="1">QRIS</option>
                <option value="2">GOPAY</option>
                <option value="3">OVO</option>
                <option value="4">SHOPEEPAY</option>
                <option value="5">DANA</option>
              </select>
              <!-- select -->
            </div>
          </div>
          <div>
            <div class="kirim">Pengiriman</div>
            <div>
              <select class="metodebayar" name="pembayaran" id="">
                <option value="1">JNT</option>
                <option value="2">SI CEPAT</option>
                <option value="3">ANTER AJA</option>
                <option value="4">JNE</option>
                <option value="5">TIKI</option>
              </select>
              <!-- select -->
            </div>
          </div>
        </div>
      </div>
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
          <div class="col-9">
            <div>
              <form action="">
                <input type="checkbox" />
                <label> Saya setuju dengan syarat dan ketentuan PetAny</label><br />
              </form>
            </div>
          </div>
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
      <div class="btnn p-4"><button class="py-2">Bayar</button></div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.kotak {
  background-color: $white;
  border-radius: 10px;
  box-shadow: 10px;
}
.title {
  font-size: medium;
  color: $primary-color;
}
.title1 {
  font-size: large;
  color: $primary-color;
  font-weight: 500;
  margin-top: 10px;
}
.alamat {
  font-size: smaller;
  font-weight: 500;
}
.address {
  font-size: smaller;
  max-width: 50%;
  margin-top: 5px;
}
.metode {
  font-size: medium;
  font-weight: 500;
  text-transform: capitalize;
}
.metodebayar {
  margin-top: 10px;
  background-color: $anti-flash;
  padding: 3px;
  width: 100%;
  text-align: start;
  padding-left: 10px;
  border-radius: 8px;
  font-size: medium;
  color: lightslategray;
}
.kirim {
  font-size: medium;
  margin-top: 10px;
  font-weight: 500;
  text-transform: capitalize;
}
.cartkecil {
  width: 80%;
  margin-top: 10px;
}
.titleprod {
  font-size: medium;
  color: $primary-color;
  font-weight: 500;
  align-self: center;
  margin-left: 5px;
}
.rownya {
  padding: 3px;
}
.rincikanan {
  justify-content: space-between;
}
.rincibawah {
  justify-content: space-between;
  color: $steel-blue;
  font-weight: 600;
}
.total {
  justify-content: flex-end;
  font-weight: 500;
}
.harga {
  color: $steel-blue;
}
button {
  background-color: $primary-color;
  color: $white;
  width: 100%;
  text-transform: capitalize;
  border-radius: 7px;
}
.btnn {
  display: flex;
  justify-content: center;
}
</style>
