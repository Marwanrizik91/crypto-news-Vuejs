<template>
  <div class="navBarTop">
    <SearchBar />
    <div class="navButton_container">
      <CustomButton
        v-for="buttonName in navigationButtons"
        :key="buttonName"
        v-bind:buttonName="buttonName"
      />
    </div>
  </div>
</template>

<script>
import SearchBar from "./SearchBar.vue";
import CustomButton from "./CustomButton.vue";
import { NAVBUTTONS } from "../utils/constants.js";
export default {
  name: "NavBar",
  data() {
      return {
      navigationButtons: [],
      }
  },
  components: {
    SearchBar,
    CustomButton,
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
</style>
