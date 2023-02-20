import {Action, CartStore} from "./types";
import {ProductAbstract} from "shared/api/types";

const addProductToCart = (product: ProductAbstract, CartState: CartStore): CartStore => {
  const updatedCard = [...CartState.products]
  const updatedItemIndex = updatedCard.findIndex(
    item => item.product.id === product.id
  )

  if (updatedItemIndex < 0) {
    updatedCard.push({product: {...product}, quantity: 1} )
  } else {
    const updatedCartItem = {
      ...updatedCard[updatedItemIndex]
    }
    updatedCartItem.quantity++
    updatedCard[updatedItemIndex] = updatedCartItem
  }

  return { ...CartState, products: updatedCard}
}

const removeProductFromCart = (productId: string , CartState: CartStore): CartStore => {
  const updatedCart = [...CartState.products]
  const updatedItemIndex = updatedCart.findIndex(
    item => item.product.id === productId
  )

  const updatedCartItem = {
    ...updatedCart[updatedItemIndex]
  }
  updatedCartItem.quantity--

  if (updatedCartItem.quantity <= 0) {
    updatedCart.splice(updatedItemIndex, 1);
  } else {
    updatedCart[updatedItemIndex] = updatedCartItem
  }

  return { ...CartState, products: updatedCart}
}

const resetCart = (): CartStore => {
  return { products: []}
}

export const CartReducer = (CartState: CartStore, action: Action) => {
  switch (action.type) {
  case 'ADD_PRODUCT':
    return addProductToCart(action.payload, CartState);
  case 'REMOVE_PRODUCT':
    return removeProductFromCart(action.payload, CartState);
  case 'RESET_CART':
    return resetCart()
  default:
    return { ...CartState };
  }
};

