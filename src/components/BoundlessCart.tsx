import React, {ReactNode, useCallback, useEffect, useRef, useState} from 'react';
import {BoundlessClient, IAddToCartResponse, ICartTotal, ICustomer} from 'boundless-api-client';
import CartContext from './CartContext';
import {getCartByCookieOrRetrieve} from '../lib/cart';
import {setCustomerCookie, tryToFetchCustomer} from '../lib/customer';

export default function BoundlessCart({children, apiClient, onProductAddedToCart, onNeededSelectVariant}: IAppProps) {
	const [cartId, setCartId] = useState<string|undefined>();
	const [total, setTotal] = useState<ICartTotal|undefined>();
	const isCartRequested = useRef(false);
	const [customerAuthToken, setCustomerAuthToken] = useState<string|undefined>();
	const [customer, setCustomer] = useState<ICustomer|undefined>();
	const [customerIsInited, setCustomerIsInited] = useState<boolean|undefined>();
	const isCustomerRequested = useRef(false);

	const login = useCallback((token: string, customerVal: ICustomer) => {
		setCustomerCookie(token);
		setCustomerAuthToken(token);
		setCustomer(customerVal);
		apiClient.setCustomerAuthToken(token);
	}, [setCustomerAuthToken, setCustomer, apiClient]);

	const logout = useCallback(() => {
		setCustomerCookie();
		setCustomerAuthToken(undefined);
		setCustomer(undefined);
		apiClient.setCustomerAuthToken(null);
	}, [setCustomerAuthToken, setCustomer, apiClient]);
	//resetCart func?

	useEffect(() => {
		if (!customer && !isCustomerRequested.current) {
			isCustomerRequested.current = true;

			tryToFetchCustomer(apiClient)
				.then(({result, authToken, customer}) => {
					if (result) {
						login(authToken!, customer!);
					}
				})
				.catch((e) => console.error('Error in tryToFetchCustomer:', e))
				.finally(() => setCustomerIsInited(true))
			;
		}
	}, []);//eslint-disable-line

	useEffect(() => {
		if (customerIsInited && !cartId && !isCartRequested.current) {
			isCartRequested.current = true;

			getCartByCookieOrRetrieve(apiClient, customerAuthToken)
				.then(({id, total}) => {
					setTotal(total);
					setCartId(id);
				})
				.catch((e) => console.error('Error in getCartByCookieOrRetrieve:', e))
			;
		}
	}, [customerIsInited]);//eslint-disable-line

	return (
		<CartContext.Provider value={{
			apiClient,
			cartId,
			setCartId,
			total,
			setTotal,
			onProductAddedToCart,
			onNeededSelectVariant,
			customerAuthToken,
			setCustomerAuthToken,
			customer,
			setCustomer,
			login,
			logout,
			customerIsInited
		}}>
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