import React from 'react';

import {CartContext} from '../../store/CartContext';

export const useCartContext = () => {
  const storeContext = React.useContext(CartContext);
  // console.log('@@storeContext', storeContext);

  return {
    ...storeContext
  };
};

