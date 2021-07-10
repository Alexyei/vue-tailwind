<template>
  <div class="bg-whitesmoke w-full min-h-full h-full flex flex-col">
    <nav-bar>
      <span class="text-text-dark text-xl sm:text-2xl leading-none py-4 block font-TT">Результаты</span>
    </nav-bar>
    <div class="flex-grow flex justify-center items-center w-full px-4 md:px-10 py-4 md:py-7">
      <div class=" relative rounded-3xl overflow-hidden flex items-center h-full w-full flex-col-reverse md:flex-row">
        <div
            class="z-10 font-TT font-bold text-sm sm:text-base bg-white w-full md:w-auto md:h-full mt-4 md:mt-0 md:mr-4 rounded-3xl flex flex-row md:flex-col px-4 md:px-0 justify-between md:justify-center items-center">

          <div @click.prevent="$router.push({ name: 'Главная'})"
               class="cursor-pointer py-2 md:mx-0 md:py-0 md:my-2 md:px-2  flex justify-center items-center flex-col">
            <svg class="text-blue-500 hover:text-dark-gray w-8 h-8" fill="none" stroke="currentColor"
                 viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z"></path>
            </svg>
            <p>Назад</p>
          </div>
          <div class="cursor-pointer py-2 md:mx-0 md:py-0 md:my-2 md:px-2  flex justify-center items-center flex-col">
            <svg class="text-blue-500 hover:text-dark-gray w-8 h-8" fill="none" stroke="currentColor"
                 viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path>
            </svg>
            <p>Ссылка</p>
          </div>
          <!--          transform hover:rotate-45 -->
          <div :class="{'transform rotate-45':isActive}" @click.prevent="isActive=!isActive"
               class="py-2 md:mx-0 md:py-0 md:my-2 md:px-2  border-2 hover:border-dark-gray border-white bg-120 from-medium-blue to-light-blue transition duration-300 ease-in-out hover:bg-none text-dark-gray hover:text-dark-gray flex justify-center items-center flex-col w-12 h-12 rounded-full">
            <svg class=" w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                 xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
            </svg>
          </div>
          <div @click.prevent=""
               class="cursor-pointer py-2 md:mx-0 md:py-0 md:my-2 md:px-2   flex justify-center items-center flex-col">
            <svg class="fill-current text-blue-500 hover:text-dark-gray w-8 h-8" height="512" viewBox="-59 0 512 512"
                 width="512" xmlns="http://www.w3.org/2000/svg">
              <path
                  d="m344.675781 39.398438h-48.671875v-19.398438c0-11.046875-8.953125-20-20-20h-157.339844c-11.046874 0-20 8.953125-20 20v19.398438h-48.664062c-27.570312 0-50 22.429687-50 50v372.601562c0 27.570312 22.429688 50 50 50h294.675781c27.570313 0 50-22.429688 50-50v-372.601562c0-27.570313-22.433593-50-50-50zm-88.671875.601562v38.800781h-117.34375c0-13.292969 0-24.273437 0-38.800781zm98.671875 422c0 5.515625-4.488281 10-10 10h-294.675781c-5.515625 0-10-4.484375-10-10v-372.601562c0-5.511719 4.484375-10 10-10h48.660156v19.402343c0 11.046875 8.957032 20 20 20h157.34375c11.042969 0 20-8.953125 20-20v-19.402343h48.671875c5.511719 0 10 4.488281 10 10zm-64.535156-228.480469c7.8125 7.8125 7.8125 20.476563 0 28.285157l-105.101563 105.101562c-7.808593 7.8125-20.472656 7.8125-28.285156 0l-52.230468-52.230469c-7.808594-7.808593-7.808594-20.472656 0-28.285156 7.8125-7.808594 20.472656-7.808594 28.285156 0l38.089844 38.089844 90.957031-90.957031c7.8125-7.8125 20.472656-7.8125 28.285156-.003907zm0 0"/>

            </svg>
            <p>Все</p>
          </div>
          <div @click.prevent=""
               class="cursor-pointer py-2 md:mx-0 md:py-0 md:my-2 md:px-2 flex justify-center items-center flex-col">
            <svg class="fill-current text-blue-500 hover:text-dark-gray w-8 h-8" xmlns="http://www.w3.org/2000/svg"
                 xmlns:xlink="http://www.w3.org/1999/xlink"
                 xmlns:svgjs="http://svgjs.com/svgjs" version="1.1" width="512" height="512" x="0" y="0"
                 viewBox="0 0 511.77638 511" style="enable-background:new 0 0 512 512" xml:space="preserve">
                            <g><path xmlns="http://www.w3.org/2000/svg" d="m502.410156 92.652344c-17.9375-13.238282-41.816406 5.714844-55.050781 23.640625l-111.667969 168.34375 32.476563 23.957031 127.902343-156.371094c13.234376-17.929687 24.277344-46.335937 6.339844-59.570312zm0 0" data-original="#000000" style=""/>
                              <path
                                  xmlns="http://www.w3.org/2000/svg"
                                  d="m326.847656 296.660156-18.449218 25c-3.402344-.425781-6.847657-.394531-10.242188.085938-14.171875 2.230468-26.101562 11.816406-31.328125 25.179687-4.289063 11.414063-3.132813 24.351563-7.589844 35.695313-2.453125 6.242187-6.65625 11.640625-12.105469 15.546875 4.660157-45.710938-.183593-95.875-.183593-121.917969 0-29.484375 49.257812-34.339844 96.398437-35.132812l34.515625-52.082032c-41.136719 3.882813-107.082031 16.59375-122.085937 16.59375-17.65625 0 0-26.480468 0-79.449218 0-52.964844-26.484375-61.792969-26.484375-61.792969 17.984375-.40625 35.820312-3.378907 52.964843-8.824219 26.484376-8.828125 79.449219 17.652344 52.964844-26.484375-26.480468-44.136719-44.136718-26.484375-79.445312-17.65625-43.742188 8.546875-87.960938 14.441406-132.414063 17.65625-8.828125 0-26.484375 17.65625 0 44.136719 26.480469 26.484375 70.621094 0 70.621094 0 4.992187 20.253906 7.949219 40.953125 8.824219 61.792968 0 10.417969 1.414062 40.253907 2.472656 76.359376.101562 4.167968-2.675781 7.859374-6.707031 8.917968-50.589844 12.796875-102.484375 19.726563-154.660157 20.65625-88.277343 0-17.65625 70.621094-8.828124 70.621094 8.828124 0 35.3125-26.484375 79.449218-26.484375 27.519532-2.085937 54.648438-7.785156 80.683594-16.949219 2.660156-.835937 5.5625-.367187 7.820312 1.265625 2.261719 1.636719 3.617188 4.242188 3.65625 7.03125.8125 32.359375-.484374 64.738281-3.886718 96.929688-4.558594 43.289062-4.378906 86.953125.53125 130.207031.445312 3.925781 3.449218 7.082031 7.351562 7.71875s7.75-1.402344 9.421875-4.984375c4.765625-10.679687 8.207031-32.75 18.007813-62.324219 3.335937-10.394531 5.789062-21.054687 7.328125-31.867187 8.046875 2.933593 16.410156 4.917969 24.917969 5.914062 26.609374 3.757813 52.8125-9.101562 66.121093-32.449219 8.109375-11.617187 9.683594-26.585937 4.164063-39.636718l18.652344-25.289063zm0 0"
                                  data-original="#000000" style=""/>
                              <path xmlns="http://www.w3.org/2000/svg"
                                    d="m441.949219 246.324219c20.65625 1.324219 34.515625-.617188 34.515625-14.210938-.1875-6.921875-2.996094-13.515625-7.855469-18.449219zm0 0"
                                    data-original="#000000" style=""/>
                              <path xmlns="http://www.w3.org/2000/svg"
                                    d="m306.367188 165.933594c24.125-5.570313 61.09375-22.460938 37.394531-58.015625-20.523438-30.78125-37.542969-23.09375-46.300781-15.078125-3.523438 3.019531-4.226563 8.199218-1.632813 12.050781 9.242187 12.355469 4.472656 35.308594 0 49.9375-.90625 3.027344-.121094 6.308594 2.054687 8.601563 2.175782 2.292968 5.410157 3.246093 8.484376 2.503906zm0 0"
                                    data-original="#000000" style=""/>
                              <path xmlns="http://www.w3.org/2000/svg"
                                    d="m159.671875 185.945312c4.613281-6.851562 11.828125-17.929687 8.445313-26.5625-.859376-2.308593-2.433594-4.28125-4.492188-5.632812-5.632812-3.726562-14.167969-3.046875-19.890625-7.230469-5.425781-5.09375-9.667969-11.320312-12.425781-18.238281-3.886719-7.777344-12.476563-22.703125-23.484375-18.113281-7.378907 3.082031-8.914063 11.246093-10.125 18.265625-2.054688 11.820312-6.179688 22.949218-8.578125 34.65625-4.257813 20.761718 4.070312 35.460937 25.777344 39.078125 16.824218 4.035156 34.4375-2.347657 44.773437-16.222657zm0 0"
                                    data-original="#000000" style=""/>
                            </g>
                        </svg>
            <p>Начать</p>
          </div>
        </div>
        <div
            class="z-9 p-8 pb-20 md:pb-0 md:pl-20 transition-all duration-500 ease-in-out absolute rounded-3xl flex flex-col justify-center items-center h-64 md:h-full w-full md:w-3/5 bottom-0 md:top-0 left-0  bg-medium-blue bg-120 from-medium-blue to-light-blue"
            :class="{'transform translate-y-0 md:translate-x-0':isActive, 'transform translate-y-full md:translate-y-0 md:-translate-x-full':!isActive }">
          <p class=" text-text-dark font-TT font-bold text-xl">Длина слов: от {{ wordLength[0] }} до
            {{ wordLength[1] }}</p>
          <dual-range-slider class="my-4" v-model="wordLength"></dual-range-slider>
          <p class="text-text-dark font-TT font-bold text-xl">Количество слов: {{ wordsCount }}</p>
          <range-slider class="my-4" v-model="wordsCount"></range-slider>
        </div>

        <div
            class="overflow-y-auto block overflow-x-hidden bg-white h-mobileMain md:h-main w-full md:w-auto pb-4 px-2 sm:px-3 flex-grow rounded-3xl flex flex-col  items-center">

          <!--          <div class="flex justify-center items-stretch w-full sm:w-auto" v-for="(row, index) in chars" :key="index">-->
          <!--           <svg @click.prevent="selectRow(row.filter(item=>item.char).map(item=>item.char))"-->
          <!--                 class="self-center hover:text-blue-500 text-dark-gray w-5 h-5 sm:w-7 sm:h-7 sm:mr-1 cursor-pointer"-->
          <!--                 fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">-->
          <!--              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>-->
          <!--            </svg>-->
          <!--            <card-checkbox v-model="charsList" v-for="(item, i) in row" :value="item.char" :textValue="item.translate"-->
          <!--                           :key="i"></card-checkbox>-->
          <!--           </div>-->
          <div class="max-w-4xl w-full">
            <div class="flex flex-wrap py-4 sm:py-0">
              <!--                  border-b-2 border-dark-blue-->
              <div class="min-h-16 lg:min-h-22 px-4 table-header hidden sm:flex items-center w-full font-TT font-bold text-dark-blue  py-4 ">
                <div class="flex-grow w-1/2 text-xl lg:text-2xl text-left">Перевод</div>
                <div class="flex-grow w-1/4 ml-1 text-xl lg:text-2xl">Слово</div>
                <div class="flex-grow w-1/4 ml-1 text-xl lg:text-2xl">Ответ</div>
              </div>
              <div class="min-h-31 sm:min-h-16 lg:min-h-22 px-2 sm:px-4 rounded-xl bg-whitesmoke row flex flex-col sm:flex-row items-center w-full text-dark-blue ">
                <div class="flex-grow w-full sm:w-1/2 text-lg lg:text-xl leading-none py-2 font-Abel font-bold  sm:text-left">
