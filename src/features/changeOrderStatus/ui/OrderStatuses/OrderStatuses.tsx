import styles from "./OrderStatuses.module.scss";
import React, {useState} from "react";
import {EStatuses} from "../../../../entities/Order";


const statuses = [
  EStatuses.PENDING,
  EStatuses.PROGRESS,
  EStatuses.COMPLETED,
  EStatuses.CANCEL,
  EStatuses.ERROR
]

type OrderStatusesProps = {
  defaultStatus: EStatuses
}

export const OrderStatuses = ({ defaultStatus }: OrderStatusesProps) => {

  const [status, setStatus] = useState(defaultStatus)


  return (
    <div className={styles.select}>
      {statuses && statuses.map(curStatus =>
        <div className={`${styles.option} ${curStatus === status ? styles.option_ : ''}`}
          key={curStatus}
          onClick={() => setStatus(curStatus)}>

          <div>{curStatus}</div>
        </div>
      )}
    </div>
  )
}
