<template>
    <div
          v-show="showOptions"
          @mouseleave="handleMouseLeave"
          class="search_results"
        >
          <ul>
            <li
              class="search_results_list"
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
</template>

<script>
export default {
    name: 'SearchWidgetResultsList',
    props: {
        filteredData: Array,
        showOptions: Boolean,
        selectedItem: String,
        searchQuery: String
    },
    methods: {
      handleMouseLeave: function () {
     this.$emit('update:showOptions', false)

    },
    handleClick: function (data) {
        this.$store.commit('setSelectedSearchItem', data)
        this.$emit('update:searchQuery', data)
        this.$emit('update:selectedItem', data)
        this.$emit('update:showOptions', false)

    },
      handleListMouseOver: function (e) {
      e.currentTarget.classList.add("mouseover_listElemet");
    },
    handleListMouseOut: function (e) {
      e.currentTarget.classList.remove("mouseover_listElemet");
    },
    }
}
</script>

<style scoped>
.search_results {
  width: 100%;
}

.search_results_list {
  background-color: var(--navyBlack);
  opacity: 0.9;
  list-style: none;
  display: flex;
  gap: 15px;
  align-items: center;
  color: #fff;
  padding: 10px 0 10px 10px;
  cursor: pointer;
}

.search_results_list:last-child {
  border-radius: 0 0 15px 15px;
}


.search_results_list img {
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
  background-color: var(--skinRed);
}

.coin_ranking {
  font-size: 12px;
  padding-right: 10px;
  user-select: none;
}

.coin_symbol {
  font-size: 12px;
  color: var(--gray);
  user-select: none;
}
</style>