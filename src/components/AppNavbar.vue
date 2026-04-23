<template>
  <header class="header">
    <nav class="navbar">
      <router-link to="/" class="nav-logo-link">
        <div class="nav-left">
          <picture>
            <source
              media="(max-width: 320px)"
              srcset="/src/assets/images/Logo.svg"
              width="100"
            />
            <source
              media="(min-width: 1025px)"
              srcset="/src/assets/images/Logo.svg"
              width="150"
            />
            <img src="/src/assets/images/Logo.svg" alt="Logo" width="150" />
          </picture>
        </div>
      </router-link>

      <div class="nav-center">
        <ul class="nav-list">
          <li class="nav-link">
            <a href="#">АКЦИИ</a>
          </li>

          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              ГОРЯЧЕЕ
            </a>
            <ul class="dropdown-menu">
              <li>
                <router-link class="dropdown-item" to="/hot-dishes">
                  Горячие блюда
                </router-link>
              </li>
              <li>
                <a class="dropdown-item" href="#">Супы</a>
              </li>
              <li>
                <router-link class="dropdown-item" to="/khinkali">
                  Хинкали
                </router-link>
              </li>
            </ul>
          </li>

          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              ХОЛОДНОЕ
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Салаты</a></li>
              <li><a class="dropdown-item" href="#">Гарниры</a></li>
              <li><a class="dropdown-item" href="#">Закуски</a></li>
            </ul>
          </li>

          <li class="nav-link">
            <a href="#">СВЕЖАЯ ВЫПЕЧКА</a>
          </li>
          <li class="nav-link">
            <a href="#">ДЕСЕРТЫ</a>
          </li>
          <li class="nav-link">
            <a href="#">НАПИТКИ</a>
          </li>
        </ul>
      </div>

      <div class="menu-button">
        <span>
          <img src="/src/assets/images/menu-button.svg" alt="menu-button" />
        </span>
        <span class="menu-text">МЕНЮ</span>
      </div>

      <div class="nav-right">
        <router-link to="/reservation">
          <div class="nav-right-res">ЗАБРОНИРОВАТЬ СТОЛ</div>
        </router-link>

        <router-link to="/cart">
          <img
            src="/src/assets/images/basket-icon.svg"
            alt="Корзина"
            height="20"
          />
        </router-link>

        <router-link to="/login">Войти</router-link>
        <router-link to="/register">Регистрация</router-link>

        <router-link to="/profile">
          <img src="/src/assets/images/profile-icon.svg" alt="Профиль" height="20" />
        </router-link>
      </div>
    </nav>
  </header>
</template>

<script setup>
</script>