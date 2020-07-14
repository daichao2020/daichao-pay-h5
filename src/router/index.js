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
		redirect: '/home',
		children: [
			//首页
			{
				path: '/home',
				name: 'home',
				meta: {
					title: 'Home',
					showHeader: false,
					keepAlive: true
				},
				component: () => import(/* webpackChunkName: "first-group" */'@/components/Home/index'),
			},
			//列表
			{
				path: '/loanall',
				name: 'loanall',
				meta: {
					title: 'Loan All',
					showHeader: false,
					keepAlive: true
				},
				component: () => import(/* webpackChunkName: "first-group" */'@/components/LoanAll/index'),
			},
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
	//详情
	{
		path: '/detail',
		name: 'detail',
		meta: {
			title: 'Detail',
			showHeader: false,
			keepAlive: false
		},
		component: () => import('@/components/Detail/index'),
	},
	//登陆
	{
		path: '/login',
		name: 'login',
		meta: {
			title: 'Sign in',
			showHeader: false,
			keepAlive: true
		},
		component: () => import('@/components/Login/index'),
	},
	//feedback
	{
		path: '/feedback',
		name: 'feedback',
		meta: {
			title: 'Feedback',
			showHeader: false,
			keepAlive: true
		},
		component: () => import('@/components/Me/feedback'),
	},
	//setnickname
	{
		path: '/setnickname',
		name: 'setnickname',
		meta: {
			title: 'Set Nickname',
			showHeader: false,
			keepAlive: true
		},
		component: () => import('@/components/Me/setNickname'),
	},
	//setnickname
	{
		path: '/setavatar',
		name: 'setavatar',
		meta: {
			title: 'Modify Head Portrait',
			showHeader: false,
			keepAlive: true
		},
		component: () => import('@/components/Me/setAvatar'),
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
	{
		path: '/policy',
		name: 'policy',
		meta: {
			title: 'Privacy policy',
			showHeader: true,
			keepAlive: true
		},
		component: () => import('@/components/Policy/index'),
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

