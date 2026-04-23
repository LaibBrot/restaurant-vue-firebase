<template>
  <main class="container-xxl">

    <!-- 🔍 поиск -->
    <input
      v-model="search"
      placeholder="Поиск..."
      class="office-input"
    />

    <!-- 🔽 сортировка -->
    <div>
      <button @click="sortType = 'priceAsc'">Цена ↑</button>
      <button @click="sortType = 'priceDesc'">Цена ↓</button>
      <button @click="sortType = 'popularity'">Популярность</button>
    </div>

    <!-- 🍽️ блюда -->
    <div class="dishes-container">
      <div
        v-for="dish in filteredDishes"
        :key="dish.id"
        class="card-0-1"
      >
        <div class="card-2-img">

          <img :src="dish.image" width="190" />

          <p class="card-p0 card-p1">{{ dish.name }}</p>
          <p class="card-p0 card-p2">{{ dish.weight }}</p>

          <p class="card-p0 card-p2 card-p2-2">
            Популярность: {{ dish.popularity }}
          </p>

          <p class="card-p0 card-p3-1">
            {{ dish.description }}
          </p>

          <div class="card-price">
            <p class="card-price-p">{{ dish.price }} ₽</p>
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

// 🔥 Firebase
import { loadDishes, addToCart as fbAddToCart } from '@/services/firebase'

// 🔹 все блюда
const allDishes = ref([])

// 🔹 поиск
const search = ref('')

// 🔹 сортировка
const sortType = ref('default')

// 🔄 загрузка блюд
async function fetchDishes() {
  allDishes.value = await loadDishes(sortType.value)
}

// при старте
onMounted(fetchDishes)

// при смене сортировки
watch(sortType, fetchDishes)

// 🔍 фильтр (без сортировки — она уже в Firebase)
const filteredDishes = computed(() => {
  if (!search.value) return allDishes.value

  return allDishes.value.filter(d =>
    d.name?.toLowerCase().includes(search.value.toLowerCase())
  )
})

// 🛒 добавление в корзину
async function addToCart(dish) {
  try {
    await fbAddToCart(dish)
    alert('Добавлено в корзину')
  } catch (e) {
    alert(e.message)
  }
}
</script>