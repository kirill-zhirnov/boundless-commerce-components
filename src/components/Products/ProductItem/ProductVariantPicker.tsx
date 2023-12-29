import React, {useState, useCallback} from 'react';
import {IExtendedVariants, IVariant, IVariantCombination} from 'boundless-api-client';
import clsx from 'clsx';
import VariantPickerCharacteristic from './ProductVariantPicker/VariantPickerCharacteristic';

export default function ProductVariantPicker({extendedVariants, onChange, className}: IProps) {
	const {characteristics, list, combinations, idCombinations} = extendedVariants;
	const [value, setValue] = useState<{[characteristicId: number]: number}>({});

	const onSelectCase = useCallback((characteristicId: number, caseId: number|null) => {
		const newValue = {...value};
		if (caseId === null) {
			delete newValue[characteristicId];
		} else {
			newValue[characteristicId] = caseId;
		}

		setValue(newValue);

		let variant: IVariant|undefined;
		const variantId = findVariantIdByCombinations(newValue, combinations);
		if (variantId) {
			variant = list.find(({variant_id}) => String(variant_id) == variantId);
		}

		if (onChange) {
			onChange(newValue, variant);
		}
	}, [list, value, setValue, combinations, onChange]);

	return (
		<div className={clsx('bdl-variant-picker', className)}>
			{characteristics.map(characteristic => (
				<VariantPickerCharacteristic characteristic={characteristic}
																		 key={characteristic.id}
																		 onSelectCase={onSelectCase}
																		 value={value}
																		 idCombinations={idCombinations}
																		 variants={list}
				/>
			))}
		</div>
	);
}

interface IProps {
	extendedVariants: IExtendedVariants;
	onChange?: (value: {[characteristicId: number]: number}, variant?: IVariant) => void,
	className?: string
}

const isEqual = (a: string[], b: string[]) => {
	if (a.length != b.length) {
		return false;
	}

	for (const aVal of a) {
		if (!b.includes(aVal)) {
			return false;
		}
	}

	return true;
};

const findVariantIdByCombinations = (value: {[key: number]: number}, combinations: IVariantCombination): null|string => {
	const requiredCombinations = Object.entries(value).map(([characteristicId, caseId]) => `${characteristicId}-${caseId}`);

	// eslint-disable-next-line
	const result = Object.entries(combinations).find(([variantId, variantCombination]) => isEqual(requiredCombinations, variantCombination));

	return result ? result[0] : null;
};