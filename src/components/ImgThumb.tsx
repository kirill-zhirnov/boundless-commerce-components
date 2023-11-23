import React from 'react';
import {BoundlessClient, TThumbRatio} from 'boundless-api-client';
import {makeThumb} from '../lib/imgs';

export default function ImgThumb({image, apiClient, maxSize, productImgRatio, alt, className}: IProps) {
	const {src, width, height} = makeThumb(apiClient, image, maxSize, productImgRatio);

	return (
		<img
			src={src}
			alt={alt || undefined}
			width={width}
			height={height}
			className={className}
		/>
	);
}

interface IProps {
	image: {path: string, width?: number|null, height?: number|null},
	apiClient: BoundlessClient,
	maxSize: number,
	productImgRatio?: TThumbRatio,
	alt?: string | null,
	className?: string
}