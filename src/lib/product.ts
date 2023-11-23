import {IProductPrice} from 'boundless-api-client';
import {IPriceForTpl} from '../@types/products';

export const getPriceForTpl = (price: IProductPrice|null): IPriceForTpl => {
	if (!price) {
		return {price: null};
	}

	return {
		price: price.min ? price.min : price.value,
		oldPrice: price.old_min ? price.old_min : price.old,
		isFrom: (price.min && price.max && price.min != price.max) ? true : false
	};
};