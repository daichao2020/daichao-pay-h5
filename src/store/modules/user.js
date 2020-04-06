import { login, logout, getInfo } from '@/api/user'
import { getToken, setToken, removeToken } from '@/utils/auth'

const state = {
	token: getToken(),
	info: {},
}

const mutations = {
	SET_TOKEN: (state, token) => {
		state.token = token
	},
	SET_INFO: (state, info) => {
		state.info = info
	}
}

const actions = {


	// user login
	login({ commit }, userInfo) {
		const { username, password } = userInfo
		return new Promise((resolve, reject) => {
			login({ username: username.trim(), password: password }).then(response => {
				const { data } = response
				commit('SET_TOKEN', data.token)
				setToken(data.token)
				resolve()
			}).catch(error => {
				reject(error)
			})
		})
	},

	// get token from url
	setTokenFromURLParam({ commit }, token){
		if(token){
			commit('SET_TOKEN', token)
			setToken(token)
		}else{
			token = getToken()
			commit('SET_TOKEN', token)
		}

	},

	// get user info
	getInfo({ commit, state }) {
		return new Promise((resolve, reject) => {
			getInfo(state.token).then(response => {
				const { data } = response
				if (!data) {
					reject('Verification failed, please Login again.')
				}
				commit('SET_INFO', data)
				resolve(data)
			}).catch(error => {
				reject(error)
			})
		})
	},

	// user logout
	logout({ commit, state, dispatch }) {
		return new Promise((resolve, reject) => {
			logout(state.token).then(() => {
				commit('SET_TOKEN', '')
				commit('SET_INFO', {})
				removeToken()

				resolve()
			}).catch(error => {
				reject(error)
			})
		})
	},

	// remove token
	resetToken({ commit }) {
		return new Promise(resolve => {
			commit('SET_TOKEN', '')
			removeToken()
			resolve()
		})
	},
}

export default {
	namespaced: true,
	state,
	mutations,
	actions
}
