<template>
  <preloader></preloader>
  <div class="bg-whitesmoke w-full min-h-full h-full flex flex-col items-center">
    <nav-bar>
      <span class="text-text-dark text-base md:text-xl leading-none py-4 block font-Abel text-left mr-2 font-bold max-w-lg">{{currentWord.translate}}</span>
    </nav-bar>
    <div class="relative flex-grow flex justify-center items-center w-full px-4 md:px-10 py-4 md:py-7">
      <div :style="{'width':(currentWordIndex+1)/words.length*100 + '%'}" class="transition-all duration-1000 ease-in-out absolute top-0 left-0 h-1 bg-medium-blue"></div>
      <div class="lg:container relative rounded-3xl overflow-hidden flex items-center h-full w-full flex-col-reverse md:flex-row">
        <div
            style="user-select: none"
            class="z-10 font-TT font-bold text-sm sm:text-base bg-white w-full md:w-auto md:h-full mt-4 md:mt-0 md:mr-4 rounded-3xl flex flex-row md:flex-col px-4 md:px-0 justify-between md:justify-center items-center">

          <div @click.prevent="$router.push({ name: 'select', params: { mode: $store.state.mode } })"
               class="cursor-pointer py-2 md:mx-0 md:py-0 md:my-2 md:px-2  flex justify-center items-center flex-col">
            <svg class="text-blue-500 hover:text-dark-gray w-8 h-8" fill="none" stroke="currentColor"
                 viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z"></path>
            </svg>
            <p>Назад</p>
          </div>
          <div @click.prevent="clean" class="cursor-pointer py-2 md:mx-0 md:py-0 md:my-2 md:px-2  flex justify-center items-center flex-col">
<!--            <svg class="text-blue-500 hover:text-dark-gray w-8 h-8" fill="none" stroke="currentColor"-->
<!--                 viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">-->
<!--              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"-->
<!--                    d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path>-->
<!--            </svg>-->
            <svg xmlns="http://www.w3.org/2000/svg" class="text-blue-500 hover:text-dark-gray w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
            <p>Стереть</p>
          </div>
          <!--          transform hover:rotate-45 -->
          <div :class="{'transform rotate-45':isActive}" @click.prevent="isActive=!isActive"
               class="cursor-pointer py-2 md:mx-0 md:py-0 md:my-2 md:px-2  border-2 hover:border-dark-gray border-white bg-120 from-medium-blue to-light-blue transition duration-300 ease-in-out hover:bg-none text-dark-gray hover:text-dark-gray flex justify-center items-center flex-col w-12 h-12 rounded-full">
            <svg class=" w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                 xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
            </svg>
          </div>
          <div @click.prevent="showResults"
               class="cursor-pointer py-2 md:mx-0 md:py-0 md:my-2 md:px-2   flex justify-center items-center flex-col">
<!--            <svg class="fill-current text-blue-500 hover:text-dark-gray w-8 h-8" height="512" viewBox="-59 0 512 512"-->
<!--                 width="512" xmlns="http://www.w3.org/2000/svg">-->
<!--              <path-->
<!--                  d="m344.675781 39.398438h-48.671875v-19.398438c0-11.046875-8.953125-20-20-20h-157.339844c-11.046874 0-20 8.953125-20 20v19.398438h-48.664062c-27.570312 0-50 22.429687-50 50v372.601562c0 27.570312 22.429688 50 50 50h294.675781c27.570313 0 50-22.429688 50-50v-372.601562c0-27.570313-22.433593-50-50-50zm-88.671875.601562v38.800781h-117.34375c0-13.292969 0-24.273437 0-38.800781zm98.671875 422c0 5.515625-4.488281 10-10 10h-294.675781c-5.515625 0-10-4.484375-10-10v-372.601562c0-5.511719 4.484375-10 10-10h48.660156v19.402343c0 11.046875 8.957032 20 20 20h157.34375c11.042969 0 20-8.953125 20-20v-19.402343h48.671875c5.511719 0 10 4.488281 10 10zm-64.535156-228.480469c7.8125 7.8125 7.8125 20.476563 0 28.285157l-105.101563 105.101562c-7.808593 7.8125-20.472656 7.8125-28.285156 0l-52.230468-52.230469c-7.808594-7.808593-7.808594-20.472656 0-28.285156 7.8125-7.808594 20.472656-7.808594 28.285156 0l38.089844 38.089844 90.957031-90.957031c7.8125-7.8125 20.472656-7.8125 28.285156-.003907zm0 0"/>-->

