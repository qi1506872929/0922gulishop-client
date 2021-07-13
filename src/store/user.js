import { reqGetCode, reqGetUserInfo, reqUserRegister, reqUserLogin, reqUserLogOut, reqUserAddress } from "@/api"
import { getUserTempId } from "@/utils/userabout"

const state = {
    // 专门用来生成用户的临时标识
    userTempId: getUserTempId(),
    code: '', // 用户注册的验证码

    token: localStorage.getItem('TOKEN_KEY'),
    userInfo: {}, // 用户信息
    userAddressList: [], // 用户地址信息
}

const mutations = {
    RECEIVE_CODE(state, code) {
        state.code = code
    },
    RECEIVE_USERLOGIN(state, token){
        state.token = token
    },
    RECIEVE_USERINFO(state, userInfo){
        state.userInfo = userInfo
    },
    CLEAR_TOKEN(state){
        state.token = ''
        state.userInfo = {}
    },
    RECEIVE_USERADDRESSLIST(state, userAddressList){
        state.userAddressList = userAddressList
    }
}

const actions = {
    // 注册用户信息
    // eslint-disable-next-line
    async getUserRegister({commit}, userInfo){
        const result = await reqUserRegister(userInfo)
        if (result.code === 200){
            return 'ok'
        } else {
            return Promise.reject(new Error('failed'))
        }
    },
    // 获取验证码
    async getCode({commit}, phone){
        const result = await reqGetCode(phone)
        if (result.code === 200){
            commit('RECEIVE_CODE', result.data)
            return 'ok'
        } else {
            return Promise.reject(new Error('failed'))
        }
    },
    // 获取 token
    async userLogin({commit}, userInfo){
        const result = await reqUserLogin(userInfo)
        if (result.code === 200){
            commit('RECEIVE_USERLOGIN', result.data.token)
            localStorage.setItem('TOKEN_KEY', result.data.token)
            return 'ok'
        } else {
            return Promise.reject(new Error('failed'))
        }
    },
    // 获取用户信息
    async getUserInfo({commit}){
        const result = await reqGetUserInfo()
        if (result.code === 200){
            commit('RECIEVE_USERINFO', result.data)
            return 'ok'
        } else {
            return Promise.reject(new Error('failed'))
        }
    },
    // 清空过期token
    async clearToken({commit}){
        commit('CLEAR_TOKEN')
        localStorage.removeItem('TOKEN_KEY')
    },
    // 退出登录
    async userLogOut({commit}){
        const result = await reqUserLogOut()
        if (result.code === 200){
            commit('CLEAR_TOKEN')
            localStorage.removeItem('TOKEN_KEY')
            return 'ok'
        } else {
            return Promise.reject(new Error('failed'))
        }
    },
    // 获取用户地址信息
    async getUserAddressList({commit}){
        const result = await reqUserAddress()
        if (result.code === 200){
            commit('RECEIVE_USERADDRESSLIST', result.data)
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