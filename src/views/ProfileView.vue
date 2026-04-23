<template>
  <main class="main-height main-height-min-h container-xxl">
    <div class="head-h-0">
      <!-- Хлебные крошки -->
      <div class="head-pages-normal head-pages-normal-bot">
        <router-link class="head-pages-1" to="/">Главная</router-link>
        <p class="head-pages-1">/</p>
        <p class="head-pages-2">Профиль</p>
      </div>

      <div class="head-h-0-profile-flex">
        
        <!-- 👤 Профиль -->
        <div class="head-h-0-profile">
          <h2 class="head-h-1-2">Профиль пользователя</h2>

          <div class="all-contact-us">
            <div class="contact-us">
              <p class="contact-us-div-p">Имя:</p>
              <div>{{ userData.name || '—' }}</div>
            </div>

            <div class="contact-us">
              <p class="contact-us-div-p">Email:</p>
              <div>{{ userData.email }}</div>
            </div>

            <div class="contact-us">
              <p class="contact-us-div-p">Телефон:</p>
              <div>{{ userData.phone || '—' }}</div>
            </div>

            <div class="contact-us">
              <p class="contact-us-div-p">UID:</p>
              <div>{{ userData.uid }}</div>
            </div>

            <div class="contact-us">
              <p class="contact-us-div-p admin-p">Вы админ?</p>
              <div>{{ userData.role === 'admin' ? 'Да' : 'Нет' }}</div>
            </div>

            <!-- 🔥 Кнопка админа -->
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

        <!-- 📅 Бронирования -->
        <div class="head-h-0-profile">
          <h2 class="head-h-1-2">Ваше бронирование</h2>

          <div class="all-contact-us">
            <p v-if="!reservations.length" style="color:white">
              Бронирований нет
            </p>

            <template v-for="(r, index) in reservations" :key="index">
              <div class="contact-us">
                <p class="contact-us-div-p">Дата:</p>
                <div>{{ r.date || '—' }}</div>
              </div>

              <div class="contact-us">
                <p class="contact-us-div-p">Время:</p>
                <div>{{ r.time }}</div>
              </div>

              <div class="contact-us">
                <p class="contact-us-div-p">Персон:</p>
                <div>{{ r.people || '—' }}</div>
              </div>

              <div class="contact-us">
                <p class="contact-us-div-p">Стол:</p>
                <div>{{ r.table }}</div>
              </div>
            </template>
          </div>
        </div>

        <!-- 🛒 Заказы -->
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
                  <div>{{ item.name || '—' }}</div>
                </div>

                <div class="contact-us">
                  <p class="contact-us-div-p">Вес:</p>
                  <div>{{ item.weight || '—' }}</div>
                </div>

                <div class="contact-us">
                  <p class="contact-us-div-p">Цена:</p>
                  <div>{{ item.price }} ₽</div>
                </div>

                <div class="contact-us">
                  <p class="contact-us-div-p">Количество:</p>
                  <div>{{ item.quantity }}</div>
                </div>

                <div class="contact-us">
                  <p class="contact-us-div-p">Сумма:</p>
                  <div>{{ item.price * item.quantity }} ₽</div>
                </div>

                <hr style="border-color:white; opacity:0.3;">
              </div>
            </template>

            <!-- 💰 Итог -->
            <div v-if="orders.length" class="contact-us">
              <p class="contact-us-div-p">Итого:</p>
              <div>{{ totalPrice }} ₽</div>
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

// 🔥 Firebase
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

// 🔄 загрузка данных
onMounted(() => {
  watchAuth(async (user) => {
    if (!user) {
      router.push('/login')
      return
    }

    // 👤 профиль
    const data = await getProfile(user.uid)
    userData.value = {
      ...data,
      uid: user.uid
    }

    // 📅 брони
    reservations.value = await loadReservations()

    // 🛒 заказы
    const userOrders = await loadOrders()

    // 🔥 у тебя loadOrders возвращает список заказов пользователя
    // берём items из первого (как в старом проекте)
    if (userOrders.length) {
      orders.value = userOrders[0].items || []
    }
  })
})

// 💰 итог
const totalPrice = computed(() =>
  orders.value.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  )
)

// 🔐 выход
async function logout() {
  await logoutUser()
  router.push('/login')
}

// 👑 переход в админку
function goToAdmin() {
  router.push('/admin')
}
</script>