<template>
    <input class="checkbox-tools absolute hidden" type="checkbox" name="tools" id="tool-1">
    <label
        @click="evt => onChange()"
        :class="{'bg-transparent bg-none z-2 shadow-picked':picked,
        'bg-dark-light shadow-checkbox hover:shadow-picked bg-light text-dark-blue shadow-npicked':!picked}"
        class="for-checkbox-tools font-Abel font-bold transition-all duration-300 ease-linear text-white uppercase cursor-pointer overflow-hidden rounded text-center relative block px-1.25 py-5 w-27.5 text-sm tracking-one my-0 mx-1.25 mb-2.5 " for="tool-1">
      <span class="block pb-2.5 text-3xl">{{value}}</span>
      <span class="lbf bg-298 from-medium-blue to-light-blue absolute top-0 left-0 w-full h-full rounded -z-1"></span>
      перекрёсток
    </label>
</template>

<script>
export default {
  name: "CardCheckbox",
  data(){
    return {
      picked: false,
    }
  },
  props: {
    value: { type: String, default: 'あ', },
    key: {type: Number, default: 1},
    checked: {type: Boolean, default: true},
    modelValue: { type: Set, default: () => new Set(), },
  },
  created() {
    this.picked = this.checked
    this.setSync()
  },
  methods: {
    onChange() {
      //пустой чекбокс
      if (this.value==='')
        return;
      this.picked = !this.picked;
      this.setSync()
      // if (this.modelValue.includes(this.value)) {
      //   this.$emit('update:modelValue', this.modelValue.filter(cv => cv !== this.value))
      // }
      // else {
      //   this.$emit('update:modelValue', this.modelValue.concat(this.value))
      // }

      this.$emit('update:modelValue', this.modelValue)
    },
    setSync(){
      if (this.picked)
        this.modelValue.add(this.key)
      else
        this.modelValue.delete(this.key)
      console.log(this.modelValue)
    }
  }
}
</script>

<style scoped>

</style>
