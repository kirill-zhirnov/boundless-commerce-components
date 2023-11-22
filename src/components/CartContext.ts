import {createContext} from 'react';
import {BoundlessClient, IAddToCartResponse, ICartTotal} from 'boundless-api-client';
import {Dispatch, SetStateAction} from "react";

const CartContext = createContext<{
	apiClient?: BoundlessClient,
	cartId?: string,
	total?: ICartTotal,
	setTotal?: Dispatch<SetStateAction<ICartTotal|undefined>>,
	onProductAddedToCart?: (result: IAddToCartResponse) => void,
	onNeededSelectVariant?: (result: IAddToCartResponse) => void
}>({});

export default CartContext;