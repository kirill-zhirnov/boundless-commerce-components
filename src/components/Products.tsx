import React, {ReactNode} from 'react';
import clsx from 'clsx';

export default function Products({children, className, all, sm, md, lg, xl, xxl}: IProductsProps) {
	return (
		<div className={clsx('bdl-products', className)}>
			{children}
		</div>
	);
}

interface IGapPerRow {
	gap: 10 | 20 | 30 | 40 | 50,
	perRow: 1 | 2 | 3 | 4 | 5 | 6
}

export interface IProductsProps {
	children: ReactNode | ReactNode[];
	className?: string;
	all?: IGapPerRow,
	sm?: IGapPerRow,
	md?: IGapPerRow,
	lg?: IGapPerRow,
	xl?: IGapPerRow,
	xxl?: IGapPerRow
}