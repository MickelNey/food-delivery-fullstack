import React from 'react';

import type { Store } from './SearchProductContext';
import {SearchProductContext} from './SearchProductContext';
import {getInitialSearchState} from "./initial";

interface StoreProviderProps {
  children: React.ReactNode;
}

export const SearchProductProvider: React.FC<StoreProviderProps> = ({ children }) => {
  const [store, setStore] = React.useState<Store>(getInitialSearchState());
  const value = React.useMemo(() => ({store, setStore}), [store]);

  return <SearchProductContext.Provider value={value}>{children}</SearchProductContext.Provider>
}
