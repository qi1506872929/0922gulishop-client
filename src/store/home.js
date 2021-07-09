import {reqCategoryList, reqToStudent, reqBannerList, reqFloorList} from '@/api'

const state = {
    categoryList: [],
    // toStudent: {},
    bannerList: [],
    floorList: [],
}

const mutations = {
    RECEIVE_CATEGORYLIST(state, categoryList){
        // state.categoryList = JSON.parse(categoryList).data;
        state.categoryList = categoryList;
    },
    // RECEIVE_TOSTUDENT(state, toStudent){
    //     state.toStudent = toStudent.rows;
    // }
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
        // if (result.status){
        //     commit('RECEIVE_CATEGORYLIST',result.resultData);
        // }
        if (result.code === 200){
            commit('RECEIVE_CATEGORYLIST',result.data);
        }
    },
    // async getToStudent({commit}){
    //     const result = await reqToStudent();
    //     if (result.status){
    //         commit('RECEIVE_TOSTUDENT',result.resultData);
    //     }
    // }
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