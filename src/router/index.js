import { createRouter, createWebHistory } from 'vue-router'
//import Home from '../views/Home.vue'
import NotFound from '../views/404.vue'
import Start from "../views/Start";
import Select from "../views/Select";
import {default as store} from '../store/index.js'
import Write from "../views/Write";
import Results from "../views/Results";

const routes = [
  {
    path: '/',
    name: 'Главная',
    component: Start
  },
  {
    path: '/select/:mode/:link?/:settings?',
    name: 'select',
    component: Select,
    beforeEnter: (to, from, next) => {
      //console.log("LINK: "+to.params.link)
      //console.log("LINK: "+to.params.settings)
      //console.log("TRY SELECT")
      if(['hiragana', 'katakana', 'kanji'].includes(to.params.mode)) {
        //console.log("OK")
       // store.commit('SET_MODE', to.params.mode);
        next()
      } else {
        //alert("BACK")
       // next(from)
        next("/404")
      }
    }

  },
  {
    path: '/write',
    name: 'write',
    component: Write,
    beforeEnter: (to, from, next) => {

     // console.log(store)

     // console.log(store.state.charsList !== null && store.state.settings !== null)

      //if((store.state.charsList !== null) && (store.state.settings !== null)) {
      if(store.state.words.length){
      // console.log("OK")
        next()
      } else {
       // alert("BACK")
        next(from)
        // this.back()
      }
    }
  },
  {
    path: '/results',
    name: 'results',
    component: Results,
    beforeEnter: (to, from, next) => {
      // console.log(to.params.mode)
      // console.log(store.getters.getWords)
      if(store.state.words.length && store.state.words[0].answer) {


        next()
      } else {
        //alert("BACK")
        next(from)
      }
    }

  },
  // {
  //   path: '/about',
  //   name: 'O нас',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // },
  // {
  //   path: '/test',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: Home
  // },
  {
    path: "/animCJK/:catchAll(.*)",
    beforeEnter: (to, from, next) => {
      next()
    }
  },
  {
    path: "/:catchAll(.*)",
    name: 'NotFound',
    component: NotFound
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
