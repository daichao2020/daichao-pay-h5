import axios from 'axios'
import store from '@/store'
import { Dialog,Toast } from 'vant'
import { getToken } from '@/utils/auth'

// create an axios instance
const service = axios.create({
	baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
	// withCredentials: true, // send cookies when cross-domain requests
	timeout: 5000 // request timeout
})

// request interceptor
service.interceptors.request.use(
	config => {
		// do something before request is sent

		if (store.getters.token) {
			// let each request carry token
			// please modify it according to the actual situation
			if(!config.params){
				config.params = {}
			}
			config.params['token'] = getToken()
		}
		return config
	},
	error => {
		// do something with request error
		console.log(error) // for debug
		return Promise.reject(error)
	}
)

// response interceptor
service.interceptors.response.use(
	/**
	 * If you want to get http information such as headers or status
	 * Please return  response => response
	 */

	/**
	 * Determine the request status by custom code
	 * Here is just an example
	 * You can also judge the status by HTTP Status Code
	 */
	response => {
		const res = response.data

		// if the custom code is not 20000, it is judged as an error.
		const { data, meta } = res;

		if (meta.code !== 0) {
			Toast({
				message: meta.message || '服务器响应错误',
				type: 'fail',
				position: 'bottom',
				duration: 3 * 1000
			})

			return Promise.reject(new Error(res.message || 'Error'))
		} else {
			return res
		}
	},
	function (error){
		//(error.response && error.response.status !== 200
		if(error.response && error.response.status !== 200){
			Toast({
				message: error.response.data.message,
				type: 'fail',
				position: 'bottom',
				duration: 3 * 1000
			})
		}else{
			Toast({
				message: error.message,
				type: 'fail',
				position: 'bottom',
				duration: 3 * 1000
			})
		}

		return Promise.reject(error)
	}
)

export default service
