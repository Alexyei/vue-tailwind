<template>
  <div
      class="z-9 p-8 pb-20 md:pb-0 md:pl-20 transition-all duration-500 ease-in-out absolute rounded-3xl flex flex-col justify-center items-center h-64 md:h-full w-full md:w-3/5 bottom-0 md:top-0 left-0  bg-medium-blue bg-120 from-medium-blue to-light-blue"
      :class="{'transform translate-y-0 md:translate-x-0':isActive, 'transform translate-y-full md:translate-y-0 md:-translate-x-full':!isActive }">
    <p class=" text-text-dark font-TT font-bold text-xl">Длина слов: от 0 до
      9999</p>

    <p class="text-text-dark font-TT font-bold text-xl">Количество слов: 150</p>
    <btn @click.prevent="printsvg()">НАЖМИ МЕНЯ</btn>
    <div v-html="svg" class="relative w-64 h-64 border border-black bg-white">
    </div>

  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: "HintPanel",
  data(){
    return {
      svg: "",
      char: "あ"
    }
  },
  props: {
    isActive: {type: Boolean, default: true},
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
    printsvg(){
      this.svg=""
      axios
          .get('http://localhost:8080/12359.svg')
          .then(response => {
            this.svg =response.data.replace(/<style[\s\S]+\/style>\s/,"");
          })
          .catch(error => {
            // console.log(error);
            alert(error)
            this.errored = true;
          })
          .finally(() => (this.loading = false));
    },
    getSvg(){
      this.svg = this.getSvgChar(this.cleanData(this.char),'ja')
    },
    LoadPolyfills() {
      // полифилы для старых браузеров IE 11 или раньше
    },
    cleanData(char) {
      // \u200B-\u200D\uFEFF are the zero-length characters
      char = char.replace(/[0-9+*.:?!\s\u200B-\u200D\uFEFF]/g, '');
      // keep only the 1st character
      // don't put this function as oninput function of input element
      // because it disturbs asian language IME
      if (char.length) char = String.fromCodePoint(char.codePointAt(0));
      return char;
    },
    getSvgChar(char,lang="zh-hans"){
      let dec = char.codePointAt(0)
      lang = lang.toLowerCase()

      let svg = null
      const fs = require('fs')
      if (lang === 'ja'){
          if (fs.existsSync(__dirname+"/src/animCJK/svgsKana/"+dec+".svg")){
              svg = fs.readFileSync(__dirname+"/src/animCJK/svgsKana/"+dec+".svg").toString()
          }
          else if (fs.existsSync(__dirname+"/src/animCJK/svgsJa/"+dec+".svg")){
            svg = fs.readFileSync(__dirname+"/src/animCJK/svgsJa/"+dec+".svg").toString()
          }
      }
      else if (lang === 'zh-hant'){
        if (fs.existsSync(__dirname+"/src/animCJK/svgsZhHant/"+dec+".svg")){
          svg = fs.readFileSync(__dirname+"/src/animCJK/svgsZhHant/"+dec+".svg").toString()
        }
      }
      // default (zh-hans)
      else{
        if (fs.existsSync(__dirname+"/src/animCJK/svgsZhHans/"+dec+".svg")){
          svg = fs.readFileSync(__dirname+"/src/animCJK/svgsZhHans/"+dec+".svg").toString()
        }
      }

      // if (lang === 'ja'){
      //
      // }

      // если файл svg не пуст
      if (svg) return svg;
      else{
        if (lang==="ja") return this.errorSvg(3,lang,char+" не найден","в нашем","репозитории");
        if (lang ==="zh-hant") return this.errorSvg(4,lang,char+" is not in","our traditional","Chinese","repository");
        return this.errorSvg(4,lang,char+" is not in","our simplified","Chinese","repository");
      }
    },
    errorSvg(n,lang,char1,char2="",char3="",char4=""){
      let s="<svg lang="+lang+" class=\"error\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1024 1024\">\n";
      if (n===1)
      {
        s+="<text x=\"50%\" y=\"50%\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"128\">";
        s+=char1;
        s+="</text>\n";
      }
      else if (n===2)
      {
        s+="<text x=\"50%\" y=\"40%\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"128\">";
        s+=char1;
        s+="</text>\n";
        s+="<text x=\"50%\" y=\"60%\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"128\">";
        s+=char2;
        s+="</text>\n";
      }
      else if (n===3)
      {
        s+="<text x=\"50%\" y=\"30%\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"128\">";
        s+=char1;
        s+="</text>\n";
        s+="<text x=\"50%\" y=\"50%\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"128\">";
        s+=char2;
        s+="</text>\n";
        s+="<text x=\"50%\" y=\"70%\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"128\">";
        s+=char3;
        s+="</text>\n";
      }
      else if (n===4)
      {
        s+="<text x=\"50%\" y=\"20%\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"128\">";
        s+=char1;
        s+="</text>\n";
        s+="<text x=\"50%\" y=\"40%\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"128\">";
        s+=char2;
        s+="</text>\n";
        s+="<text x=\"50%\" y=\"60%\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"128\">";
        s+=char3;
        s+="</text>\n";
        s+="<text x=\"50%\" y=\"80%\" text-anchor=\"middle\" dominant-baseline=\"central\" font-size=\"128\">";
        s+=char4;
        s+="</text>\n";
      }
      else s+="Error";
      s+="</svg>\n";
      return s;
    }
  }

}
</script>

<style scoped>

</style>
