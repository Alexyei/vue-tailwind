<template>
<canvas ref="canvas" :style="{height: height+'px', width: width+'px'}"></canvas>
</template>

<script>
export default {
  name: "WriteArea",
  data() {
    return {
      currentColor: 'black',
      currentBg: 'white',
      ctx: this.$refs.canvas.getContext("2d"),
      startTime: null,
      stroke: [[], [], []],
      data: []
    }
  },
  props: {
    clientWidth: {type: String,},
    clientHeight: {type: String},
    charsCount: {type: Number}
  },
  computed: {
    pxPerChar(){
      return this.clientWidth>=768?200:150;
    },
    penSize(){
      return this.clientWidth>=768?5:3;
    },
    height(){
      return this.clientHeight
    },
    width(){
      return Math.max(this.clientWidth,this.charsCount*this.pxPerChar)
    }
  },
  mounted() {
    this.startTime = Date.now();
    this.ctx.fillStyle = this.currentBg;
    this.ctx.fillRect(0, 0, this.width, this.height);
    this.data = []
  },
  methods: {
    
  }
}
</script>

<style scoped>

</style>
