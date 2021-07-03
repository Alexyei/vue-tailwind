<template>
  <canvas ref="canvas" :style="{height: height+'px', width: width+'px'}"
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
      currentColor: 'black',
      currentBg: 'white',
      ctx: this.$refs.canvas.getContext("2d"),
      startTime: null,
      stroke: [[], [], []],
      data: [],
      startPaint: false,
      firstPoint: null,
      secondPoint: null
    }
  },
  props: {
    clientWidth: {type: String,},
    clientHeight: {type: String},
    charsCount: {type: Number}
  },
  computed: {
    pxPerChar() {
      return this.clientWidth >= 768 ? 200 : 150;
    },
    penSize() {
      return this.clientWidth >= 768 ? 5 : 3;
    },
    height() {
      return this.clientHeight
    },
    width() {
      return Math.max(this.clientWidth, this.charsCount * this.pxPerChar)
    }
  },
  mounted() {
    this.startTime = Date.now();
    this.ctx.fillStyle = this.currentBg;
    this.ctx.fillRect(0, 0, this.width, this.height);
    this.data = []
  },
  methods: {
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
              if (result[0] === 'SUCCESS') {
                console.log(result[1][0][1]);
              } else {
                console.error('something went wrong');
              }
              console.log("Время выполнения: "+(performance.now() - timeStart).toFixed(4)+" милисекунд");
            })
            .catch(() => {
              console.error('something went wrong');
            })
      }
    }
  }
}
</script>

<style scoped>

</style>
