<template>
  <div class="container-xxl">
    <footer class="footer" :class="{ 'footer-height': route.path === '/' }">
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
            г.Алматы <br />
            пр.Достык 172
          </p>

          <p class="head-p-1-2 head-p-1-2-n">
            Вс - Чт 12:00 - 01:00<br />
            Пт - Сб 12:00 - 02:00
          </p>

          <p class="phone head-p-1-2 head-p-1-2-p">+7 (778) 841-67-29</p>

          <a href="#" class="email head-p-1-2">
            <u>delivery@midas.rest</u>
          </a>
        </div>
      </div>

      <div class="footer-bottom">
        <div class="copyright">
          © 2009–2026, ООО «MIDAS», официальный сайт
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
import { useRoute } from 'vue-router'

// Получаем информацию о текущей странице
const route = useRoute()
</script>