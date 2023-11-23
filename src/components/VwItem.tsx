import React from 'react';
import {BoundlessClient, IVwItem, TThumbRatio} from 'boundless-api-client';
import clsx from 'clsx';
import ImgThumb from './ImgThumb';
import NoImage from './NoImage';

export default function VwItem({item, className, apiClient}: IProps) {
	return (
		<div className={clsx('bdl-vw-item', className)}>
			<div className={'bdl-vw-item__img-wrapper'}>
				{(item.image && apiClient)
					? <ImgThumb image={item.image} apiClient={apiClient} maxSize={100} className={'bdl-vw-item__img'}/>
					: <NoImage ratio={TThumbRatio['1-1']} /> }
			</div>
			<div className={'bdl-vw-item__desc'}>
				<div>{item.product.title}</div>
				{item.variant && <div className={'bdl-vw-item__variant'}>{item.variant.title}</div>}
			</div>
		</div>
	);
}

interface IProps {
	item: IVwItem,
	className?: string
	apiClient?: BoundlessClient
}