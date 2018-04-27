import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const state = () => ({
  counter: 10
})

export const mutations = {
  increment (state) {
    state.counter++
  }
}