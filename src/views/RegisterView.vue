<template>
  <div class="form--logreg">
    <p class="title-form">Daftar</p>
    <div class="form--logreg__group">
      <p>Nama</p>
      <v-text-field label="Nama" single-line outlined></v-text-field>
    </div>
    <div class="form--logreg__group">
      <p>Email</p>
      <v-text-field
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
        label="Nomor HP"
        single-line
        outlined
        :rules="numberRules"
      ></v-text-field>
    </div>
    <div class="form--logreg__group">
      <p>Password</p>
      <v-text-field
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
      <p>Password</p>
      <v-text-field
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
    <v-btn block class="text-capitalize login-btn">Masuk</v-btn>
  </div>
</template>

<script>
export default {
  name: "RegisterView",
  data: () => ({
    showPassword: false,
    show4: false,
    email: "",
    confirmPassword: "",
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
