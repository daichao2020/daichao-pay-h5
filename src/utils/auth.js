const TokenKey = 'User-Token'
const UserInfoKey = 'User-Info-Token'

export function getToken() {
	return localStorage.getItem(TokenKey)
}

export function setToken(token) {
	localStorage.setItem(TokenKey, token)
}

export function removeToken() {
	localStorage.removeItem(TokenKey)
}

export function getUserInfo() {
	return JSON.parse(localStorage.getItem(UserInfoKey) || 'null');
}

export function setUserInfo(info) {
	localStorage.setItem(UserInfoKey, JSON.stringify(info));
}

export function removeUserInfo () {
	localStorage.removeItem(UserInfoKey);
}
