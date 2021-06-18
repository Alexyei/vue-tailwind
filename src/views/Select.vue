<template>
  <div class="bg-whitesmoke w-full min-h-full h-full flex flex-col">
    <nav-bar><span class="text-text-dark text-2xl leading-none py-4 pl-2 block font-TT">Выбрано: 100 из 9999</span>
    </nav-bar>
    <div class="flex-grow flex justify-center items-center w-full px-4 md:px-14 py-4 md:py-7">
      <div class="flex items-center h-full w-full">
        <div class="bg-white h-full pl-6 p-4 mr-4 rounded-3xl flex flex-col justify-center items-center"></div>
        <div class="bg-white h-full pr-6 py-4 flex-grow rounded-3xl flex flex-col justify-center items-center"></div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "../components/Navbar";

export default {
  name: "Select",
  components: {
    NavBar
  },
  data() {
    return {
      isMobile: 100
      // mode: this.$router.currentRoute.params.mode,
      // chars: () => import('../mocks/' + this.mode + '.js')
    }
  },
  methods: {
    // isMobile() {
    //   return screen.width <= 760;
    // },
    onResize () {
      this.isMobile = (window.innerWidth
          || document.documentElement.clientWidth
          || document.body.clientWidth) < 768;
    }
  },
  // computed: {
  //   isMobile: function(){
  //     return window.innerWidth
  //         || document.documentElement.clientWidth
  //         || document.body.clientWidth;
  //   }
  // },
  created() {
    // this.mode: this.$router.currentRoute.params.mode,
    // this.chars = () => import('../mocks/'+this.mode+'.js')
  },
  mounted () {
    this.onResize()
    window.addEventListener('resize', this.onResize, { passive: true })
  },
  beforeUnmount () {
    if (typeof window !== 'undefined') {
      window.removeEventListener('resize', this.onResize, { passive: true })
    }
  }
}
</script>

<style scoped>

</style>
