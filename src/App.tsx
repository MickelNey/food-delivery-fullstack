import React from 'react';
import {Route, Routes, Navigate } from 'react-router-dom';
import {AccountPage, MainPage, SingleRestaurantPage} from 'pages';

import {Footer, Layout} from "widgets"
import {UserSettings, SellerSettings, AdminSettings, OwnerSettings} from "./pages/Account";

import {useAuthContext, useExit, AuthService} from "entities/Auth";
import {CartProvider} from "./entities/Cart";

import styles from './app/App.module.scss'
import {CartPage} from "./pages/Cart/Cart";
import {OrdersPage} from "./pages/Orders/Orders";
import {useQuery} from "@tanstack/react-query";
import {LoadingSpinner} from "./shared/ui";

// TODO: Implement Auth

const MainRoutes = () => (
  <Routes>
    <Route path='/' element={<Layout />}>
      <Route index element={<Navigate to='/menu' />} />

      <Route path='/' element={ <Footer />}>
        <Route path='/menu' element={<MainPage />} />
        <Route index element={<Navigate to='/menu' />} />
        <Route path='/orders' element={<OrdersPage />} />
        <Route path='/menu/restaurants/:id/' element={ <SingleRestaurantPage />}/>
        <Route path='/cart' element={<CartPage />} />
      </Route>
    </Route>
  </Routes>
);

const AuthRoutes = () => (
  <Routes>
    <Route path='/' element={<Layout />}>
      <Route index element={<Navigate to='/menu' />} />

      <Route path='/' element={ <Footer />}>
        <Route path='/menu' element={<MainPage />} />
        <Route index element={<Navigate to='/menu' />} />
        <Route path='/orders' element={<OrdersPage />} />
        <Route path='/menu/restaurants/:id/' element={ <SingleRestaurantPage />}/>
        <Route path='/cart' element={<CartPage />} />
      </Route>

      <Route path='/account' element={ <AccountPage /> }>
        <Route path='/account/user' element={ <UserSettings /> }></Route>
        <Route path='/account/admin' element={ <AdminSettings /> }></Route>
        <Route path='/account/owner' element={ <OwnerSettings /> }></Route>
        <Route path='/account/seller' element={ <SellerSettings /> }></Route>
      </Route>
    </Route>
  </Routes>
)

function App() {
  const { setStore } = useAuthContext()
  const exit = useExit()

  const { isLoading } = useQuery(['user'],() => {
    const token = localStorage.getItem('token')
    if (token) {
      AuthService.profile(token).then(res => {
        setStore({ isAuth: true, user: res.data})
        return res.data
      }).catch(() => exit())
    }
  })

  if (isLoading) {
    return <LoadingSpinner />
  }

  return <div className={styles.App}>
    <CartProvider>
      <MainRoutes />
    </CartProvider>
  </div>;
}

export default App;
