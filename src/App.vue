<template>
  <div id="app">
    <div id="nav">
      <TheNavBar />
    </div>
    <router-view />
  </div>
</template>

<script>
import TheNavBar from "./components/TheNavBar.vue";
import store from "./store";

export default {
  name: "app",
  store,
  components: {
    TheNavBar,
  },
};
</script>

<style>
:root {
  --navyBlack: #090023;
  --skinRed: #ff5c5c;
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
