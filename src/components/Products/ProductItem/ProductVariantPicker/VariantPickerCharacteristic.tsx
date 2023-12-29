import {IVariant, IVariantCharacteristic, IVariantIdCombinations} from 'boundless-api-client';
import React from 'react';
import CaseItem from './VariantPickerCharacteristic/CaseItem';

export default function VariantPickerCharacteristic({characteristic, onSelectCase, value, idCombinations, variants}: IVariantCharProps) {
	return (
		<div className={'bdl-variant-picker__attr'}>
			<div className={'bdl-variant-picker__title'}>{`${characteristic.title}:`}</div>
			<div className='bdl-variant-picker__cases'>
				{characteristic.cases.map(caseItem =>
					<CaseItem
						characteristic={characteristic}
						caseItem={caseItem}
						onSelectCase={onSelectCase}
						value={value}
						idCombinations={idCombinations}
						variants={variants}
						key={caseItem.id}
					/>
				)}
			</div>
		</div>
	);
}

interface IVariantCharProps {
	characteristic: IVariantCharacteristic;
	value: {[characteristicId: number|string]: number};
	onSelectCase: (characteristicId: number, caseId: number|null) => void;
	idCombinations: IVariantIdCombinations;
	variants: IVariant[]
}
