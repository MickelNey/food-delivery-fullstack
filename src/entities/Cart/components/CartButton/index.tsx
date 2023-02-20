import React from "react";
import styles from "./CartButton.module.scss";
import {useCartLength} from "../../lib/hooks";


export const CartButton = () => {
  const { quantityOfItemInCart} = useCartLength()

  return (<div className={styles.container}>
    <div className={styles.cart}>
      <div className={styles.badge}>
        {quantityOfItemInCart}
      </div>

      <div className='_icon-cart' />
    </div>
  </div>)
}
