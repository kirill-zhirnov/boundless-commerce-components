import React, {ReactNode} from 'react';
import {IProduct} from 'boundless-api-client';
import clsx from 'clsx';
import {IProductLink} from '../../@types/products';
import ProductListImage from './ProductItem/ProductListImage';
import ProductLink from './ProductItem/ProductLink';
import ProductPrice from './ProductItem/ProductPrice';

export default function Product({product, className, productLink, components}: IProductProps) {
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
					: <ProductListImage product={product} productLink={productLink}/> }
				{components?.title
					? components?.title
					: <h4 className='bdl-product__title'>
						<ProductLink link={productLink}>
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
						{product.price && <ProductPrice price={product.price} className={'bdl-product__price'} />}
					</div>
				}
			</div>
		</div>
	);
}

export interface IProductProps {
	product: IProduct;
	className?: string;
	productLink?: IProductLink;
	components?: {
		image?: ReactNode,
		title?: ReactNode,
		price?: ReactNode,
	}
}