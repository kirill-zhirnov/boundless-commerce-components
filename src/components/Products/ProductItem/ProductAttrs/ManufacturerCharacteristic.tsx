import {BoundlessClient, IProductItemManufacturer} from 'boundless-api-client';
import React from 'react';
import {makeThumb} from '../../../../lib/imgs';

interface IProps {
	manufacturer: IProductItemManufacturer;
	apiClient?: BoundlessClient
}

export default function ManufacturerCharacteristic({manufacturer, apiClient}: IProps) {
	const title = manufacturer?.title;
	const manufacturerImage = (manufacturer?.image?.path && apiClient)
		? <img
			className='bdl-product-attrs__brand-img'
			src={makeThumb(apiClient, manufacturer?.image, 200).src}
			alt={title} />
		: undefined
	;

	return (
		<dl className='bdl-product-attrs__item'>
			<dt className='bdl-product-attrs__item-name bdl-product-attrs__item-name_brand'>Brand</dt>
			<dd className='bdl-product-attrs__item-value_brand'>
				{manufacturerImage}
				{title}
			</dd>
		</dl>
	);
}