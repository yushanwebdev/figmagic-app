# ACME Corp. Potted Plants - Example app to use with your own component library

**Note that Node 17 may not work with some of the deeper dependencies; if you get errors, please use Node 16 instead. Consider using [n](https://github.com/tj/n) or [nvm](https://github.com/nvm-sh/nvm) for this**.

An example application meant to use a React component library generated partially with Figmagic. Made for [The newline Guide to React Component Design Systems with Figmagic](https://www.newline.co/courses/newline-guide-to-react-component-design-systems-with-figmagic/).

## Technology

- React 17
- Webpack 5
- ESLint
- Prettier
- Babel

## Instructions

- Install with `npm install`
- Run dev server with `npm start`

## Structure

- `/src`: Source code
- `/src/app.jsx`: Main application, this is also where state is going to reside
- `/src/index.jsx`: Root for React
- `/src/index.html`: HTML page to mount React inside
- `/src/utils.js`: Basic JavaScript utility functions
- `/src/data.json`: Product data
- `/src/views`: Views with initial state
- `/src/views/final`: Views with "final" code to use complete components from our component library

## Views

This project uses a fairly basic React setup, with a bit of "classic state management" (i.e. "prop passing") and `.jsx` files.

_The idea is that you will actually have to do very, very minimal work on these files!_

There are two primary views, **ProductsView** (`/products`) and **CheckoutView** (`/checkout`), and a `DemoView` (`/demo`; also any fallback route). For the primary views, there is a "complete"/final set of these, and an initial/starter set. You would use the final set to see what the intended result is, and the initial ones as you begin working on your own components. You can switch between them by editing the following section in `src/app.jsx`:

```jsx
import { ProductsView } from './views/final/ProductsView'; // Use './views/ProductsView' for the "initial" raw version to begin working with
import { CheckoutView } from './views/final/CheckoutView'; // Use './views/CheckoutView' for the "initial" raw version to begin working with
```

## Component library usage

The app is hooked up to use my package, [`@mikaelvesavuori/acmecorp-potted-plants-components`](https://www.npmjs.com/package/@mikaelvesavuori/acmecorp-potted-plants-components), but you should absolutely do `npm install {YOUR_PACKAGE}` and re-point to your own in the views.
