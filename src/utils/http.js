import axios from 'axios'


const http = axios.create({
    baseURL: '',
    timeout: 5000
})

//添加请求拦截器
http.interceptors.request.use((config) => {
        return config
    },
    (error) => {
        return Promise.reject(error)
    })

//添加响应拦截器

http.interceptors.response.use((config) => {
        return config
    },
    (error) => {
        return Promise.reject(error)
    })

export {http}