<!--            </svg>-->
            <svg class="fill-current text-blue-500 hover:text-dark-gray w-8 h-8" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="flag-checkered" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M243.2 189.9V258c26.1 5.9 49.3 15.6 73.6 22.3v-68.2c-26-5.8-49.4-15.5-73.6-22.2zm223.3-123c-34.3 15.9-76.5 31.9-117 31.9C296 98.8 251.7 64 184.3 64c-25 0-47.3 4.4-68 12 2.8-7.3 4.1-15.2 3.6-23.6C118.1 24 94.8 1.2 66.3 0 34.3-1.3 8 24.3 8 56c0 19 9.5 35.8 24 45.9V488c0 13.3 10.7 24 24 24h16c13.3 0 24-10.7 24-24v-94.4c28.3-12.1 63.6-22.1 114.4-22.1 53.6 0 97.8 34.8 165.2 34.8 48.2 0 86.7-16.3 122.5-40.9 8.7-6 13.8-15.8 13.8-26.4V95.9c.1-23.3-24.2-38.8-45.4-29zM169.6 325.5c-25.8 2.7-50 8.2-73.6 16.6v-70.5c26.2-9.3 47.5-15 73.6-17.4zM464 191c-23.6 9.8-46.3 19.5-73.6 23.9V286c24.8-3.4 51.4-11.8 73.6-26v70.5c-25.1 16.1-48.5 24.7-73.6 27.1V286c-27 3.7-47.9 1.5-73.6-5.6v67.4c-23.9-7.4-47.3-16.7-73.6-21.3V258c-19.7-4.4-40.8-6.8-73.6-3.8v-70c-22.4 3.1-44.6 10.2-73.6 20.9v-70.5c33.2-12.2 50.1-19.8 73.6-22v71.6c27-3.7 48.4-1.3 73.6 5.7v-67.4c23.7 7.4 47.2 16.7 73.6 21.3v68.4c23.7 5.3 47.6 6.9 73.6 2.7V143c27-4.8 52.3-13.6 73.6-22.5z" class=""></path></svg>
            <p>Финиш</p>
          </div>
          <div @click.prevent="checkAnswer" :class="{'pointer-events-none':loadingAnswer}" class="cursor-pointer py-2 md:mx-0 md:py-0 md:my-2 md:px-2 flex justify-center items-center flex-col">
