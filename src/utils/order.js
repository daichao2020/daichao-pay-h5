const ProductInfoKey = 'Product-Info';
const PaymentOptionInfoKey = 'Payment-Option-Info';
const OrderInfoKey = 'Order-Info';

export function getProductInfo() {
	return JSON.parse(sessionStorage.getItem(ProductInfoKey) || 'null');
}

export function setProductInfo(info) {
	sessionStorage.setItem(ProductInfoKey, JSON.stringify(info));
}

export function removeProductInfo() {
	sessionStorage.removeItem(ProductInfoKey);
}


export function getPaymentOptionInfo() {
	return JSON.parse(sessionStorage.getItem(PaymentOptionInfoKey) || 'null');
}

export function setPaymentOptionInfo(info) {
	sessionStorage.setItem(PaymentOptionInfoKey, JSON.stringify(info));
}

export function removePaymentOptionInfo() {
	sessionStorage.removeItem(PaymentOptionInfoKey);
}


export function getOrderInfo() {
	return JSON.parse(sessionStorage.getItem(OrderInfoKey) || 'null');
}

export function setOrderInfo(info) {
	sessionStorage.setItem(OrderInfoKey, JSON.stringify(info));
}

export function removeOrderInfo() {
	sessionStorage.removeItem(OrderInfoKey);
}