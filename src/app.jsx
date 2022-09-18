import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

import { DemoView } from './views/DemoView';
import { ProductsView } from './views/ProductsView';
import { CheckoutView } from './views/CheckoutView';

import { DemoViewFinal } from './views/final/DemoView';
import { ProductsViewFinal } from './views/final/ProductsView';
import { CheckoutViewFinal } from './views/final/CheckoutView';

import { loadState, saveState, createListOfUpdatedProductsInCart } from './utils';

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = loadState();
  }

  /**
   * @description Add single item to cart.
   */
  addItemToCart = (input) => this.updateCart(input, true);

  /**
  * @description Remove single item from cart.
  */
  removeItemFromCart = (input) => this.updateCart(input, false);

  /**
   * @description Update cart state. Called only via helper functions like `addItemToCart()` and `removeItemFromCart()`.
   */
  updateCart(input, add) {
    const updatedProductsInCart = createListOfUpdatedProductsInCart(this.state.products, input, add);
    const updatedCount = Object.values(updatedProductsInCart).map((item) => item.count).reduce((a, b) => a + b, 0);

    this.setState({
      itemsInCart: updatedCount,
      products: updatedProductsInCart
    }, () => {
      saveState(this.state);
    });
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route path="/products" exact render={() =>
            <ProductsView
              addItemToCart={(e) => this.addItemToCart(e)}
              itemCount={this.state.itemsInCart} />}
          />
          <Route path="/final/products" exact render={() =>
            <ProductsViewFinal
              addItemToCart={(e) => this.addItemToCart(e)}
              itemCount={this.state.itemsInCart} />}
          />
          <Route path="/checkout" exact render={() =>
            <CheckoutView
              addItemToCart={(e) => this.addItemToCart(e)}
              removeItemFromCart={(e) => this.removeItemFromCart(e)}
              products={this.state.products} />}
          />
          <Route path="/final/checkout" exact render={() =>
            <CheckoutViewFinal
              addItemToCart={(e) => this.addItemToCart(e)}
              removeItemFromCart={(e) => this.removeItemFromCart(e)}
              products={this.state.products} />}
          />
          <Route path="/demo" exact component={DemoView} />
          <Route path="/final/demo" exact component={DemoViewFinal} />
          <Redirect to="/demo" />
        </Switch>
      </Router>
    );
  }
}