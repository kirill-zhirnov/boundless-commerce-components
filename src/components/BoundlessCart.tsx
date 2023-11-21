import React, {ReactNode} from 'react';
import {BoundlessClient} from 'boundless-api-client';
import BoundlessContext from './BoundlessContext';

export default function BoundlessCart({children, apiClient}: IAppProps) {
	return (
		<BoundlessContext.Provider value={{apiClient}}>
			{children}
		</BoundlessContext.Provider>
	);
}

export interface IAppProps {
	children: ReactNode | ReactNode[];
	apiClient: BoundlessClient;
}