import router from './router'
import store from './store'

import { getToken } from '@/utils/auth' // get token from cookie
import getPageTitle from '@/utils/get-page-title'

router.beforeEach(async(to, from, next) => {

	// set page title
	document.title = getPageTitle(to.meta.title)

	if(to.query && to.query.language){//language=vi_VN
		store.dispatch('user/setLanguage',to.query.language)
	}

	next()
})

router.afterEach(() => {
	// finish progress bar
})
