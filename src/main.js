import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/main.css'
import store from '@/store'
import clickOutside from '@/directives'
import i18n from './i18n'

const app = createApp(App)

app.use(i18n).use(store).use(router).directive('click-outside', clickOutside)

app.mount('#app')
