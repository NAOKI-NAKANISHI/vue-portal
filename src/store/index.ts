import Vue from 'vue'
import Vuex, { Store } from 'vuex'
import { User } from '../model/User'

Vue.use(Vuex)

export default () =>
  new Store({
    state: () => ({
      user: new User('', ''),
    }),
    mutations: {
      updateUser(state, payload) {
        state.user = payload
      },
    },
  })
