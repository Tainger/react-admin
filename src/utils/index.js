import {http} from  './http'
import {setToken, getToken, removeToken} from "./token";

//将包统一导入到index再导出，这样可以减免
export {
    http,
    setToken,
    getToken,
    removeToken
}