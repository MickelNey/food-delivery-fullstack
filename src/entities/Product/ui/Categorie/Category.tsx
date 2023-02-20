import React from 'react'
import styles from './Category.module.scss'
import { CategoryType } from "shared";
import config from "shared/config";

type CategoryProps = CategoryType

export const Category = ({ imageUrl, title }: CategoryProps) => {
  return (
    <div className={styles.category}>
      <img alt="" className={styles.category_image} src={`${config.baseUrl}${imageUrl}`}/>
      <div>{title}</div>
    </div>
  )
}
