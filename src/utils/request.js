import axios from 'axios'

const service = axios.create({
    baseURL: process.env.BASE_API,
    timeout: 5000
})

//request 拦截器
service.interceptors.request.use(config => {
    // if(store.getters.token){
    //     config.headers['X-Token'] = localStorage.getItem("token")
    // }
    return config
},error => {
    console.log(error)
    Promise.reject(error)
})

//response 拦截器
service.interceptors.response.use(
    response => response,
    error => {
        console.log('err' + error)
        return Promise.reject(error)
    }
)

export default service