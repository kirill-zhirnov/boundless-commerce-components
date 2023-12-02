import {BoundlessClient, ICustomer} from 'boundless-api-client';
import Cookie from 'js-cookie';

export const COOKIE_NAME = 'boundless_customer_auth';

export const tryToFetchCustomer = async (apiClient: BoundlessClient): Promise<{result: boolean, authToken?: string, customer?: ICustomer}> => {
	const authToken  = Cookie.get(COOKIE_NAME);

	if (authToken) {
		try {
			const {data} = await apiClient
				.setCustomerAuthToken(authToken)
				.createRequest().get<ICustomer>('/user/customer/private/who-am-i')
			;

			if (data) {
				setCustomerCookie(authToken);
				return {result: true, authToken, customer: data};
			}
		} catch (e) {
			//

			//remove cookie
			setCustomerCookie();
		}
	}

	return {result: false};
};

export const setCustomerCookie = (authToken?: string) => {
	try {
		if (authToken) {
			Cookie.set(COOKIE_NAME, authToken, {expires: 365, sameSite: 'None', secure: true});
		} else {
			Cookie.remove(COOKIE_NAME);
		}
	} catch (e) {
		//
	}
};