<!--            <svg v-if="!loadingAnswer" class="fill-current text-blue-500 hover:text-dark-gray w-8 h-8" xmlns="http://www.w3.org/2000/svg"-->
<!--                 xmlns:xlink="http://www.w3.org/1999/xlink"-->
<!--                 xmlns:svgjs="http://svgjs.com/svgjs" version="1.1" width="512" height="512" x="0" y="0"-->
<!--                 viewBox="0 0 511.77638 511" style="enable-background:new 0 0 512 512" xml:space="preserve">-->
<!--                            <g><path xmlns="http://www.w3.org/2000/svg" d="m502.410156 92.652344c-17.9375-13.238282-41.816406 5.714844-55.050781 23.640625l-111.667969 168.34375 32.476563 23.957031 127.902343-156.371094c13.234376-17.929687 24.277344-46.335937 6.339844-59.570312zm0 0" data-original="#000000" style=""/>-->
<!--                              <path-->
<!--                                  xmlns="http://www.w3.org/2000/svg"-->
<!--                                  d="m326.847656 296.660156-18.449218 25c-3.402344-.425781-6.847657-.394531-10.242188.085938-14.171875 2.230468-26.101562 11.816406-31.328125 25.179687-4.289063 11.414063-3.132813 24.351563-7.589844 35.695313-2.453125 6.242187-6.65625 11.640625-12.105469 15.546875 4.660157-45.710938-.183593-95.875-.183593-121.917969 0-29.484375 49.257812-34.339844 96.398437-35.132812l34.515625-52.082032c-41.136719 3.882813-107.082031 16.59375-122.085937 16.59375-17.65625 0 0-26.480468 0-79.449218 0-52.964844-26.484375-61.792969-26.484375-61.792969 17.984375-.40625 35.820312-3.378907 52.964843-8.824219 26.484376-8.828125 79.449219 17.652344 52.964844-26.484375-26.480468-44.136719-44.136718-26.484375-79.445312-17.65625-43.742188 8.546875-87.960938 14.441406-132.414063 17.65625-8.828125 0-26.484375 17.65625 0 44.136719 26.480469 26.484375 70.621094 0 70.621094 0 4.992187 20.253906 7.949219 40.953125 8.824219 61.792968 0 10.417969 1.414062 40.253907 2.472656 76.359376.101562 4.167968-2.675781 7.859374-6.707031 8.917968-50.589844 12.796875-102.484375 19.726563-154.660157 20.65625-88.277343 0-17.65625 70.621094-8.828124 70.621094 8.828124 0 35.3125-26.484375 79.449218-26.484375 27.519532-2.085937 54.648438-7.785156 80.683594-16.949219 2.660156-.835937 5.5625-.367187 7.820312 1.265625 2.261719 1.636719 3.617188 4.242188 3.65625 7.03125.8125 32.359375-.484374 64.738281-3.886718 96.929688-4.558594 43.289062-4.378906 86.953125.53125 130.207031.445312 3.925781 3.449218 7.082031 7.351562 7.71875s7.75-1.402344 9.421875-4.984375c4.765625-10.679687 8.207031-32.75 18.007813-62.324219 3.335937-10.394531 5.789062-21.054687 7.328125-31.867187 8.046875 2.933593 16.410156 4.917969 24.917969 5.914062 26.609374 3.757813 52.8125-9.101562 66.121093-32.449219 8.109375-11.617187 9.683594-26.585937 4.164063-39.636718l18.652344-25.289063zm0 0"-->
<!--                                  data-original="#000000" style=""/>-->
<!--                              <path xmlns="http://www.w3.org/2000/svg"-->
<!--                                    d="m441.949219 246.324219c20.65625 1.324219 34.515625-.617188 34.515625-14.210938-.1875-6.921875-2.996094-13.515625-7.855469-18.449219zm0 0"-->
<!--                                    data-original="#000000" style=""/>-->
<!--                              <path xmlns="http://www.w3.org/2000/svg"-->
<!--                                    d="m306.367188 165.933594c24.125-5.570313 61.09375-22.460938 37.394531-58.015625-20.523438-30.78125-37.542969-23.09375-46.300781-15.078125-3.523438 3.019531-4.226563 8.199218-1.632813 12.050781 9.242187 12.355469 4.472656 35.308594 0 49.9375-.90625 3.027344-.121094 6.308594 2.054687 8.601563 2.175782 2.292968 5.410157 3.246093 8.484376 2.503906zm0 0"-->
<!--                                    data-original="#000000" style=""/>-->
<!--                              <path xmlns="http://www.w3.org/2000/svg"-->
<!--                                    d="m159.671875 185.945312c4.613281-6.851562 11.828125-17.929687 8.445313-26.5625-.859376-2.308593-2.433594-4.28125-4.492188-5.632812-5.632812-3.726562-14.167969-3.046875-19.890625-7.230469-5.425781-5.09375-9.667969-11.320312-12.425781-18.238281-3.886719-7.777344-12.476563-22.703125-23.484375-18.113281-7.378907 3.082031-8.914063 11.246093-10.125 18.265625-2.054688 11.820312-6.179688 22.949218-8.578125 34.65625-4.257813 20.761718 4.070312 35.460937 25.777344 39.078125 16.824218 4.035156 34.4375-2.347657 44.773437-16.222657zm0 0"-->
<!--                                    data-original="#000000" style=""/>-->
<!--                            </g>-->
<!--                        </svg>-->
            <svg v-if="loadingAnswer" class="animate-spin-slow fill-current text-blue-500 w-8 h-8" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="spinner" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M304 48c0 26.51-21.49 48-48 48s-48-21.49-48-48 21.49-48 48-48 48 21.49 48 48zm-48 368c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zm208-208c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zM96 256c0-26.51-21.49-48-48-48S0 229.49 0 256s21.49 48 48 48 48-21.49 48-48zm12.922 99.078c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.491-48-48-48zm294.156 0c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.49-48-48-48zM108.922 60.922c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.491-48-48-48z" class=""></path></svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" class="text-blue-500 hover:text-dark-gray w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
            </svg>
            <p>Далее</p>
          </div>
        </div>
