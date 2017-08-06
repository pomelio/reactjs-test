import api from './index';
import productsJSON from '../api/products.json';

function setupProductList(currentPage, productsCountPerPage) {
	let products = [];
	let offset = currentPage * productsCountPerPage;
	for (let i = offset; i < offset + productsCountPerPage; i++) {
		products.push(productsJSON[i]);
	}
	return {
		totalProductsCount: productsJSON.length,
		currentPage,
		productsCountPerPage,
		products,
	}
}

describe('api', () => {
	describe('getProductList', () => {
		it('should return first page 8 products', () => {
			let productList8 = setupProductList(0, 8);
			let products = productList8.products;
			api.getProductList(0, 8).then(ret => {
				expect(ret).toEqual({totalProductsCount: productsJSON.length, currentPage: 0, productsCountPerPage: 8, products});
			});
		});

		it('should return second page 16 products', () => {
			let productList = setupProductList(1, 16);
			let products = productList.products;
			api.getProductList(1, 16).then(ret => {
				expect(ret).toEqual({totalProductsCount: productsJSON.length, currentPage: 1, productsCountPerPage: 16, products});
			});
		});
    });
});
