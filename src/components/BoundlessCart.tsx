import React, {ReactNode, useEffect, useRef, useState} from 'react';
import {BoundlessClient, IAddToCartResponse, ICartTotal} from 'boundless-api-client';
import CartContext from './CartContext';
import {getCartByCookieOrRetrieve} from '../lib/cart';

export default function BoundlessCart({children, apiClient, onProductAddedToCart, onNeededSelectVariant}: IAppProps) {
	const [cartId, setCartId] = useState<string|undefined>();
	const [total, setTotal] = useState<ICartTotal|undefined>();
	const isRequested = useRef(false);

	//resetCart func?

	useEffect(() => {
		if (!cartId && !isRequested.current) {
			isRequested.current = true;

			getCartByCookieOrRetrieve(apiClient)
				.then(({id, total}) => {
					setTotal(total);
					setCartId(id);
				})
				.catch((e) => console.error('Error in getCartByCookieOrRetrieve:', e))
			;
		}
	}, []);//eslint-disable-line

	return (
		<CartContext.Provider value={{apiClient, cartId, total, setTotal, onProductAddedToCart, onNeededSelectVariant}}>
			{children}
		</CartContext.Provider>
	);
}

export interface IAppProps {
	children: ReactNode | ReactNode[];
	apiClient: BoundlessClient;
	onProductAddedToCart?: (result: IAddToCartResponse) => void;
	onNeededSelectVariant?: (result: IAddToCartResponse) => void;
}