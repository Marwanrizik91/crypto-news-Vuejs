<template>
  <div class="navBarTop">
    <SearchWidgetInput />
    <nav class="navButton_container">
      <router-link
        v-for="(button, index) in navigationButtons"
        :key="`button${index}`"
        :to="button.path" exact
        router-link tag="li"
        >
        <p>{{ button.name }}</p>
        </router-link
      >
    </nav>
  </div>
</template>

<script>
import SearchWidgetInput from "./SearchWidgetInput.vue";
// import CustomButton from "./CustomButton.vue";
import { NAVBUTTONS } from "../utils/constants.js";
export default {
  name: "TheNavBar",
  data() {
    return {
      navigationButtons: [],
    };
  },
  components: {
    SearchWidgetInput,
  },
  mounted: function () {
    this.navigationButtons = NAVBUTTONS;
  },
};
</script>

<style scoped>
.navBarTop {
  background-color: var(--navyBlack);
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: row;
}

.navButton_container {
  width: 50%;
  display: inherit;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 1rem;
}
nav li {
   list-style: none;
   padding: 0px 15px 0 15px;
   border-radius: 15px;
   font-size: 1rem;
   font-weight: 800;
   user-select: none;
}

 nav li:hover,
 nav li.router-link-active,
 nav li.router-link-exact-active {
   background-color: var(--skinRed);
   cursor: pointer;
 }
</style>
