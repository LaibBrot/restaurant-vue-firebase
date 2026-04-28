<template>
  <main class="main-height main-height-min-h container-xxl">

    <div class="content-div">

      <!-- Заголовок -->
      <div class="head-h-1-12">
        <h2 class="head-h-1-2 head-h-1-2-res">Бронирование стола</h2>
        <div class="head-p-1-2-div-in">
          <p class="head-p-1-2 head-p-1-2-a">г.Алматы <br>пр.Достык 172</p>
          <p class="head-p-1-2 head-p-1-2-a">Вс - Чт 12:00 - 01:00<br>Пт - Сб 12:00 - 02:00</p>
        </div>
        <p class="head-p-1-2 head-p-1-2-a">+7 (778) 841-67-29</p>
      </div>

      <!-- Хлебные крошки -->
      <div class="head-pages-normal">
        <router-link class="head-pages-1" to="/">Главная</router-link>
        <p class="head-pages-1">/</p>
        <p class="head-pages-2">Бронирование стола</p>
      </div>

      <div class="all-reservation-flex">

        <!-- Форма -->
        <div class="all-reservation">
          <div class="order-block">
            <p class="res-p">Выберите параметры:</p>

            <input v-model="date" class="office-input" type="date">
            <input v-model="time" class="office-input" type="time">
            <input v-model="people" class="office-input" type="number" min="1" max="12">

            <div class="order-block-button">
              <button class="order-block-button-top" @click="checkTables">
                ПОКАЗАТЬ ДОСТУПНЫЕ СТОЛИКИ
              </button>
            </div>

            <!-- Список столов -->
            <div class="tables-list">
              <button
                v-for="table in availableTables"
                :key="table.name"
                @click="selectTable(table.name)"
                class="table-btn"
              >
                {{ table.name }} (до {{ table.maxSeats }} чел)
              </button>

              <p v-if="tableMessage" style="color:white">
                {{ tableMessage }}
              </p>
            </div>

            <!-- выбранный стол -->
            <div class="selected-table">
              Выбранный столик:
              <span class="selected-table-con">
                {{ selectedTable || '—' }}
              </span>
            </div>
          </div>

          <button class="confirm-order-div" @click="confirmReservation">
            ПОДТВЕРДИТЬ
          </button>
        </div>

        <!-- заказ -->
        <div v-if="order" class="order-block-2">
          <p class="res-p">Ваш заказ:</p>

          <p class="office-input-con"><b>Имя:</b> {{ order.name }}</p>
          <p class="office-input-con"><b>Телефон:</b> {{ order.phone }}</p>
          <p class="office-input-con"><b>Email:</b> {{ order.email }}</p>
          <p class="office-input-con"><b>Дата:</b> {{ order.date }}</p>
          <p class="office-input-con"><b>Время:</b> {{ order.time }}</p>
          <p class="office-input-con"><b>Персон:</b> {{ order.people }}</p>
          <p class="office-input-con"><b>Стол:</b> {{ order.table }}</p>

          <div class="order-buttons">
            <button class="edit-order" @click="editOrder">Изменить</button>
            <button class="edit-order" @click="deleteOrder">Удалить</button>
          </div>
        </div>

      </div>
    </div>

    <div class="contact-us-bg-3">
      <img src="/src/assets/images/contact-us-bg-2.png" width="500" />
    </div>

  </main>
</template>

<script setup>
import { ref, onMounted } from 'vue'

// 🔥 Firebase
import {
  watchAuth,
  getProfile,
  loadTables,
  saveReservation,
  deleteCurrentReservation,
  loadReservations,
  loadCart
} from '@/services/firebase'

// 📊 state
const date = ref('')
const time = ref('')
const people = ref('')
const selectedTable = ref(null)

const availableTables = ref([])
const tableMessage = ref('')

const cart = ref([])
const currentUser = ref(null)
const order = ref(null)

// 🔥 ЗАГРУЗКА ПОЛЬЗОВАТЕЛЯ + ДАННЫХ
onMounted(() => {
  watchAuth(async (user) => {
    if (!user) return

    currentUser.value = await getProfile(user.uid)

    // 📦 загрузка корзины
    cart.value = await loadCart()

    // 📅 загрузка существующей брони
    const reservations = await loadReservations()
    if (reservations.length) {
      order.value = reservations[0]
    }
  })
})

// 🔍 ПОКАЗ СТОЛОВ
async function checkTables() {
  tableMessage.value = ''

  if (!date.value || !time.value || !people.value) {
    alert('Заполните все параметры')
    return
  }

  const tables = await loadTables()

  const filtered = tables.filter(
    t => t.maxSeats >= Number(people.value) && t.active
  )

  if (!filtered.length) {
    availableTables.value = []
    tableMessage.value = 'Нет доступных столиков'
    return
  }

  availableTables.value = filtered
}

// 🪑 выбор стола
function selectTable(name) {
  selectedTable.value = name
}

async function confirmReservation() {
  if (!currentUser.value) {
    alert('Профиль загружается...')
    return
  }

  if (!date.value || !time.value || !people.value || !selectedTable.value) {
    alert('Заполните все поля')
    return
  }

  const orderData = {
    name: currentUser.value.name,
    email: currentUser.value.email,
    phone: currentUser.value.phone ?? 'Не указан',
    date: date.value,
    time: time.value,
    people: Number(people.value),
    table: selectedTable.value
  }

  await saveReservation(orderData)
  order.value = orderData
  alert('Бронь создана!')

  date.value = ''
  time.value = ''
  people.value = ''
  selectedTable.value = null
  availableTables.value = []
}

// ✏️ редактирование
function editOrder() {
  date.value = order.value.date
  time.value = order.value.time
  people.value = order.value.people
  selectedTable.value = order.value.table
  order.value = null
}

// 🗑 удаление
async function deleteOrder() {
  await deleteCurrentReservation()

  order.value = null
  selectedTable.value = null
}
</script>