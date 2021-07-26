import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      data: [
          
      ],
  },
  getters: {
    pokemons: (state) => state.data
  },
  mutations: {
      fetch(state , {res}){
          state.data =res.data
      },
      add (state,{payload}){
        state.data.push(payload)
      },
      edit (state,{payload}){
          state.data[payload.index].name = payload.name
          state.data[payload.index].date = payload.date
      }
  },
  actions: {
      fetchPokemon ( {commit} ){
         let res = require("@/DataJson/data")
        commit("fetch" , {res})
      },
      addData({ commit}, payload){
        commit("add",{payload})
      },
      editCashBook({commit}, payload) {
        commit("edit",{payload})
    },
  },
  modules: {
  }
})
