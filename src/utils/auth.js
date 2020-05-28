const TokenKey = 'User-Token'
const TokenTypeKey = 'User-Token-Type'

const UserInfoKey = 'User-Info'

const DeviceNumberKey = 'Device-Number'
const PlatformKey = 'Platform-Token'
const AppVersionIdKey = 'App-Version-Id'

export function getToken() {
	return sessionStorage.getItem(TokenKey)
}

export function setToken(token) {
	sessionStorage.setItem(TokenKey, token)
}

export function removeToken() {
	sessionStorage.removeItem(TokenKey)
}

export function getTokenType() {
	return sessionStorage.getItem(TokenTypeKey)
}

export function setTokenType(type) {
	sessionStorage.setItem(TokenTypeKey, type)
}

export function removeTokenType() {
	sessionStorage.removeItem(TokenTypeKey)
}


export function getDeviceNumber() {
	return sessionStorage.getItem(DeviceNumberKey)
}

export function setDeviceNumber(deviceNumber) {
	sessionStorage.setItem(DeviceNumberKey, deviceNumber)
}

export function removeDeviceNumber() {
	sessionStorage.removeItem(DeviceNumberKey)
}


export function getPlatform() {
	return sessionStorage.getItem(PlatformKey)
}

export function setPlatform(platform) {
	sessionStorage.setItem(PlatformKey, platform)
}

export function removePlatform() {
	sessionStorage.removeItem(PlatformKey)
}


export function getAppVersionId() {
	return sessionStorage.getItem(AppVersionIdKey)
}

export function setAppVersionId(appVersionId) {
	sessionStorage.setItem(AppVersionIdKey, appVersionId)
}

export function removeAppVersionId() {
	sessionStorage.removeItem(AppVersionIdKey)
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