<!--        <div-->
<!--            class="z-9 p-8 pb-20 md:pb-0 md:pl-20 transition-all duration-500 ease-in-out absolute rounded-3xl flex flex-col justify-center items-center h-64 md:h-full w-full md:w-3/5 bottom-0 md:top-0 left-0  bg-medium-blue bg-120 from-medium-blue to-light-blue"-->
<!--            :class="{'transform translate-y-0 md:translate-x-0':isActive, 'transform translate-y-full md:translate-y-0 md:-translate-x-full':!isActive }">-->
<!--          <p class=" text-text-dark font-TT font-bold text-xl">Длина слов: от {{ wordLength[0] }} до-->
<!--            {{ wordLength[1] }}</p>-->
<!--          <dual-range-slider class="my-4" v-model="wordLength"></dual-range-slider>-->
<!--          <p class="text-text-dark font-TT font-bold text-xl">Количество слов: {{ wordsCount }}</p>-->
<!--          <range-slider class="my-4" v-model="wordsCount"></range-slider>-->
<!--        </div>-->
<hint-panel :is-active="isActive" :word="currentWord.word"></hint-panel>
        <div
            ref="writeAreaParent"
             class="relative overflow-y-auto block overflow-x-scroll bg-white h-mobileMain md:h-main w-full md:w-auto  flex-grow rounded-3xl">
<write-area
    ref="wa"
    v-if="parentWidth"
    :client-width="parentWidth"
    :client-height="parentHeight"
    :chars-count="currentWord.word.length"
></write-area>

        </div>
      </div>
    </div>
  </div>
  <Popup ref="popup"></Popup>
</template>

