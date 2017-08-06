import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import Pager from 'react-pager';

import './App.css';
import { loadPageProducts } from '../actions';
import { getPageProducts, getCurrentPage, getTotalProductsCount, getProductsCountPerPage} from '../reducers';
import Product from '../components/Product';


class ProductsPage extends Component {
	componentDidMount = () => {
		this._init();
    }
      
	render() {
		let {products, currentPage, totalProductsCount, productsCountPerPage, loadPageProducts} = this.props;
		let pageCount = Math.ceil(totalProductsCount / productsCountPerPage);
		let visiblePages = pageCount > 5 ? 3 : pageCount;
		return (
			<div className="container-fluid">
				<div className='flex-left flex-middle top-gap' id='list-head'>
					<div className="unit-1-2">
						<div className='flex-vertical"'> 
							<div><h4>All Products</h4></div>
							<div><small>{totalProductsCount}</small></div>
						</div>
					</div>
					<div className="unit-1-2">
						<div className='flex-right'>
							<select onChange={ (evt) => loadPageProducts(0, parseInt(evt.target.value, 10))}>
							<option value='8' selected={productsCountPerPage === 8}> 8 per page</option>
							<option value='12' selected={productsCountPerPage === 12 }>12 per page</option>
							<option value='16'  selected={productsCountPerPage === 16 }>16 per page</option>
							<option value='20'  selected={productsCountPerPage === 20 }>20 per page</option>
							</select>
						</div>
					</div>
				</div>
				<div className='flex-center flex-wrap'>{products.map(p => <Product product={p} />)}</div>
				<div className='flex-right' id='list-foot'>
					<Pager
                		total={pageCount}
                		current={currentPage}
                		visiblePages={visiblePages}
                		titles={{ first: '<|', last: '>|' }}
                		className="pagination-sm pull-right"
                		onPageChanged={(pageIdx) => loadPageProducts(pageIdx, productsCountPerPage)}
            		/>
				</div>
			</div>
		);
	}

	_init = () => {
		let {match, loadPageProducts} = this.props;
		let currentPage = match.params.page || '1';
		let len = match.params.len || '8';
		currentPage = parseInt(currentPage, 10);
		
		loadPageProducts(currentPage > 0 ? currentPage - 1 : 0 , parseInt(len, 10));
	}
}

ProductsPage.propTypes = {
	products: PropTypes.arrayOf(PropTypes.shape({
    		product_image: PropTypes.string.isRequired,
    		price: PropTypes.string.isRequired,
    		product_name: PropTypes.string.isRequired,
    		description: PropTypes.string.isRequired,
	})),
	currentPage: PropTypes.number.isRequired,
	totalProductsCount: PropTypes.number.isRequired,
	productsCountPerPage: PropTypes.number.isRequired,
	loadPageProducts: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
	products: getPageProducts(state),
	currentPage: getCurrentPage(state),
	totalProductsCount: getTotalProductsCount(state),
	productsCountPerPage: getProductsCountPerPage(state),
})

export default withRouter(connect(
  mapStateToProps,
  { loadPageProducts }
)(ProductsPage))
