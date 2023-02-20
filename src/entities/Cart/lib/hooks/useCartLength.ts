import {useCartContext} from "./useCartContext";

export const useCartLength = () => {
  const { store } = useCartContext()

  const quantityOfItemInCart = store.products.reduce((acc, item) => acc + item.quantity, 0)
  const quantityOfProductInCart = store.products.filter(item => item.quantity > 0).length

  console.log(store.products)

  return { quantityOfItemInCart, quantityOfProductInCart}
}
