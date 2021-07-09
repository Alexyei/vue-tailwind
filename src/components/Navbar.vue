<template>

  <nav class="min-h-16 md:min-h-22 px-4 md:px-10 box-border  bg-white w-full justify-center items-center flex" :class="{'z-20':isActive}">
  <div class="lg:container  w-full flex justify-between items-center">
    <div>
      <slot><a href="#" class="text-text-dark text-2xl leading-none py-4 pl-2 block font-TT">Мой блог</a></slot>
    </div>
    <div class="flex flex-col justify-between items-center relative w-7.5 h-7.5 cursor-pointer z-10 lg:invisible lg:opacity-0"  @click="isActive = !isActive">

      <span class="block w-7.5 h-0.75 my-0.75 mx-auto transition duration-300 ease-in-out bg-text-dark" :class="{'transform translate-y-2.5 rotate-45':isActive}" ></span>
      <span class="block w-7.5 h-0.75 my-0.75 mx-auto transition duration-300 ease-in-out bg-text-dark" :class="{'opacity-0':isActive}"></span>
      <span class="block w-7.5 h-0.75 my-0.75 mx-auto transition duration-300 ease-in-out bg-text-dark" :class="{'transform -translate-y-2.75 -rotate-45':isActive}"></span>
    </div>

    <ul class="font-Abel text-text-dark lg:visible lg:opacity-100 transition-opacity duration-300 fixed top-0 left-0 w-full lg:w-auto lg:h-auto lg:static lg:m-0 lg:p-0 h-full flex flex-col lg:flex-row justify-center lg:justify-start items-center z-1 bg-white" :class="{'opacity-0 invisible':!isActive}">
<!--      lg:hover:bg-white -->
      <li class="transition duration-300 ease-in-out hover:bg-medium-blue lg:hover:bg-white text-center lg:text-left text-3xl leading-none lg:text-lg lg:relative w-full lg:w-auto">
<!--        <a class="py-6.4 px-4 block hover:text-white lg:hover:text-current" href="#">Главная</a>-->
<!--         lg:hover:text-current-->
        <router-link class="lg:hover:text-current hover:text-white transition duration-300 ease-in-out border-white hover:border-medium-blue lg:border-b-4 py-6.4 lg:py-7 px-4 block" :to="{name: 'Главная'}" :class="{'border-medium-blue':$route.name === 'Главная'}">
          Главная</router-link>
      </li>
      <li class="transition duration-300 ease-in-out hover:bg-medium-blue lg:hover:bg-white text-center lg:text-left text-3xl leading-none lg:text-lg lg:relative w-full lg:w-auto">
        <a class="py-6.4 px-4 block lg:hover:text-current hover:text-white transition duration-300 ease-in-out border-white hover:border-medium-blue lg:border-b-4 lg:py-7 " href="#">Категории</a>
      </li>
      <li class="transition duration-300 ease-in-out hover:bg-medium-blue lg:hover:bg-white text-center lg:text-left text-3xl leading-none lg:text-lg lg:relative w-full lg:w-auto">
        <a class="py-6.4 px-4 block lg:hover:text-current hover:text-white transition duration-300 ease-in-out border-white hover:border-medium-blue lg:border-b-4 lg:py-7 " href="#">Теги</a>
      </li>

<!--      <li class="nav-link">-->
<!--        <a href="{{route('logout')}}">Выйти</a>-->
<!--      </li>-->

      <li class="transition duration-300 ease-in-out hover:bg-medium-blue lg:hover:bg-white text-center lg:text-left text-3xl leading-none lg:text-lg lg:relative w-full lg:w-auto">
        <a class="py-6.4 px-4 block lg:hover:text-current hover:text-white transition duration-300 ease-in-out border-white hover:border-medium-blue lg:border-b-4 lg:py-7 " href="#">Войти</a>
      </li>


      <li class="transition duration-300 ease-in-out hover:bg-medium-blue lg:hover:bg-white text-center lg:text-left text-3xl leading-none lg:text-lg lg:relative w-full lg:w-auto">
        <a class="py-6.4 px-4 block lg:hover:text-current hover:text-white transition duration-300 ease-in-out border-white hover:border-medium-blue lg:border-b-4 lg:py-7 " href="#">Контакты</a>
      </li>
    </ul>
  </div>
  </nav>

</template>

<script>


export default {
  name: "NavBar",
  data(){
    return {
      isActive: false
    }
  },
  methods: {
    // toogle() {
    //   // бургер
    //   document.querySelector(".nav").classList.toggle('is-active');
    //   document.querySelector(".toggle-collapse").classList.toggle('is-active');
    //   //элементы меню
    //   document.querySelector(".nav-items").classList.toggle('active');
    // }
  }
}
</script>

<style scoped>
</style>
