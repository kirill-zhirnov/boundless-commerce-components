import React, {MouseEvent, useCallback, useMemo} from 'react';
import clsx from 'clsx';
import {IVariant, IVariantCharacteristic, IVariantIdCombinations} from 'boundless-api-client';
import {findAvailableVariants} from '../../../../../lib/variant';

export default function CaseItem({characteristic, caseItem, onSelectCase, value, variants, idCombinations}: IProps) {
	const {id, availableVariants, inStockVariants, isDisabled} = useMemo(() => {
		const id = `${characteristic.id}-case-${caseItem.id}`;
		const availableVariants = findAvailableVariants(variants, idCombinations, {...value, ...{[characteristic.id]: caseItem.id}});
		const inStockVariants = availableVariants.filter(({in_stock}) => in_stock);
		const isDisabled = !availableVariants.length;

		return {id, availableVariants, inStockVariants, isDisabled};
	}, [variants, idCombinations, value, characteristic, caseItem]);

	const onLabelClicked = useCallback((caseId: number, e: MouseEvent<HTMLLabelElement>) => {
		e.preventDefault();

		if (isDisabled) {
			return;
		}

		onSelectCase(characteristic.id, value[characteristic.id] === caseId ? null : caseId);
	}, [characteristic, value, onSelectCase, isDisabled]);

	return (
		<div key={caseItem.id} className={'bdl-variant-picker__case-item'}>
			<input autoComplete={'off'}
						 className={'bdl-variant-picker__btn-check'}
						 disabled={!availableVariants.length}
						 name={`characteristic-${characteristic.id}`}
						 onChange={() => {}}
						 type={'radio'}
						 checked={value[characteristic.id] === caseItem.id}
						 value={caseItem.id}
						 id={id}
			/>
			<label
				className={clsx('bdl-variant-picker__case-label', {
					'bdl-variant-picker__case-label_out-of-stock': !inStockVariants.length,
					'bdl-variant-picker__case-label_disabled': isDisabled
				})}
				htmlFor={id}
				onClick={onLabelClicked.bind(null, caseItem.id)}
			>
				{caseItem.title}
			</label>
		</div>
	);
}

interface IProps {
	characteristic: IVariantCharacteristic;
	caseItem: {
		id: number;
		title: string;
	},
	onSelectCase: (characteristicId: number, caseId: number|null) => void;
	value: {[characteristicId: number|string]: number};
	idCombinations: IVariantIdCombinations;
	variants: IVariant[]
}