<!--                  <div class="block sm:hidden font-TT font-bold text-dark-blue text-xl lg:text-2xl text-left mr-1">Перевод</div>-->
<!--                  <div class="flex-grow">по-прежнему, по-старому, как всегда</div>-->
                  по-прежнему, по-старому, как всегда
                </div>
                <div class="flex-grow  w-full sm:w-1/4 text-xl lg:text-2xl leading-none py-2 font-Abel sm:ml-1 font-bold">
<!--                  <div class="block sm:hidden font-TT font-bold text-dark-blue text-xl lg:text-2xl text-left mr-1">Слово</div>-->
<!--                  <div class="flex-grow">相変わらず</div>-->
                  相変わらず
                </div>
                <div class="text-medium-blue flex-grow  w-full sm:w-1/4 text-xl lg:text-2xl leading-none py-2 font-Abel sm:ml-1 font-bold">
<!--                  <div class="block sm:hidden font-TT font-bold text-dark-blue text-xl lg:text-2xl text-left mr-1">Ответ</div>-->
<!--                  <div class="flex-grow">相変わらず相変わらず</div>-->
                  相変わらず相変わらず
                </div>
              </div>
              <div class="min-h-31 sm:min-h-16 lg:min-h-22 px-2 sm:px-4 row flex items-center flex-col sm:flex-row w-full text-dark-blue ">
                <div class="flex-grow w-full sm:w-1/2 text-lg lg:text-xl leading-none py-2 font-Abel sm:text-left font-bold">
                  раздуть, обмахнуть, веять
                </div>
                <div class="flex-grow w-full sm:w-1/4 text-xl lg:text-2xl leading-none py-2 font-Abel sm:ml-1 font-bold">扇ぐ</div>
                <div class="text-red flex-grow w-full sm:w-1/4 text-xl lg:text-2xl leading-none py-2 font-Abel sm:ml-1 font-bold">Ошибка</div>
              </div>
              <div class="min-h-16 lg:min-h-22 px-2 sm:px-4 rounded-xl bg-whitesmoke row flex-col sm:flex-row flex items-center w-full text-dark-blue">
                <div
                    class="flex-grow w-full sm:w-1/2 text-lg lg:text-xl leading-none py-2 font-Abel sm:text-left font-bold">
                  рассвет
                </div>
                <div class="flex-grow w-full sm:w-1/4 text-xl lg:text-2xl leading-none py-2 font-Abel sm:ml-1 font-bold">明け方</div>
                <div class="text-red flex-grow w-full sm:w-1/4 text-xl lg:text-2xl leading-none py-2 font-Abel sm:ml-1 font-bold">明</div>
              </div>
              <div class="min-h-31 sm:min-h-16 lg:min-h-22 px-2 sm:px-4 row flex-col sm:flex-row flex items-center w-full text-dark-blue">
                <div class="flex-grow w-full sm:w-1/2 text-lg lg:text-xl leading-none py-2 font-Abel sm:text-left font-bold">
                  неясный, туманный, рассеянный,
                  двусмысленный, подозрительный
                </div>
                <div class="flex-grow w-full sm:w-1/4 text-xl lg:text-2xl leading-none py-2 font-Abel sm:ml-1 font-bold">挙げる</div>
                <div class="text-medium-blue flex-grow w-full sm:w-1/4 text-xl lg:text-2xl leading-none py-2 font-Abel sm:ml-1 font-bold">挙げる</div>
              </div>
              <div class="min-h-16 lg:min-h-22 px-4 rounded-xl bg-whitesmoke row flex items-center w-full text-dark-blue">
                <div
                    class="flex-grow w-1/2 text-left text-lg lg:text-xl leading-none py-4 font-Abel text-left font-bold">
                  жарить во фритюре
                </div>
                <div class="flex-grow w-1/4 text-xl lg:text-2xl leading-none py-4 font-Abel ml-1 font-bold">揚げる</div>
                <div class="text-medium-blue flex-grow w-1/4 text-xl lg:text-2xl leading-none py-4 font-Abel ml-1 font-bold">揚げる揚げる揚げる</div>
              </div>
              <div class="min-h-16 lg:min-h-22 px-4 row flex items-center w-full text-dark-blue">
                <div
                    class="flex-grow w-1/2 text-left text-lg lg:text-xl leading-none py-4 font-Abel text-left font-bold">
                  нормальный, естественный, должный,
                  разумный
                </div>
                <div class="flex-grow w-1/4 text-xl lg:text-2xl leading-none py-4 font-Abel ml-1 font-bold">当たり前</div>
                <div class="text-red flex-grow w-1/4 text-xl lg:text-2xl leading-none py-4 font-Abel ml-1 font-bold">当たり前</div>
              </div>
              <div class="min-h-16 lg:min-h-22 px-4 rounded-xl bg-whitesmoke row flex items-center w-full text-dark-blue">
                <div
                    class="flex-grow w-1/2 text-left text-lg lg:text-xl leading-none py-4 font-Abel text-left font-bold">
                  быть применимым, подходить,
                  соответствовать
                </div>
                <div class="flex-grow w-1/4 text-xl lg:text-2xl leading-none py-4 font-Abel ml-1 font-bold">当てはまる</div>
                <div class="text-red flex-grow w-1/4 text-xl lg:text-2xl leading-none py-4 font-Abel ml-1 font-bold">当てはまる</div>
              </div>
              <div class="min-h-16 lg:min-h-22 px-4 row flex items-center w-full text-dark-blue">
                <div
                    class="flex-grow w-1/2 text-left text-lg lg:text-xl leading-none py-4 font-Abel text-left font-bold">
                  жир, масло, смазка
                </div>
                <div class="flex-grow w-1/4 text-xl lg:text-2xl leading-none py-4 font-Abel ml-1 font-bold">脂</div>
                <div class="text-medium-blue flex-grow w-1/4 text-xl lg:text-2xl leading-none py-4 font-Abel ml-1 font-bold">脂</div>
              </div>
              <div class="min-h-16 lg:min-h-22 px-4 rounded-xl bg-whitesmoke row flex items-center w-full text-dark-blue">
                <div
                    class="flex-grow w-1/2 text-left text-lg lg:text-xl leading-none py-4 font-Abel text-left font-bold">
                  поклон
                </div>
                <div class="flex-grow w-1/4 text-xl lg:text-2xl leading-none py-4 font-Abel ml-1 font-bold">御辞儀</div>
                <div class="text-medium-blue flex-grow w-1/4 text-xl lg:text-2xl leading-none py-4 font-Abel ml-1 font-bold">御辞儀</div>
              </div>
              <div class="min-h-16 lg:min-h-22 px-4 row flex items-center w-full text-dark-blue">
                <div
                    class="flex-grow w-1/2 text-left text-lg lg:text-xl leading-none py-4 font-Abel text-left font-bold">
                  неясный, туманный, рассеянный,
                  двусмысленный, подозрительный
                </div>
                <div class="flex-grow w-1/4 text-xl lg:text-2xl leading-none py-4 font-Abel ml-1 font-bold">曖昧</div>
                <div class="text-red flex-grow w-1/4 text-xl lg:text-2xl leading-none py-4 font-Abel ml-1 font-bold">曖昧</div>
              </div>
              <div class="min-h-16 lg:min-h-22 px-4 rounded-xl bg-whitesmoke row flex items-center w-full text-dark-blue">
                <div
                    class="flex-grow w-1/2 text-left text-lg lg:text-xl leading-none py-4 font-Abel text-left font-bold">
                  неясный, туманный, рассеянный,
                  двусмысленный, подозрительный
                </div>
                <div class="flex-grow w-1/4 text-xl lg:text-2xl leading-none py-4 font-Abel ml-1 font-bold">曖昧</div>
                <div class="text-red flex-grow w-1/4 text-xl lg:text-2xl leading-none py-4 font-Abel ml-1 font-bold">曖昧</div>
              </div>
              <div class="min-h-16 lg:min-h-22 px-4 row flex items-center w-full text-dark-blue">
                <div
                    class="flex-grow w-1/2 text-left text-lg lg:text-xl leading-none py-4 font-Abel text-left font-bold">
                  неясный, туманный, рассеянный,
                  двусмысленный, подозрительный
                </div>
                <div class="flex-grow w-1/4 text-xl lg:text-2xl leading-none py-4 font-Abel ml-1 font-bold">曖昧</div>
                <div class="text-medium-blue flex-grow w-1/4 text-xl lg:text-2xl leading-none py-4 font-Abel ml-1 font-bold">曖昧</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "../components/Navbar";
