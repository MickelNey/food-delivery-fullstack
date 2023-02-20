import React from "react";
import {OrderResponse} from "../../api";
import styles from './Order.module.scss'


export const Order = ({ registrationDate, time, products, userId, customerEmail, status, id}: OrderResponse) => {
  return (
    <div className={styles.order}>
      <div>{time}</div>
      <div>{status}</div>
      <div>{registrationDate}</div>
    </div>
  )
}
