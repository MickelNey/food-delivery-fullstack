import React from "react";
import {OrderResponse} from "../../api";
import styles from './Orders.module.scss'


interface OrdersProps {
  orders: OrderResponse[]
}

export const Orders = ({ orders } : OrdersProps) => {
  return (
    <div className={styles.order_list}>
      <div className={styles.item}>
        <div>order id</div>
        <div>status</div>
        <div>price</div>
        <div>registration date</div>
      </div>

      {orders.map(order =>
        <div className={styles.item} key={order.id}>
          <div>{order.id}</div>
          <div>{order.status}</div>
          <div>{order.price}$</div>
          <div>{new Date(order.registrationDate).toDateString()}</div>
        </div>
      )}
    </div>
  )
}
