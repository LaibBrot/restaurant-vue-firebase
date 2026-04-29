<template>
  <main class="main-height main-height-min-h container-xxl">
    <router-link to="/reservation">
      <div class="nav-right-res-a">ЗАБРОНИРОВАТЬ СТОЛ</div>
    </router-link>

    <div class="head-h-0">
      <div class="head-h-sum">
        <h2 class="head-h-1-s">Корзина</h2>
        <p class="cart-sum">{{ totalCount }} шт</p>
      </div>

      <div class="head-pages">
        <router-link class="head-pages-1" to="/">Главная</router-link>
        <p class="head-pages-slash">/</p>
        <p class="head-pages-2">Корзина</p>
      </div>
    </div>

    <div class="all-shopping-cart-cards">
      <div class="shopping-cart-cards-p">
        <p class="shopping-cart-cards-p-0 shopping-cart-cards-p-1">БЛЮДО:</p>
        <p class="shopping-cart-cards-p-0 shopping-cart-cards-p-2">ЦЕНА:</p>
        <p class="shopping-cart-cards-p-0 shopping-cart-cards-p-3">КОЛ-ВО:</p>
        <p class="shopping-cart-cards-p-0 shopping-cart-cards-p-4">СУММА:</p>
      </div>

      <p v-if="!cart.length" style="color:white">
        Корзина пуста
      </p>

      <div
        v-for="item in cart"
        :key="item.id"
        class="all-shopping-cart-cards-forms-cards"
      >
        <picture class="forms-cards-info-cart-img">
          <img :src="item.image" alt="" height="140" />
        </picture>

        <div class="forms-cards-info-cart">
          <p class="card-p1 card-p1-1">{{ item.name }}</p>
          <p class="card-p2">{{ item.weight }}</p>
        </div>

        <p class="card-price-p card-price-p-1">
          {{ item.price }} ₸
        </p>

        <div class="forms-cards-sum">
          <p style="color:white">{{ item.quantity }}</p>
        </div>

        <div class="card-price card-price-width-2">
          <p class="card-price-p card-price-p-2">
            {{ item.price * item.quantity }} ₸
          </p>

          <button
            class="card-price-icon-3"
            @click="removeItem(item.id)"
          >
            <img
              src="/src/assets/images/basket-delete-icon.svg"
              alt=""
            />
          </button>
        </div>
      </div>

      <button
        class="payment-card-end"
        @click="createOrderHandler"
      >
        ОФОРМИТЬ ЗАКАЗ
      </button>
    </div>
  </main>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

import {
  loadCart,
  removeFromCart,
  createOrder
} from '@/services/firebase'

const cart = ref([])

onMounted(async () => {
  cart.value = await loadCart()
})

const totalCount = computed(() =>
  cart.value.reduce((sum, item) => sum + item.quantity, 0)
)

async function removeItem(id) {
  await removeFromCart(id)

  cart.value = cart.value.filter(item => item.id !== id)
}

async function createOrderHandler() {
  if (!cart.value.length) {
    alert('Корзина пуста')
    return
  }

  await createOrder()

  alert('Заказ оформлен!')

  cart.value = []
}
</script>