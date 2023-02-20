import React from 'react';
import { Store, AuthContext } from '../store/AuthContext';

export const useAuthContext = () => {
  const storeContext = React.useContext(AuthContext);

  return {
    ...storeContext.store,
    setStore: (data: Partial<Store>) => {
      storeContext.setStore({ ...storeContext.store, ...data });
    }
  };
};
