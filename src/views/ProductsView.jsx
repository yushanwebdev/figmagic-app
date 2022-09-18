import React from 'react';
import PropTypes from 'prop-types';

import productData from '../data.json';

export const ProductsView = ({ itemCount, addItemToCart }) => {
  const products = productData ? productData.products.map(product => {
    const { imageUrl, heading, description, price, id} = product;
    return <div key={id}>
      <img src={imageUrl} width="320px" />
      <h2>{heading}</h2>
      <p>{description}</p>
      <button id={`${id}#${price}#${heading}`} onClick={addItemToCart}>{price} $</button>
    </div>
  }) : null;

  return (
    <>
      <a href="/final/checkout">Switch to final</a>

      <main id="products">
        <h1>Products</h1>

        {products}

        <div>
          <p>Items in cart: {itemCount}</p>
          <a href="/checkout">Go to checkout</a>
        </div>
      </main>
      <footer>The ACME Corp. Potted Plants store</footer>
    </>
  )
};

ProductsView.default = {
  itemCount: 0
};

ProductsView.propTypes = {
  itemCount: PropTypes.number.isRequired,
	addItemToCart: PropTypes.func.isRequired
};