import React from 'react'
import {useCartContext} from "entities/Cart";

import styles from './ProductWithCart.module.scss'
import {ProductAbstract} from "shared/api/types";
import {ChangeProductInCart} from "../../ui";
import { getProductFromStore } from '../../helpers'

interface ProductWithCartProps {
  product: ProductAbstract
}

export const ProductWithCart = ({ product }: ProductWithCartProps) => {
  const { addProductToCart , removeProductFromCart, store} = useCartContext()

  const handleClickToAdd = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.stopPropagation()
    if (product) {
      addProductToCart({ ...product })
      localStorage.setItem('cart', JSON.stringify(store))
    }
  }

  const handleClickToRemove = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.stopPropagation()
    if (product) {
      removeProductFromCart(product.id)
      localStorage.setItem('cart', JSON.stringify(store))
    }
  }


  return (
    <div className={styles.container}>

      <ChangeProductInCart handleClick={event => { handleClickToRemove(event) }}>
        -
      </ChangeProductInCart>

      <div className={styles.container_number}>
        {getProductFromStore(store, product.id)}
      </div>

      <ChangeProductInCart handleClick={(event) => { handleClickToAdd(event) }}>
        +
      </ChangeProductInCart>
    </div>
  )
}
