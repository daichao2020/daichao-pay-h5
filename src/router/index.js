import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/components/Layout/index'
import refresh from '@/components/Error/refresh'

export const constantRoutes = [
	{
		path: '/',
		component: Layout,
		redirect: '/info',
		children: [
			//我
			{
				path: '/me',
				name: 'me',
				meta: {
					title: 'Me',
					showHeader: false,
					keepAlive: true
				},
				component: () => import('@/components/Me/index'),
			},
		]
	},

	//填写个人信息
	{
		path: '/info',
		name: 'info',
		meta: {
			title: 'Contact information',
			showHeader: false,
			keepAlive: true
		},
		component: () => import('@/components/Info/index'),
	},

	//Vip Services end
	{
		path: '/end',
		name: 'end',
		meta: {
			title: 'Submit audit',
			showHeader: false,
			keepAlive: false
		},
		component: () => import('@/components/VipServices/end'),
	},

	//refresh
	{
		path: '/refresh',
		name: 'refresh',
		meta: {
			title: 'Refresh',
			showHeader: false,
			keepAlive: true
		},
		component: refresh,
	},



	// {
	// 	path: '/about',
	// 	name: 'About',
	// 	// route level code-splitting
	// 	// this generates a separate chunk (about.[hash].js) for this route
	// 	// which is lazy-loaded when the route is visited.
	// 	component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
	// }
]
const createRouter = () => new Router({
	// mode: 'history', // require service support
	scrollBehavior: () => ({ y: 0 }),
	routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
	const newRouter = createRouter()
	router.matcher = newRouter.matcher // reset router
}

export default router

