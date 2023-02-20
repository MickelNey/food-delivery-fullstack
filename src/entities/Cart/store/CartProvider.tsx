import React from 'react';

import {CartStoreContextProps} from './types';
import {ProductAbstract} from "shared/api/types";
import {CartContext} from './CartContext';
import {CartReducer} from "./CartReducer";
import {getInitialData} from "./initial";

interface StoreProviderProps {
  children: React.ReactNode;
}

export const CartProvider: React.FC<StoreProviderProps> = ({ children }) => {
  const [cartState, dispatch] = React.useReducer(CartReducer, getInitialData());

  const addProductToCart = (product: ProductAbstract) => {
    dispatch({ type: "ADD_PRODUCT", payload: product})
  }

  const removeProductFromCart = (productId: string) => {
    dispatch({ type: "REMOVE_PRODUCT", payload: productId})
  }

  const resetCart = () => {
    dispatch({ type: "RESET_CART"})
  }

  const value = React.useMemo((): CartStoreContextProps =>
    ({ store: cartState, addProductToCart, removeProductFromCart, resetCart }), [cartState, addProductToCart, removeProductFromCart]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
