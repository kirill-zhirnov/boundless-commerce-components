# Boundless Commerce Components

Components for E-commerce store: List of products, Individual product page, Thumbnail views, Cart helpers.

The components can be used with React or Next.js.

The library has 2 entry points: 

- General - `import {Products, Product} from 'boundless-commerce-components'`
- Client - `import {BoundlessCart} from 'boundless-commerce-components/dist/client'`

The client entry point uses client's hooks (`useEffect` and so on) and in Next.JS v14 should be used with `use client`
directive. [Read more about Client components in Next.js](https://nextjs.org/docs/app/building-your-application/rendering/client-components)

### About Boundless Commerce

API’s First Headless E-commerce CMS: We Provide An Admin-Side For Store Management, Powerful API, And Ready-To-Use
Checkout Area.

#### Self-Hosted solution

There is an option for Running Boundless-Commerce on your own server. Read more at [Open-Source Headless eCommerce Platform](https://boundless-commerce.com/open-source)

## Installation

`yarn add boundless-commerce-components`

Or via NPM:

`npm install boundless-commerce-components --save`

## Getting Started

### List of products

[Example of usage](https://github.com/kirill-zhirnov/next-ecommerce-starter-kit/blob/master/app/page.tsx)

```typescript jsx

import {Products, Product} from 'boundless-commerce-components';

<Products
	all={{gap: 10, perRow: 2}}
	lg={{gap: 30, perRow: 4}}
	xxl={{gap: 30, perRow: 6}}
>
	{products.map((product) =>
		<Product
			product={product}
			key={product.product_id}
			link={{component: Link, href: `/product/${product.url_key || product.product_id}`}}
			apiClient={apiClient}
			settings={settings}
		/>
	)}
</Products>
```

`Products` accepts `all, sm, md, lg, xl, xxl` to determine the number of products per row and the spacing between them.

Product view can be customized by redefining internal components:

```typescript jsx
<Product
	components={{
		image: <div>My own Img view</div>,
		title: <div>My own Title view</div>,
		price: <div>My own Price view</div>
	}}
/>
```

### Cart

If you want to use cart hooks you need to wrap the application in `BoundlessCart`.

[Example of usage](https://github.com/kirill-zhirnov/next-ecommerce-starter-kit/blob/master/components/wrapperForCartContext.tsx)

```typescript jsx
//if you are using NextJS - add client directive:
'use client';

import {BoundlessCart} from 'boundless-commerce-components/dist/client';

<BoundlessCart apiClient={apiClient}>
	{children}
</BoundlessCart>
```

The wrapper inits the context, retrieves cart_id from the server and saves it in Cookie.

### Cart Hook

```typescript jsx
'use client';

import {useCart} from 'boundless-commerce-components/dist/client';

const {cartId, addToCart, total} = useCart();
```

Please see examples of usage:

[Adding to cart](https://github.com/kirill-zhirnov/nextjs-ecommerce-starter-kit/blob/master/components/product/addToCart.tsx)

[Cart Button](https://github.com/kirill-zhirnov/nextjs-ecommerce-starter-kit/blob/master/components/cart/fab.tsx)

[Cart Page](https://github.com/kirill-zhirnov/nextjs-ecommerce-starter-kit/blob/master/components/cart/cartBody.tsx)


### Customer Hook

```typescript jsx
'use client';

import {useCustomer} from 'boundless-commerce-components/dist/client';

const {customerAuthToken, setCustomerAuthToken, customer, setCustomer, login, logout, customerIsInited} = useCustomer();
```

Please see examples of usage:

[Login Example](https://github.com/kirill-zhirnov/nextjs-ecommerce-starter-kit/blob/master/components/auth/loginForm.tsx#L59)

## Free E-Commerce themes

[Free E-Commerce Themes](https://boundless-commerce.com/templates)

[Subscribe to my Youtube channel](https://www.youtube.com/@jam-stack-ninja)