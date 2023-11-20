import {FC} from 'react';

export interface IProductLink {
	component?: FC;
	href?: string;
	to?: string;
	[key: string]: any;
}