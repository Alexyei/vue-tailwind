<template>

</template>

<script>
export default {
  name: "Select",
  data(){
    return {
      mode: this.$router.currentRoute.params.mode,
      chars : () => import('../mocks/'+this.mode+'.js')
    }
  },
  // created() {
  //   this.chars = () => import('../mocks/'+this.mode+'.js')
  // }
}
</script>

<style scoped>

</style>
