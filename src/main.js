import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/tailwind.css'
//import LoadScript from "vue-plugin-load-script";
//.use(LoadScript)
createApp(App).use(store).use(router).mount('#app')
