import {createContext} from 'react';
import {BoundlessClient, IAddToCartResponse, ICartTotal, ICustomer} from 'boundless-api-client';
import {Dispatch, SetStateAction} from 'react';

const CartContext = createContext<{
	apiClient?: BoundlessClient,
	cartId?: string,
	setCartId?: Dispatch<SetStateAction<string|undefined>>,
	total?: ICartTotal,
	setTotal?: Dispatch<SetStateAction<ICartTotal|undefined>>,
	onProductAddedToCart?: (result: IAddToCartResponse) => void,
	onNeededSelectVariant?: (result: IAddToCartResponse) => void,
	customerAuthToken?: string,
	setCustomerAuthToken?: Dispatch<SetStateAction<string|undefined>>,
	customer?: ICustomer,
	setCustomer?: Dispatch<SetStateAction<ICustomer|undefined>>,
	login?: (authToken: string, customer: ICustomer) => void;
	logout?: () => void;
	customerIsInited?: boolean
}>({});

export default CartContext;