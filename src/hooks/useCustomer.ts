import {useContext} from 'react';
import CartContext from '../components/CartContext';

export default function useCustomer() {
	const {customerAuthToken, setCustomerAuthToken, customer, setCustomer, login, logout, customerIsInited} = useContext(CartContext);

	return {
		customerAuthToken, setCustomerAuthToken, customer, setCustomer, login, logout, customerIsInited
	};
}