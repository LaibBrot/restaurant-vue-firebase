<template>
    <div class="container-xxl">
        <header class="header">
            <nav class="navbar">
                <router-link to="/" class="nav-logo-link">
                    <div class="nav-left">
                        <picture>
                            <source media="(max-width: 320px)" srcset="/src/assets/images/Logo.svg" width="100" />
                            <source media="(min-width: 1025px)" srcset="/src/assets/images/Logo.svg" width="150" />
                            <img src="/src/assets/images/Logo.svg" alt="Logo" width="150" />
                        </picture>
                    </div>
                </router-link>

                <div class="nav-center">
                    <ul class="nav-list">
                        <li class="nav-link">
                            <a href="#">АКЦИИ</a>
                        </li>

                        <li class="custom-dropdown-wrapper">
                            <a class="nav-link" href="#">ГОРЯЧЕЕ</a>
                            <ul class="custom-menu">
                                <li><router-link to="/hot-dishes">Горячие блюда</router-link></li>
                            </ul>
                        </li>

                        <li class="custom-dropdown-wrapper">
                            <a class="nav-link" href="#">ХОЛОДНОЕ</a>
                            <ul class="custom-menu">
                                <li><a href="#">Салаты</a></li>
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
                        <img src="/src/assets/images/basket-icon.svg" alt="Корзина" height="20" />
                    </router-link>

                    <router-link to="/login">Войти</router-link>
                    <router-link to="/register">Регистрация</router-link>

                    <router-link to="/profile">
                        <img src="/src/assets/images/profile-icon.svg" alt="Профиль" height="20" />
                    </router-link>
                </div>
            </nav>
        </header>
    </div>
</template>

<style scoped>
/* 1. Родительский элемент */
.custom-dropdown-wrapper {
    color: white;
  position: relative; /* Критически важно: удерживает меню прямо под ссылкой */
  list-style: none;
    z-index: 9999; /* Гарантирует, что меню будет ПОВЕРХ всех картинок и карточек */

}

/* 2. Само выпадающее меню */
.custom-menu {
  display: none; /* Скрыто по умолчанию */
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 9999; /* Гарантирует, что меню будет ПОВЕРХ всех картинок и карточек */
  width: 180px;
  margin: 0;
  padding: 10px 0;
  background-color: black;
  list-style: none;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.5); /* Добавляет легкую тень для отделения от фона */
}

/* 3. Логика появления (открывается при наведении на родителя) */
.custom-dropdown-wrapper:hover .custom-menu {
  display: block;
}

/* 4. Стили ссылок внутри меню */
.custom-menu li a {
  display: block;
  padding: 8px 15px;
  color: white;
  text-decoration: none;
  font-size: 14px;
  transition: background-color 0.2s ease;
}

/* 5. Эффект наведения на конкретное блюдо (как на скриншоте) */
.custom-menu li a:hover {
  background-color: #333333; 
}
</style>

<script setup>
</script>