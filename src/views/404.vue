<template>
<!--  <div class="flex flex-col justify-center items-center min-h-screen ">-->
<!--    <h1 class="text-black text-7xl mb-5">-->
<!--      Ничего не найдено-->
<!--    </h1>-->
<!--  </div>-->
  <div class="px-2 min-h-screen w-full bg-120 from-medium-blue to-light-blue flex flex-col items-center justify-center">
    <div class="flex justify-center items-center">
    <div class="text-white font-TT text-notfound">4</div>
<!--    <i class="far fa-question-circle fa-spin"></i>-->
      <svg class="animate-spin-slow fill-current text-white w-28 h-28" aria-hidden="true" focusable="false" data-prefix="fal" data-icon="question-circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 340c-15.464 0-28 12.536-28 28s12.536 28 28 28 28-12.536 28-28-12.536-28-28-28zm7.67-24h-16c-6.627 0-12-5.373-12-12v-.381c0-70.343 77.44-63.619 77.44-107.408 0-20.016-17.761-40.211-57.44-40.211-29.144 0-44.265 9.649-59.211 28.692-3.908 4.98-11.054 5.995-16.248 2.376l-13.134-9.15c-5.625-3.919-6.86-11.771-2.645-17.177C185.658 133.514 210.842 116 255.67 116c52.32 0 97.44 29.751 97.44 80.211 0 67.414-77.44 63.849-77.44 107.408V304c0 6.627-5.373 12-12 12zM256 40c118.621 0 216 96.075 216 216 0 119.291-96.61 216-216 216-119.244 0-216-96.562-216-216 0-119.203 96.602-216 216-216m0-32C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8z" class=""></path></svg>
    <div class="text-white font-TT text-notfound">4</div>
    </div>
    <div class="text-2xl text-center text-black font-Raleway">Возможно страница переехала? Была удалена? Находится на самоизоляции? Никогда не существовала?<p class="mt-4">Переходи на <router-link class="no-underline text-white hover:underline" :to="{ name: 'Главная' }">главную</router-link> и пробуй начать оттуда.</p></div>
  </div>
</template>

<script>
export default {
  name: "NotFound"
}
</script>

<style scoped>

</style>
