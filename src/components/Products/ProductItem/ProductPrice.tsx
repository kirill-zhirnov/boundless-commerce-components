import React from 'react';
import {IProductPrice} from 'boundless-api-client';
import {getPriceForTpl} from '../../../lib/product';
import useFormatCurrency from '../../../hooks/useFormatCurrency';
import clsx from 'clsx';

export default function ProductPrice({price, className, textFrom = 'From:'}: {price: IProductPrice, className?: string, textFrom?: string}) {
	const tplPrice = getPriceForTpl(price);
	const {formatCurrency} = useFormatCurrency();

	if (tplPrice.price === null) {
		return null;
	}

	return (
		<div className={clsx('bdl-price', className)}>
			{(tplPrice.isFrom && textFrom) && <span className='bdl-price__from'>{textFrom}</span>}
			{tplPrice.oldPrice && <span className='bdl-price__old'>{formatCurrency(tplPrice.oldPrice)}</span>}
			<span
				className={clsx('bdl-price__current', {'bdl-price__current_has-old': tplPrice.oldPrice})}
			>
				{formatCurrency(tplPrice.price)}
			</span>
		</div>
	);
}