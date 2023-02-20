import React, {useState} from 'react';
import {Page} from "../Page";
import styles from "./Cart.module.scss";

import {Button, Input} from "shared/ui";

import {useCartContext, useTotalCartCost} from "entities/Cart";
import {CartItem} from "entities/Cart/components";
import {useAuthContext} from "entities/Auth";


import {ProductWithCart} from "features/changeProductInCart";
import {useMutateOrder} from "entities/Order/hooks/useMutateOrder";
import {useValidation, validRegExp} from "shared";
import {IProductInOrder, EStatuses} from "entities/Order/api/types";
import {CartStore, ProductInCart} from "entities/Cart/store/types";
import {NavLink, useNavigate} from "react-router-dom";
import {routePaths} from "../routes";


export const CartPage: React.FC = () => {

  const { store, resetCart } = useCartContext()
  const totalPrice = useTotalCartCost()

  const { mutateOrderAsync } = useMutateOrder()

  const { isAuth, user } = useAuthContext()
  const [email, setEmail, emailValid] = useValidation((isAuth && user) ? user.email : '', validRegExp.email)
  const [address, setAddress] = useState((isAuth && user && user.address !== null) ? user.address : '')

  const navigate = useNavigate()

  const handleOnClick = async (store: CartStore, userId: string | undefined, email: string) => {
    const products = store.products.map((item: ProductInCart): IProductInOrder => {
      return { id: item.product.id, volume: item.quantity}
    })

    await mutateOrderAsync({
      userId: userId ? userId : null,
      registrationDate: new Date().toISOString(),
      customerEmail: email,
      status: EStatuses.PENDING,
      time: "pending",
      products: [...products],
      price: totalPrice
    }).then(() => {

      resetCart()
      localStorage.removeItem('cart')
      alert('thanks for your order! See payment details on your email')
      navigate(routePaths.menu)
    })
  }

  if (store.products.length === 0) {
    return (
      <Page classname={styles.page}>
        <div className={styles.page_back}>
          <div className={styles.page_backTitle}>Please choose products for your order!</div>

          <NavLink to={routePaths.menu} >
            <Button>
              Back to menu
            </Button>
          </NavLink>
        </div>
      </Page>
    )
  }

  return (
    <Page>
      <div className={styles.page}>
        <div className={styles.page_container}>
          {store.products.map(product =>
            <CartItem product={product} key={product.product.id}>
              <ProductWithCart product={product.product}/>
            </CartItem>)
          }
        </div>
        <div className={styles.page_userData}>
          <div className={styles.page_priceInfo}>Payment details </div>

          <Input
            className={styles.page_input}
            title={'address'}
            value={address}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setAddress(e.target.value)}
          />
          <Input
            className={styles.page_input}
            title='email'
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e)}

          />

          <div className={styles.page_payment}>
            <div className={styles.page_priceInfo}>
              <div>TOTAL PRICE: {totalPrice}</div>
            </div>

            <Button
              disabled={!emailValid}
              onClick={() => handleOnClick(store, isAuth ? user.id : undefined, email)}>
              Proceed to checkout
            </Button>

          </div>

        </div>

      </div>
    </Page>
  )
}



