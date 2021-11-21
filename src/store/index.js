import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    selectedSearchItem: ""
  },
  getters: {
    getSelectedItem: state => {
      return state.selectedSearchItem
    }
  },
  mutations: {
    setSelectedSearchItem: (state, str) => {
      return state.selectedSearchItem = str
    }
  }
})

export default store
