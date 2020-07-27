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
					title: '首页',
					showHeader: false,
					keepAlive: true
				},
				component: () => import('@/components/Home/index'),
			},
			//列表
			{
				path: '/loanall',
				name: 'loanall',
				meta: {
					title: '列表',
					showHeader: false,
					keepAlive: true
				},
				component: () => import('@/components/LoanAll/index'),
			},
			//我
			{
				path: '/me',
				name: 'me',
				meta: {
					title: '我',
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
			title: '详情',
			showHeader: true,
			keepAlive: false
		},
		component: () => import('@/components/Detail/index'),
	},
	//登陆
	{
		path: '/login',
		name: 'login',
		meta: {
			title: '登录',
			showHeader: true,
			keepAlive: true
		},
		component: () => import('@/components/Login/index'),
	},
	//获取验证码
	{
		path: '/code',
		name: 'code',
		meta: {
			title: '获取验证码',
			showHeader: true,
			keepAlive: true
		},
		component: () => import('@/components/Login/code'),
	},
	//
	{
		path: '/terms',
		name: 'terms',
		meta: {
			title: '使用条款',
			showHeader: true,
			keepAlive: true
		},
		component: () => import('@/components/Login/terms'),
	},
	//填写个人信息
	{
		path: '/info',
		name: 'info',
		meta: {
			title: '填写个人信息',
			showHeader: false,
			keepAlive: true
		},
		component: () => import('@/components/Info/index'),
	},
	//Vip Services home
	{
		path: '/vip',
		name: 'vip',
		meta: {
			title: '会员服务',
			showHeader: false,
			keepAlive: false
		},
		component: () => import('@/components/VipServices/index'),
	},
	//Vip Services step01
	{
		path: '/step01',
		name: 'step01',
		meta: {
			title: '选择一种支付方式',
			showHeader: false,
			keepAlive: true
		},
		component: () => import('@/components/VipServices/step01'),
	},
	//Vip Services step02
	{
		path: '/step02',
		name: 'step02',
		meta: {
			title: 'UPI',
			showHeader: false,
			keepAlive: true
		},
		component: () => import('@/components/VipServices/step02'),
	},
	//Vip Services step03
	{
		path: '/step03',
		name: 'step03',
		meta: {
			title: '支付状态',
			showHeader: false,
			keepAlive: false
		},
		component: () => import('@/components/VipServices/step03'),
	},
	//Vip Services end
	{
		path: '/end',
		name: 'end',
		meta: {
			title: '提交审核',
			showHeader: false,
			keepAlive: false
		},
		component: () => import('@/components/VipServices/end'),
	},
	//feedback
	{
		path: '/feedback',
		name: 'feedback',
		meta: {
			title: '反馈',
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
			title: '设置昵称',
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
			title: '设置头像',
			showHeader: false,
			keepAlive: true
		},
		component: () => import('@/components/Me/setAvatar'),
	},
	//payGateWay
	{
		path: '/payGateWay',
		name: 'payGateWay',
		meta: {
			title: '支付',
			showHeader: false,
			keepAlive: true
		},
		component: () => import('@/components/Public/payGateWay'),
	},
	//refresh
	{
		path: '/refresh',
		name: 'refresh',
		meta: {
			title: '刷新',
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