<script>
// import {useRoute} from 'vue-router';
import NavBar from "../components/Navbar";
import Popup from "../components/Popup";
import Preloader from "../components/Preloader";
// import DualRangeSlider from "../components/DualRangeSlider";
// import RangeSlider from "../components/RangeSlider";
import HintPanel from "../components/HintPanel";
import WriteArea from "../components/WriteArea";
export default {
  name: "Write",
  components: {
    NavBar,
    Preloader,
    // DualRangeSlider,
    // RangeSlider,
    HintPanel,
    WriteArea,
    Popup


  },
  // $refs:{
  //   writeAreaParent:HTMLElement,
  //   wa:HTMLElement
  // },
  data() {
    return {
      words: [],
      currentWordIndex: 0,
      isActive: false,
      // isMobile: 100,
      loadingAnswer: false,
      parentWidth: 0,
      parentHeight: 0,

      // chars: () => import('../mocks/' + this.mode + '.js'),

      // wordLength: [1, 7],
      // wordsCount: 10,

    }
  },
  methods: {
    onResize() {
      this.parentWidth = this.$refs.writeAreaParent.clientWidth;
      this.parentHeight = this.$refs.writeAreaParent.clientHeight;
      // this.isMobile = (window.innerWidth
      //     || document.documentElement.clientWidth
      //     || document.body.clientWidth) < 768;
    },
    clean(){
      this.$refs.wa.reset()
    },
    async checkAnswer() {
      this.$nextTick(()=>this.loadingAnswer = true)

      let answer = await this.$refs.wa.recognise()
      // alert(answer)
      // console.log(answer)
      if (answer.status === 'success'){
        if (answer.data){
          this.currentWord.answer = this.currentWord.word in answer.data?this.currentWord.word:answer.data[0]
          this.currentWordIndex++;
        }
        else{
          // перемещаем элемент в конец массива
          // функция пропуска слова, когда пользователь ничего не нарисовал
          this.words.push(this.words.splice(this.currentWordIndex,1)[0] )
        }
      }else{
       // alert("Ошибка! Не удалось получить ответ сервера!")
        this.$refs.popup.show("Не удалось получить ответ сервера!", "error")
        this.currentWord.answer = "Ошибка"
        this.currentWordIndex++;
      }
      //this.currentWord.answer = answer
      this.$nextTick(()=>this.clean())
      this.loadingAnswer = false
      if (this.currentWordIndex === this.words.length)
        this.showResults()
    },
    showResults(){
      if (!this.words[0].answer)
      {
       // alert("Вы не ввели ниодного ответа")
        this.$refs.popup.show("Вы не ввели ниодного ответа!", "error")
        return;
      }
     // alert("RESULTS")
     // console.log(this.words)
      this.currentWordIndex = 0
      this.$router.push({ name: 'results'})
    }
  },
  computed: {
    currentWord(){
      // console.log("COMPUTED WORDS")
      // console.log(this.words[this.currentWordIndex])
      // console.log(this.words[this.currentWordIndex].word.length)
      return this.words[this.currentWordIndex]
    }
    // getClientWidth(){
    //   console.log(this.$parent.clientWidth)
    //   return this.$refs.writeAreaParent.clientWidth
    // }
  //   isMobile: function(){
  //     return window.innerWidth
  //         || document.documentElement.clientWidth
  //         || document.body.clientWidth;
  //   }
  },
  created() {
    this.words = this.$store.getters.getWords
    this.currentWordIndex = 0
    // this.mode: this.$router.currentRoute.params.mode,
    // this.chars = () => import('../mocks/'+this.mode+'.js')
    // this.loadChars()
  },
  // beforeCreate() {
  // },
  // beforeMount(){this.loadChars()},

  mounted() {

    //console.log(this.$refs.writeAreaParent.clientWidth)
   // console.log(this.$refs.writeAreaParent.clientHeight)
    this.onResize()
    window.addEventListener('resize', this.onResize, {passive: true});
    // let mode = useRoute().params.mode
    // import('../mocks/' + mode + '.js').then(module => (this.chars = module.default))

    // (async () => {
    //   let mode = useRoute().params.mode
    //   let chars = (await import('../mocks/' + mode + '.js')).default
    //   console.log(chars)
    //   this.chars = chars
    //   console.log(this.chars)
    // })();
  },
  beforeUnmount() {
    if (typeof window !== 'undefined') {
      window.removeEventListener('resize', this.onResize, {passive: true})
    }
  }
}
</script>

<style scoped>

/*.fa-spin {*/
/*  -webkit-animation: fa-spin 2s linear infinite;*/
/*  animation: fa-spin 2s linear infinite;*/
/*  animation-duration: 2s;*/
/*  animation-timing-function: linear;*/
/*  animation-delay: 0s;*/
/*  animation-iteration-count: infinite;*/
/*  animation-direction: normal;*/
/*  animation-fill-mode: none;*/
/*  animation-play-state: running;*/
/*  animation-name: fa-spin;*/
/*}*/
/*@keyframes fa-spin {*/
/*  0%{*/
/*    -webkit-transform: rotate(*/
/*        0deg*/
/*    );*/
/*    transform: rotate(*/
/*        0deg*/
/*    );*/
/*  }*/
/*  100%{*/
/*  -webkit-transform: rotate(*/
/*      1turn*/
/*  );*/
/*  transform: rotate(*/
/*      1turn*/
/*  );*/
/*}*/
/*}*/
</style>
