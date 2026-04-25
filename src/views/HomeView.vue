<template>
    <main class="container-xxl main-height">
        <router-link to="/reservation">
            <div class="nav-right-res-a">ЗАБРОНИРОВАТЬ СТОЛ</div>
        </router-link>

        <p class="head-p-1">
            Доставка готовой еды <br />
            из фермерских <br />
            продуктов!
        </p>

        <div class="meshs-1">
            <img src="/src/assets/images/mesh.svg" alt="mesh" width="110" />
        </div>

        <div class="head-p-2-3">
            <p class="head-p-2">+7 (778) 841-67-29</p>
            <a class="head-p-3" href="#"><u>delivery@midas.rest</u></a>
        </div>

        <div class="img-steak">
            <picture>
                <source media="(max-width: 1024px)" srcset="/src/assets/images/img-steak-small.png" width="650" />
                <source media="(min-width: 1025px)" srcset="/src/assets/images/img-steak.png" />
                <img src="/src/assets/images/img-steak.png" alt="steak" width="900" />
            </picture>
        </div>

        <div class="card-1">
            <a href="#">
                <p class="card-p0 card-p1">
                    Стейк из лосося <br />
                    с овощами
                </p>
                <p class="card-p0 card-p2">250 г</p>
                <p class="card-p0 card-p3">
                    Нежный стейк дикого <br />
                    лосося, пропитанный соком <br />
                    и ароматом слегка <br />
                    обжаренных фермерских <br />
                    овощей
                </p>
                <div class="card-price">
                    <p class="card-price-p">10 220 ₸</p>
                    <span class="card-price-icon">
                        <img src="/src/assets/images/basket-card.svg" alt="basket-card" width="20" />
                    </span>
                </div>
            </a>
        </div>

        <div class="meshs-2">
            <img src="/src/assets/images/mesh-2.png" alt="mesh" width="200" />
        </div>

        <div class="card-2">
            <a href="#">
                <div class="card-2-img">
                    <img src="/src/assets/images/card-2.png" alt="card-2" width="200" />
                    <p class="card-p0 card-p1 card-2p0">Тирамису</p>
                    <p class="card-p0 card-p2 card-2p0">430 г</p>
                    <div class="card-price card-2p0">
                        <p class="card-price-p">2 190 ₸</p>
                        <span class="card-price-icon">
                            <img src="/src/assets/images/basket-card.svg" alt="basket-card" width="20" />
                        </span>
                    </div>
                </div>
            </a>
        </div>

        <div class="head-card-div">
            <h2 class="head-p-4">
                Популярные <br />
                блюда
            </h2>

            

            <div class="all-other-cards">
                <div class="card-0-1">
                    <div class="card-2-img">
                        <a href="#">
                            <picture>
                                <source media="(max-width: 320px)" srcset="/src/assets/images/card-0-1.png"
                                    width="135" />
                                <source media="(min-width: 1025px)" srcset="/src/assets/images/card-0-1.png" />
                                <img src="/src/assets/images/card-0-1.png" alt="card-0-1" width="190" />
                            </picture>
                            <p class="card-p0 card-p1 card-p1-1">
                                Хачапури<br />по-аджарски
                            </p>
                            <p class="card-p0 card-p2">430 г</p>
                            <p class="card-p0 card-p3-1">
                                Хачапури "Лодочка" с начинкой <br />
                                из расплавленного сыра <br />
                                сулугуни, яйца и масла.
                            </p>
                        </a>
                        <div class="card-price card-prise-p0">
                            <p class="card-price-p">2 880 ₸</p>
                            <a class="card-price-icon" href="#">
                                <img src="/src/assets/images/basket-card.svg" alt="basket-card" width="20" />
                            </a>
                        </div>
                    </div>
                </div>

                <div class="card-0-1">
                    <div class="card-2-img">
                        <a href="#">
                            <picture>
                                <source media="(max-width: 320px)" srcset="/src/assets/images/card-0-2.png"
                                    width="135" />
                                <source media="(min-width: 1025px)" srcset="/src/assets/images/card-0-2.png" />
                                <img src="/src/assets/images/card-0-2.png" alt="card-0-2" width="190" />
                            </picture>
                            <p class="card-p0 card-p1 card-p1-1">
                                Хинкали <br />традиционные (6шт)
                            </p>
                            <p class="card-p0 card-p2">350 г</p>
                            <p class="card-p0 card-p3-1">
                                Пряные хинкали с начинкой из ароматной баранины со <br />
                                специями.
                            </p>
                        </a>
                        <div class="card-price card-price-p-2l">
                            <p class="card-price-p">
                                <span class="card-price-s"><s>3 820 ₸</s></span>3 040 ₸
                            </p>
                            <a class="card-price-icon" href="#">
                                <img src="/src/assets/images/basket-card.svg" alt="basket-card" width="20" />
                            </a>
                        </div>
                    </div>
                </div>

                <div class="card-0-1">
                    <div class="card-2-img">
                        <router-link to="/khinkali">
                            <picture>
                                <source media="(max-width: 320px)" srcset="/src/assets/images/card-0-3.png"
                                    width="135" />
                                <source media="(min-width: 1025px)" srcset="/src/assets/images/card-0-3.png" />
                                <img src="/src/assets/images/card-0-3.png" alt="card-0-3" width="190" />
                            </picture>
                            <p class="card-p0 card-p1 card-p1-1">
                                Хинкали жаренные <br />(6шт)
                            </p>
                            <p class="card-p0 card-p2">350 г</p>
                            <p class="card-p0 card-p3-1">
                                Пряные хинкали с начинкой из ароматной баранины со <br />
                                специями.
                            </p>
                        </router-link>
                        <div class="card-price card-price-p-2l">
                            <p class="card-price-p">
                                <span class="card-price-s"><s>4 000 ₸</s></span>3 200 ₸
                            </p>
                            <a class="card-price-icon" href="#">
                                <img src="/src/assets/images/basket-card.svg" alt="basket-card" width="20" />
                            </a>
                        </div>
                    </div>
                </div>

                <div class="card-0-1">
                    <div class="card-2-img">
                        <a href="#">
                            <picture>
                                <source media="(max-width: 320px)" srcset="/src/assets/images/card-0-4.png"
                                    width="135" />
                                <source media="(min-width: 1025px)" srcset="/src/assets/images/card-0-4.png" />
                                <img src="/src/assets/images/card-0-4.png" alt="card-0-4" width="190" />
                            </picture>
                            <p class="card-p0 card-p1 card-p1-1">
                                Ланч <br />низкокалорийный
                            </p>
                            <p class="card-p0 card-p2">450 г</p>
                            <p class="card-p0 card-p3-1">
                                Греческий йогурт с ягодами, 3 хинкали традиционных, салат цезарь,
                                пирожки с уткой, морс
                            </p>
                        </a>
                        <div class="card-price card-price-p-2l">
                            <p class="card-price-p">
                                <span class="card-price-s"><s>8 850 ₸</s></span>7 060 ₸
                            </p>
                            <a class="card-price-icon" href="#">
                                <img src="/src/assets/images/basket-card.svg" alt="basket-card" width="20" />
                            </a>
                        </div>
                    </div>
                </div>

                <div class="card-0-1">
                    <div class="card-2-img">
                        <a href="#">
                            <picture>
                                <source media="(max-width: 320px)" srcset="/src/assets/images/card-0-5.png"
                                    width="135" />
                                <source media="(min-width: 1025px)" srcset="/src/assets/images/card-0-5.png" />
                                <img src="/src/assets/images/card-0-5.png" alt="card-0-5" width="190" />
                            </picture>
                            <p class="card-p0 card-p1 card-p1-1">
                                Хачапури <br />по-мегрельски
                            </p>
                            <p class="card-p0 card-p2">430 г</p>
                            <p class="card-p0 card-p3-1">
                                Невероятно ароматная лепёшка с сыром сулугуни внутри и <br />
                                снаружи
                            </p>
                        </a>
                        <div class="card-price card-prise-p0">
                            <p class="card-price-p">2 990 ₸</p>
                            <a class="card-price-icon" href="#">
                                <img src="/src/assets/images/basket-card.svg" alt="basket-card" width="20" />
                            </a>
                        </div>
                    </div>
                </div>

                <div class="card-0-1">
                    <div class="card-2-img">
                        <a href="#">
                            <picture>
                                <source media="(max-width: 320px)" srcset="/src/assets/images/card-0-6.png"
                                    width="135" />
                                <source media="(min-width: 1025px)" srcset="/src/assets/images/card-0-6.png" />
                                <img src="/src/assets/images/card-0-6.png" alt="card-0-6" width="190" />
                            </picture>
                            <p class="card-p0 card-p1 card-p1-1">
                                Котлета с <br />картофелем
                            </p>
                            <p class="card-p0 card-p2">350 г</p>
                            <p class="card-p0 card-p3-1">
                                По семейному рецепту: нежнейшее рубленное мясо с экологически
                                чистыми ферме...
                            </p>
                        </a>
                        <div class="card-price card-price-p-2l">
                            <p class="card-price-p">
                                <span class="card-price-s">2 520 ₸ -</span>2 650 ₸
                            </p>
                            <a class="card-price-icon" href="#">
                                <img src="/src/assets/images/basket-card.svg" alt="basket-card" width="20" />
                            </a>
                        </div>
                    </div>
                </div>

                <div class="card-0-1">
                    <div class="card-2-img">
                        <a href="#">
                            <picture>
                                <source media="(max-width: 320px)" srcset="/src/assets/images/card-0-7.png"
                                    width="135" />
                                <source media="(min-width: 1025px)" srcset="/src/assets/images/card-0-7.png" />
                                <img src="/src/assets/images/card-0-7.png" alt="card-0-7" width="190" />
                            </picture>
                            <p class="card-p0 card-p1 card-p1-1">
                                Хинкали <br />традиционные (6шт)
                            </p>
                            <p class="card-p0 card-p2">350 г</p>
                            <p class="card-p0 card-p3-1">
                                Пряные хинкали с начинкой из ароматной баранины со <br />
                                специями.
                            </p>
                        </a>
                        <div class="card-price card-price-p-2l">
                            <p class="card-price-p">
                                <span class="card-price-s"><s>3 800 ₸</s></span>3 050 ₸
                            </p>
                            <a class="card-price-icon" href="#">
                                <img src="/src/assets/images/basket-card.svg" alt="basket-card" width="20" />
                            </a>
                        </div>
                    </div>
                </div>

                <div class="card-0-1">
                    <div class="card-2-img">
                        <a href="#">
                            <picture>
                                <source media="(max-width: 320px)" srcset="/src/assets/images/card-0-8.png"
                                    width="135" />
                                <source media="(min-width: 1025px)" srcset="/src/assets/images/card-0-8.png" />
                                <img src="/src/assets/images/card-0-8.png" alt="card-0-8" width="190" />
                            </picture>
                            <p class="card-p0 card-p1 card-p1-1">
                                Хачапури <br />по-мегрельски
                            </p>
                            <p class="card-p0 card-p2">430 г</p>
                            <p class="card-p0 card-p3-1">
                                Невероятно ароматная лепёшка с сыром сулугуни внутри и <br />
                                снаружи
                            </p>
                        </a>
                        <div class="card-price card-prise-p0">
                            <p class="card-price-p">3 020 ₸</p>
                            <a class="card-price-icon" href="#">
                                <img src="/src/assets/images/basket-card.svg" alt="basket-card" width="20" />
                            </a>
                        </div>
                    </div>
                </div>

                <div class="card-0-1">
                    <div class="card-2-img card-2-img-more">
                        <a href="#">
                            <picture>
                                <source media="(max-width: 320px)" srcset="/src/assets/images/card-0-9.png"
                                    width="135" />
                                <source media="(min-width: 1025px)" srcset="/src/assets/images/card-0-9.png" />
                                <img src="/src/assets/images/card-0-9.png" alt="card-0-9" width="190" />
                            </picture>
                            <p class="card-p0 card-p1 card-p1-1">
                                Хачапури <br />по-аджарски
                            </p>
                            <p class="card-p0 card-p2">430 г</p>
                            <p class="card-p0 card-p3-1">
                                Хачапури "Лодочка" с начинкой <br />
                                из расплавленного сыра <br />
                                сулугуни, яйца и масла.
                            </p>
                        </a>
                        <div class="card-price card-prise-p0">
                            <p class="card-price-p">2 890 ₸</p>
                            <a class="card-price-icon" href="#">
                                <img src="/src/assets/images/basket-card.svg" alt="basket-card" width="20" />
                            </a>
                        </div>
                    </div>
                </div>

                <div class="card-0-1">
                    <div class="card-2-img card-2-img-more">
                        <a href="#">
                            <picture>
                                <source media="(max-width: 320px)" srcset="/src/assets/images/card-0-10.png"
                                    width="135" />
                                <source media="(min-width: 1025px)" srcset="/src/assets/images/card-0-10.png" />
                                <img src="/src/assets/images/card-0-10.png" alt="card-0-10" width="190" />
                            </picture>
                            <p class="card-p0 card-p1 card-p1-1">
                                Котлета с картофелем <br />по-деревенски
                            </p>
                            <p class="card-p0 card-p2">350 г</p>
                            <p class="card-p0 card-p3-1">
                                По семейному рецепту: нежнейшее рубленное мясо с экологически
                                чистыми ферме...
                            </p>
                        </a>
                        <div class="card-price card-price-p-2l">
                            <p class="card-price-p">
                                <span class="card-price-s">2 520 ₸ -</span>2 650 ₸
                            </p>
                            <a class="card-price-icon" href="#">
                                <img src="/src/assets/images/basket-card.svg" alt="basket-card" width="20" />
                            </a>
                        </div>
                    </div>
                </div>

                <div class="card-0-1">
                    <div class="card-2-img card-2-img-more">
                        <a href="#">
                            <picture>
                                <source media="(max-width: 320px)" srcset="/src/assets/images/card-0-11.png"
                                    width="135" />
                                <source media="(min-width: 1025px)" srcset="/src/assets/images/card-0-11.png" />
                                <img src="/src/assets/images/card-0-11.png" alt="card-0-11" width="190" />
                            </picture>
                            <p class="card-p0 card-p1 card-p1-1">
                                Хинкали жаренные <br />(6шт)
                            </p>
                            <p class="card-p0 card-p2">350 г</p>
                            <p class="card-p0 card-p3-1">
                                Пряные хинкали с начинкой из ароматной баранины со <br />
                                специями.
                            </p>
                        </a>
                        <div class="card-price card-price-p-2l">
                            <p class="card-price-p">
                                <span class="card-price-s"><s>4 000 ₸</s></span>3 200 ₸
                            </p>
                            <a class="card-price-icon" href="#">
                                <img src="/src/assets/images/basket-card.svg" alt="basket-card" width="20" />
                            </a>
                        </div>
                    </div>
                </div>

                <div class="card-0-1">
                    <div class="card-2-img card-2-img-more">
                        <a href="#">
                            <picture>
                                <source media="(max-width: 320px)" srcset="/src/assets/images/card-0-12.png"
                                    width="135" />
                                <source media="(min-width: 1025px)" srcset="/src/assets/images/card-0-12.png" />
                                <img src="/src/assets/images/card-0-12.png" alt="card-0-12" width="190" />
                            </picture>
                            <p class="card-p0 card-p1 card-p1-1">
                                Ланч <br />низкокалорийный
                            </p>
                            <p class="card-p0 card-p2">450 г</p>
                            <p class="card-p0 card-p3-1">
                                Греческий йогурт с ягодами, 3 хинкали традиционных, салат цезарь,
                                пирожки с уткой, морс
                            </p>
                        </a>
                        <div class="card-price card-price-p-2l">
                            <p class="card-price-p">
                                <span class="card-price-s"><s>8 600 ₸</s></span>7 000 ₸
                            </p>
                            <a class="card-price-icon" href="#">
                                <img src="/src/assets/images/basket-card.svg" alt="basket-card" width="20" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="all-menu">
            <div class="menu">
                <div class="menu-left">
                    <h2 class="head-p-5">Меню</h2>
                </div>
                <div class="menu-right">
                    <button class="menu-right-icon">
                        <img src="/src/assets/images/arrow-left.svg" alt="arrow-left" width="40" />
                    </button>
                    <button class="menu-right-icon">
                        <img src="/src/assets/images/arrow-right.svg" alt="arrow-right" width="40" />
                    </button>
                </div>
            </div>

            <div class="menu-cards-wrapper">
                <div class="menu-cards">
                    <a href="#">
                        <div class="menu-card-s menu-card-0">
                            <p class="menu-card-p">АКЦИИ</p>
                        </div>
                    </a>
                    <router-link to="/hot-dishes">
                        <div class="menu-card-s menu-card-1">
                            <p class="menu-card-p">Горячие <br />блюда</p>
                        </div>
                    </router-link>
                    <a href="#">
                        <div class="menu-card-s menu-card-2">
                            <p class="menu-card-p">Супы</p>
                        </div>
                    </a>
                    <router-link to="/khinkali">
                        <div class="menu-card-s menu-card-3">
                            <p class="menu-card-p">Хинкали</p>
                        </div>
                    </router-link>
                    <a href="#">
                        <div class="menu-card-s menu-card-4">
                            <p class="menu-card-p">Холодные <br />закуски</p>
                        </div>
                    </a>
                    <a href="#">
                        <div class="menu-card-s menu-card-5">
                            <p class="menu-card-p">Салаты</p>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </main>
</template>

<script setup>
</script>