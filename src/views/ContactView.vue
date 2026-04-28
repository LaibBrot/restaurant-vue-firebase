<template>
  <main class="main-height main-height-min-h container-xxl">
    <router-link to="/reservation">
      <div class="nav-right-res-a">ЗАБРОНИРОВАТЬ СТОЛ</div>
    </router-link>

    <div class="head-h-0 head-h-0-c">
      <h2 class="head-h-1-2">Обратная связь</h2>

      <div class="head-pages head-pages-4">
        <router-link class="head-pages-1" to="/">Главная</router-link>
        <p class="head-pages-slash">/</p>
        <p class="head-pages-2">Обратная связь</p>
      </div>

      <div class="all-contact-us">
        <div class="contact-us">
          <p class="contact-us-div-p">
            ВАШ ВОПРОС, ОТЗЫВ ИЛИ ПОЖЕЛАНИЕ:
          </p>

          <textarea
            v-model="message"
            class="office-input-2"
          ></textarea>
        </div>

        <div class="contact-us">
          <p class="contact-us-div-p">
            EMAIL ДЛЯ ПОЛУЧЕНИЯ ОТВЕТА:
          </p>

          <input
            v-model="email"
            type="email"
            class="office-input-3"
          />
        </div>

        <div class="contact-us-send" @click="sendMessage">
          ОТПРАВИТЬ
        </div>
      </div>

      <div class="contact-us-bg-2">
        <img
          src="/src/assets/images/contact-us-bg-2.png"
          alt=""
          width="500"
        />
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref } from 'vue'

const message = ref('')
const email = ref('')

function sendMessage() {
  if (!message.value || !email.value) {
    alert('Заполните все поля')
    return
  }

  console.log('Сообщение:', message.value)
  console.log('Email:', email.value)

  alert('Сообщение отправлено!')

  message.value = ''
  email.value = ''
}
</script>