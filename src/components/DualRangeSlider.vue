<template>
  <div class="middle w-full relative max-w-lg">
    <div class="multi-range-slider">
      <input class="opacity-0 w-full h-2.5 absolute left-0 top-0 pointer-events-none appearance-none z-2" @mouseover="isLeftHover=true" @mouseout="isLeftHover=false" @mousedown="isLeftActive=true" @mouseup="isLeftActive=false" type="range" id="input-left" :min="min" :max="max" :value="left"  @input="evt => onChange(evt.target.value, true)">
      <input class="opacity-0 w-full h-2.5 absolute left-0 top-0 pointer-events-none appearance-none z-2" @mouseover="isRightHover=true" @mouseout="isRightHover=false" @mousedown="isRightActive=true" @mouseup="isRightActive=false" type="range" id="input-right" :min="min" :max="max" :value="right" @input="evt => onChange(evt.target.value, false)">

      <div class="slider">
        <div class="track"></div>
        <div :style="{left: percentLeft, right: percentRight}" class="range"></div>
        <div :class="{active: isLeftActive, hover:isLeftHover}" :style="{left: percentLeft }" class="thumb left"></div>
        <div :class="{active: isRightActive, hover:isRightHover}" :style="{right: percentRight }" class="thumb right"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DualRangeSlider",
  props: {
    left_p: { type: Number, default: 1, },
    right_p: { type: Number, default: 8, },
    min_p: { type: Number, default: 1, },
    max_p: { type: Number, default: 8, },
    modelValue: Array,
  },
  data() {
    return {
      // left: this.modelValue[0],
      // right: this.modelValue[1],
      min: this.min_p,
      max: this.max_p,
      isLeftActive : false,
      isRightActive: false,
      isLeftHover: false,
      isRightHover: false
    }
  },
  computed:{
    left(){
      return  this.modelValue[0];
    },
    right(){
      return  this.modelValue[1];
    },
    percentLeft() {

      // `this` points to the vm instance
      return ((this.left - this.min) / (this.max - this.min)) * 100 + '%'
    },
    percentRight() {
      // `this` points to the vm instance
      return (100 - ((this.right - this.min) / (this.max - this.min)) * 100) + '%'
    }
  },
  methods:{
    onChange(value, left=true) {
      console.log("here")
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
      // if (left)
      //   this.left = Math.min(value, this.right-1)
      // else
      //   this.right = Math.max(value,this.left+1)

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
        this.$emit('update:modelValue', [left?Math.min(value, this.right-1):this.left, !left?Math.max(value,this.left+1):this.right])
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
