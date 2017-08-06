import productsJSON from './products.json';

const TIMEOUT = 100


const getProductList = (currentPage = 0, productsCountPerPage = 8) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
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
			resolve({totalProductsCount: productsJSON.length, currentPage, productsCountPerPage, products});
		}, TIMEOUT);
	});
};

export default {
  getProductList,
}
