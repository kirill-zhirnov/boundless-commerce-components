import React from 'react';
import {ILabel} from 'boundless-api-client';
import clsx from 'clsx';

export default function ProductLabels({labels, className}: { labels: ILabel[], className?: string }) {
	if (!labels.length)
		return null;

	return (
		<ul className={clsx('bdl-labels bdl-list-unstyled', className)}>
			{labels.map(({label_id, title, color, text_color}) =>
				<li key={label_id}
					className={'bdl-labels__item'}
					style={{color: text_color, backgroundColor: color}}
				>
					{title}
				</li>
			)}
		</ul>
	);
}