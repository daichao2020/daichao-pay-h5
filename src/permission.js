import router from './router'
import store from './store'
import { Toast } from 'vant'

import { getToken } from '@/utils/auth' // get token from cookie
import getPageTitle from '@/utils/get-page-title'


const whiteList = ['/login','/code','/terms'] // no redirect whitelist

router.beforeEach(async(to, from, next) => {

	// set page title
	document.title = getPageTitle(to.meta.title)

	if(to.query && to.query.token){
		store.dispatch('user/setTokenFromURLParam',to.query.token)
	}

	if(to.query && to.query.device_number){
		store.dispatch('user/setDeviceNumber',to.query.device_number)
	}
	if(to.query && to.query.platform){
		store.dispatch('user/setPlatform',to.query.platform)
	}
	if(to.query && to.query.app_version_id){
		store.dispatch('user/setAppVersionId',to.query.app_version_id)
	}
	if(to.query && to.query.language){//language=vi_VN
		store.dispatch('user/setLanguage',to.query.language)
	}

	// determine whether the user has logged in
	const hasToken = getToken()

	if (hasToken) {
		if (to.path === '/login') {
			// if is logged in, redirect to the home page
			next({ path: '/' })
		} else {
			next()
			const hasGetUserInfo = store.getters.phoneNumber
			if (hasGetUserInfo) {
				next()
			} else {
				try {
					// get user info
					await store.dispatch('user/getInfo')
					next()
				} catch (error) {
					// remove token and go to login page to re-login
					store.dispatch('user/resetToken')
					Toast.fail(error || 'Has Error')
					next(`/login?redirect=${to.path}`)
				}
			}
		}
	} else {
		/* has no token*/

		if (whiteList.indexOf(to.path) !== -1) {
			// in the free login whitelist, go directly
			next()
		} else {
			// other pages that do not have permission to access are redirected to the login page.
			next(`/login?redirect=${to.path}`)
		}
	}
})

router.afterEach(() => {
	// finish progress bar
})
