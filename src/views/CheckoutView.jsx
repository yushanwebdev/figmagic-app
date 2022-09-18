import React from 'react';
import PropTypes from 'prop-types';

export const CheckoutView = ({ products }) => {
  const checkoutItems = products ? Object.entries(products).map(product => {
    const [productName, productData] = product;
    const { count, price, name } = productData;
    return <div key={productName}>{name}, {count} x {price} $</div>;
  }) : null;

  return (
    <>
      <a href="/final/checkout">Switch to final</a>

      <main id="checkout">
        <h1>Checkout</h1>

        <div><a href="/products">Go back to products</a></div>

        <div>{checkoutItems}</div>

        <form>Form</form>

      </main>
      <footer>The ACME Corp. Potted Plants store</footer>
    </>
  )
};

CheckoutView.propTypes = {
	addItemToCart: PropTypes.func.isRequired,
  removeItemFromCart: PropTypes.func.isRequired,
  products: PropTypes.object.isRequired
};