import React, {ReactNode} from 'react';
import {BoundlessClient, IProduct} from 'boundless-api-client';
import clsx from 'clsx';
import {IProductLink} from '../../@types/products';
import ProductListImage from './ProductItem/ProductListImage';
import ProductLink from './ProductItem/ProductLink';
import ProductPrice from './ProductItem/ProductPrice';
import {IBasicSettings} from '../../@types/settings';
import {findSellingPrice} from '../../lib/product';

export default function Product({product, className, link, components, apiClient, settings}: IProductProps) {
	const sellingPrice = findSellingPrice(product.prices);

	return (
		<div
			className={clsx('bdl-product', {
				'bdl-product_in-stock': product.in_stock,
				'bdl-product_out-of-stock': !product.in_stock
			}, className)}
		>
			<div className='bdl-product__wrapper'>
				{components?.image
					? components?.image
					: <ProductListImage product={product} link={link} apiClient={apiClient}/> }
				{components?.title
					? components?.title
					: <h4 className='bdl-product__title'>
						<ProductLink link={link}>
							<span
								// color={typography.color}
							>
								{product.title}
							</span>
						</ProductLink>
					</h4>
				}
				{components?.price
					? components?.price
					: <div className='bdl-product__offer'>
						{sellingPrice &&
						<ProductPrice
							price={sellingPrice}
							settings={settings}
							className={'bdl-product__price'}
						/>}
					</div>
				}
			</div>
		</div>
	);
}

export interface IProductProps {
	product: IProduct;
	className?: string;
	link?: IProductLink;
	components?: {
		image?: ReactNode,
		title?: ReactNode,
		price?: ReactNode,
	},
	apiClient?: BoundlessClient,
	settings?: IBasicSettings
}