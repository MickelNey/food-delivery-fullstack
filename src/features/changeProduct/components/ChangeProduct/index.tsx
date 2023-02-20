import React, {useState} from "react";
import styles from "pages/Account/Seller/SellerSerrings.module.scss";
import {Input} from "shared/ui";

import {ChangeProductButton} from "../ChangeProductButton";
import {DeleteProductButton} from "../DeleteProductButton";
import {ProductAbstract} from "shared/api/types";

export const ChangeProduct = (product: ProductAbstract) => {
  const [cost, setCost] = useState<number>(product.cost)

  return (
    <div className={styles.item}>

      <div>{product.title}</div>

      <Input
        title=''
        star={false}
        value={cost}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCost(Number(e.target.value))}
      />

      <div>{product.cost}</div>

      <div>{product.quantity}</div>

      <div>{`${new Date(product.updatedAt).toLocaleString()}`}</div>

      <ChangeProductButton {...product} cost={cost}/>

      <DeleteProductButton id={product.id}/>
    </div>
  )
}
