<template>
    <v-container class="wrapper" >
      <img class="img-logo" src="../img/logo.svg" >
      <h2 class="h2-autorization"> Авторизация </h2>

      <form class="wrapper-select">
          <input
            class="text-field"
            placeholder="Ваш ID"
            v-model.trim="email"
            :class = "{
              invalidInput:
                ($v.email.$dirty && !$v.email.required) ||
                ($v.email.$dirty && !$v.email.email)
            }"
          >
          
          <input
            placeholder="Ваш пароль"
            type="password"
            class = "text-field"
            v-model.trim="password"
            :class="{
              invalidInput:
                ($v.password.$dirty && !$v.password.required) ||
                ($v.password.$dirty && !$v.password.minLength)
            }">
          
          <v-btn class="btn-enter" :disabled="btnDisabled" @click="submitHandler()">
           <p>Войти </p>
            <v-progress-circular
              class="loader"
              :size="70"
              :width="7"
              indeterminate
              v-show="loader"
            ></v-progress-circular>
           </v-btn>

          <a class="link-text" href="#"> Забыли пароль или ID? </a>
        </form>
    </v-container>
</template>

<script>
import { email, required, minLength } from "vuelidate/lib/validators";

export default {
  name: "autorization",
  data: () => ({
    email: "",
    password: "",
    btnDisabled: true,
    loader: false,
  }),

  validations: {
    email: { email, required },
    password: { required, minLength: minLength(6) }
  },

  methods: {
    submitHandler() {
      console.log('\x1b[36m%s\x1b[0m','!!Данные отправлены на сервер!!')
      this.loader = true
      this.btnDisabled = true
    },

    validatorInput() {
      if (this.$v.$invalid) {
            this.$v.$touch();
            this.btnDisabled = true
            return;
      }
       this.btnDisabled = false
    }
  },

  watch: {
    email() {
     this.validatorInput()
    },

    password() {
      this.validatorInput()
    }
  }
}

</script>

<style scoped>
.wrapper {
 margin-top: 10%;
}

.wrapper-select{
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-content: center;
}

.text-field {
  padding-left: 24px;
  outline:none;
  border-radius: 4px;
  border: 1px solid black;
  width: 394px ;
  height: 48px ;
}

.text-field:nth-child(2) {
  margin-top: 16px;
}

.link-text{
  margin-top: 24px;
  color: #000 !important;
  text-decoration: none;
}

.invalidInput  {
  border: 1px solid #E30613;
}

.img-logo {
  height: 48px;
  width: 48px;
}

.h2-autorization {
  margin-top: 24px;
  margin-bottom: 32px;
}

 /* CUSTOM ELEMENTS */
.btn-enter {
  margin-top: 24px !important;
  width: 394px !important;
  height: 48px !important;
  color: #FFFFFF !important;
  background: #E30613 !important;
}


.loader {
  position: absolute !important;
  color: #E30613 !important;
}

</style>
