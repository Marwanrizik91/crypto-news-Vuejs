<template>
  <div class="navBarTop">
    <div class="searchBar_container">
      <div class="searchBar">
        <input
          type="text"
          v-on:click="getData"
          v-model="searchQuery"
          placeholder="Search a coin"
        >
        <div class="options">
          <ul>
            <li
              class="searchBar_list"
              v-for="(data, index) in filteredData"
              :key="`coin${index}`"
            >
              <img :src="data.thumb" />
              <div class="coin_name_and_symbol">

              <div class="coin_name">{{ data.name }} </div>
              <div class="coin_symbol">{{data.symbol}} </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
      <div class="navButton_container">
          <h3>News</h3>
          <h3>Graphs</h3>
          <h3>Connect Wallet</h3>
      </div>
  </div>
</template>

<script>
// import axios from "axios";
import Data from "../data.json";
export default {
  data() {
    return {
      dataObject: "",
      searchQuery: "",
      selectedItem: "",
      showOptions: false
    };
  },
  methods: {
    getData: async function () {
      if (!this.dataObject) {
        this.dataObject = Data;
        // try {
        //   const response = await axios.get(
        //     "data.json"
        //   );
        //   this.dataObject = response;
        // } catch ({ message }) {
        //   console.log(message);
        // }
      }
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
  background-color: #090023;
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

.searchBar, .searchBar input {
    width: 90%;
    max-width: 500px;
    height: 30px
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

.options {
  
}

.searchBar_list {
    background-color: #090023;
    padding-left: 10px;
    list-style: none;
    display: flex;
    gap: 15px;
    align-items: center;
    color: #fff;
}

.searchBar_list:last-child {
    border-radius: 0 0 15px 15px;
    padding-bottom: 10px;
}

.searchBar_list img {
    width: 30px;
    height: 30px;
}

.coin_name_and_symbol {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.coin_symbol {
  font-size: 12px;
  color: #868686;
}
</style>
