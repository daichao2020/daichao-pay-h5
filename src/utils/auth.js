import Cookies from 'js-cookie'


const TokenKey = 'User-Token'
const TokenTypeKey = 'User-Token-Type'

const UserInfoKey = 'User-Info'

const DeviceNumberKey = 'Device-Number'
const PlatformKey = 'Platform-Token'
const AppVersionIdKey = 'App-Version-Id'
const LanguageKey = 'Language'

export function getToken() {
	return  localStorage.getItem(TokenKey)
}

export function setToken(token, expires) {
	localStorage.setItem(TokenKey, token)
}

export function removeToken() {
	localStorage.removeItem(TokenKey)
}

export function getTokenType() {
	return  localStorage.getItem(TokenTypeKey)
}

export function setTokenType(type, expires) {
	localStorage.setItem(TokenTypeKey, type)
}

export function removeTokenType() {
	localStorage.removeItem(TokenTypeKey)
}


export function getDeviceNumber() {
	return  localStorage.getItem(DeviceNumberKey)
}

export function setDeviceNumber(deviceNumber) {
	localStorage.setItem(DeviceNumberKey, deviceNumber)
}

export function removeDeviceNumber() {
	localStorage.removeItem(DeviceNumberKey)
}


export function getPlatform() {
	return  localStorage.getItem(PlatformKey)
}

export function setPlatform(platform) {
	localStorage.setItem(PlatformKey, platform)
}

export function removePlatform() {
	localStorage.removeItem(PlatformKey)
}


export function getAppVersionId() {
	return  localStorage.getItem(AppVersionIdKey)
}

export function setAppVersionId(appVersionId) {
	localStorage.setItem(AppVersionIdKey, appVersionId)
}

export function removeAppVersionId() {
	localStorage.removeItem(AppVersionIdKey)
}

export function getLanguage() {
	return  localStorage.getItem(LanguageKey)
}

export function setLanguage(language) {
	localStorage.setItem(LanguageKey, language)
}

export function removeLanguage() {
	localStorage.removeItem(LanguageKey)
}


export function getUserInfo() {
	return JSON.parse(sessionStorage.getItem(UserInfoKey) || 'null');
}

export function setUserInfo(info) {
	sessionStorage.setItem(UserInfoKey, JSON.stringify(info));
}

export function removeUserInfo () {
	sessionStorage.removeItem(UserInfoKey);
}
