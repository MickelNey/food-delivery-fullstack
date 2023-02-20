import styles from './Cart.module.scss'
import React from 'react';

type CartProps = {
  counter?: number;
}

export const Cart = ({ counter = 0 }: CartProps) => {
  return (<div className={styles.container}>
    <div className={styles.cart}>
      <div className={styles.badge}>{counter}</div>
      <div className='_icon-cart'></div>
    </div>
  </div>)
}
