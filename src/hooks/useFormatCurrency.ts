import {useCallback} from 'react';
import currency, {Options} from 'currency.js';
import {IBasicSettings} from '../@types/settings';

export default function useFormatCurrency({settings}: {settings?: IBasicSettings} = {}) {
	const formatCurrency = useCallback((amount: number|string) => {
		amount = Number(amount);

		const currencyOptions: Options = {};
		if (settings?.['system.locale']) {
			const {format, precision, symbol, decimal, thousand} = settings['system.locale'].money;
			let pattern = format.replace('%v', '#');
			pattern = pattern.replace('%s', '!');

			Object.assign(currencyOptions, {
				precision,
				symbol,
				decimal,
				pattern,
				separator: thousand
			});
		}

		return currency(amount, currencyOptions).format();
	}, [settings]);

	return {formatCurrency};
}