import {createStore} from 'vuex'
//import animCJKLib from "./modules/animCJKLib";
import axios from "axios";
//import {ModelSelect} from "vue";

export default createStore({
    state: {
        charsList: new Set(),
        settings: null,
        words: [],
        mode: null,
    },
    getters: {
        getDefaultSettings(){
          return {
              minWordLength: 1,
              maxWordLength: 8,
              minWordLengthDefault: 1,
              maxWordLengthDefault: 8,
              minWordsCount: 1,
              maxWordsCount: 100,
              wordsCountDefault: 10
          }
        },
        getMode(state){
            return state.mode
        },
        getSettings(state){
            return state.settings
        },
        getWords(state) {
            return state.words
        },
        getSelectedChars(state) {
            return state.charsList
        }
    },
    mutations: {
        saveSelected(state, payload) {
            state.charsList = payload.charsList
            state.settings = payload.settings
            state.mode = payload.mode
        },
        saveSettings(state, payload) {
            state.settings = payload
        },

        reset(state) {
            state.charsList = null
            state.settings = null
        },
        SET_WORDS(state, payload) {
            state.words = payload
        },
        SET_MODE(state, payload) {
            state.mode = payload
        }
    },
    actions: {
        //context,payload
        async loadWords(context) {
            //   console.log(context)
            context.commit('SET_WORDS', [])
            // let response = await axios.get('http://localhost:8080/words.json',
            try {

                //for dev http://localhost:8080 for prod http://194.67.109.77
                let response = await axios.post('http://194.67.109.77/api/words',
                    JSON.stringify({
                        lang: "ja",
                        chars: [...context.state.charsList].join(''),
                        type: context.state.mode,
                        minLength: context.state.settings.wordLength[0],
                        maxLength: context.state.settings.wordLength[1],
                        count: context.state.settings.wordsCount
                    }),
                    {
                        headers: {
                            'Content-Type': 'application/json;charset=utf-8'
                        },
                    })

                //console.log(response.data)
                context.commit('SET_WORDS', response.data)
                if (response.data.length)
                    return {status: "success"}
                else return {status: "warning", data: 'Не найдено слов по заданным критериям'}
                // .then((response) => {
                //     console.log(response.data)
                //     context.commit('SET_WORDS', response.data)
                // })
                // .catch((err) => {
                //console.log("ERROR!")

                // console.log(err)
                // context.state.charsList = new Set();


                // console.error('something went wrong');
                //return {status: 'error', data: 'something went wrong'}
                // })
            } catch (err) {
                console.log("LOAD WORDS ACTION ERROR");
                console.log(err);
                return {status: "error"}
            }
        },
        async loadKanji() {
            //   console.log(context)
            //context.commit('SET_WORDS', [])
            // let response = await axios.get('http://localhost:8080/words.json',
            try {


                //for dev http://localhost:8080 for prod http://194.67.109.77
                let response = await axios.post('http://194.67.109.77/api/kanji',
                    JSON.stringify({
                        lang: "ja",
                    }),
                    {
                        headers: {
                            'Content-Type': 'application/json;charset=utf-8'
                        },
                    })

                console.log(response.data)
              //  if (response.data.length)
                    return {status: "success", data: response.data}
               // else return {status: "warning", data: 'Не найдено ни одно по заданным критериям'}
                // .then((response) => {
                //     console.log(response.data)
                //     context.commit('SET_WORDS', response.data)
                // })
                // .catch((err) => {
                //console.log("ERROR!")

                // console.log(err)
                // context.state.charsList = new Set();


                // console.error('something went wrong');
                //return {status: 'error', data: 'something went wrong'}
                // })
            } catch (err) {
                console.log("LOAD KANJI ACTION ERROR");
                console.log(err);
                return {status: "error"}
            }
        }
    },
    // modules: {
    //   svg: animCJKLib
    // }
})
