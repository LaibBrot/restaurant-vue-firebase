<template>
  <main class="main-height main-height-min-h container-xxl">
    <router-link to="/reservation">
      <div class="nav-right-res-a">ЗАБРОНИРОВАТЬ СТОЛ</div>
    </router-link>

    <div class="head-h-0 head-h-0-c">
      <h2 class="head-h-1-2">Вход</h2>

      <div class="head-pages head-pages-4">
        <router-link class="head-pages-1" to="/">Главная</router-link>
        <p class="head-pages-slash">/</p>
        <p class="head-pages-2">Вход</p>
      </div>

      <div class="all-contact-us">
        <div class="contact-us">
          <p class="contact-us-div-p">EMAIL:</p>

          <input v-model="email" type="email" class="office-input-3" />
        </div>

        <div class="contact-us">
          <p class="contact-us-div-p">ПАРОЛЬ:</p>

          <input v-model="password" type="password" class="office-input-3" />
        </div>

        <router-link to="/register" class="head-pages-1">
          Нет аккаунта? <u>Регистрация</u>
        </router-link>

        <div class="contact-us-send" @click="login">
          ВОЙТИ
        </div>
      </div>

      <div class="contact-us-bg-2">
        <img src="/src/assets/images/contact-us-bg-2.png" alt="" width="500" />
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { loginUser } from '@/services/firebase'

const email = ref('')
const password = ref('')
const router = useRouter()

async function login() {
  if (!email.value || !password.value) {
    alert('Введите email и пароль')
    return
  }

  try {
    await loginUser(email.value, password.value)
    router.push('/profile')
  } catch (e) {
    alert(e.message)
  }
}
</script>