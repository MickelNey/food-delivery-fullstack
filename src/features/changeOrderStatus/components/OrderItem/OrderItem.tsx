import React, {useState} from "react";

import {BackButton, Button} from "shared/ui";
import {Modal} from "shared/components";

import {OrderResponse} from "entities/Order";
import {useChangeStatus} from "entities/Order/hooks/useChangeStatus";

import styles from "./OrderItem.module.scss";
import {returnStatuses} from "../../helpers";

type OrderItemProps = OrderResponse

export const OrderItem = (order: OrderItemProps) => {
  const statuses = returnStatuses()

  const [status, setStatus] = useState(order.status)
  const [active, setActive] = useState(false)
  const { mutateOrderStatus, isLoading} = useChangeStatus()

  const handleOnClick = async (e:  React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    await mutateOrderStatus({ orderId: order.id, status: status})
    setActive(false)
  }

  if (isLoading) {
    return <div>loading</div>
  }

  return (
    <div key={order.id} className={styles.item}>
      <div>{order.id}</div>
      <div>{order.customerEmail}</div>
      <div>{order.status}</div>
      <div>{order.userId}</div>
      <div>{`${new Date(order.registrationDate).toLocaleString()}`}</div>
      <BackButton onClick={() => setActive(true)}>change</BackButton>


      <Modal setActive={setActive} active={active}>

        <div>{order.id}</div>
        <div>{order.customerEmail}</div>
        <div>{order.status}</div>
        <div>{order.userId}</div>
        <div>{`${new Date(order.registrationDate).toLocaleString()}`}</div>

        <div className={styles.select}>
          {statuses && statuses.map(curStatus =>
            <div className={`${styles.option} ${curStatus === status ? styles.option_ : ''}`}
              key={curStatus}
              onClick={() => setStatus(curStatus)}>

              <div>{curStatus}</div>
            </div>
          )}
        </div>

        <Button onClick={(e) => handleOnClick(e)} >change status</Button>

      </Modal>

    </div>
  )
}
