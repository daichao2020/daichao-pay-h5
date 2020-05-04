import Vue from 'vue'
import VueRouter from 'vue-router'
const _import = require('./_import_' + process.env.VUE_APP_ENV);

const Login = _import('Login/index');//登陆
const Layout = _import('Layout/index');//框架
const Home = _import('Home/index');//
const LoanAll = _import('LoanAll/index');//
const Detail = _import('Detail/index');//
const Me = _import('Me/index');//

const Step01 = _import('Home/step01');//
const Step02 = _import('Home/step02');//
const Step03 = _import('Home/step03');//


Vue.use(VueRouter)

const routes = [
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
					requireAuth: false,  // 添加该字段，表示进入这个路由是需要登录的
					pageTitle: 'Home',
					keepAlive: false
				},
				component: Home,
			},
			//列表
			{
				path: '/loanall',
				name: 'loanall',
				meta: {
					requireAuth: false,  // 添加该字段，表示进入这个路由是需要登录的
					pageTitle: 'Loan All',
					keepAlive: false
				},
				component: LoanAll,
			},
			//我
			{
				path: '/me',
				name: 'me',
				meta: {
					requireAuth: false,
					pageTitle: 'Me',
					keepAlive: true
				},
				component: Me,
			},
		]
	},
	//详情
	{
		path: '/detail',
		name: 'detail',
		meta: {
			requireAuth: false,
			pageTitle: 'Detail',
			keepAlive: true
		},
		component: Detail,
	},
	//登陆
	{
		path: '/login',
		name: 'login',
		meta: {
			requireAuth: false,  // 添加该字段，表示进入这个路由是需要登录的
			pageTitle: '登录',
			keepAlive: false
		},
		component: Login,
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

const router = new VueRouter({
	routes
})

export default router
