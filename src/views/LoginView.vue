<template>
  <div class="form--logreg">
    <p class="title-form">Masuk</p>
    <div class="form--logreg__group">
      <p>Email</p>
      <v-text-field
        label="Email"
        single-line
        outlined
        :rules="[rules.required, rules.counter]"
      ></v-text-field>
    </div>
    <div class="form--logreg__group">
      <v-text-field
        :append-icon="show3 ? 'mdi-eye' : 'mdi-eye-off'"
        :rules="[rules.required, rules.min]"
        :type="show3 ? 'text' : 'password'"
        name="input-10-2"
        label="Not visible"
        hint="At least 8 characters"
        value=""
        class="input-group--focused"
        @click:append="show3 = !show3"
      ></v-text-field>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginView",
  data: () => ({
    show3: false,
    password: "Password",
    // title: "Preliminary report",
    email: "",
    rules: {
      required: (value) => !!value || "Required.",
      email: (value) => {
        const pattern =
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return pattern.test(value) || "Invalid e-mail.";
      },
      min: (v) => v.length >= 8 || "Min 8 characters",
      emailMatch: () => `The email and password you entered don't match`,
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

    .title-form {
      font-size: 1.5rem;
      font-weight: 600;
    }

    &__group {
      p {
        margin-bottom: 5px;
        font-size: 14px;
        color: $primary-color;
      }
    }
  }
}

.v-text-field {
  &--outlined {
    fieldset {
      border-width: 2px;
      border-color: $primary-color !important;
    }
  }
}
</style>
