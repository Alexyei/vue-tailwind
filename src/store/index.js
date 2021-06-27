import { createStore } from 'vuex'

export default createStore({
  state: {
    charsList: null,
    settings: null
  },
  mutations: {
    saveSelected(state, payload){
     state.charsList = payload.charsList
      state.settings = payload.settings
    },
    reset(state){
      state.charsList = null
      state.settings = null
    }
  },
  actions: {
  },
  modules: {
  }
})
