<template>
  <div class="form--logreg">
    <p class="title-form">Masuk</p>
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
      <p>Password</p>
      <v-text-field
        label="Password"
        single-line
        outlined
        :append-icon="show4 ? 'mdi-eye' : 'mdi-eye-off'"
        :rules="[rules.required, rules.emailMatch]"
        :type="show4 ? 'text' : 'password'"
        name="input-10-2"
        value=""
        @click:append="show4 = !show4"
      ></v-text-field>
    </div>
    <v-btn block class="text-capitalize login-btn">Masuk</v-btn>
    <div class="have-account">
      <p>Belum punya akun?</p>
      <router-link to="/register" class="register-or-login">
        Daftar
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginView",
  data: () => ({
    showPassword: false,
    password: null,
    show4: false,
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
    rules: {
      required: (value) => !!value || "Required.",
      email: (value) => {
        const pattern =
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return pattern.test(value) || "Invalid e-mail.";
      },
    },
  }),
};
</script>

<style lang="scss">
.form {
  &--logreg {
    background-color: $white;
    border-radius: 30px;
    padding: 3rem;
    width: 100%;

    .title-form {
      font-size: 1.5rem;
      font-weight: 600;
      margin-bottom: 30px;
    }

    &__group {
      p {
        margin-bottom: 5px;
        font-size: 14px;
        color: $primary-color;
      }
    }

    .login-btn {
      height: auto !important;
      padding: 15px !important;
      background-color: $primary-color !important;
      border-radius: 10px !important;
      margin-top: 20px;

      span {
        color: $white;
        font-weight: $font-weight-reg;
        font-size: 18px;
        letter-spacing: 0;
      }
    }
  }
}

.have-account {
  display: flex;
  gap: 5px;
  margin-top: 5px;

  p {
    font-size: 14px !important;
  }

  .register-or-login {
    color: $steel-blue;
    font-size: 14px;
  }
}

.v-text-field {
  &--outlined {
    fieldset {
      border-width: 2px;
      border-color: $primary-color !important;
      border-radius: 10px;
    }
  }
  &__details {
    padding: 0 !important;
  }

  .mdi-eye-off,
  .mdi-eye {
    &::before {
      color: $black;
    }
  }
}
</style>
