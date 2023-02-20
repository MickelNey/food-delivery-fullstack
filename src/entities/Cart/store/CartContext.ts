import React from 'react';
import {CartStoreContextProps} from "./types";

export const CartContext = React.createContext<CartStoreContextProps>({
  store: {
    products: []
  },
  addProductToCart: () => ({}),
  removeProductFromCart: () => ({}),
  resetCart: () => ({})
})
