import React from 'react';
import {BoundlessClient, TThumbRatio, IImageShort} from 'boundless-api-client';
import {getProductImg} from '../../../lib/imgs';

export default function ProductImg({image, apiClient, maxSize, productImgRatio, alt, className}: IProps) {
	const {src, width, height} = getProductImg(apiClient, image, maxSize, productImgRatio);

	return (
		<img
			src={src}
			alt={alt}
			width={width}
			height={height}
			className={className}
		/>
	);
}

interface IProps {
	image: IImageShort,
	apiClient: BoundlessClient,
	maxSize: number,
	productImgRatio?: TThumbRatio,
	alt?: string,
	className?: string
}