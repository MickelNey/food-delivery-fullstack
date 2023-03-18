import React, {useState} from 'react'

import {useProducts} from "entities/Product";
import {useCategories} from 'entities/Category'
import styles from './SellerSerrings.module.scss'

import {CreateProductButton} from "features/createProduct";
import {ChangeProduct} from "features/changeProduct";
import {Divider} from "shared/ui";
import {useOrders} from "entities/Order/hooks/useOrders";
import {OrderItem} from "features/changeOrderStatus";
import {CreateCategoryButton} from "features/createCategory";

export const SellerSettings = () => {
  const categories = useCategories()
  const products = useProducts()
  const { data: orders } = useOrders()
  const [state, setState] = useState(true);

  // if (categories.isLoading && products.isLoading) {
  //   return <div>loading</div>
  // }

  return (
    <div className={styles.container}>
      <div  className={styles.options}>

        <div className={styles.twoItems}>
          <div
            className={`${styles.twoItems_item} ${state ? styles.twoItems_selected : ''}`}
            onClick={() => setState(true)}
          >
            Products
          </div>

          <div
            className={`${styles.twoItems_item} ${!state ? styles.twoItems_selected : ''}`}
            onClick={() => setState(false)}
          >
            Orders
          </div>
        </div>

        <div className={styles.block_btns}>
          {categories.data && <CreateProductButton categories={categories.data} />}

          <div className={styles.right_btn}>
            {categories.data && <CreateCategoryButton categories={categories.data} />}
          </div>
        </div>

      </div>
      <Divider />


      {state && <div>
        <div className={styles.product_item}>
          <div>title </div>
          <div>cost</div>
          <div>time (min.) </div>
          <div>volume </div>
          <div>last update </div>
          <div></div>
        </div>

        {products.data && products.data.map(product =>
          <ChangeProduct {...product} key={product.id} />
        )}
      </div>}

      {!state && <div>
        <div className={styles.order_item}>
          <div>order id </div>
          <div>email</div>
          <div>status</div>
          <div>userId </div>
          <div>date </div>
          <div></div>
        </div>

        {orders && orders.map(order =>
          <OrderItem key={order.id} {...order}/>
        )}
      </div>}

    </div>
  )
}
