<template>
  <main class="main-height main-height-min-h container-xxl">
    <div class="head-h-0 head-h-0-c">
      <h2 class="head-h-1-2">Регистрация</h2>

      <div class="head-pages-normal">
        <router-link class="head-pages-1" to="/">Главная</router-link>
        <p class="head-pages-1">/</p>
        <p class="head-pages-2">Регистрация</p>
      </div>

      <div class="all-contact-us">
        <div class="contact-us">
          <p class="contact-us-div-p">ИМЯ:</p>
          <input v-model="name" class="office-input-3" />
        </div>

        <div class="contact-us">
          <p class="contact-us-div-p">EMAIL:</p>
          <input v-model="email" class="office-input-3" />
        </div>

        <div class="contact-us">
          <p class="contact-us-div-p">ТЕЛЕФОН:</p>
          <input v-model="phone" type="tel" class="office-input-3" />
        </div>

        <div class="contact-us">
          <p class="contact-us-div-p">ПАРОЛЬ:</p>
          <input v-model="password" type="password" class="office-input-3" />
        </div>

        <div class="contact-us-send" @click="register">
          СОЗДАТЬ АККАУНТ
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

import { registerUser } from '@/services/firebase'

const name = ref('')
const email = ref('')
const phone = ref('')
const password = ref('')

const router = useRouter()

async function register() {
  if (!name.value || !email.value || !phone.value || !password.value) {
    alert('Пожалуйста, заполните все поля')
    return
  }

  try {
    await registerUser(
      name.value,
      email.value,
      phone.value,
      password.value
    )

    alert('Аккаунт создан!')
    router.push('/profile')

  } catch (error) {
    console.error(error)
    alert(error.message || 'Ошибка регистрации')
  }
}
</script>