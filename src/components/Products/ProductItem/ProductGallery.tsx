import React, {useCallback, useState, MouseEvent} from 'react';
import {BoundlessClient, IProductItem, IImageItem, TThumbRatio} from 'boundless-api-client';
import clsx from 'clsx';
import ImgThumb from '../../ImgThumb';

export default function ProductGallery({product, apiClient, onClick, className}: IProps) {
	const [activeImg, setActiveImg] = useState<number>(0);
	const onImgClick = useCallback((image: IImageItem, imgIndex: number, e: MouseEvent) => {
		e.preventDefault();

		if (onClick) {
			onClick(image, imgIndex);
		}
	}, [onClick]);

	const {images} = product;
	if (!images || !images.length) {
		return null;
	}

	return (
		<div className={clsx('bdl-product-gallery', className)}>
			<figure className={'bdl-product-gallery__big-img'}>
				<a
					href='#'
					onClick={onImgClick.bind(null, images[activeImg].image, activeImg)}
					className={'bdl-product-gallery__link bdl-product-gallery__link_big'}
				>
					<ImgThumb
						image={images[activeImg].image}
						apiClient={apiClient}
						maxSize={800}
						alt={images[activeImg].alt || images[activeImg].description}
						className={'bdl-product-gallery__img'}
						productImgRatio={TThumbRatio['1-1']}
					/>
				</a>
				{images[activeImg].description &&
				<figcaption className={'bdl-product-gallery__big-caption'}>
					{images[activeImg].description}
				</figcaption>}
			</figure>
			<ul className='bdl-product-gallery__thumbs bdl-list-unstyled'>
				{images.map((image, i) =>
					<li
						key={image.image.image_id}
						className={clsx('bdl-product-gallery__thumb', {
							'bdl-product-gallery__thumb_active': activeImg === i
						})}
					>
						<a href={'#'}
							 className={clsx('bdl-product-gallery__link bdl-product-gallery__link_small', {
								 'bdl-product-gallery__link_active': activeImg === i
							 })}
							 onMouseEnter={() => setActiveImg(i)}
							 onClick={onImgClick.bind(null, images[i].image, i)}
						>
							<ImgThumb
								image={images[i].image}
								apiClient={apiClient}
								maxSize={200}
								alt={images[i].alt || images[i].description}
								className={'bdl-product-gallery__img'}
								productImgRatio={TThumbRatio['1-1']}
							/>
						</a>
					</li>
				)}
			</ul>
		</div>
	);
}

interface IProps {
	product: IProductItem;
	apiClient: BoundlessClient,
	onClick?: (image: IImageItem, imgIndex: number) => void,
	className?: string
}