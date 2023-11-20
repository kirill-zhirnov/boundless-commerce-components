import React, {ReactNode} from 'react';
import clsx from 'clsx';

export default function Products({children, className}: IProductsProps) {
	return (
		<div className={clsx('bdl-products', className)}>
			{children}
		</div>
	);
}

export interface IProductsProps {
	children: ReactNode | ReactNode[];
	className?: string;
}