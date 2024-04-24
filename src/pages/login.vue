<template>
  <div class="container">
    <div class="box" :style="boxStyle()">

      <div class="heading">Login Account</div>
      <div class="desc">Please Login to your Account</div>
      <v-form class="form" @submit.prevent>
        <v-responsive class="input-bar">
          <v-text-field class="input-handler" :rules="[required]" ref="emailInput" label="Email"
            variant="outlined"></v-text-field>
          <v-text-field class="input-handler" :rules="[required]" ref="passwordInput" label="Password"
            :type="showPassword ? 'text' : 'password'" :append-inner-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
            @click:append-inner="togglePassword" variant="outlined"></v-text-field>
        </v-responsive>

        <div class="forgot-container">
          <v-btn class="forgot" variant="text">Forgot Password?</v-btn>
        </div>
        <div class="hline"></div>
        <v-btn :loading="loading" @click="login" class="button" type="submit" block>Login</v-btn>
        <v-alert v-show="error" class="error" variant="tonal" color="error"
          text="Incorrect Email or Password!"></v-alert>
        <div class="signup">Don't have an account?
          <v-btn @click="shift" class="forgot" variant="text">Sign Up!</v-btn>
        </div>
      </v-form>

    </div>
  </div>
</template>

<script setup>
import router from "./../router/index";
import { ref } from "vue";
import { API, setToken, setUID } from "../main"

const showPassword = ref(false);
const emailInput = ref(null);
const passwordInput = ref(null);
const loading = ref(false);
const error = ref(false);

function required(v) {
  return !!v || 'Field is required'
}


function boxStyle() {
  return {
    maxHeight: error.value ? '700px' : '650px',
  }

}

function togglePassword() {
  showPassword.value = !showPassword.value;
  setTimeout(() => {
    passwordInput.value.focus();
    passwordInput.value.selectionStart = passwordInput.value.value.length;
  }, 0);
}

function login() {
  let checkUser = async () => {
    error.value = false;
    if (!emailInput.value.value || !passwordInput.value.value) return;
    loading.value = true;
    const response = await fetch(API + '/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: emailInput.value.value,
        password: passwordInput.value.value
      })
    });
    const data = await response.json();
    console.log(data)
    loading.value = false;
    if (data['status'] == '200') {
      console.log(data['data'])
      let temp = JSON.parse(data['data'])
      setToken(temp['token']);
      setUID(temp['uid']);
      router.push("/panel");
    }
    else {
      error.value = true;
    }
  }
  checkUser();
}

function shift() {
  router.push("/signup");
}
</script>

<style scoped>
.form {
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100svw;
  height: 100svh;
  background: var(--gradient-color)
}

.box {
  width: 500px;
  height: 90%;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  text-align: center;
  overflow-y: auto;
}


img {
  width: 160px;
  margin-top: 20px;
  user-select: none;
}

.heading {
  font-size: 32px;
  font-weight: 600;
  margin: 70px 0 20px 0;
}

.desc {
  font-size: 15px;
  margin: 5px 50px;
}

.hline {
  width: 100%;
  height: 1px;
  background-color: #ccc;
  margin-top: 20px;
  margin-bottom: 20px;
}

.button {
  margin-top: 20px;
  background-color: var(--primary);
  color: white;
  font-weight: 600;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 400;
  font-family: "Roboto";
  height: 50px !important;
}

.input-bar {
  width: 100%;
  display: flex;
  flex-grow: 0;
  padding: 40px 0 0 0;
}

.forgot {
  font-size: 16px;
  color: var(--primary);
  text-transform: none;
  letter-spacing: 0px;
  cursor: pointer;
  padding: 5px;

}

.signup {
  font-size: 16px;
  margin-top: 20px;
  margin-bottom: 40px;
  display: flex;
  align-items: center
}

.forgot-container {
  display: flex;
  justify-content: end;
  width: 100%;
}

.input-handler {
  width: 100%;
  margin-bottom: 5px;
  text-align: left;
}

.error {
  width: 100%;
  margin-top: 20px;
  margin-bottom: -10px;

}

@media screen and (max-width: 500px) {
  .box {
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    max-height: 100%;
  }

  .phone {
    flex-grow: 0;
    height: 30px;
  }

  .form {
    width: 85%;
  }

  .heading {
    margin: 40px 0 10px 0;
  }
}
</style>
