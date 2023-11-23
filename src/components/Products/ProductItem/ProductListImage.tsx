import React from 'react';
import ProductLabels from './ProductLabels';
import NoImage from '../../NoImage';
import {BoundlessClient, TThumbRatio} from 'boundless-api-client';
import {IProduct} from 'boundless-api-client';
import ProductLink from './ProductLink';
import {IProductLink} from '../../../@types/products';
import {makeThumb} from '../../../lib/imgs';

export default function ProductListImage({product, link, apiClient, maxSize = 300}: ProductListImageProps) {
	const img = product.images?.find(({is_default}) => is_default);
	let src, width, height;
	if (img && apiClient) {
		const result = makeThumb(apiClient, img, maxSize, TThumbRatio['1-1']);
		src = result.src;
		width = result.width;
		height = result.height;
	}

	return (
		<ProductLink link={link} className={'bdl-product__image'}>
			{(src && img)
				? <div className={'bdl-product__image-wrap'}>
					<img
						src={src}
						alt={img.alt || img.description || product.title}
						width={width}
						height={height}
						className={'bdl-product__image-img'}
					/>
				</div>
				: <NoImage ratio={TThumbRatio['1-1']} />
			}
			{product.labels &&
			<ProductLabels labels={product.labels}
										 className={'bdl-labels_small bdl-labels_column bdl-labels_rounded'}
			/>
			}
		</ProductLink>
	);
}

export interface ProductListImageProps {
	product: IProduct,
	apiClient?: BoundlessClient,
	link?: IProductLink,
	maxSize?: number
}