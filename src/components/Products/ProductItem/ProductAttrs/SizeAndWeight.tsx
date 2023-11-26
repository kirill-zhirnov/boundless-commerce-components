import {IItemSize} from 'boundless-api-client';
import React from 'react';
import {ISizeAndWeightLabels} from '../../../../@types/products';

const defaultLabels = {
	sizeTitle: 'Size (L x W x H)',
	weightTitle: 'Weight',
	lengthUnit: 'cm.',
	weightUnit: 'kg.'
};

export default function SizeAndWeight({size, labels = defaultLabels}: IProps) {
	const {weight, width, length, height} = size;
	const hasDimensions = length || width || height;

	return (
		<>
			{hasDimensions && <dl className='bdl-product-attrs__item'>
				<dt className='bdl-product-attrs__item-name'>
					<div>{labels?.sizeTitle}</div>
				</dt>
				<dd className='bdl-product-attrs__item-value'>
					{`${length || ''} x ${width || ''} x ${height || ''} ${labels?.lengthUnit}`}
				</dd>
			</dl>}
			{/*{width && <div itemProp='width' itemScope itemType='//schema.org/QuantitativeValue'>*/}
			{/*	<meta itemProp='value' content={String(width)} />*/}
			{/*	<meta itemProp='unitText' content={labels?.lengthUnit} />*/}
			{/*</div>}*/}
			{/*{height && <div itemProp='height' itemScope itemType='//schema.org/QuantitativeValue'>*/}
			{/*	<meta itemProp='value' content={String(height)} />*/}
			{/*	<meta itemProp='unitText' content={labels?.lengthUnit} />*/}
			{/*</div>}*/}
			{/*{length && <div itemProp='length' itemScope itemType='//schema.org/QuantitativeValue'>*/}
			{/*	<meta itemProp='value' content={String(length)} />*/}
			{/*	<meta itemProp='unitText' content={labels?.lengthUnit} />*/}
			{/*</div>}*/}

			{weight && <>
				<dl className='bdl-product-attrs__item'>
					<dt className='bdl-product-attrs__item-name'>
						<div>{labels?.weightTitle}</div>
					</dt>
					<dd className='bdl-product-attrs__item-value'>
						{`${weight} ${labels?.weightUnit}`}
					</dd>
				</dl>
				{/*<div itemProp='weight' itemScope itemType='//schema.org/QuantitativeValue'>*/}
				{/*	<meta itemProp='value' content={String(weight)} />*/}
				{/*	<meta itemProp='unitText' content={labels?.weightUnit} />*/}
				{/*</div>*/}
			</>}
		</>
	);
}

interface IProps {
	size: IItemSize,
	labels?: ISizeAndWeightLabels
}