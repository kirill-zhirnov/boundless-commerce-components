import React, {ReactNode} from 'react';
import {IProductLink} from '../../../@types/products';

export default function ProductLink({link, className, children}: {children: ReactNode | ReactNode[], link?: IProductLink, className?: string}) {
	const {component, ...rest} = link || {};
	const Tag = component || 'a';

	return (
		<Tag className={className} {...rest}>
			{children}
		</Tag>
	);
}