import React from "react";

import styles from './ChangeProductInCart.module.scss'

type AddProductToCartProps = {
  handleClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void,
  children?: React.ReactNode,
  classname?: string
}

export const ChangeProductInCart = ({ handleClick, children, classname }: AddProductToCartProps) => {

  return (
    <div className={classname}>
      <button
        className={styles.container}
        onClick={(event => handleClick(event))}>
        {children}
      </button>
    </div>
  )
}
