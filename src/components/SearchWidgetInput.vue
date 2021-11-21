<template>
    <div class="searchBar_container">
      <div class="searchBar">
        <div class="searchBar_input_container">
          <input
            class="searchBar_input"
            type="text"
            @click="getData"
            v-model="searchQuery"
            placeholder="Search a coin"
            @mouseenter="handleMouseEnter"
          />
          <p v-show="searchQuery" @click="handleXclick">x</p>
        </div>
        <SearchWidgetResultsList v-bind:showOptions.sync="showOptions" v-bind:filteredData.sync="filteredData" v-bind:selectedItem.sync="selectedItem" v-bind:searchQuery.sync="searchQuery"/>
      </div>
    </div>
</template>

<script>
// import axios from "axios";
import Data from "../data.json";
import SearchWidgetResultsList from "./SearchWidgetResultsList.vue"
export default {
  name: "SearchBar",
  components: {
    SearchWidgetResultsList,
  },
   
  data() {
    return {
      dataObject: "",
      searchQuery: "",
      selectedItem: "",
      showOptions: !this.searchQuery ? false : true,
    };
  },
  
  methods: {
    getData: async function () {
      if (!this.dataObject) {
        this.dataObject = Data;
        this.showOptions = true;
        // try {
        //   const response = await axios.get(
        //     "url"
        //   );
        //   this.dataObject = response;
        // } catch ({ message }) {
        //   console.log(message);
        // }
      }
    },
    handleClick: function (data) {
      this.searchQuery = data;
      this.showOptions = false;
    },
    handleMouseEnter: function () {
      this.showOptions = true;
    },

    handleXclick: function () {
      this.searchQuery = "";
    },

  },
  computed: {
    filteredData: function () {
      if (!this.dataObject) return;
      let newData = this.dataObject.coins.filter((coin) => {
        return (
          coin.name.toLowerCase().startsWith(this.searchQuery.toLowerCase()) ||
          coin.symbol.toLowerCase().startsWith(this.searchQuery.toLowerCase())
        );
      });
      if (!this.searchQuery || this.searchQuery.length < 2) return;
      return newData.length > 5 ? newData.slice(0, 5) : newData;
    },
  },
};
</script>

<style lang="css" scoped>
.navBarTop {
  background-color: var(--navyBlack);
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: row;
}
.searchBar_container {
  width: 50%;
  display: inherit;
  align-items: center;
  justify-content: center;
}

.searchBar,
.searchBar input {
  width: 100%;
  max-width: 500px;
  height: 30px;
  border-radius: 10px;
}

.searchBar input::placeholder  {
  font-size: 12px;
}

.searchBar input {
  padding-inline-start:10px ;
  font-size: 16px;
}
.searchBar_input_container {
  position: relative;
  box-sizing: border-box;
  margin-left: 30px;
}

.searchBar_input_container p {
  position: absolute;
  right: 5px;
  top: -5px;
  cursor: pointer;
}


</style>
