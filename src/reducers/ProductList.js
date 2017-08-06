import { SET_PAGE_PRODUCT_LIST } from '../constants/ActionTypes';

const initialState = {
	products: [],
	currentPage: 0,
	totalProductsCount: 0,
	productsCountPerPage: 8,
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_PAGE_PRODUCT_LIST:
			return {
				...state,
				products: action.products,
				currentPage: action.currentPage,
				totalProductsCount: action.totalProductsCount,
				productsCountPerPage: action.productsCountPerPage,
			};
		default:
			return state;
	}
}

export default reducer;

export const getPageProducts = (state) => state.products

export const getCurrentPage = (state) => state.currentPage

export const getTotalProductsCount = (state) => state.totalProductsCount

export const getProductsCountPerPage = (state) => state.productsCountPerPage
