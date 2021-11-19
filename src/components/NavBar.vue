<template>
  <div class="navBarTop">
    <SearchBar />
    <nav class="navButton_container">
      <router-link
        v-for="(button, index) in navigationButtons"
        :key="`button${index}`"
        :to="button.path" exact
        router-link tag="li"
        >
        <p>{{ button.name }} </p>
        </router-link
      >
    </nav>
  </div>
</template>

<script>
import SearchBar from "./SearchBar.vue";
// import CustomButton from "./CustomButton.vue";
import { NAVBUTTONS } from "../utils/constants.js";
export default {
  name: "NavBar",
  data() {
    return {
      navigationButtons: [],
    };
  },
  components: {
    SearchBar,
  },
  mounted: function () {
    this.navigationButtons = NAVBUTTONS;
  },
};
</script>

<style scoped>
.navBarTop {
  background-color: #090023;
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: row;
}

.navButton_container {
  width: 50%;
  display: inherit;
  gap: 1.5rem;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 1rem;
}
nav li {
   list-style: none;
   padding: 0px 10px 0 10px;
   border-radius: 15px;
}

 nav li:hover,
 nav li.router-link-active,
 nav li.router-link-exact-active {
   background-color: #FF5C5C;
   cursor: pointer;
 }
</style>
