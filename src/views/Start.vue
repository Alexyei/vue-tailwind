<template>

  <div class="bg-whitesmoke w-full min-h-full h-full flex flex-col">
    <nav-bar></nav-bar>
    <div class="relative flex-grow flex justify-center items-center w-full px-4 md:px-10 py-4 md:py-7">
      <div style="user-select: none" class="bg-white px-6 py-4 rounded-3xl flex flex-col justify-center items-center w-full h-full w-auto h-auto  sm:w-auto sm:h-auto">

          <h2 class="text-4xl font-TT text-text-dark mb-6 font-bold">Выберите:</h2>
        <div class="block z-9">
          <div v-for="(btn, index) in buttons" :key="index">
          <input class="absolute invisible" type="radio" name="budget" :id="index" v-model="picked" :value="btn.value">
          <label
              :class="{'hover:shadow-labelh bg-light shadow-npicked text-stroke-dark-blue text-stroke-1':picked!==btn.value,
              'shadow-picked bg-transparent':picked===btn.value}"
              class="text-transparent text-stroke-white text-stroke-1 text-fill-transparent transition duration-300 ease-linear cursor-pointer overflow-hidden rounded-2xl text-center font-Ubuntu relative flex justify-center items-center px-5 py-5 mx-1.25 mb-5 text-radioM sm:text-radio font-bold tracking-one" :for="index">
            <span aria-hidden="true" :class="btn.grad"  class="lbf absolute left-0 top-0 w-full h-full rounded -z-1"></span>
            <span class="font-Ubuntu relative block">{{ btn.name }}
            <span
                aria-hidden="true"
                :class="{'max-h-0':picked!==btn.value,
              'max-h-full':picked===btn.value}"
                class="lsbf transition duration-300 absolute left-0 top-0 overflow-hidden text-stroke-transparent text-fill-white text-white">{{ btn.name }}</span>
            </span>
          </label>
          </div>
<!--          <input class="checkbox-budget" type="radio" name="budget" id="budget-2" v-model="picked" value="КАТАКАНА">-->
<!--          <label class="for-checkbox-budget" for="budget-2">-->
<!--            <span data-hover="КАТАКАНА">КАТАКАНА</span>-->
<!--          </label>-->

<!--          <input class="checkbox-budget" type="radio" name="budget" id="budget-3" v-model="picked" value="ИЕРОГЛИФЫ">-->
<!--          <label class="for-checkbox-budget" for="budget-3">-->
<!--            <span data-hover="ИЕРОГЛИФЫ">ИЕРОГЛИФЫ</span>-->
<!--          </label>-->
<!--          <button class="btn solid">Далее</button>-->
          <button @click.prevent="$router.push({ name: 'select', params: { mode: picked.toLowerCase() } })" class="focus:outline-none font-Raleway w-37.5 h-12.5 rounded-full uppercase font-semibold my-2.5 cursor-pointer hover:bg-none bg-120 from-medium-blue to-light-blue text-text-dark transition duration-300 ease-in-out border-2 hover:border-text-dark border-white">Далее</button>
        </div>
      </div>

    </div>
  </div>
</template>


<script>
import NavBar from "../components/Navbar";
export default {
  name: "Start",
  components: {
    NavBar
  },
  data(){
    return {
      picked: 'hiragana',
      buttons: [
        {name: 'ХИРАГАНА',
          value: 'hiragana',
          grad: 'bg-120 from-red-start to-light-blue'
        },
        {name: 'КАТАКАНА',
          value: 'katakana',
          grad: 'bg-120 from-medium-blue to-yellow-start'
        },
        {name: 'ИЕРОГЛИФЫ',
          value: 'kanji',
          grad: 'bg-120 from-yellow-start to-red-start'
        }
      ]
    }
  }
}
</script>

