import {createContext} from 'react';
import {BoundlessClient} from 'boundless-api-client';

const BoundlessContext = createContext<{apiClient?: BoundlessClient}>({});

export default BoundlessContext;