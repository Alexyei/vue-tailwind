<template>
  <div
      class="z-9 px-4 pt-8 pb-28 md:pb-0 md:pl-23.28 transition-all duration-500 ease-in-out absolute rounded-3xl flex flex-col justify-center items-center md:h-full w-full md:w-auto bottom-0 md:top-0 left-0  bg-medium-blue bg-120 from-medium-blue to-light-blue"
      :class="{'transform translate-y-0 md:translate-x-0':isActive, 'transform translate-y-full md:translate-y-0 md:-translate-x-full':!isActive }">
<!--    <p class=" text-text-dark font-TT font-bold text-xl">Длина слов: от 0 до-->
<!--      9999</p>-->

<!--    <p class="text-text-dark font-TT font-bold text-xl">Количество слов: 150</p>-->
    <div class="flex justify-center flex-wrap mb-4 max-w-xs sm:mx-8">
      <div class="box-border" v-for="(_, index) in svgs" :key="index">
          <div style="user-select: none" class="cursor-pointer transition-all duration-500 ease-in-out hover:text-blue-500 flex justify-center items-center bg-white rounded m-1 text-sm font-TT font-bold text-text-dark w-8 h-8" @click.prevent="printsvg(index)">{{ index+1 }}</div>
      </div>
    </div>
    <div class="relative bg-white">
      <div class="gri grid0"></div>
      <div class="gri grid1"></div>
      <div class="gri grid2"></div>
      <div class="gri grid3"></div>
      <div class="gri grid4"></div>
      <div class="gri grid5"></div>
      <div v-html="svg" class="relative w-64 h-64 border bg-transparent">
      </div>
    </div>

  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "HintPanel",
  data() {
    return {
      svg: "",
      // char: "f"
    }
  },
  props: {
    isActive: {type: Boolean, default: false},
    word: {type: String}
  },
  computed: {
    // chars(){
    //   return this.word.split()
    // },
    svgs(){
      //console.log(this.word.split(""))
      return this.word.split("").map((char, i)=>this.getSvg(char, i))
    }
  },
  mounted() {
    // this.LoadScripts()
    // this.getSvg()
    // axios
    //      .get('http://localhost:8080/12359.svg')
    //      .then(response => {
    //        this.svg =response.data.replace(/<style[\s\S]+\/style>\s/,"");
    //      })
    //      .catch(error => {
    //        // console.log(error);
    //        alert(error)
    //        this.errored = true;
    //      })
    //      .finally(() => (this.loading = false));
  },
  methods: {
    printsvg(i) {

      this.svg = ''

      this.$nextTick(() => this.svg = this.svgs[i], 0);
      // this.svg = this.svgs[i]
      // let grid ="<div class=\"gri grid0\"></div>\n" +
      //     "      <div class=\"gri grid1\"></div>\n" +
      //     "      <div class=\"gri grid2\"></div>\n" +
      //     "      <div class=\"gri grid3\"></div>\n" +
      //     "      <div class=\"gri grid4\"></div>\n" +
      //     "      <div class=\"gri grid5\"></div>"
      // axios
      //     .get('http://localhost:8080/12359.svg')
      //     .then(response => {
      //       this.svg = response.data.replace(/<style[\s\S]+\/style>\s/, "")
      //     })
      //     .catch(error => {
      //       // console.log(error);
      //       alert(error)
      //       this.errored = true;
      //     })
      //     .finally(() => (this.loading = false));
    },
    getSvg(char, index) {
      return this.getSvgChar(this.cleanData(char),index, 'ja' )
    },
    // LoadPolyfills() {
    //   // полифилы для старых браузеров IE 11 или раньше
    // },
    cleanData(char) {
      // \u200B-\u200D\uFEFF are the zero-length characters
      char = char.replace(/[0-9+*.:?!\s\u200B-\u200D\uFEFF]/g, '');
      // keep only the 1st character
      // don't put this function as oninput function of input element
      // because it disturbs asian language IME
      if (char.length) char = String.fromCodePoint(char.codePointAt(0));
      return char;
    },
    getSvgChar(char,index, lang = "zh-hans" ) {
      let dec = char.codePointAt(0)
      lang = lang.toLowerCase()

      // let svg = null
      // const fs = require('fs')
      if (lang === 'ja') {
        axios.get('http://localhost:8080/animCJK/svgsKana/' + dec + '.svg')
            .then(response => {
              this.svgs[index] = response.data.replace(/<style[\s\S]+\/style>\s/, "")
            })
            .catch(() => {
              axios.get('http://localhost:8080/animCJK/svgsJa/' + dec + '.svg')
                  .then(response => {
                    this.svgs[index] = response.data.replace(/<style[\s\S]+\/style>\s/, "")
                  }).catch(() => {
                    console.log("SVG")
                this.svgs[index] = this.errorSvg(3, lang, char + " не найден", "в нашем", "репозитории");
              })
            })

        // if (fs.existsSync(__dirname + "/src/animCJK/svgsKana/" + dec + ".svg")) {
        //   svg = fs.readFileSync(__dirname + "/src/animCJK/svgsKana/" + dec + ".svg").toString()
        // } else if (fs.existsSync(__dirname + "/src/animCJK/svgsJa/" + dec + ".svg")) {
        //   svg = fs.readFileSync(__dirname + "/src/animCJK/svgsJa/" + dec + ".svg").toString()
        // }
      } else if (lang === 'zh-hant') {
        // if (fs.existsSync(__dirname + "/src/animCJK/svgsZhHant/" + dec + ".svg")) {
        //   svg = fs.readFileSync(__dirname + "/src/animCJK/svgsZhHant/" + dec + ".svg").toString()
        // }
        axios.get('http://localhost:8080/animCJK/svgsZhHant/' + dec + '.svg')
            .then(response => {
              this.svgs[index] = response.data.replace(/<style[\s\S]+\/style>\s/, "")
            })
            .catch(() => {

              this.svgs[index] = this.errorSvg(4, lang, char + " is not in", "our traditional", "Chinese", "repository");

            })
      }
      // default (zh-hans)
      else {
        // if (fs.existsSync(__dirname + "/src/animCJK/svgsZhHans/" + dec + ".svg")) {
        //   svg = fs.readFileSync(__dirname + "/src/animCJK/svgsZhHans/" + dec + ".svg").toString()
        // }
        axios.get('http://localhost:8080/animCJK/svgsZhHans/' + dec + '.svg')
            .then(response => {
              this.svgs[index] = response.data.replace(/<style[\s\S]+\/style>\s/, "")
            })
            .catch(() => {

              this.svgs[index] = this.errorSvg(4, lang, char + " is not in", "our simplified", "Chinese", "repository");

            })
      }

      // if (lang === 'ja'){
      //
      // }

      // если файл svg не пуст
      // if (svg) return svg;
      // else {
      //   if (lang === "ja") return this.errorSvg(3, lang, char + " не найден", "в нашем", "репозитории");
      //   if (lang === "zh-hant") return this.errorSvg(4, lang, char + " is not in", "our traditional", "Chinese", "repository");
      //   return this.errorSvg(4, lang, char + " is not in", "our simplified", "Chinese", "repository");
      // }
    },
    errorSvg(n, lang, char1, char2 = "", char3 = "", char4 = "") {
      let s = "<svg lang=" + lang + " class=\"error\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1024 1024\">\n";
      if (n === 1) {
        s += "<text x=\"50%\" y=\"50%\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"128\">";
        s += char1;
        s += "</text>\n";
      } else if (n === 2) {
        s += "<text x=\"50%\" y=\"40%\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"128\">";
        s += char1;
        s += "</text>\n";
        s += "<text x=\"50%\" y=\"60%\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"128\">";
        s += char2;
        s += "</text>\n";
      } else if (n === 3) {
        s += "<text x=\"50%\" y=\"30%\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"128\">";
        s += char1;
        s += "</text>\n";
        s += "<text x=\"50%\" y=\"50%\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"128\">";
        s += char2;
        s += "</text>\n";
        s += "<text x=\"50%\" y=\"70%\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"128\">";
        s += char3;
        s += "</text>\n";
      } else if (n === 4) {
        s += "<text x=\"50%\" y=\"20%\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"128\">";
        s += char1;
        s += "</text>\n";
        s += "<text x=\"50%\" y=\"40%\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"128\">";
        s += char2;
        s += "</text>\n";
        s += "<text x=\"50%\" y=\"60%\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"128\">";
        s += char3;
        s += "</text>\n";
        s += "<text x=\"50%\" y=\"80%\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"128\">";
        s += char4;
        s += "</text>\n";
      } else s += "Error";
      s += "</svg>\n";
      return s;
    }
  }

}
</script>

<style scoped>
div.gri
{
  position:absolute;
  box-sizing:border-box;
  /*z-index:-1;*/
}
div.grid0
{
  left:0;
  top:0;
  bottom:0;
  right:0;
  border:1px solid #ccc;
}
div.grid1
{
  top:25%;
  left:0;
  width:100%;
  height:50%;
  border-top:1px solid #ccc;
  border-bottom:1px solid #ccc;
}
div.grid2
{
  top:0;
  left:25%;
  width:50%;
  height:100%;
  border-left:1px solid #ccc;
  border-right:1px solid #ccc;
}
div.grid3
{
  top:0;
  left:0;
  width:100%;
  height:50%;
  border-bottom:1px solid #ccc;
}
div.grid4
{
  top:0;
  left:0;
  width:50%;
  height:100%;
  border-right:1px solid #ccc;
}
div.grid5
{
  left:9.175%;
  top:9.175%;
  width:81.65%;
  height:81.65%;
  border:1px solid #ccc;
}
</style>
