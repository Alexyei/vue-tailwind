<template>

  <div :class="{'opacity-100':isActive,'bg-120 from-medium-blue to-light-blue':status === 'success', 'bg-red-500':status === 'error'}" class="mb-4 md:mb-0 md:ml-6 opacity-0 transition-all duration-500 ease-in-out w-28 text-white text-center text-xs rounded-lg py-2 absolute z-10 bottom-full left-1/2 transform -translate-x-1/2 md:translate-x-0 md:translate-y-1/2 md:left-full md:bottom-1/2 px-3 pointer-events-none">
    {{message}}
<!--    <svg class="absolute text-black h-2 w-full left-0 top-full" x="0px" y="0px" viewBox="0 0 255 255" xml:space="preserve"><polygon class="fill-current" points="0,0 127.5,127.5 255,0"/></svg>-->


<!--    <div class="w-11  overflow-hidden inline-block">-->
<!--      <div class=" h-16  bg-black -rotate-45 transform origin-top-right"></div>-->
<!--    </div>-->
  </div>
  <div :class="{'opacity-100':isActive}" class="opacity-0 mb-1 md:mb-0 md:ml-3 absolute bottom-full md:left-full left-1/2 md:bottom-1/2 transform -translate-x-1/2 md:translate-x-0 md:translate-y-1/2 w-4 md:w-3 overflow-hidden inline-block transition-all duration-500 ease-in-out">
    <div :class="{'bg-medium-blue':status === 'success', 'bg-red-500':status === 'error'}" class="h-3 w-3 sm:h-4 from-medium-blue to-light-blue -rotate-45 transform origin-top-left md:origin-top-right"></div>
  </div>
</template>

<script>
export default {
  name: "Tooltip",
  data() {
    return {
      isActive: false,
      message: "тестовое сообщение",
      status: "success"
    }},
  methods: {
    show(message, status = "success"){
      this.status = status;
      this.message = message;
      this.isActive = true;
      setTimeout(()=>this.isActive=false,3000);
    }
  }
}
</script>

<style scoped>

</style>
