<template>
<div v-show="isActive" class="absolute z-9000 top-0 bottom-0 right-0 left-0 bg-white flex items-center justify-center">
  <svg class="animate-spin-slow fill-current text-blue-500 w-8 h-8" aria-hidden="true"
       focusable="false" data-prefix="fas" data-icon="spinner" role="img" xmlns="http://www.w3.org/2000/svg"
       viewBox="0 0 512 512">
    <path fill="currentColor"
          d="M304 48c0 26.51-21.49 48-48 48s-48-21.49-48-48 21.49-48 48-48 48 21.49 48 48zm-48 368c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zm208-208c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zM96 256c0-26.51-21.49-48-48-48S0 229.49 0 256s21.49 48 48 48 48-21.49 48-48zm12.922 99.078c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.491-48-48-48zm294.156 0c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.49-48-48-48zM108.922 60.922c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.491-48-48-48z"
          class=""></path>
  </svg>
</div>
</template>

<script>
export default {
  name: "Preloader",
  data(){
    return{
      isActive: true
    }
  },
  mounted() {
    setTimeout(()=>this.isActive=false,500)
  }
}
</script>

<style scoped>

</style>
