import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import CountryDetails from '@/views/CountryDetails.vue'

const router = createRouter({
  history: createWebHistory('/'),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/country/:countryCode',
      name: 'CountryDetails',
      component: CountryDetails
    }
  ]
})

export default router
