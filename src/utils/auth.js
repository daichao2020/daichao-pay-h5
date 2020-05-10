import Cookies from 'js-cookie'

const TokenKey = 'User-Token'
const TokenTypeKey = 'User-Token-Type'

const UserInfoKey = 'User-Info-Token'

export function getToken() {
	return Cookies.get(TokenKey)
}

export function setToken(token) {
	Cookies.set(TokenKey, token)
}

export function removeToken() {
	Cookies.remove(TokenKey)
}

export function getTokenType() {
	return Cookies.get(TokenTypeKey)
}

export function setTokenType(type) {
	Cookies.set(TokenTypeKey, type)
}

export function removeTokenType() {
	Cookies.remove(TokenTypeKey)
}

export function getUserInfo() {
	return JSON.parse(Cookies.get(UserInfoKey) || 'null');
}

export function setUserInfo(info) {
	Cookies.set(UserInfoKey, JSON.stringify(info));
}

export function removeUserInfo () {
	Cookies.remove(UserInfoKey);
}
