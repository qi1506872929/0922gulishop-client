import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

import home from './home'
import user from './user'
import search from './search'

const state = {

}

const mutations = {

}

const actions = {

}

const getters = {

}

export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters,
    modules: {
        home,
        user,
        search,
    },

})