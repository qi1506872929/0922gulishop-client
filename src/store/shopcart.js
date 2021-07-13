import { reqAddOrUpdateShopCart, reqShopCartInfo, reqUpdateCartIscheck, reqDeleteShopCart } from "@/api"

const state = {
    shopCartInfo: [],
}

const mutations = {
    RECEIVE_SHOPCARTINFO(state, shopCartInfo){
        state.shopCartInfo = shopCartInfo
    }
}

const actions = {
    // 添加或更新购物车信息
    // eslint-disable-next-line 
    async addOrUpdateShopCart({commit},{skuId, skuNum}){
        const result = await reqAddOrUpdateShopCart(skuId, skuNum)
        if (result.code === 200){
            return 'ok'
        } else {
            return Promise.reject(new Error('failed'));
        }
    },

    // 获取购物车列表信息
    async getShopCartInfo({commit}){
        const result = await reqShopCartInfo()
        if (result.code === 200){
            commit('RECEIVE_SHOPCARTINFO', result.data)
        }
    },

    // 切换商品选中状态
    // eslint-disable-next-line 
    async updateCartIscheck({commit}, {skuId, isChecked}){
        const result = await reqUpdateCartIscheck(skuId, isChecked)
        if (result.code === 200){
            return 'ok'
        } else {
            return Promise.reject(new Error('failed'))
        }
    },

    // 切换所有商品选中状态
    async updateCartIscheckAll({getters, dispatch}, isChecked){
        let promises = []
        getters.cartInfo.cartInfoList.forEach(cart => { // getters.cartInfo.cartInfoList 就是购物车的列表信息
            if (cart.isChecked === isChecked) return // 如果购物车数据和要改变的一样，直接跳过
            let promise = dispatch('updateCartIscheck', {skuId: cart.skuId, isChecked})
            promises.push(promise)
        });
        return Promise.all(promises)
    },

    // 删除单个购物车商品 
    // eslint-disable-next-line 
    async deleteShopCart({commit}, skuId){
        const result = await reqDeleteShopCart(skuId)
        if (result.code ===200){
            return 'ok'
        } else {
            return Promise.reject(new Error('failed'))
        }
    },

    // 删除多个购物车商品 
    async deleteAllShopCart({getters, dispatch}){
        let promises = []
        getters.cartInfo.cartInfoList.forEach(cart => {
            if (!cart.isChecked) return
            let promise = dispatch('deleteShopCart', cart.skuId)
            promises.push(promise)
        });
        return Promise.all(promises)
    },
}

const getters = {
    cartInfo(state){
        return state.shopCartInfo[0] || {}
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}