<template>
  <div class="home">
    <nav-bar></nav-bar>
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import NavBar from "../components/Navbar";

export default {
  name: 'Home',
  components: {
    HelloWorld,
    NavBar
  }
}
</script>
