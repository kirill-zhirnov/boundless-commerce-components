import React, {ReactNode, useMemo} from 'react';
import clsx from 'clsx';

export default function Products({children, className, all, sm, md, lg, xl, xxl}: IProductsProps) {
	const gapClasses = useMemo(() => {
		const out = [];
		if (all) {
			out.push(`bdl-products_gap-${all.gap}_per-row-${all.perRow}`);
		}

		if (sm) {
			out.push(`bdl-products_sm-gap-${sm.gap}_per-row-${sm.perRow}`);
		}

		if (md) {
			out.push(`bdl-products_md-gap-${md.gap}_per-row-${md.perRow}`);
		}

		if (lg) {
			out.push(`bdl-products_lg-gap-${lg.gap}_per-row-${lg.perRow}`);
		}

		if (xl) {
			out.push(`bdl-products_xl-gap-${xl.gap}_per-row-${xl.perRow}`);
		}

		if (xxl) {
			out.push(`bdl-products_xxl-gap-${xxl.gap}_per-row-${xxl.perRow}`);
		}

		return out;
	}, [all, sm, md, lg, xl, xxl]);

	return (
		<div className={clsx('bdl-products', gapClasses, className)}>
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