<template>
  <div class="form--logreg">
    <p class="title-form">Daftar</p>
    <div class="form--logreg__group">
      <p>Nama</p>
      <v-text-field
        :error-messages="errorMessage.errors && errorMessage.errors.name"
        label="Nama"
        v-model="userName"
        single-line
        outlined
      ></v-text-field>
    </div>
    <div class="form--logreg__group">
      <p>Email</p>
      <v-text-field
        :error-messages="errorMessage.errors && errorMessage.errors.email"
        label="Email"
        single-line
        outlined
        v-model="email"
        :rules="emailRules"
      ></v-text-field>
    </div>
    <div class="form--logreg__group">
      <p>Nomor HP</p>
      <v-text-field
        :error-messages="
          errorMessage.errors && errorMessage.errors.phone_number
        "
        label="Nomor HP"
        single-line
        outlined
        :rules="numberRules"
        v-model="phoneNum"
      ></v-text-field>
    </div>
    <div class="form--logreg__group">
      <p>Password</p>
      <v-text-field
        :error-messages="errorMessage.errors && errorMessage.errors.password"
        label="Password"
        single-line
        outlined
        :append-icon="show4 ? 'mdi-eye' : 'mdi-eye-off'"
        :rules="[rules.required, rules.min]"
        :type="show4 ? 'text' : 'password'"
        name="MakePass"
        v-model="password"
        value=""
        @click:append="show4 = !show4"
      ></v-text-field>
    </div>
    <div class="form--logreg__group">
      <p>Confirm Password</p>
      <v-text-field
        :error-messages="errorMessage.errors && errorMessage.errors.password"
        label="Password"
        single-line
        outlined
        :append-icon="show4 ? 'mdi-eye' : 'mdi-eye-off'"
        :type="show4 ? 'text' : 'password'"
        name="confirmPass"
        value=""
        v-model="confirmPassword"
        :rules="[required, matchingPasswords]"
        required
        @click:append="show4 = !show4"
      ></v-text-field>
    </div>
    <v-btn
      block
      class="text-capitalize login-btn"
      @submit.prevent
      @click="register"
      >Daftar</v-btn
    >
    <div class="have-account">
      <p>Sudah punya akun?</p>
      <router-link to="/login" class="register-or-login"> Masuk </router-link>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "RegisterView",
  data: () => ({
    userName: "",
    password: "",
    email: "",
    confirmPassword: "",
    phoneNum: "",
    showPassword: false,
    show4: false,
    errorMessage: {},
    numberRules: [
      (v) => !!v || "Please fill out this field!",
      (v) => Number.isInteger(Number(v)) || "Please enter numbers only!",
    ],
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
    rules: {
      required: (value) => !!value || "Required.",
      min: (v) => v.length >= 8 || "Min 8 characters",
      //   emailMatch: () => `The email and password you entered don't match`,
    },
  }),
  methods: {
    matchingPasswords: function () {
      if (this.password === this.confirmPassword) {
        return true;
      } else {
        return "Password tidak cocok";
      }
    },
    async register() {
      try {
        const res = await axios.post(`${this.$api}/register`, {
          name: this.userName,
          password: this.password,
          email: this.email,
          password_confirmation: this.confirmPassword,
          phone_number: this.phoneNum,
        });
        console.log(res.data);
        if (res.status == 200) {
          localStorage.setItem("data", JSON.stringify(res.data));
          var data = JSON.parse(localStorage.getItem("data"));
          axios.defaults.headers.common[
            "Authorization"
          ] = `Bearer ${data.access_token}`;
          this.$router.push({ name: "home" });
        }
      } catch (error) {
        console.log(error);
        const errorMessage = error.response.data;

        this.errorMessage = errorMessage;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.form {
  &--logreg {
    margin: 40px 0;
  }
}
</style>
