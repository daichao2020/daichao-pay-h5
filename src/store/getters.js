const getters = {
	token: state => state.user.token,
	info: state => state.user.info,
	product: state => state.product.productInfo,
	paymentOption: state => state.product.paymentOptionInfo,
	order: state => state.product.orderInfo,
}
export default getters
