import React from 'react';
import ProductLabels from './ProductLabels';
import NoImage from '../../NoImage';
import {TThumbRatio} from 'boundless-api-client';
import {IProduct} from 'boundless-api-client';
import ProductLink from './ProductLink';
import {IProductLink} from '../../../@types/products';

export default function ProductListImage({product, productLink, maxSize = 300}: {product: IProduct, productLink?: IProductLink, maxSize?: number }) {
	const img = product.images?.find(({is_default}) => is_default);
	let src, width, height;
	if (img) {
		// const result = getProductsListImg(api, productImageProportion, img as IImagePartial, maxSize);
		// src = result.src;
		// width = result.width;
		// height = result.height;
	}

	return (
		<ProductLink link={productLink} className={'bdl-product__image'}>
			{(src && img)
				? <div className={'img text-center'}>
					<img
						src={src}
						alt={img.alt || product.title}
						itemProp='image'
						width={width}
						height={height}
					/>
				</div>
				: <NoImage ratio={TThumbRatio['1-1']} />
			}
			{product.labels &&
			<ProductLabels labels={product.labels}
										 className={'bdl-product__labels_small bdl-product__labels_column'}
			/>
			}
		</ProductLink>
	);
}