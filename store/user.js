import Vue from 'vue'
import Vuex from 'vuex'
import storage from '~utils/storage'
import * as mutTypes from './mutation-types'

Vue.use(Vuex)

export const state = () => ({
  token: null,
  userInfo: {}
})

export const getters = {
  isLogin: state => {
    return state.token !== null ? true : false
  }
}

export const mutations = {
  [mutTypes.SET_TOKEN] (state, token) {
    state.token = token
  },
  [mutTypes.SET_USER_INFO] (state, userInfo) {
    Object.keys(userInfo).forEach(key => {
      state.userInfo[key] = userInfo[key]
    })
  },
  [mutTypes.LOGOUT] (state) {
    state.token = null
    state.userInfo = null
    storage.remove('token')
    storage.remove('userInfo')
  }
}