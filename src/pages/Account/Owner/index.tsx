import React from "react";
import {GetProfitForm} from "features/getProfit/components";
import {GetTopProductsForm} from "features/getTopProducts/components";
import styles from './Owner.module.scss'

export const OwnerSettings = () => {


  return (
    <div className={styles.owner}>
      <div className={styles.formItem}>
        <GetTopProductsForm />
      </div>

      <div className={styles.formItem}>
        <GetProfitForm />
      </div>
    </div>)
}
