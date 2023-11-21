import {BoundlessClient, TThumbRatio, IProductListImage} from 'boundless-api-client';
import {IProductsListImg} from '../@types/products';

export function getProductsListImg(
	apiClient: BoundlessClient,
	image: Pick<IProductListImage, 'width' | 'height' | 'path'>,
	maxSize: number,
	productImgRatio?: TThumbRatio
): IProductsListImg {
	const {width, height, path: imgLocalPath} = image;

	const thumb = apiClient.makeThumb({imgLocalPath, maxSize});
	if (productImgRatio) {
		thumb
			.setRatio(productImgRatio)
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