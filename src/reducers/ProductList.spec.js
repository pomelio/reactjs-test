import reducer, * as productList from './ProductList';
import * as types from '../constants/ActionTypes';
import productsJSON from '../api/products.json';

function setupProductListAction(currentPage, productsCountPerPage) {
	let products = [];
	let offset = currentPage * productsCountPerPage;
	for (let i = offset; i < offset + productsCountPerPage; i++) {
		products.push(productsJSON[i]);
	}
	return {
		type: types.SET_PAGE_PRODUCT_LIST,
		totalProductsCount: productsJSON.length,
		currentPage,
		productsCountPerPage,
		products,
	}
}

describe('reducers', () => {
	describe('ProductList', () => {
		describe('loadPageProducts', () => {
			it('loadPageProducts with page 0 and perPageCount 8', () => {
				let productListAction = setupProductListAction(0, 8);
				let products = productListAction.products;
				expect(reducer({}, productListAction)).toEqual({totalProductsCount: productsJSON.length, currentPage: 0, productsCountPerPage: 8, products});
			});

			it('loadPageProducts with page 10 and perPageCount 16', () => {
				let productListAction = setupProductListAction(10, 16);
				let products = productListAction.products;
				expect(reducer({}, productListAction)).toEqual({totalProductsCount: productsJSON.length, currentPage: 10, productsCountPerPage: 16, products});
			});
		});
    });
});
