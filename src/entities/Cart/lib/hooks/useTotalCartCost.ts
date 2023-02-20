import {useCartContext} from "./useCartContext";

export const useTotalCartCost = () => {
  const { store } = useCartContext()
  return store.products.reduce((totalCost, product) => {
    return totalCost + (product.product.cost * product.quantity)
  }, 0)
}
