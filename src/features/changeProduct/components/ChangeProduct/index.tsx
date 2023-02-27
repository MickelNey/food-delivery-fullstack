import React, {useState} from "react";
import styles from "./ChangeProduct.module.scss";
import {Input} from "shared/ui";

import {ChangeProductButton} from "../ChangeProductButton";
import {DeleteProductButton} from "../DeleteProductButton";
import {ProductAbstract} from "shared/api/types";

export const ChangeProduct = (product: ProductAbstract) => {
  const [cost, setCost] = useState<number>(product.cost)

  return (
    <div className={styles.container}>

      <div>{product.title}</div>

      <Input
        className={styles.input}
        title=''
        star={false}
        value={cost}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCost(Number(e.target.value))}
      />

      <div>{product.cost}</div>
      <Input
        className={styles.input}
        title=''
        star={false}
        value={cost}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCost(Number(e.target.value))}
      />

      <div>{`${new Date(product.updatedAt).toLocaleString()}`}</div>

      <ChangeProductButton {...product} cost={cost}/>

      <DeleteProductButton id={product.id}/>
    </div>
  )
}
