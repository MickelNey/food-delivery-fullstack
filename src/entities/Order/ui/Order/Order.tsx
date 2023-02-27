import React from "react";
import {OrderResponse} from "../../api";
import styles from './Order.module.scss'


interface OrderProps {
  order: OrderResponse
  className: string
}

export const Order = ({ order: {registrationDate, status, price, id, }, className}: OrderProps) => {
  return (
    <div className={className}>
      <div>{id}</div>
      <div>{status}</div>
      <div>{price}</div>
      <div>{registrationDate}</div>
    </div>
  )
}