import DualRangeSlider from "../components/DualRangeSlider";
import RangeSlider from "../components/RangeSlider";


export default {
  name: "Results",
  components: {
    NavBar,
    DualRangeSlider,
    RangeSlider,

  },
  data() {
    return {
      isActive: false,
      isMobile: 100,
      wordLength: [1, 7],
      wordsCount: 10,

    }
  },
  computed: {
    // loadingWords(){
    //   console.log(!this.$store.getters.getWords.length)
    //   return !this.$store.getters.getWords.length && this.$store.getters.getSelectedChars.size
    // }
  },
  methods: {
    // async startWriting(){
    //   if (this.charsList.size === 0){
    //     alert("Не выбрано ни одного иероглифа!")
    //     return;
    //   }
    //   this.$store.commit('saveSelected', {
    //     charsList: this.charsList,
    //     settings: {
    //       wordsCount: this.wordsCount,
    //       wordLength: this.wordLength
    //     }
    //   })
    //   await this.$store.dispatch('loadWords')
    //   this.$router.push({ name: 'write'})
    //
    // },
    // selectRow(chars) {
    //   // console.log("func")
    //   // console.log(chars);
    //   if (chars.every(char => this.charsList.has(char)))
    //     chars.forEach(char => this.charsList.delete(char))
    //   else {
    //     // console.log("add")
    //     chars.forEach(char => this.charsList.add(char))
    //
    //   }
    //   // console.log(this.charsList)
    //   // console.log([3,4].every(v => this.charsList.has(v)))
    // },
    // selectSection(chars){
    //   this.selectRow(chars)
    //   console.log("select section")
    // },
    // selectAll() {
    //   let chars = []
    //   if (this.mode === 'kanji'){
    //     console.log(chars)
    //     chars = [].concat(...([].concat(...this.chars))).filter(item => item.char)
    //     console.log(chars)
    //   }
    //   else
    //     chars = [].concat(...this.chars).filter(item => item.char)
    //   // console.log(chars)
    //   if (this.charsList.size === chars.length)
    //     this.charsList.clear()
    //   else
    //     chars.forEach(item => this.charsList.add(item.char))
    // },
    onResize() {
      this.isMobile = (window.innerWidth
          || document.documentElement.clientWidth
          || document.body.clientWidth) < 768;
    },
    // async loadChars() {
    //   // let mode = this.$router.currentRoute.params
    //   let mode = useRoute().params.mode
    //   // console.log(mode)
    //   // let chars = (() => import('../mocks/' + mode + '.js').then(module => ))()
    //   let chars = (await import('../mocks/' + mode + '.js')).default.slice(0)
    //   // console.log("chars11")
    //   // let chars = []
    //   // import('../mocks/' + mode + '.js').then(module => {console.log('11111');chars=module.default})
    //   // console.log("chars1")
    //   // console.log(chars)
    //   let emptyItem = {
    //     id: 0,
    //     char: '',
    //     translate: ''
    //   }
    //   console.log(chars)
    //   console.log(mode !== 'kanji')
    //
    //   if (mode !== 'kanji') {
    //     console.log("not kanji")
    //
    //     chars.splice(36, 0, emptyItem);
    //     chars.splice(38, 0, emptyItem);
    //
    //     chars.splice(46, 0, emptyItem);
    //     chars.splice(47, 0, emptyItem);
    //     chars.splice(48, 0, emptyItem);
    //     // chars.splice(49, 0, emptyItem);
    //
    //     chars.splice(50, 0, emptyItem);
    //     chars.splice(50, 0, emptyItem);
    //     chars.splice(50, 0, emptyItem);
    //     chars.splice(50, 0, emptyItem);
    //
    //     // console.log(chars)
    //     // console.log(chars.length/5)
    //     // console.log(typeof chars)
    //     // console.log(chars[0].char)
    //     // console.log(this.chars)
    //     let result = []
    //     for (let i = 0; i < chars.length / 5; i++) {
    //       let row = []
    //       for (let j = 0; j < 5; ++j)
    //         row.push(chars[i * 5 + j])
    //       result.push(row)
    //     }
    //     this.chars = result
    //   }
    //   else{
    //     console.log("kanji")
    //     let result = []
    //     for (let sec of chars)
    //     {
    //       // console.log(sec)
    //       sec = sec.slice(0)
    //       for (let i = 5 - sec.length % 5; i > 0;--i)
    //         sec.push(emptyItem)
    //       let section = []
    //       for (let i = 0; i < sec.length / 5; i++) {
    //         let row = []
    //         for (let j = 0; j < 5; ++j)
    //           row.push(sec[i * 5 + j])
    //         section.push(row)
    //       }
    //       result.push(section)
    //     }
    //     this.chars = result
    //
    //   }
    //   // console.log(this.chars)
    //
    // }
  },
  // computed: {
  //   isMobile: function(){
  //     return window.innerWidth
  //         || document.documentElement.clientWidth
  //         || document.body.clientWidth;
  //   }
  // },
  created() {
    // this.mode: this.$router.currentRoute.params.mode,
    // this.chars = () => import('../mocks/'+this.mode+'.js')
    // this.loadChars()
  },
  // beforeCreate() {
  // },
  // beforeMount(){this.loadChars()},

  mounted() {
    // console.log('mounted')
    // console.log(this.charsList)
    // console.log(this.$store.getters.getSelectedChars)
    // this.loadChars()
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

</style>
