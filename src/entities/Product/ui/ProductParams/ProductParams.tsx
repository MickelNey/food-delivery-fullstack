import React from 'react'
import styles from "./ProductParams.module.scss";

interface RestaurantParamsProps {
  time: string
  minSum: number
}

export const ProductParams = ({ time, minSum }: RestaurantParamsProps) => {
  return (
    <div className={styles.container}>
      <div className={`_icon-clock ${styles.icon}`} />

      <div>{time}</div>

      <div className={styles.point}></div>

      <div>{minSum} min sum</div>
    </div>
  )
}
