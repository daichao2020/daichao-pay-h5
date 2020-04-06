import Vue from 'vue'
import VueRouter from 'vue-router'
const _import = require('./_import_' + process.env.VUE_APP_ENV);
const Layout = _import('Layout/index');//框架
const Home = _import('Home/index');//
const My = _import('My/index');//

const Step01 = _import('Home/step01');//
const Step02 = _import('Home/step02');//
const Step03 = _import('Home/step03');//


Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		redirect: '/app'
	},
	{
		path: '/app',//(框架层)
		meta: {
			requireAuth: false,
			pageTitle: '首页',
			keepAlive: false
		},
		component: Layout,
		children: [
			{
				path: '/',
				redirect: 'home'
			},
			//首页
			{
				path: 'home',
				name: 'home',
				meta: {
					requireAuth: false,  // 添加该字段，表示进入这个路由是需要登录的
					pageTitle: '首页',
					keepAlive: false
				},
				component: Home,
			},
			{
				path: 'step01',
				name: 'step01',
				meta: {
					requireAuth: false,  // 添加该字段，表示进入这个路由是需要登录的
					pageTitle: '',
					keepAlive: false
				},
				component: Step01,
			},
			{
				path: 'step02',
				name: 'step02',
				meta: {
					requireAuth: false,  // 添加该字段，表示进入这个路由是需要登录的
					pageTitle: '',
					keepAlive: false
				},
				component: Step02,
			},
			{
				path: 'step03',
				name: 'step03',
				meta: {
					requireAuth: false,  // 添加该字段，表示进入这个路由是需要登录的
					pageTitle: '',
					keepAlive: false
				},
				component: Step03,
			},
			//我的
			{
				path: 'my',
				name: 'my',
				meta: {
					requireAuth: false,
					pageTitle: '我的',
					keepAlive: true
				},
				component: My,
			},
		]
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
