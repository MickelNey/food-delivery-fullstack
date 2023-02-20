import React from "react";
import {Navigate, Route, Routes} from "react-router-dom";
import {Footer, Layout} from "widgets";
import {AccountPage, MainPage, SingleRestaurantPage} from "pages";
import {OrdersPage} from "pages/Orders/Orders";
import {CartPage} from "pages/Cart/Cart";
import {AdminSettings, OwnerSettings, SellerSettings, UserSettings} from "pages/Account";

export const AuthRoutes = () => (
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
