import request from '@/utils/request'

export function getHomeProducts(page) {//获取首页产品列表
	return request({
		url: '/home',
		method: 'get',
		params: {page}
	})
}

export function getProducts(page) {//获取产品列表
	return request({
		url: '/products',
		method: 'get',
		params: {page}
	})
}
export function getProductDetailById(id) {//获取产品详情
	return request({
		url: '/product/'+id,
		method: 'get',
	})
}
