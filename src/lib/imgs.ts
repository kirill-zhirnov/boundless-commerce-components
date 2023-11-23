import {BoundlessClient, TThumbRatio} from 'boundless-api-client';
import {IProductsListImg} from '../@types/products';

export function makeThumb(
	apiClient: BoundlessClient,
	image: {path: string, width?: number|null, height?: number|null},
	maxSize: number,
	imgRatio?: TThumbRatio
): IProductsListImg {
	const {width, height, path: imgLocalPath} = image;

	const thumb = apiClient.makeThumb({imgLocalPath, maxSize});
	if (imgRatio) {
		thumb
			.setRatio(imgRatio)
			.setPad(true)
		;
	}

	if (!width || !height) {
		return {src: thumb.getSrc()};
	}

	thumb.setOriginalSize(width, height);

	const imgAttrs = thumb.getAttrs();

	thumb
		.setGrayscale(true)
		.setBlur(2)
	;

	return {
		...imgAttrs,
		blurSrc: thumb.getSrc()
	};
}