// 和用户相关的一些工具函数
import { v4 as uuidv4 } from 'uuid';

// 一般用户的临时标识都是唯一的，而且一旦生成不会轻易改变
export function getUserTempId() {
    let userTempId = localStorage.getItem('USERTEMPID_KEY')
    if (!userTempId){
        userTempId = uuidv4();
        localStorage.setItem('USERTEMPID_KEY', userTempId)
    }
    return userTempId
}