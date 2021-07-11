import { createStore } from 'vuex'
import animCJKLib from "./modules/animCJKLib";
import axios from "axios";

export default createStore({
  state: {
    charsList: new Set(),
    settings: null,
    words: []
  },
  getters: {
    getWords(state){
      return state.words
    },
    getSelectedChars(state){
      return state.charsList
    }
  },
  mutations: {
    saveSelected(state, payload){
     state.charsList = payload.charsList
      state.settings = payload.settings
    },
    saveSettings(state, payload){
      state.settings = payload
    },

    reset(state){
      state.charsList = null
      state.settings = null
    },
    SET_WORDS(state, payload){
      state.words = payload
    }
  },
  actions: {
    //context,payload
    async loadWords(context){
      context.commit('SET_WORDS',[])
      let response = await axios.get('http://localhost:8080/words.json',
          {
            headers: {
              'Content-Type': 'application/json;charset=utf-8'
            },
          })
          .catch((err) => {
            console.log(err)
            // console.error('something went wrong');
            //return {status: 'error', data: 'something went wrong'}
          })
      console.log(response.data)
        context.commit('SET_WORDS',response.data)
      }
    },
  modules: {
    svg: animCJKLib
  }
})
