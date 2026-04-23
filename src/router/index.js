import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import ProfileView from '../views/ProfileView.vue'
import ReservationView from '../views/ReservationView.vue'
import HotDishesView from '../views/HotDishesView.vue'
import KhinkaliView from '../views/KhinkaliView.vue'
import CartView from '../views/CartView.vue'
import ContactView from '../views/ContactView.vue'
import AdminView from '../views/AdminView.vue'

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/login', name: 'login', component: LoginView },
  { path: '/register', name: 'register', component: RegisterView },
  { path: '/profile', name: 'profile', component: ProfileView },
  { path: '/reservation', name: 'reservation', component: ReservationView },
  { path: '/hot-dishes', name: 'hot-dishes', component: HotDishesView },
  { path: '/khinkali', name: 'khinkali', component: KhinkaliView },
  { path: '/cart', name: 'cart', component: CartView },
  { path: '/contact', name: 'contact', component: ContactView },
  { path: '/admin', name: 'admin', component: AdminView },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router