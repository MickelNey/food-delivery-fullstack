import React from 'react'
import {useParams} from "react-router-dom";
import {Page} from "../Page";
import {useProduct} from "entities/Product";
import styles from './SingleRestaurant.module.scss'
import {ProductParams} from "../../entities/Product/ui/ProductParams/ProductParams";




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
              <div>Royal</div>
              <div className={styles.icon} />
              <div>Sushi House</div>
            </div>

            <div className={styles.info_description}>
              <div className={styles.title}>id {data?.id}</div>
              <div className={styles.description}>Lorem ipsum dolor sit amet, magna scaevola his ei. Cum te paulo
                probatus molestiae, eirmod assentior eum ne, et omnis antiopam mel.
              </div>
              {/*<ProductParams time={'30-40 min'} minSum={'$32'}/>*/}
            </div>

            <div className={styles.info_map}></div>
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.menu}>
            <div className={styles.menu_title}>
              <div>Menu</div>

              <div className={styles.menu_layers}>
                <div className={styles.menu_layer}></div>
                <div className={styles.menu_layer}></div>
              </div>
            </div>
          </div>

          <div className={styles.reviews}>
            <div className={styles.content_title}>Reviews</div>

          </div>
        </div>
      </div>
    </Page>
  )
}
