import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import NotFound from '../views/404.vue'
import Start from "../views/Start";
import Select from "../views/Select";
// import {default as store} from '../store/index.js'
import Write from "../views/Write";

const routes = [
  {
    path: '/',
    name: 'Главная',
    component: Start
  },
  {
    path: '/select/:mode/:link?',
    name: 'select',
    component: Select,
    beforeEnter: (to, from, next) => {
      // console.log(to.params.mode)
      if(['hiragana', 'katakana', 'kanji'].includes(to.params.mode)) {
        console.log("OK")
        next()
      } else {
        alert("BACK")
        next(from)
      }
    }

  },
  {
    path: '/write',
    name: 'write',
    component: Write,
    // beforeEnter: (to, from, next) => {
    //
    //   console.log(store)
    //
    //   console.log(store.state.charsList !== null && store.state.settings !== null)
    //
    //   if((store.state.charsList !== null) && (store.state.settings !== null)) {
    //     console.log("OK")
    //     next()
    //   } else {
    //     next(from)
    //   }
    // }
  },
  {
    path: '/about',
    name: 'O нас',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/results',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Home
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'notFound',
    component: NotFound
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
