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
					keepAlive: true
				},
				component: () => import('@/components/Home/index'),
			},
			//列表
			{
				path: '/loanall',
				name: 'loanall',
				meta: {
					title: 'Loan All',
					keepAlive: true
				},
				component: () => import('@/components/LoanAll/index'),
			},
			//我
			{
				path: '/me',
				name: 'me',
				meta: {
					title: 'Me',
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

