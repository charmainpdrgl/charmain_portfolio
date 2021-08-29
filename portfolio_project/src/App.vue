<template>
  <!-- <Menu/> -->
  <!-- eslint-disable -->
  <HelloWorld/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
//import Menu from './components/Menu.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    //Menu
  }
}
</script>

<style>
#app {
  font-family: Roboto, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
