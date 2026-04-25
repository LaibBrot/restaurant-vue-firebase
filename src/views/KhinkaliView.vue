<template>
  <main class="container-xxl">
    <router-link to="/reservation">
      <div class="nav-right-res-a">ЗАБРОНИРОВАТЬ СТОЛ</div>
    </router-link>

    <div class="head-h-0 head-h-0-2">
      <h2 class="head-h-1 head-h-1-k">Хинкали жаренные</h2>

      <div class="head-pages head-pages-0-2">
        <router-link class="head-pages-1" to="/">Главная</router-link>
        <p class="head-pages-slash">/</p>
        <p class="head-pages-1">Хинкали</p>
        <p class="head-pages-slash">/</p>
        <p class="head-pages-2">Хинкали жаренные</p>
      </div>
    </div>

    <div class="card-khinkali">
      <div class="img-khinkali">
        <picture>
          <source
            media="(max-width: 320px)"
            srcset="/src/assets/images/img-khinkali-small.png"
            width="300"
          />
          <source
            media="(max-width: 768px)"
            srcset="/src/assets/images/img-khinkali.png"
          />
          <source
            media="(max-width: 1024px)"
            srcset="/src/assets/images/img-khinkali-small.png"
            width="430"
          />
          <source
            media="(min-width: 1025px)"
            srcset="/src/assets/images/img-khinkali.png"
          />
          <img
            src="/src/assets/images/img-khinkali.png"
            alt="Хинкали"
            width="650"
          />
        </picture>
      </div>

      <div class="forms">
        <p class="forms-p">РАЗНОВИДНОСТЬ:</p>

        <div class="forms-block">
          <div class="forms-cards">
            <div class="forms-cards-info">
              <p class="card-p0 card-p1 card-p1-1">С сыром</p>
              <p class="card-p0 card-p2">80 г</p>
            </div>

            <div class="forms-cards-sum-2">
              <picture>
                <source
                  media="(max-width: 1024px)"
                  srcset="/src/assets/images/forms-cards-sum.png"
                  width="85"
                />
                <source
                  media="(min-width: 1025px)"
                  srcset="/src/assets/images/forms-cards-sum.png"
                />
                <img
                  src="/src/assets/images/forms-cards-sum.png"
                  alt="Количество"
                  width="96"
                />
              </picture>
            </div>

            <div class="card-price card-price-width-1">
              <p class="card-price-p">125 ₸</p>
              <a class="card-price-icon" href="#">
                <img
                  src="/src/assets/images/basket-card.svg"
                  alt="Корзина"
                  width="20"
                />
              </a>
            </div>
          </div>

          <div class="forms-cards">
            <div class="forms-cards-info">
              <p class="card-p0 card-p1 card-p1-1">Традицонные</p>
              <p class="card-p0 card-p2">80 г</p>
            </div>

            <div class="forms-cards-sum-2">
              <picture>
                <source
                  media="(max-width: 1024px)"
                  srcset="/src/assets/images/forms-cards-sum.png"
                  width="85"
                />
                <source
                  media="(min-width: 1025px)"
                  srcset="/src/assets/images/forms-cards-sum.png"
                />
                <img
                  src="/src/assets/images/forms-cards-sum.png"
                  alt="Количество"
                  width="96"
                />
              </picture>
            </div>

            <div class="card-price card-price-width-1">
              <p class="card-price-p">115 ₸</p>
              <a class="card-price-icon" href="#">
                <img
                  src="/src/assets/images/basket-card.svg"
                  alt="Корзина"
                  width="20"
                />
              </a>
            </div>
          </div>

          <div class="forms-cards">
            <div class="forms-cards-info">
              <p class="card-p0 card-p1 card-p1-1">Из баранины с тархуном</p>
              <p class="card-p0 card-p2">80 г</p>
            </div>

            <div class="forms-cards-sum-2">
              <picture>
                <source
                  media="(max-width: 1024px)"
                  srcset="/src/assets/images/forms-cards-sum.png"
                  width="85"
                />
                <source
                  media="(min-width: 1025px)"
                  srcset="/src/assets/images/forms-cards-sum.png"
                />
                <img
                  src="/src/assets/images/forms-cards-sum.png"
                  alt="Количество"
                  width="96"
                />
              </picture>
            </div>

            <div class="card-price card-price-width-1">
              <p class="card-price-p">125 ₸</p>
              <a class="card-price-icon" href="#">
                <img
                  src="/src/assets/images/basket-card.svg"
                  alt="Корзина"
                  width="20"
                />
              </a>
            </div>
          </div>
        </div>

        <p class="forms-p forms-p-2">ОПИСАНИЕ:</p>
        <p class="forms-p-3">
          Плотно-шелковые хинкали с сочной начинкой на выбор: из фермерской
          говядины, сыра моцарелла либо фермерской баранины и экологически
          чистой зелени
        </p>
      </div>
    </div>

    <div class="mesh-3">
      <picture>
        <source
          media="(max-width: 1024px)"
          srcset="/src/assets/images/mesh-3.svg"
          width="110"
        />
        <source
          media="(min-width: 1025px)"
          srcset="/src/assets/images/mesh-3.svg"
        />
        <img
          src="/src/assets/images/mesh-3.svg"
          alt="Декоративный элемент"
          width="120"
        />
      </picture>
    </div>

    <div class="all-cards-recommendation">
      <h2 class="head-h-2">
        С этим блюдом <br />
        часто заказывают:
      </h2>

      <div class="recommendation-card">
        <div class="card-0-1">
          <div class="card-2-img">
            <a href="#">
              <picture>
                <source
                  media="(max-width: 320px)"
                  srcset="/src/assets/images/card-0-1.png"
                  width="135"
                />
                <source
                  media="(min-width: 1025px)"
                  srcset="/src/assets/images/card-0-1.png"
                />
                <img
                  src="/src/assets/images/card-0-1.png"
                  alt="Хачапури по-аджарски"
                  width="190"
                />
              </picture>
              <p class="card-p0 card-p1 card-p1-1">Хачапури по-аджарски</p>
              <p class="card-p0 card-p2">430 г</p>
              <p class="card-p0 card-p3-1">
                Хачапури "Лодочка" с начинкой из расплавленного сыра сулугуни,
                яйца и масла.
              </p>
            </a>

            <div class="card-price card-prise-p0">
              <p class="card-price-p">470 ₸</p>
              <a class="card-price-icon" href="#">
                <img
                  src="/src/assets/images/basket-card.svg"
                  alt="Корзина"
                  width="20"
                />
              </a>
            </div>
          </div>
        </div>

        <div class="card-0-1">
          <div class="card-2-img">
            <a href="#">
              <picture>
                <source
                  media="(max-width: 320px)"
                  srcset="/src/assets/images/card-0-4.png"
                  width="135"
                />
                <source
                  media="(min-width: 1025px)"
                  srcset="/src/assets/images/card-0-4.png"
                />
                <img
                  src="/src/assets/images/card-0-4.png"
                  alt="Ланч низкокалорийный"
                  width="190"
                />
              </picture>
              <p class="card-p0 card-p1 card-p1-1">Ланч низкокалорийный</p>
              <p class="card-p0 card-p2">450 г</p>
              <p class="card-p0 card-p3-1">
                Греческий йогурт с ягодами, 3 хинкали традиционных, салат
                цезарь, пирожки с уткой, морс
              </p>
            </a>

            <div class="card-price card-price-p-2l">
              <p class="card-price-p">
                <span class="card-price-s"><s>1 435 ₸</s></span>1 148 ₸
              </p>
              <a class="card-price-icon" href="#">
                <img
                  src="/src/assets/images/basket-card.svg"
                  alt="Корзина"
                  width="20"
                />
              </a>
            </div>
          </div>
        </div>

        <div class="card-0-1">
          <div class="card-2-img">
            <a href="#">
              <picture>
                <source
                  media="(max-width: 320px)"
                  srcset="/src/assets/images/card-0-5.png"
                  width="135"
                />
                <source
                  media="(min-width: 1025px)"
                  srcset="/src/assets/images/card-0-5.png"
                />
                <img
                  src="/src/assets/images/card-0-5.png"
                  alt="Хачапури по-мегрельски"
                  width="190"
                />
              </picture>
              <p class="card-p0 card-p1 card-p1-1">
                Хачапури <br />по-мегрельски
              </p>
              <p class="card-p0 card-p2">430 г</p>
              <p class="card-p0 card-p3-1">
                Невероятно ароматная лепёшка с сыром сулугуни внутри и снаружи
              </p>
            </a>

            <div class="card-price card-prise-p0">
              <p class="card-price-p">490 ₸</p>
              <a class="card-price-icon" href="#">
                <img
                  src="/src/assets/images/basket-card.svg"
                  alt="Корзина"
                  width="20"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
</script>