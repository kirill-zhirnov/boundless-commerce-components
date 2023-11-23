import React from 'react';
import {BoundlessClient, IItemSize, IProductAttribute, IProductItemManufacturer} from 'boundless-api-client';
import clsx from 'clsx';
import CharacteristicItem from './ProductAttrs/CharacteristicItem';
import ManufacturerCharacteristic from './ProductAttrs/ManufacturerCharacteristic';
import SizeAndWeight from './ProductAttrs/SizeAndWeight';
import {ISizeAndWeightLabels} from '../../../@types/products';

export default function ProductAttrs({characteristics, manufacturer, size, className, apiClient, sizeAndWeightLabels}: IProps) {
	if ((!characteristics || !characteristics.length) && !manufacturer && !size) return null;

	return (
		<div className={clsx('bdl-product-attrs', className)}>
			{characteristics && characteristics.map(characteristic => (
				<React.Fragment key={characteristic.id}>
					{characteristic.is_folder ? (
						<div className='bdl-product-attrs__group' key={characteristic.id}>
							<h3 className='bdl-product-attrs__group-header'>{characteristic.title}</h3>
							{characteristic.children?.map(child => (
								<CharacteristicItem item={child} key={child.id}/>
							))}
						</div>
					) : <CharacteristicItem item={characteristic} />}
				</React.Fragment>
			))}
			{manufacturer && <ManufacturerCharacteristic manufacturer={manufacturer} apiClient={apiClient} />}
			{size && <SizeAndWeight size={size} labels={sizeAndWeightLabels}/>}
		</div>
	);
}

interface IProps {
	characteristics?: IProductAttribute[];
	manufacturer?: IProductItemManufacturer | null;
	size?: IItemSize | null;
	className?: string,
	apiClient?: BoundlessClient,
	sizeAndWeightLabels?: ISizeAndWeightLabels
}