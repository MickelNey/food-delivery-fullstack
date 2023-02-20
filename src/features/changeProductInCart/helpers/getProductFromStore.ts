import {CartStore} from "entities/Cart/store/types";

export const getProductFromStore = (store: CartStore, productId: string): number => {
  const product = store.products.find(item => productId === item.product.id)
  if (product) {
    return product.quantity
  }
  return 0
}

