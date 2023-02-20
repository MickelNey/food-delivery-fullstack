import React from 'react'

export const routePaths = {
  main: '/',
  menu: '/menu',
  menu_restaurants: '/menu/restaurants',
  menu_restaurants_id: (id: string | number) => `/menu/restaurants/${id}`,
  cart: '/cart',
  orders: '/orders',
  account: '/account',
  account_user: '/account/user',
  account_admin: '/account/admin',
  account_owner: '/account/owner',
  account_seller: '/account/seller',
}
