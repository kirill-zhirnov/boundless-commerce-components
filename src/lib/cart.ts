import Cookie from 'js-cookie';
import {BoundlessClient, ICartInfo} from 'boundless-api-client';

export const COOKIE_NAME = 'boundless_cart_id';

export const getCartByCookieOrRetrieve = async (apiClient: BoundlessClient, customerAuthToken?: string): Promise<ICartInfo> => {
	const cartId = Cookie.get(COOKIE_NAME);
	let cartInfo;

	if (cartId) {
		try {
			if (customerAuthToken) {
				apiClient.setCustomerAuthToken(customerAuthToken);
			}

			cartInfo = await apiClient.cart.getCartInfo(cartId);
		} catch (e) {
			//
		}
	}

	if (!cartInfo) {
		cartInfo = await apiClient.cart.retrieveCart();
	}

	Cookie.set(COOKIE_NAME, cartInfo.id, {expires: 365, sameSite: 'None', secure: true});

	return cartInfo;
};