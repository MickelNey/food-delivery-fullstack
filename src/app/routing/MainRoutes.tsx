import {Navigate, Route, Routes} from "react-router-dom";
import {Footer, Layout} from "../../widgets";
import {MainPage, SingleRestaurantPage} from "../../pages";
import {OrdersPage} from "../../pages/Orders/Orders";
import {CartPage} from "../../pages/Cart/Cart";
import React from "react";

export const MainRoutes = () => (
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
