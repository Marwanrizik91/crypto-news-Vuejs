<template>
  <div id="app">
    <div id="nav">
      <NavBar />
    </div>
    <router-view/>
  </div>
</template>

<script>
  import NavBar from './components/NavBar.vue'
export default {
  name: "app",
  components: {
NavBar,
  }
}
</script>

<style>

:root {
  --navyBlack: #090023;
  --skinRed: #FF5C5C;
  --gray: #868686;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  padding: 0;
  margin: 0;
}


</style>
