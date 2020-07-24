import Cookies from 'js-cookie'


const TokenKey = 'User-Token'
const TokenTypeKey = 'User-Token-Type'

const UserInfoKey = 'User-Info'

const DeviceNumberKey = 'Device-Number'
const PlatformKey = 'Platform-Token'
const AppVersionIdKey = 'App-Version-Id'
const LanguageKey = 'Language'

export function getToken() {
	return  Cookies.get(TokenKey)
}

export function setToken(token, expires) {
	debugger
	Cookies.set(TokenKey, token, {expires: expires})
}

export function removeToken() {
	Cookies.remove(TokenKey)
}

export function getTokenType() {
	return  Cookies.get(TokenTypeKey)
}

export function setTokenType(type, expires) {
	Cookies.set(TokenTypeKey, type, {expires: expires})
}

export function removeTokenType() {
	Cookies.remove(TokenTypeKey)
}


export function getDeviceNumber() {
	return  Cookies.get(DeviceNumberKey)
}

export function setDeviceNumber(deviceNumber) {
	Cookies.set(DeviceNumberKey, deviceNumber)
}

export function removeDeviceNumber() {
	Cookies.remove(DeviceNumberKey)
}


export function getPlatform() {
	return  Cookies.get(PlatformKey)
}

export function setPlatform(platform) {
	Cookies.set(PlatformKey, platform)
}

export function removePlatform() {
	Cookies.remove(PlatformKey)
}


export function getAppVersionId() {
	return  Cookies.get(AppVersionIdKey)
}

export function setAppVersionId(appVersionId) {
	Cookies.set(AppVersionIdKey, appVersionId)
}

export function removeAppVersionId() {
	Cookies.remove(AppVersionIdKey)
}

export function getLanguage() {
	return  Cookies.get(LanguageKey)
}

export function setLanguage(language) {
	Cookies.set(LanguageKey, language)
}

export function removeLanguage() {
	Cookies.remove(LanguageKey)
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
