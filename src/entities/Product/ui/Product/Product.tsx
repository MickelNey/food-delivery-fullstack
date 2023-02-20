import React from 'react'
import {useNavigate} from "react-router-dom";

import {CategoryType} from "shared/api";

import {ProductParams} from "../ProductParams/ProductParams";

import styles from './Product.module.scss'
import config from "shared/config";
import {ProductAbstract} from "shared/api/types";

interface RestaurantProps extends ProductAbstract{
  routePath?: string,
  categories: CategoryType[],
  children?: React.ReactNode
}

export const Product = ({ title, imageUrl, cost, categories, children, routePath}: RestaurantProps) => {
  const navigate = useNavigate()

  const routeChange = () => {
    if(routePath)
      navigate(routePath)
  }


  return (<div onClick={() => routeChange()} className={styles.restaurant}>
    <div className={styles.restaurant_logo}>
      <img className={styles.restaurant_image} src={`${config.baseUrl}${imageUrl}`}></img>

      {/*{featured && <div className={styles.restaurant_badge}>FEATURED</div>}*/}
    </div>
    <div className={styles.info}>
      <div className={styles.info_elem1}>
        <div>{title}</div>
        
        <div className={`_icon-cart ${styles.cart}`}></div>
      </div>

      <ProductParams time={''} minSum={cost} />


      <div className={styles.categories}>
        {categories.map((category, index) => 
          <div key={index} className={styles.categories_item}>
            <img alt="cat" className={styles.category_image} src={`${config.baseUrl}${category.imageUrl}`}/>
            <div>{category.title}</div>
          </div>)}

        {children}
      </div>

    </div>
  </div>)
}

