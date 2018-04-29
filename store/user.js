import Vue from 'vue'
import Vuex from 'vuex'
import storage from '~utils/storage'
import * as mutTypes from './mutation-types'

Vue.use(Vuex)

export const state = () => ({
  token: '',
  userInfo: {}
})

export const getters = {
  isLogin: state => {
    return state.token !== '' ? true : false
  }
}

export const mutations = {
  [mutTypes.SET_TOKEN] (state, token) {
    state.token = token
    storage.set('token', token)
  },
  [mutTypes.CLEAR_TOKEN] (state, token) {
    state.token = ''
    storage.remove('token')
  }
}