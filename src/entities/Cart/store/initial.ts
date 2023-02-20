import {CartStore } from "./types";

export const getInitialData = (): CartStore => {
  const cartStorageJson = localStorage.getItem('cart')

  return cartStorageJson
    ? JSON.parse(cartStorageJson) as CartStore
    : {
      products: []
    }
}
