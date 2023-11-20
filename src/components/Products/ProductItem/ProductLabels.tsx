import React from 'react';
import {ILabel} from 'boundless-api-client';
import clsx from 'clsx';

export default function ProductLabels({labels, className}: { labels: ILabel[], className?: string }) {
	if (!labels.length)
		return null;

	return (
		<ul className={clsx('bdl-product__labels list-unstyled', className)}>
			{labels.map(({label_id, title, color, text_color, icon}) =>
				<li key={label_id}
					className={'bdl-product__label'}
					style={{color: text_color, backgroundColor: color}}
				>
					{title}
				</li>
			)}
		</ul>
	);
}