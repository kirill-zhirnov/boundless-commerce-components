import {ElementType} from 'react';

export interface IProductLink {
	component?: ElementType;
	href?: string;
	to?: string;
	[key: string]: any;
}

export interface IProductsListImg {
	src: string;
	width?: number;
	height?: number;
	blurSrc?: string;
}

export interface IPriceForTpl {
	price: number|null,
	oldPrice?: number|null,
	isFrom?: boolean
}

export interface ISizeAndWeightLabels {
	sizeTitle?: string,
	weightTitle?: string,
	lengthUnit?: string,
	weightUnit?: string
}