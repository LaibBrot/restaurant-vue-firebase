<template>
  <div class="container-xxl">
    <footer class="footer" :class="currentFooterClass">
      <div class="footer-top">
        <div class="footer-left">
          <img src="/src/assets/images/Logo.svg" alt="Logo" width="120" />

          <nav class="footer-nav">
            <router-link to="/contact"><u>Обратная связь</u></router-link>
            <a href="#"><u>Доставка</u></a>
            <a href="#"><u>Оплата</u></a>
            <a href="#"><u>Контакты</u></a>
          </nav>
        </div>

        <div class="footer-right">
          <p class="head-p-1-2 head-p-1-2-n">
            г.Москва <br />
            ул.Улофа Пальме 5с2
          </p>

          <p class="head-p-1-2 head-p-1-2-n">
            Вс - Чт 12:00 - 01:00<br />
            Пт - Сб 12:00 - 02:00
          </p>

          <p class="phone head-p-1-2 head-p-1-2-p">+7 (499) 841-67-29</p>

          <a href="#" class="email head-p-1-2">
            <u>delivery@midas.rest</u>
          </a>
        </div>
      </div>

      <div class="footer-bottom">
        <div class="copyright">
          © 2009–2019, ООО «MIDAS», официальный сайт
        </div>

        <div class="footer-links">
          <a href="#"><u>Политика конфиденциальности и оферта</u></a>
          <a href="#"><u>Пользовательское соглашение</u></a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

// Вычисляем класс для футера в зависимости от текущей страницы
const currentFooterClass = computed(() => {
  switch (route.path) {
    case '/':
      return 'footer-height'      // Для главной
    case '/hot-dishes':
      return 'footer-height-2'    // Для горячих блюд
    case '/khinkali':
      return 'footer-height-3'    // Для хинкали
    case '/cart':
      return 'footer-height-4'    // Для корзины
    case '/reservation':
      return 'footer-height-5'    // Для бронирования
    case '/contact':
      return 'footer-height-6'    // Для обратной связи
    case '/login':
      return 'footer-height-7'    // Для входа
    case '/register':
      return 'footer-height-8'    // Для регистрации
    case '/profile':
      return 'footer-height-9'    // Для профиля
    case '/admin':
      return 'footer-height-10'   // Для админ-панели
    default:
      return 'footer-height'      // По умолчанию, если страница не найдена в списке
  }
})
</script>