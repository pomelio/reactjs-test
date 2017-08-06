//import productsJSON from './products.json';

const TIMEOUT = 100
const API_ENDPOINT = 'https://whitechdevs.github.io/reactjs-test/products.json';
let _products = null;

const getProductList = (currentPage = 0, productsCountPerPage = 8) => {
	let pro = null;
	if (!_products) {
		pro = fetch(API_ENDPOINT).then(resp => {
    		return resp.json();
    	}).then(json => {
			_products = json;
			return json;
		});
	} else {
		pro = Promise.resolve(_products);
	}
	return resolveProductList(pro, currentPage, productsCountPerPage);
};

const resolveProductList = (productsPromise, currentPage = 0, productsCountPerPage = 8) => {
	return productsPromise.then(productsJSON => {
		let products = [];
		if (productsCountPerPage > 32) {
			productsCountPerPage = 32;
		}
		let offset = currentPage * productsCountPerPage;
		if (offset > productsJSON.length) {
			offset = 0;
			currentPage = 0;
		}
		let upp = offset + productsCountPerPage;
		if (upp > productsJSON.length) {
			upp = productsJSON.length;
		}
			
		for (var i = offset; i < upp; i++) {
			products.push(productsJSON[i]);
		}
		return {totalProductsCount: productsJSON.length, currentPage, productsCountPerPage, products};
	});
};

export default {
  getProductList,
  resolveProductList,
}
