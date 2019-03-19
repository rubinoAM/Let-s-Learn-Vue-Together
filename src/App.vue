<template>
  <div id="app">
    <TheNavbar/>
    <RouterView/>
  </div>
</template>

<script>
  import TheNavbar from "./components/TheNavbar";

  export default {
    name: "app",
    components: {
      TheNavbar
    }
  };
</script>

<style>
  #app {
    font-family: "Questrial", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    height: 100%;
    display: grid;
    grid-template-rows: 7% auto;
  }
</style>
