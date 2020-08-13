import defaultSettings from '@/settings'
import { login, logout, getInfo, reLogin, orderAdjustEvent } from '@/api/user'
import {
	 getToken, 			setToken, 			removeToken
	,getTokenType, 		setTokenType, 		removeTokenType
	,getDeviceNumber,	setDeviceNumber,	removeDeviceNumber
	,getPlatform,		setPlatform,		removePlatform
	,getAppVersionId,	setAppVersionId,	removeAppVersionId
	,getLanguage,		setLanguage,		removeLanguage
} from '@/utils/auth'

const getDefaultState = () => {
	return {
		token: getToken(),
		phoneNumber: '',
		language: 'vi_VN',
		tokenType: getTokenType(),
		info: {},
		deviceNumber: getDeviceNumber() || defaultSettings.deviceNumber,
		platform: getPlatform() || defaultSettings.platform,
		appVersionId: getAppVersionId() || defaultSettings.appVersionId,
	}
}

const state = getDefaultState()

const mutations = {
	RESET_STATE: (state) => {
		Object.assign(state, getDefaultState())
	},
	SET_TOKEN: (state, token) => {
		state.token = token
	},
	SET_TOKEN_TYPE: (state, tokenType) => {
		state.tokenType = tokenType
	},
	SET_PHONE_NUMBER: (state, phoneNumber) => {
		state.phoneNumber = phoneNumber
	},
	SET_INFO: (state, info) => {
		state.info = info
	},
	SET_DEVICE_NUMBER: (state, deviceNumber) => {
		state.deviceNumber = deviceNumber
	},
	SET_PLATFORM: (state, platform) => {
		state.platform = platform
	},
	SET_APP_VERSION_Id: (state, appVersionId) => {
		state.appVersionId = appVersionId
	},
	SET_LANGUAGE: (state, language) => {
		state.language = language
	},
}

const actions = {

	// user login
	login({ commit }, userInfo) {
		return new Promise((resolve, reject) => {
			login(userInfo).then(response => {
				const { data } = response
				commit('SET_TOKEN', data.access_token)
				setToken(data.access_token)

				try {
					Adjust.trackEvent(loginEvent);
				}catch (e) {

				}

				try {
					const param = {
						"actType": "getUserInfo",
						"data": {
							"token": data.access_token,
						}
					};
					window.WebViewJavascriptBridge.callHandler(
						'execAppFunction',
						JSON.stringify(param),
						function(responseData) {

						}
					);
				}catch (e) {

				}

				commit('SET_TOKEN_TYPE', data.token_type)
				setTokenType(data.token_type)
				resolve(response)
			}).catch(error => {
				reject(error)
			})
		})
	},

	//重新登录
	reLogin({ commit }) {
		return new Promise((resolve, reject) => {
			reLogin().then(response => {
				const { data } = response
				commit('SET_TOKEN', data.access_token)
				setToken(data.access_token)
				commit('SET_TOKEN_TYPE', data.token_type)
				setTokenType(data.token_type)
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
			getInfo().then(response => {
				const { data } = response
				if (!data) {
					reject('Verification failed, please Login again.')
				}
				commit('SET_INFO', data)
				commit('SET_PHONE_NUMBER', data.phone_number)

				if(data.is_member==1 && data.adjust_payment_success==false){
					try {
						Adjust.trackEvent(paySuccessEvent);
						orderAdjustEvent().cache(e=>{});
					}catch (e) {}
				}

				try {
					const param = {
						"actType": "getUserInfo",
						"data": {
							"name": data.name,
						}
					};
					window.WebViewJavascriptBridge.callHandler(
						'execAppFunction',
						JSON.stringify(param),
						function(responseData) {

						}
					);
				}catch (e) {

				}

				resolve(data)
			}).catch(error => {
				reject(error)
			})
		})
	},

	setInfo({ commit, state },data) {
		commit('SET_INFO', data)
	},

	setDeviceNumber({ commit, state },deviceNumber) {
		commit('SET_DEVICE_NUMBER', deviceNumber)
		setDeviceNumber(deviceNumber);
	},

	setPlatform({ commit, state },platform) {
		commit('SET_PLATFORM', platform)
		setPlatform(platform);
	},

	setAppVersionId({ commit, state },appVersionId) {
		commit('SET_APP_VERSION_Id', appVersionId)
		setAppVersionId(appVersionId);
	},
	setLanguage({ commit, state },language) {
		commit('SET_LANGUAGE', language)
		setLanguage(language);
	},

	// user logout
	logout({ commit, state, dispatch }) {
		return new Promise((resolve, reject) => {
			logout().then(() => {
				commit('SET_TOKEN', '')
				commit('SET_TOKEN_TYPE', '')
				commit('SET_PHONE_NUMBER', '')
				commit('SET_INFO', {})
				removeToken()
				removeTokenType()

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

			commit('SET_TOKEN_TYPE', '')
			removeTokenType()

			commit('SET_PHONE_NUMBER', '')
			commit('SET_INFO', {})
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
