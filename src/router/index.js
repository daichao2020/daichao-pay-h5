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
		redirect: '/vip',
		children: [
			//首页
			{
				path: '/home',
				name: 'home',
				meta: {
					title: 'Trang chủ',
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
					title: 'Cho vay tất cả',
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
					title: 'Tôi',
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
			title: 'Chi tiết',
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
			title: 'Đăng nhập',
			showHeader: false,
			keepAlive: false
		},
		component: () => import('@/components/Login/index'),
	},
	//获取验证码
	{
		path: '/code',
		name: 'code',
		meta: {
			title: 'Nhận mã xác minh',
			showHeader: false,
			keepAlive: false
		},
		component: () => import('@/components/Login/code'),
	},
	//
	{
		path: '/terms',
		name: 'terms',
		meta: {
			title: 'Điều khoản và điều kiện',
			showHeader: false,
			keepAlive: true
		},
		component: () => import('@/components/Login/terms'),
	},
	//填写个人信息
	{
		path: '/info',
		name: 'info',
		meta: {
			title: 'Thông tin liên lạc',
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
			title: 'dịch vụ thành viên',
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
			title: 'Chọn tùy chọn thanh toán',
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
			title: 'LÊN',
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
			title: 'Trạng thái',
			showHeader: false,
			keepAlive: false
		},
		component: () => import('@/components/VipServices/step03'),
	},//Vip Services step04
	{
		path: '/step04',
		name: 'step04',
		meta: {
			title: 'Trạng thái',
			showHeader: false,
			keepAlive: false
		},
		component: () => import('@/components/VipServices/step04'),
	},
	//Vip Services end
	{
		path: '/end',
		name: 'end',
		meta: {
			title: 'Gửi đi phê duyệt',
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
			title: 'Phản hồi',
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
			title: 'Đặt tên hiệu',
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
			title: 'Thay đổi Avatar',
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
			title: 'Làm tươi',
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

