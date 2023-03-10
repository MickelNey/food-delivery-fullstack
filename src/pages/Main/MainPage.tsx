import React from 'react';
import styles from './Main.module.scss'

import {routePaths} from "../routes";
import {Page} from "../Page";

import {LoadingSpinner} from "shared/ui";

import {useProducts, Product} from "entities/Product";

import {ProductWithCart} from "features/changeProductInCart";
import {useSearchProductContext} from "../../features/searchProduct/hooks";


export const MainPage = () => {
  const { data, isLoading, isError } = useProducts()
  const { searchInput } = useSearchProductContext()

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

      <div className={styles.restaurants}>
        {data && data
          .filter(product => product.title.toLowerCase().includes(searchInput.toLowerCase()))
          .map(product =>
            <Product
              key={product.id}
              {...product}
              routePath={routePaths.menu_restaurants_id(product.id)} >
              <ProductWithCart product={product} />
            </Product>
          )}
      </div>
    </Page>
  )
}
