import {ProductAbstract} from "shared/api/types";

interface AddToCartAction {
  type: 'ADD_PRODUCT',
  payload: ProductAbstract
}

interface RemoveProductFromCart {
  type: 'REMOVE_PRODUCT',
  payload: string
}

interface ResetCart {
  type: 'RESET_CART'
}

export type Action =
  | AddToCartAction
  | RemoveProductFromCart
  | ResetCart

export interface ProductInCart {
  product: ProductAbstract;
  quantity: number
}

export interface CartStore {
  products: ProductInCart[]
}

export interface CartStoreContextProps {
  store: CartStore;
  addProductToCart: (product: ProductAbstract ) => void;
  removeProductFromCart: (productId: string) => void;
  resetCart: () => void
}
