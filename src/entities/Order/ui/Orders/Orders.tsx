import React from "react";
import {OrderResponse} from "../../api/types";
import {Order} from "../Order/Order";
import styles from './Orders.module.scss'


interface OrdersProps {
  orders: OrderResponse[]
}

export const Orders = ({ orders } : OrdersProps) => {
  return (
    <div>
      <div className={styles.container}>
        <div>one</div>
        <div>two</div>
        <div>three</div>
      </div>
      {orders.map(order => <Order key={order.id} { ...order } />)}
    </div>
  )
}
