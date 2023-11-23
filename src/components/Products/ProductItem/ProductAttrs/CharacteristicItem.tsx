import {IProductAttribute} from 'boundless-api-client';
import React from 'react';

export default function CharacteristicItem({item}: {item: IProductAttribute}) {
	return (
		<>
			<dl className='bdl-product-attrs__item'>
				<dt className='bdl-product-attrs__item-name'><div>{item.title}</div></dt>
				<dd className='bdl-product-attrs__item-value'>
					{item.value && <div>{item.value}</div>}
					{item.cases?.map(e => (
						<div key={e.id}>{e.title}</div>
					))}
				</dd>
			</dl>
		</>
	);
}