import {IVariant, IVariantIdCombinations} from 'boundless-api-client';

export const findAvailableVariants = (variants: IVariant[], idCombinations: IVariantIdCombinations, value: {[characteristicId: number|string]: number}): IVariant[] => {
	const variantIds: number[] = [];

	for (const [variantId, combination] of Object.entries(idCombinations)) {
		if (isValueSuitsCombination(combination, value)) {
			variantIds.push(parseInt(variantId));
		}
	}

	return variants.filter(({variant_id}) => variantIds.includes(variant_id));
};

export const isValueSuitsCombination = (combination: {[characteristicId: number|string]: number}, value: {[characteristicId: number|string]: number}): boolean => {
	for (const [characteristicId, caseId] of Object.entries(value)) {
		if (!(characteristicId in combination) || combination[characteristicId] != caseId) {
			return false;
		}
	}

	return true;
};