<template>
  <main class="container-xxl main-height main-height-min-h">
    <div class="head-h-0">
      <div class="head-h-0-profile-flex">
        <div class="head-h-0-profile">
          <h2 class="head-h-1-2">Пользователи</h2>

          <div v-for="user in users" :key="user.id" style="border:1px solid white;margin:10px;padding:10px;color:white">
            <p>Имя: {{ user.name }}</p>
            <p>Email: {{ user.email }}</p>
            <p>Телефон: {{ user.phone }}</p>
            <p>UID: {{ user.id }}</p>

            <button class="nav-right-res nav-right-res-admin-button" @click="handleDeleteUser(user.id)">
              Удалить пользователя
            </button>
          </div>
        </div>

        <div class="head-h-0-profile">
          <h2 class="head-h-1-2">Бронирования</h2>

          <div v-for="reservation in reservations" :key="reservation.id"
            style="border:1px solid white;margin:10px;padding:10px;color:white">
            <p><b>Пользователь:</b> {{ getUserName(reservation.userId) }}</p>
            <p>Email: {{ getUserEmail(reservation.userId) }}</p>
            <p>Телефон: {{ getUserPhone(reservation.userId) }}</p>

            <p>Дата: {{ reservation.date || '—' }}</p>
            <p>Время: {{ reservation.time || '—' }}</p>
            <p>Стол: {{ reservation.table || '—' }}</p>
            <p>Персон: {{ reservation.people || '—' }}</p>

            <input v-model="reservation.table" class="office-input-3 office-input-3-admin" placeholder="Новый стол" />

            <input v-model="reservation.date" class="office-input-3 office-input-3-admin" type="date" />

            <input v-model="reservation.time" class="office-input-3 office-input-3-admin" type="time" />

            <input v-model="reservation.people" class="office-input-3 office-input-3-admin" type="number" min="1"
              placeholder="Персон" />

            <div class="admin-div">
              <button class="nav-right-res nav-right-res-admin-button nav-right-res-admin-button-2"
                @click="handleUpdateReservation(reservation)">
                Сохранить изменения
              </button>

              <button class="nav-right-res nav-right-res-admin-button nav-right-res-admin-button-2"
                @click="handleDeleteReservation(reservation.id)">
                Удалить бронь
              </button>
            </div>
          </div>
        </div>

        <div class="head-h-0-profile">
          <h2 class="head-h-1-2">Заказы</h2>

          <div v-for="order in orders" :key="order.id"
            style="border:1px solid white; margin:10px; padding:10px; color:white;">
            <p><b>Пользователь:</b> {{ getUserName(order.userId) }}</p>
            <p>Email: {{ getUserEmail(order.userId) }}</p>
            <p>Телефон: {{ getUserPhone(order.userId) }}</p>
            <p>UID: {{ order.userId }}</p>

            <div v-for="(item, index) in order.items" :key="index"
              style="border-top:1px solid rgba(255,255,255,0.2); margin-top:10px; padding-top:10px;">
              <p><b>Блюдо:</b> {{ item.name }}</p>
              <p>Цена: {{ item.price }} ₸</p>
              <p>Вес: {{ item.weight || '—' }}</p>
              <p>Количество: {{ item.quantity }}</p>
              <p>Сумма: {{ item.price * item.quantity }} ₸</p>

              <input v-model="item.newQuantity" class="office-input-3 office-input-3-admin" type="number" min="1"
                placeholder="Новое количество" />

              <div class="admin-div">
                <button class="nav-right-res nav-right-res-admin-button nav-right-res-admin-button-2"
                  @click="handleUpdateOrderItemQuantity(order.id, index, item.newQuantity)">
                  Изменить количество
                </button>

                <button class="nav-right-res nav-right-res-admin-button nav-right-res-admin-button-2"
                  @click="handleDeleteOrderItem(order.id, index)">
                  Удалить товар
                </button>
              </div>
            </div>

            <div style="border-top:1px solid rgba(255,255,255,0.2); margin-top:10px; padding-top:10px;">
              <div class="admin-div" style="margin-top:1px;">
                <button class="nav-right-res nav-right-res-admin-button nav-right-res-admin-button-3"
                  @click="handleDeleteOrder(order.id)">
                  Удалить весь заказ
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import {
  loadAllUsers,
  loadAllReservations,
  loadAllOrders,
  deleteUser,
  deleteReservation,
  updateReservationData,
  deleteOrder,
  updateOrderItemQuantity,
  deleteOrderItem
} from '@/services/firebase'

const users = ref([])
const reservations = ref([])
const orders = ref([])

// 🔥 ЗАГРУЗКА ДАННЫХ
onMounted(async () => {
  users.value = await loadAllUsers()
  reservations.value = await loadAllReservations()
  orders.value = await loadAllOrders()
})


// ======================
// ВСПОМОГАТЕЛЬНЫЕ
// ======================

function getUserName(userId) {
  const user = users.value.find(u => u.id === userId)
  return user ? user.name : 'Неизвестно'
}

function getUserEmail(userId) {
  const user = users.value.find(u => u.id === userId)
  return user ? user.email : ''
}

function getUserPhone(userId) {
  const user = users.value.find(u => u.id === userId)
  return user ? user.phone : ''
}


// ======================
// USERS
// ======================

async function handleDeleteUser(userId) {
  if (!confirm('Удалить пользователя?')) return

  try {
    await deleteUser(userId)
    users.value = users.value.filter(u => u.id !== userId)
  } catch (e) {
    alert(e.message)
  }
}


// ======================
// RESERVATIONS
// ======================

async function handleUpdateReservation(reservation) {
  try {
    await updateReservationData(
      reservation.id,
      reservation.table,
      reservation.date,
      reservation.time,
      reservation.people
    )
    alert('Обновлено')
  } catch (e) {
    alert(e.message)
  }
}

async function handleDeleteReservation(reservationId) {
  if (!confirm('Удалить бронь?')) return

  try {
    await deleteReservation(reservationId)
    reservations.value = reservations.value.filter(r => r.id !== reservationId)
  } catch (e) {
    alert(e.message)
  }
}


// ======================
// ORDERS
// ======================

async function handleDeleteOrder(orderId) {
  if (!confirm('Удалить заказ?')) return

  try {
    await deleteOrder(orderId)
    orders.value = orders.value.filter(o => o.id !== orderId)
  } catch (e) {
    alert(e.message)
  }
}

async function handleUpdateOrderItemQuantity(orderId, index, quantity) {
  try {
    await updateOrderItemQuantity(orderId, index, quantity)
    alert('Количество обновлено')
  } catch (e) {
    alert(e.message)
  }
}

async function handleDeleteOrderItem(orderId, index) {
  if (!confirm('Удалить товар?')) return

  try {
    await deleteOrderItem(orderId, index)
    alert('Удалено')
  } catch (e) {
    alert(e.message)
  }
}
</script>