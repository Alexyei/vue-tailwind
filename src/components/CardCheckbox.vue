<template>
    <input class="checkbox-tools absolute hidden" type="checkbox" name="tools" id="tool-1">
    <label
        style="user-select: none"
        @click="setSync"
        :class="{'bg-transparent bg-none z-2 shadow-picked':isChecked,
        'bg-dark-light shadow-checkbox bg-light text-dark-blue shadow-npicked':!isChecked,
        'hover:shadow-picked':value !== ''}"

        class="for-checkbox-tools break-all font-Abel text-xxs sm:text-xs font-bold text-white uppercase cursor-pointer overflow-hidden rounded text-center relative block px-0.5 sm:px-1.25 pt-1 sm:py-3 w-1/6 max-w-16 sm:max-w-full sm:w-24 h-21 sm:h-25.5 tracking-one my-0 mx-1 sm:mx-1.25 mb-2.5 " for="tool-1">
      <span  class="block pb-1 sm:pb-2.5 text-xl sm:text-3xl">{{value}}</span>
      <span class=" lbf bg-298 from-medium-blue to-light-blue absolute top-0 left-0 w-full h-full rounded -z-1"></span>
      {{ textValue }}
    </label>
</template>
<!--transition-all duration-300 ease-linear -->
<script>
export default {
  name: "CardCheckbox",
  data(){
    return {
      // picked: false,
    }
  },
  props: {
    value: { type: String, default: 'あ', },
    textValue: {type:String, default: 'перекрёсток'},
    // cardKey: {type: Number, default: 1},
    // checked: {type: Boolean, default: false},
    modelValue: { type: Set, default: () => new Set(), },
  },
  created() {
    // if (this.value && this.modelValue.has(this.cardKey))
    //   this.picked = true

    // if (this.value && this.modelValue.has(this.value))
    //   this.picked = true

    // this.picked = this.checked
    // console.log('set')
    // this.setSync()
  },
  computed: {
    isChecked(){
     console.log("TRY CHECKED")
      return this.value && this.modelValue.has(this.value)
    }
  },
  methods: {
    // onChange() {
      //пустой чекбокс
      // if (this.value==='')
      //   return;
      // this.picked = !this.picked;
      // this.setSync()
      // if (this.modelValue.includes(this.value)) {
      //   this.$emit('update:modelValue', this.modelValue.filter(cv => cv !== this.value))
      // }
      // else {
      //   this.$emit('update:modelValue', this.modelValue.concat(this.value))
      // }


    // },
    setSync(){
      console.log("TRY SYNC CHECKED")
      if (this.value==='')
            return;
      // this.picked = !this.picked;

      if (!this.isChecked){
        // console.log('add'+this.cardKey)
        // this.modelValue.add(this.cardKey)}
        this.modelValue.add(this.value)}
      else
        //this.modelValue.delete(this.cardKey)
        this.modelValue.delete(this.value)
      // console.log(this.modelValue)
      this.$emit('update:modelValue', this.modelValue)
    }
  }
}
</script>

<style scoped>
/*label{*/
/*  !*-webkit-hyphens: auto;*!*/
/*  !*-moz-hyphens: auto;*!*/
/*  !*-ms-hyphens: auto;*!*/
/*  !*hyphens: auto;*!*/
/*  word-break: break-all;*/
/*}*/
</style>
