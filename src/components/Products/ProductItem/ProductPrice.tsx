import React from 'react';
import {IProductPrice} from 'boundless-api-client';
import {getPriceForTpl} from '../../../lib/product';
import useFormatCurrency from '../../../hooks/useFormatCurrency';
import clsx from 'clsx';

export default function ProductPrice({price, className}: {price: IProductPrice, className?: string}) {
	const tplPrice = getPriceForTpl(price);
	const {formatCurrency} = useFormatCurrency();

	if (tplPrice.price === null) {
		return null;
	}

	return (
		<div className={className}>
			{tplPrice.isFrom && <span className='from'>From:</span>}
			{tplPrice.oldPrice && <span className='old'>{formatCurrency(tplPrice.oldPrice)}</span>}
			<span
				className={clsx('current', {'has-old': tplPrice.oldPrice})}
			>
				{formatCurrency(tplPrice.price)}
			</span>
		</div>
	);
}