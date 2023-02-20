import React from 'react';
import styles from './Main.module.scss'

import {routePaths} from "../routes";
import {Page} from "../Page";

import {LoadingSpinner} from "shared/ui";

import {useProducts, Product} from "entities/Product";

import {ProductWithCart} from "features/changeProductInCart";



export const MainPage = () => {
  const { data, isLoading, isError } = useProducts()

  if (isLoading) {
    return <LoadingSpinner />
  }

  if (isError) return <div>error</div>

  return (
    <Page>
      {/*<div className={styles.discounts}>*/}
      {/*  {data.discounts.map(discount => <Discount key={discount.id} {...discount} />)}*/}
      {/*</div>*/}

      {/*<div className={styles.categories}>*/}
      {/*  {data.categories.map(category => <Category key={category.name}{...category} />)}*/}
      {/*</div>*/}

      {/*<div>Nearby restaurants</div>*/}
      <div className={styles.restaurants}>
        {data && data.map(restaurant =>
          <Product
            key={restaurant.id}
            {...restaurant}
            routePath={routePaths.menu_restaurants_id(restaurant.id)} >
            <ProductWithCart product={restaurant} />
          </Product>
        )}
      </div>

      {/*<div className={styles.centerContainer}>*/}
      {/*  <button className={styles.button}>Load more</button>*/}
      {/*</div>*/}

    </Page>
  )
}
