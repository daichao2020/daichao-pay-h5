const ProductInfoKey = 'Product-Info';
const ProductIdKey = 'Product-Id';
const PaymentOptionInfoKey = 'Payment-Option-Info';
const OrderInfoKey = 'Order-Info';

export function getProductInfo() {
	return JSON.parse(localStorage.getItem(ProductInfoKey) || 'null');
}

export function setProductInfo(info) {
	localStorage.setItem(ProductInfoKey, JSON.stringify(info));
}

export function removeProductInfo() {
	localStorage.removeItem(ProductInfoKey);
}

export function getProductId() {
	return JSON.parse(localStorage.getItem(ProductIdKey) || 'null');
}

export function setProductId(id) {
	localStorage.setItem(ProductIdKey, JSON.stringify(id));
}

export function removeProductId() {
	localStorage.removeItem(ProductIdKey);
}


export function getPaymentOptionInfo() {
	return JSON.parse(localStorage.getItem(PaymentOptionInfoKey) || 'null');
}

export function setPaymentOptionInfo(info) {
	localStorage.setItem(PaymentOptionInfoKey, JSON.stringify(info));
}

export function removePaymentOptionInfo() {
	localStorage.removeItem(PaymentOptionInfoKey);
}


export function getOrderInfo() {
	return JSON.parse(localStorage.getItem(OrderInfoKey) || 'null');
}

export function setOrderInfo(info) {
	localStorage.setItem(OrderInfoKey, JSON.stringify(info));
}

export function removeOrderInfo() {
	localStorage.removeItem(OrderInfoKey);
}