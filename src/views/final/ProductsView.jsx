import React from 'react';
import PropTypes from "prop-types";

import { Header, Footer, ProductCard, CartButton } from '@mikaelvesavuori/acmecorp-potted-plants-components';

import productData from '../../data.json';

export const ProductsViewFinal = ({ itemCount, addItemToCart }) => {
  const products = productData ? productData.products.map(product => {
    const { imageUrl, heading, description, price, id } = product;
    return (
      <ProductCard
        imageUrl={imageUrl}
        heading={heading}
        description={description}
        price={price ? parseInt(price): ''}
        id={id}
        addItemToCart={() => addItemToCart({ name: heading, price, id })}
        key={id} />
    )
  }) : null;

  return (
    <>
      <a href="/products">Switch to starter</a>

      <main id="products">
        <Header>Products</Header>

        <div style={{
          display: "flex",
          justifyContent: "space-evenly",
          flexWrap: "wrap"
        }}>
        {products}
        </div>

        <a href="/final/checkout">
          <CartButton itemCount={itemCount} />
        </a>
      </main>
      <Footer>The ACME Corp. Potted Plants store</Footer>
    </>
  )
}

ProductsViewFinal.default = {
  itemCount: 0
};

ProductsViewFinal.propTypes = {
  itemCount: PropTypes.number.isRequired,
	addItemToCart: PropTypes.func.isRequired
};