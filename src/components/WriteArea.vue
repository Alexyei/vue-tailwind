<template>
<!--  <p>{{clientWidth}}</p>-->
<!--  <p>{{clientHeight}}</p>-->
<!--  <p>{{width}}</p>-->
<!--  <p>{{height}}</p>-->
<!--  <p>{{isMounted}}</p>-->
<!--  :style="{height: height+'px', width: width+'px'}"-->
  <canvas ref="canvas"
          @pointerdown="mousedown($event)"
          @pointermove="mousemove($event)"
          @pointerup="mouseup($event)"
  ></canvas>
</template>

<script>
import axios from "axios";

export default {
  name: "WriteArea",
  data() {
    return {
      currentColor: '#444',
      currentBg: '#FFF',
      ctx: null,
      startTime: null,
      stroke: [[], [], []],
      data: [],
      startPaint: false,
      firstPoint: null,
      secondPoint: null,
    }
  },
  props: {
    clientWidth: {type: Number},
    clientHeight: {type: Number},
    charsCount: {type: Number}
  },

  computed: {


    pxPerChar() {
      // console.log("m1")
      // console.log(this.clientWidth)
      return this.clientWidth >= 768 ? 50 : 50;
    },
    penSize() {
     // console.log("m2")
    //  console.log(this.clientWidth)
     return this.clientWidth >= 768 ? 5 : 3;
      //return 5;
    },
    height() {
      console.log("m3")
   //   console.log(this.clientHeight)
       return this.clientHeight
      //return 100
    },
    width() {
      console.log("m4")
      //this.reset()
    //  console.log(this.clientWidth)
       return Math.max(this.clientWidth, this.charsCount * this.pxPerChar)
      //return 100
    }
  },
  mounted() {


    console.log("MOUNTED")
    console.log(this.$el.parentElement.clientWidth)
    console.log(this.$el.parentElement.clientHeight)
    console.log(this.$parent.clientHeight)
    // this.startTime = Date.now();
    // this.ctx= this.$refs.canvas.getContext("2d"),
    // this.ctx.fillStyle = this.currentBg;
    // this.ctx.fillRect(0, 0, this.width, this.height);
    // this.data = []
    this.reset()
    console.log(this.$refs.canvas)
    window.addEventListener('resize', this.reset, {passive: true});
  },
  methods: {
    reset(){
      // console.log("H!")
      // if (!this.isMounted) return;
      // console.log("H?")
      this.$refs.canvas.width = this.width
      this.$refs.canvas.height = this.height
      this.startTime = Date.now();
      this.ctx= this.$refs.canvas.getContext("2d");
      console.log(this.ctx)
      this.ctx.fillStyle = this.currentBg;
      console.log(this.ctx.fillStyle)
      console.log(this.width)
      console.log(this.height)
      this.ctx.fillRect(0, 0, this.width, this.height);
      this.data = []
    },
    mousedown(event) {
      this.firstPoint = this.getMousePos(event);
      this.startPaint = true;

      this.pushStroke(this.firstPoint.x, this.firstPoint.y);

      this.ctx.lineWidth = this.penSize;
      this.ctx.lineCap = "round";
      this.ctx.strokeStyle = this.currentColor;
      this.ctx.fillStyle = this.currentColor;

      this.ctx.moveTo(this.firstPoint.x, this.firstPoint.y)
      this.ctx.beginPath();
    },
    mousemove(event) {
      if (this.startPaint) {
        this.secondPoint = this.getMousePos(event);
        this.pushStroke(this.secondPoint.x, this.secondPoint.y);
        this.redraw();
      }
    },
    mouseup() {
      if (this.startPaint) {
        this.data.push(this.stroke);
        // console.log(window.storage.data);
        this.stroke = [[], [], []];
        this.ctx.closePath();
        //savePicture();
        this.startPaint = false;
      }
    },
    pushStroke(x, y) {
      this.stroke[0].push(x);
      this.stroke[1].push(y);
      this.stroke[2].push(Date.now() - this.startTime);
    },
    getMousePos(event){
      let rect = event.target.getBoundingClientRect();
      return {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top
      };
    },
    redraw(){
      this.ctx.lineTo(this.secondPoint.x, this.secondPoint.y)
      this.ctx.stroke();
    },
    recognise(){
      let timeStart = performance.now();
      // Количество возвращаемых результатов (точность распознавания)
// не работает, возвращается 10 результатов
      let resultCount = 10;
      const data = {
        app_version: 0.4,
        api_level: '537.36',
        device:
        window.clientInformation.appVersion,
        input_type: 0,
        options: 'enable_pre_space',
        requests: [
          {
            writing_guide: {
              writing_area_width: this.width,
              writing_area_height: this.height
            },
            pre_context: '',
            max_num_results: resultCount,
            max_completions: 0,
            language: 'ja',
            ink: this.data
          }
        ]
      };


      let lang = 'ja'
      if (lang === 'ja') {
        axios.post('https://inputtools.google.com/request?itc=ja-t-i0-handwrit&app=translate',
            JSON.stringify(data),
            {
              headers: {
                'Content-Type': 'application/json;charset=utf-8'
              },
            })
            .then(response => {
              let result = JSON.parse(response.data)
              console.log("Время выполнения: "+(performance.now() - timeStart).toFixed(4)+" милисекунд");
              if (result[0] === 'SUCCESS') {
                return {status:'success', data:result[1][0][1]}
              } else {
                // console.error('something went wrong');
                return {status:'success', data:'something went wrong'}
              }
            })
            .catch(() => {
              // console.error('something went wrong');
              return {status:'success', data:'something went wrong'}
            })
      }
    }
  },
  beforeUnmount() {
    if (typeof window !== 'undefined') {
      window.removeEventListener('resize', this.reset, {passive: true})
    }
  }
}
</script>

<style scoped>

</style>
