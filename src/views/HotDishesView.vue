<template>
  <main class="container-xxl main-height main-height-min-h">

    <div class="head-h-0">
      <h2 class="head-h-1 head-h-1-hot">Горячие блюда</h2>
      <div class="head-pages">
        <router-link class="head-pages-1" to="/">Главная</router-link>
        <p class="head-pages-slash">/</p>
        <p class="head-pages-2">Горячие блюда</p>
      </div>
    </div>

    <div class="sorting">
      <p class="sorting-p">СОРТИРОВАТЬ:</p>

      <button class="sorting-b" @click="sortType = 'priceAsc'">
        ПО ВОЗРАСТАНИЮ ЦЕНЫ
      </button>

      <button class="sorting-b" @click="sortType = 'priceDesc'">
        ПО УБЫВАНИЮ ЦЕНЫ
      </button>

      <button class="sorting-b" @click="sortType = 'popularity'">
        ПО ПОПУЛЯРНОСТИ
      </button>

      <div class="search-box">
        <input type="text" id="searchInput" placeholder="Поиск блюда...">
      </div>
    </div>

    <div class="hot-dishes-cards">
      <div
        v-for="dish in filteredDishes"
        :key="dish.id"
        class="card-0-1"
      >
        <div class="card-2-img">

          <picture>
            <source media="(max-width: 320px)" :srcset="dish.image" width="135" />
            <source media="(min-width: 1025px)" :srcset="dish.image" width="190" />
            <img :src="dish.image" alt="Блюдо" width="190" />
          </picture>

          <p class="card-p0 card-p1">{{ dish.name }}</p>
          <p class="card-p0 card-p2">{{ dish.weight }}</p>

          <p class="card-p0 card-p2 card-p2-2">
            Популярность: {{ dish.popularity }}
          </p>

          <p class="card-p0 card-p3-1">
            {{ dish.description }}
          </p>

          <div class="card-price">
            <p class="card-price-p">{{ dish.price }} ₸</p>
          </div>

          <button
            class="add-to-cart-btn contact-us-send hot-dishes-add-btn"
            @click="addToCart(dish)"
          >
            ДОБАВИТЬ В ЗАКАЗ
          </button>

        </div>
      </div>
    </div>

  </main>
</template>


<script setup>
import { ref, computed, onMounted, watch } from 'vue'

import { loadDishes, addToCart as fbAddToCart } from '@/services/firebase'

const allDishes = ref([])

const search = ref('')

const sortType = ref('default')

async function fetchDishes() {
  allDishes.value = await loadDishes(sortType.value)
}

onMounted(fetchDishes)

watch(sortType, fetchDishes)

const filteredDishes = computed(() => {
  if (!search.value) return allDishes.value

  return allDishes.value.filter(d =>
    d.name?.toLowerCase().includes(search.value.toLowerCase())
  )
})

async function addToCart(dish) {
  try {
    await fbAddToCart(dish)
    alert('Добавлено в корзину')
  } catch (e) {
    alert(e.message)
  }
}
</script>