<style scoped>
.btn.solid:hover,.btn.solid.load{
  /*background: var(--skyh);*/
  border: 2px solid black;
  background: none;
}
.btn.solid {
  background: linear-gradient(120deg, #a1c4fd, #c2e9fb);
  color: #444;
}
.btn {
  font-family: Raleway;
  font-size: 16px;

  width: 150px;
  /* background-color: #5995fd; */
  border: none;
  outline: none;
  height: 49px;
  border-radius: 49px;
  color: #fff;
  text-transform: uppercase;
  font-weight: 600;
  margin: 10px 0;
  cursor: pointer;
  transition: 0.5s;
}
/**, ::after, ::before {*/
/*  box-sizing: border-box;*/
/*}*/
/*input[type=checkbox], input[type=radio] {*/
/*  box-sizing: border-box;*/
/*  padding: 0;*/
/*}*/
/*input {*/
/*  overflow: visible;*/
/*  margin: 0;*/
/*  font-family: inherit;*/
/*  font-size: inherit;*/
/*  line-height: inherit;*/
/*}*/

[type="checkbox"]:checked,
[type="checkbox"]:not(:checked),
[type="radio"]:checked,
[type="radio"]:not(:checked){
  position: absolute;
  left: -9999px;
  width: 0;
  height: 0;
  visibility: hidden;
}
.checkbox-budget:checked + label,
.checkbox-budget:not(:checked) + label{
  /*line-height: 40px;*/
 font-family: Ubuntu;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  /*display: inline-block;*/
  padding: 0;
  padding-top: 20px;
  padding-bottom: 20px;
  /*width: 300px;*/
  font-size: 52px;
  line-height: 52px;
  font-weight: 700;
  letter-spacing: 1px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
  margin-left: 5px;
  margin-right: 5px;
  margin-bottom: 20px;
  text-align: center;
  border-radius: 15px;
  overflow: hidden;
  cursor: pointer;
  /*text-transform: uppercase;*/
  -webkit-transition: all 300ms linear;
  transition: all 300ms linear;
  -webkit-text-stroke: 1px #FFF;
  text-stroke: 1px #FFF;
  -webkit-text-fill-color: transparent;
  text-fill-color: transparent;
  color: transparent;
}
.checkbox-budget:not(:checked) + label{
  background-color: var(--dark-light);
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
}
.checkbox-budget:checked + label{
  background-color: transparent;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}
.checkbox-budget:not(:checked) + label:hover{
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}

.checkbox-budget:checked + label::before,
.checkbox-budget:not(:checked) + label::before{
  position: absolute;
  content: '';
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 4px;
  /*background-image: linear-gradient(138deg, var(--red), var(--yellow));*/
  background-image: linear-gradient(120deg, var(--red), #c2e9fb);;
  z-index: -1;
}
.checkbox-budget:nth-child(2) + label::before{
  background-image: linear-gradient(120deg, #a1c4fd, var(--yellow));;
}
.checkbox-budget:checked + label span,
.checkbox-budget:not(:checked) + label span{
  font-family: Ubuntu;
  position: relative;
  display: block;
}
.checkbox-budget:checked + label span::before,
.checkbox-budget:not(:checked) + label span::before{

  position: absolute;
  content: attr(data-hover);
  top: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  -webkit-text-stroke: transparent;
  text-stroke: transparent;
  -webkit-text-fill-color: #FFF;
  text-fill-color: #FFF;
  color: #FFF;
  -webkit-transition: max-height 0.3s;
  -moz-transition: max-height 0.3s;
  transition: max-height 0.3s;
}
.checkbox-budget:not(:checked) + label span::before{
  max-height: 0;
}
.checkbox-budget:checked + label span::before{
  max-height: 100%;
}

/*.checkbox:checked ~ .section .container .row .col-xl-10 .checkbox-budget:not(:checked) + label{*/
/*  background-color: var(--light);*/
/*  -webkit-text-stroke: 1px var(--dark-blue);*/
/*  text-stroke: 1px var(--dark-blue);*/
/*  box-shadow: 0 1x 4px 0 rgba(0, 0, 0, 0.05);*/
/*}*/
.checkbox-budget:not(:checked) + label{
  background-color: var(--light);
  -webkit-text-stroke: 1px var(--dark-blue);
  text-stroke: 1px var(--dark-blue);
  box-shadow: 0 1x 4px 0 rgba(0, 0, 0, 0.05);
}

@media (max-width: 600px) {
  .checkbox-budget:checked + label,
  .checkbox-budget:not(:checked) + label{
    font-size: 24px;
    line-height: 30px;
  }
}
</style>
