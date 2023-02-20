import React from 'react';

import type { Store } from './AuthContext';
import { AuthContext } from './AuthContext';
import {getInitialAuthState} from "./initial";

interface StoreProviderProps {
  children: React.ReactNode;
}

export const AuthProvider: React.FC<StoreProviderProps> = ({ children }) => {
  const [store, setStore] = React.useState<Store>(getInitialAuthState());
  const value = React.useMemo(() => ({store, setStore}), [store]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
