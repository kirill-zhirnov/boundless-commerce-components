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

## Installation

`yarn add boundless-commerce-components`

Or via NPM:

`npm install boundless-commerce-components --save`

## Getting Started

### List of products

```typescript jsx
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