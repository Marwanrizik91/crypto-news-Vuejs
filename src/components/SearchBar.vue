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
        <div
          v-show="showOptions"
          @mouseleave="handleMouseLeave"
          class="options"
        >
          <ul>
            <li
              class="searchBar_list"
              v-for="(data, index) in filteredData"
              :key="`coin${index}`"
              @click="handleClick(data.name)"
              @mouseover="handleListMouseOver($event)"
              @mouseout="handleListMouseOut($event)"
            >
              <img :src="data.thumb" />
              <div class="coin_name_and_symbol">
                <div class="coin_name">{{ data.name }}</div>
                <div class="coin_symbol">{{ data.symbol }}</div>
              </div>
              <div class="coin_ranking">
                {{ data.market_cap_rank && `#${data.market_cap_rank}` }}
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
</template>

<script>
// import axios from "axios";
import Data from "../data.json";
export default {
  name: "SearchBar",
  components: {
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
        //     "data.json"
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
    handleMouseLeave: function () {
      this.showOptions = false;
    },
    handleXclick: function () {
      this.searchQuery = "";
    },
    handleListMouseOver: function (e) {
      e.currentTarget.classList.add("mouseover_listElemet");
    },
    handleListMouseOut: function (e) {
      e.currentTarget.classList.remove("mouseover_listElemet");
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


.options {
  width: 100%;
}

.searchBar_list {
  background-color: #090023;
  opacity: 0.9;
  list-style: none;
  display: flex;
  gap: 15px;
  align-items: center;
  color: #fff;
  padding: 10px 0 10px 10px;
  cursor: pointer;
}

.searchBar_list:last-child {
  border-radius: 0 0 15px 15px;
}


.searchBar_list img {
  width: 25px;
  height: 25px;
  border-radius: 50%;
  user-select: none;
}

.coin_name_and_symbol {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  user-select: none;
}

.mouseover_listElemet {
  background-color: #ff5c5c;
}

.coin_ranking {
  font-size: 12px;
  padding-right: 10px;
  user-select: none;
}

.coin_symbol {
  font-size: 12px;
  color: #868686;
  user-select: none;
}
</style>
