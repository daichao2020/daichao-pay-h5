import request from '@/utils/request'

/**
 * 国际编码
 * */
export function getCountryCodes() {
	return request({
		url: '/countryCodes',
		method: 'get',
	})
}
/**
 * 短信验证码
 * */
export function getVerificationCodes(data) {
	return request({
		url: '/verificationCodes',
		method: 'post',
		data
	})
}

export function login(data) {
	return request({
		url: '/verificationCodes/authorizations',
		method: 'post',
		data
	})
}

/**
 * 获取个人信息
 * */
export function getInfo() {
	return request({
		url: '/user',
		method: 'get',
	})
}

/**
 * 编辑个人信息
 * */
export function setUserInfo(data) {

	return request({
		url: '/user',
		method: 'patch',
		data: data,
	})
}
/**
 * 上传图片
 * */
export function uploadImage(data) {
	return request({
		url: '/images',
		method: 'post',
		data,
		headers: {'Content-Type': 'application/form-data'},
	})
}
/**
 * 刷新 Token
 * */
export function reLogin() {
	return request({
		url: '/authorizations/current',
		method: 'put'
	})
}
/**
 * 退出登录
 * */
export function logout() {
	return request({
		url: '/authorizations/current',
		method: 'delete'
	})
}

/**
 * 用户操作记录
 * */
export function recordOP(data) {
	return request({
		url: '/user/operations/current',
		method: 'post',
		data
	})
}

/**
 * Apps版本状态
 * */
export function getAppsVersion() {
	return request({
		url: '/appsVersion',
		method: 'get',
	})
}