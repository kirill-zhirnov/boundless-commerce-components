import {useContext, useCallback} from 'react';
import CartContext from '../components/CartContext';

export default function useCart() {
	const {cartId, setCartId, apiClient, setTotal, onProductAddedToCart, onNeededSelectVariant, total} = useContext(CartContext);
	const addToCart = useCallback((itemId: number, qty: number = 1, validateStock: boolean = false) => {
		if (!cartId || !apiClient) {
			throw new Error('cartId or apiClient is empty. Did you wrap app in BoundlessCart?');
		}

		return apiClient.cart.addItemToCart(cartId, itemId, qty, validateStock)
			.then((result) => {
				const {actionRequired, cartTotal} = result;

				if (actionRequired === 'chooseVariant') {
					if (onNeededSelectVariant) {
						onNeededSelectVariant(result);
					}
				} else {
					setTotal!(cartTotal!);

					if (onProductAddedToCart) {
						onProductAddedToCart(result);
					}
				}

				return result;
			});
	}, [cartId, onNeededSelectVariant, onProductAddedToCart, apiClient, setTotal]);

	return {
		cartId,
		setCartId,
		addToCart,
		total,
		setTotal
	};
}