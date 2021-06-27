<template>
  <div class="" >
    <div class="flex justify-between items-center w-full max-w-row mt-3 pb-3">
      <svg @click.prevent="$emit('select')"
           class="cursor-pointer hover:text-blue-500 text-dark-gray w-5 h-5 sm:w-7 sm:h-7 sm:mr-1" fill="none"
           stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
      </svg>
      <p @click.prevent="isActive = !isActive" class="cursor-pointer hover:text-text-dark text-xl font-bold sm:text-2xl leading-none block font-TT text-blue-500 flex-grow">
        {{title}}</p>
      <svg @click.prevent="isActive = !isActive" :class="{'transform rotate-180':isActive}" class="transition-all duration-500 ease-in-out hover:text-blue-500 text-dark-gray w-5 h-5 sm:w-7 sm:h-7 sm:mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 13l-7 7-7-7m14-8l-7 7-7-7"></path></svg>
<!--      <svg @click.prevent="isActive = !isActive" :class="{'transform rotate-180':isActive}" class="cursor-pointer transition-all duration-500 ease-in-out hover:text-blue-500 text-dark-gray w-5 h-5 sm:w-7 sm:h-7 sm:mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>-->
<!--      <svg @click.prevent="isActive = !isActive" :class="{'transform rotate-45':isActive}" class="transition-all duration-500 ease-in-out hover:text-blue-500 text-dark-gray w-5 h-5 sm:w-7 sm:h-7 sm:mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>-->
    </div>

    <div class="border-text-dark border-b-2 transition-all duration-500 ease-in-out overflow-hidden" :class="{'max-h-max':isActive,'max-h-0':!isActive }">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Accordion",
  data(){
    return {
      isActive: false,
    }
  },
  props: {
    title: { type: String },
  }
}
</script>

<style scoped>

</style>
