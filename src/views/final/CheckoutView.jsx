import React from 'react';
import PropTypes from 'prop-types';

import { Header, Description, Footer, CheckoutItem, CheckoutForm } from '@mikaelvesavuori/acmecorp-potted-plants-components';

import productData from '../../data.json';

export const CheckoutViewFinal = ({ addItemToCart, removeItemFromCart, products }) => {
  const checkoutItems = products ? Object.entries(products).map(product => {
    const [productName, productInfo] = product;
    const { name, count, price } = productInfo;
    const { imageUrl } = productData.products.filter((product) => product.id === productName)[0];

    return <CheckoutItem
      name={name}
      count={count}
      price={price ? parseInt(price) : ''}
      imageUrl={imageUrl}
      addItemToCart={() => addItemToCart({ name, price, id: productName })}
      removeItemFromCart={() => removeItemFromCart({ name, price, id: productName })}
      key={productName} />;
  }) : null;

  return (
    <>
      <a href="/checkout">Switch to starter</a>

      <main id="checkout">
        <Header>Checkout</Header>

        <Description><a href="/final/products">Go back to products</a></Description>

        <div>{checkoutItems}</div>

        <CheckoutForm />
      </main>
      <Footer>The ACME Corp. Potted Plants store</Footer>
    </>
  )
};

CheckoutViewFinal.propTypes = {
	addItemToCart: PropTypes.func.isRequired,
  removeItemFromCart: PropTypes.func.isRequired,
  products: PropTypes.object.isRequired
};