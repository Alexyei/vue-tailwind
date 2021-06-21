<template>
  <div class="middle w-full relative max-w-lg">
    <div class="multi-range-slider">
      <input class="opacity-0 w-full h-2.5 absolute left-0 top-0 pointer-events-none appearance-none z-2" @mouseover="isHover=true" @mouseout="isHover=false" @mousedown="isActive=true" @mouseup="isActive=false" type="range" id="input-left" :min="min" :max="max" :value="value"  @input="evt => onChange(evt.target.value)">
<!--      <input class="opacity-0 w-full h-2.5 absolute left-0 top-0 pointer-events-none appearance-none z-2" @mouseover="isRightHover=true" @mouseout="isRightHover=false" @mousedown="isRightActive=true" @mouseup="isRightActive=false" type="range" id="input-right" :min="min" :max="max" :value="right" @input="evt => onChange(evt.target.value, false)">-->

      <div class="slider">
        <div class="track"></div>
<!--        <div :style="{left: percentLeft, right: percentRight}" class="range"></div>-->
        <div :class="{active: isActive, hover:isHover}" :style="{left: percent }" class="thumb left"></div>
<!--        <div :class="{active: isRightActive, hover:isRightHover}" :style="{right: percentRight }" class="thumb right"></div>-->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RangeSlider",
  props: {
    value_p: { type: Number, default: 10, },
    min_p: { type: Number, default: 1, },
    max_p: { type: Number, default: 100, },
  },
  data() {
    return {
      value: this.value_p,
      min: this.min_p,
      max: this.max_p,
      isActive : false,
      isHover: false,
    }
  },
  computed:{
    percent() {
      // `this` points to the vm instance
      return ((this.value - this.min) / (this.max - this.min)) * 100 + '%'
    },

  },
  methods:{
    onChange(value) {
      // function setLeftValue() {
      //   var _this = inputLeft,
      //       min = parseInt(_this.min),
      //       max = parseInt(_this.max);
      //
      //   _this.value = Math.min(parseInt(_this.value), parseInt(inputRight.value) - 1);
      //
      //   var percent = ((_this.value - min) / (max - min)) * 100;
      //
      //   thumbLeft.style.left = percent + "%";
      //   range.style.left = percent + "%";
      // }
      // setLeftValue();

      this.value = value;


      // function setRightValue() {
      //   var _this = inputRight,
      //       min = parseInt(_this.min),
      //       max = parseInt(_this.max);
      //
      //   _this.value = Math.max(parseInt(_this.value), parseInt(inputLeft.value) + 1);
      //
      //   var percent = ((_this.value - min) / (max - min)) * 100;
      //
      //   thumbRight.style.right = (100 - percent) + "%";
      //   range.style.right = (100 - percent) + "%";
      // }
      // setRightValue();
      this.$emit('update:modelValue', this.value)
    }
  }
}
</script>

<style scoped>
body {
  /*margin: 0;*/
  /*padding: 0;*/
  /*height: 100vh;*/
  /*display: flex;*/
  /*justify-content: center;*/
  /*align-items: center;*/
  /*background-color: #e5e5e5;*/
}

/*.middle {*/
/*  position: relative;*/
/*  width: 50%;*/
/*  max-width: 500px;*/
/*}*/

.slider {
  position: relative;
  z-index: 1;
  height: 10px;
  margin: 0 15px;
}
.slider > .track {
  position: absolute;
  z-index: 1;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  border-radius: 5px;
  background-color: rgba(59, 130, 246);
}
.slider > .range {
  position: absolute;
  z-index: 2;
  left: 25%;
  right: 25%;
  top: 0;
  bottom: 0;
  border-radius: 5px;
  background-color: rgb(59, 130, 246);
}
.slider > .thumb {
  position: absolute;
  z-index: 3;
  width: 30px;
  height: 30px;
  background-color: whitesmoke;
  border-radius: 50%;
  box-shadow: 0 0 0 0 rgba(98,0,238,.1);
  transition: box-shadow .3s ease-in-out;
}
.slider > .thumb.left {
  left: 25%;
  transform: translate(-15px, -10px);
}
.slider > .thumb.right {
  right: 25%;
  transform: translate(15px, -10px);
}
.slider > .thumb.hover {
  box-shadow: 0 0 0 20px rgba(98,0,238,.1);
}
.slider > .thumb.active {
  box-shadow: 0 0 0 40px rgba(98,0,238,.2);
}

/*input[type=range] {*/
/*  position: absolute;*/
/*  left:0;*/
/*  top:0;*/
/*  pointer-events: none;*/
/*  -webkit-appearance: none;*/
/*  z-index: 2;*/
/*  height: 10px;*/
/*  width: 100%;*/
/*  opacity: 0;*/
/*}*/
input[type=range]::-webkit-slider-thumb {
  pointer-events: all;
  width: 30px;
  height: 30px;
  border-radius: 0;
  border: 0 none;
  background-color: red;
  -webkit-appearance: none;
}

</style>
