import React from 'react'
import {ProductInCart} from "../../store/types";
import config from "shared/config";
import styles from './CartItem.module.scss'

type CartItemProps = {
  product: ProductInCart,
  children?: React.ReactNode
}

export const CartItem = ({product, children}: CartItemProps) => {

  return (
    <div className={styles.container}>
      <div className={styles.cartItem}>
        <div className={styles.cartItem_logo}>
          <img className={styles.cartItem_image} src={`${config.baseUrl}${product.product.imageUrl}`}></img>

          {/*{featured && <div className={styles.restaurant_badge}>FEATURED</div>}*/}
        </div>
        <div>{product.product.title}</div>

        {children}

        <div className={styles.cartItem_cost}>${product.product.cost}</div>

      </div>
      <div className={styles.divider}></div>
    </div>
  )
}
