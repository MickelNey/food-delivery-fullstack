import React, {useState} from 'react'

import {useCategories, useProducts} from "entities/Product";
import styles from './SellerSerrings.module.scss'

import {CreateProductButton} from "features/createProductModal";
import {ChangeProduct} from "features/changeProduct";
import {Divider} from "shared/ui";
import {useOrders} from "entities/Order/hooks/useOrders";
import {OrderItem} from "features/changeOrderStatus";

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

        {categories.data && <CreateProductButton categories={categories.data} />}

      </div>
      <Divider />


      {state && <div className={styles.list}>
        <div className={styles.item}>
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

      {!state && <div className={styles.list}>
        <div className={styles.item}>
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



      {/*<Modal setActive={setCreateActive} active={createActive} >*/}
      {/*  <Button onClick={() => setCreateActive(false)}>add</Button>*/}
      {/*</Modal>*/}

    </div>
  )
}
