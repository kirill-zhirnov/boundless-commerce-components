import React from 'react';
import {IFinalPrice} from 'boundless-api-client';
import {getPriceForTpl} from '../../../lib/product';
import useFormatCurrency from '../../../hooks/useFormatCurrency';
import clsx from 'clsx';
import {IBasicSettings} from '../../../@types/settings';

export default function ProductPrice({price, className, settings, textFrom = 'From:'}: {price: IFinalPrice, settings?: IBasicSettings, className?: string, textFrom?: string}) {
	const tplPrice = getPriceForTpl(price);
	const {formatCurrency} = useFormatCurrency({settings});

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