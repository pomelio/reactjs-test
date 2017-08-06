import { combineReducers } from 'redux'
import productList, * as fromProductList from './ProductList'

export default combineReducers({
  productList,
})


export const getPageProducts = (state) => fromProductList.getPageProducts(state.productList)

export const getCurrentPage = (state) => fromProductList.getCurrentPage(state.productList)

export const getTotalProductsCount = (state) => fromProductList.getTotalProductsCount(state.productList)

export const getProductsCountPerPage = (state) => fromProductList.getProductsCountPerPage(state.productList)
