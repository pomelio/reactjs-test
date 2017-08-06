import React from 'react';
import PropTypes from 'prop-types';

const Product = ({ product }) => (
  <div className="flex-vertical" style={{width: '300px', margin: '8px'}} >
    <div style={{backgroundColor: 'white'}} className='flex-center'><img src={product.product_image} alt={product.product_name} height="200" width="200" /></div>
    <div style={{backgroundColor: 'white', marginTop: '2px'}}>
      <div><h6>{product.product_name}</h6></div>
      <div><small>{product.description}</small></div>
      <div><b>{product.price}</b></div>
    </div>
  </div>
)

Product.propTypes = {
  product: PropTypes.shape({
    product_image: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    product_name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }),
}

export default Product
