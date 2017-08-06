import * as types from '../constants/ActionTypes';

export const loadPageProducts = (currentPage, productsCountPerPage) =>(dispatch, getState, api) => {
  api.getProductList(currentPage, productsCountPerPage).then(ret => {
    dispatch(setPageProductList(ret));
  });
};

const setPageProductList = ({products, totalProductsCount, currentPage, productsCountPerPage}) => ({
	type: types.SET_PAGE_PRODUCT_LIST,
	products,
	totalProductsCount,
	currentPage,
	productsCountPerPage,
});

