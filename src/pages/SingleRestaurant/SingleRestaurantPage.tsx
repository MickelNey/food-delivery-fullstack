import React from 'react'
import {useParams} from "react-router-dom";
import {Page} from "../Page";
import {useProduct} from "entities/Product";
import styles from './SingleRestaurant.module.scss'
import config from "../../shared/config";
import {ProductWithCart} from "../../features/changeProductInCart";


export const SingleRestaurantPage = () => {
  const { id } = useParams()

  const { data, isLoading, isError} = useProduct(id)

  if (isLoading) {
    return <div>loading</div>
  }

  if (isError) {
    return <div>error</div>
  }

  return (
    <Page>
      <div>
        <div className={styles.info}>
          <div className={styles.info_content}>
            <div className={styles.info_logo}>
              <div>{data?.title}</div>
              <div className={styles.icon} >

              </div>
            </div>

            <div className={styles.restaurant_logo}>
              <img className={styles.restaurant_image} src={`${config.baseUrl}${data?.imageUrl}`}></img>
            </div>


            <div className={styles.info_description}>
              <div className={styles.title}>Cost {data?.cost} $</div>
              {/*<ProductParams time={'30-40 min'} minSum={'$32'}/>*/}
            </div>

            {data && <ProductWithCart product={data}/>}

            <div className={styles.info_map}></div>
          </div>
        </div>
      </div>
    </Page>
  )
}
