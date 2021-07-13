import {reqCategoryList, reqBannerList, reqFloorList} from '@/api'

const state = {
    categoryList: [],
    // toStudent: {},
    bannerList: [],
    floorList: [],
}

const mutations = {
    RECEIVE_CATEGORYLIST(state, categoryList){
        state.categoryList = categoryList;
    },
    RESEIVE_BANNERLIST(state, bannerList){
        state.bannerList = bannerList;
    },
    RESEIVE_FLOORLIST(state, floorList){
        state.floorList = floorList;
    },
}

const actions = {
    async getCategoryList({commit}){
        const result = await reqCategoryList();
        if (result.code === 200){
            commit('RECEIVE_CATEGORYLIST',result.data);
        }
    },
    async getBannerList({commit}){
        const result = await reqBannerList();
        if (result.code === 200){
            commit('RESEIVE_BANNERLIST', result.data);
        }
    },
    async getFloorList({commit}){
        const result = await reqFloorList();
        if (result.code === 200){
            commit('RESEIVE_FLOORLIST', result.data);
        }
    }
}

const getters = {

}

export default {
    state,
    mutations,
    actions,
    getters
}