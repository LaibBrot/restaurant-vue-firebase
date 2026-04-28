<template>
  <main class="main-height main-height-min-h container-xxl">
    <div class="head-h-0">
      <div class="head-pages-normal head-pages-normal-bot">
        <router-link class="head-pages-1" to="/">Главная</router-link>
        <p class="head-pages-1">/</p>
        <p class="head-pages-2">Профиль</p>
      </div>

      <div class="head-h-0-profile-flex">
        
        <div class="head-h-0-profile">
          <h2 class="head-h-1-2">Профиль пользователя</h2>

          <div class="all-contact-us">
            <div class="contact-us">
              <p class="contact-us-div-p">Имя:</p>
              <div class="white">{{ userData.name || '—' }}</div>
            </div>

            <div class="contact-us">
              <p class="contact-us-div-p">Email:</p>
              <div class="white">{{ userData.email }}</div>
            </div>

            <div class="contact-us">
              <p class="contact-us-div-p">Телефон:</p>
              <div class="white">{{ userData.phone || '—' }}</div>
            </div>

            <div class="contact-us">
              <p class="contact-us-div-p">UID:</p>
              <div class="white">{{ userData.uid }}</div>
            </div>

            <div class="contact-us">
              <p class="contact-us-div-p admin-p">Вы админ?</p>
              <div class="white">{{ userData.role === 'admin' ? 'Да' : 'Нет' }}</div>
            </div>

            <div v-if="userData.role === 'admin'" class="admin-div">
              <div class="button-admin" @click="goToAdmin">
                ПЕРЕЙТИ В АДМИН ПАНЕЛЬ
              </div>
            </div>
          </div>

          <div class="contact-us-send" @click="logout">
            ВЫЙТИ
          </div>
        </div>

        <div class="head-h-0-profile">
          <h2 class="head-h-1-2">Ваше бронирование</h2>

          <div class="all-contact-us">
            <p v-if="!reservations.length" style="color:white">
              Бронирований нет
            </p>

            <template v-for="(r, index) in reservations" :key="index">
              <div class="contact-us">
                <p class="contact-us-div-p">Дата:</p>
                <div class="white">{{ r.date || '—' }}</div>
              </div>

              <div class="contact-us">
                <p class="contact-us-div-p">Время:</p>
                <div class="white">{{ r.time }}</div>
              </div>

              <div class="contact-us">
                <p class="contact-us-div-p">Персон:</p>
                <div class="white">{{ r.people || '—' }}</div>
              </div>

              <div class="contact-us">
                <p class="contact-us-div-p">Стол:</p>
                <div class="white">{{ r.table }}</div>
              </div>
            </template>
          </div>
        </div>

        <div class="head-h-0-profile head-h-0-profile-2">
          <h2 class="head-h-1-2">Ваш заказ меню</h2>

          <div class="all-contact-us">
            <p v-if="!orders.length" style="color:white">
              Заказ пуст
            </p>

            <template v-for="(item, index) in orders" :key="index">
              <div class="order-profile">
                <div class="contact-us">
                  <p class="contact-us-div-p">Блюдо:</p>
                  <div class="white">{{ item.name || '—' }}</div>
                </div>

                <div class="contact-us">
                  <p class="contact-us-div-p">Вес:</p>
                  <div class="white">{{ item.weight || '—' }}</div>
                </div>

                <div class="contact-us">
                  <p class="contact-us-div-p">Цена:</p>
                  <div class="white">{{ item.price }} ₸</div>
                </div>

                <div class="contact-us">
                  <p class="contact-us-div-p">Количество:</p>
                  <div class="white">{{ item.quantity }}</div>
                </div>

                <div class="contact-us">
                  <p class="contact-us-div-p">Сумма:</p>
                  <div class="white">{{ item.price * item.quantity }} ₸</div>
                </div>

                <hr style="border-color:white; opacity:0.3;">
              </div>
            </template>

            <div v-if="orders.length" class="contact-us">
              <p class="contact-us-div-p">Итого:</p>
              <div class="white">{{ totalPrice }} ₸</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </main>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'

import {
  watchAuth,
  getProfile,
  loadOrders,
  loadReservations,
  logoutUser
} from '@/services/firebase'


const router = useRouter()

const userData = ref({})
const reservations = ref([])
const orders = ref([])

onMounted(() => {
  watchAuth(async (user) => {
    if (!user) {
      router.push('/login')
      return
    }

    const data = await getProfile(user.uid)
    userData.value = {
      ...data,
      uid: user.uid
    }
    reservations.value = await loadReservations()

    const userOrders = await loadOrders()

    if (userOrders.length) {
      orders.value = userOrders[0].items || []
    }
  })
})

const totalPrice = computed(() =>
  orders.value.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  )
)

async function logout() {
  await logoutUser()
  router.push('/login')
}

function goToAdmin() {
  router.push('/admin')
}
</script>