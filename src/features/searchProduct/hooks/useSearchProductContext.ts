import React from "react";
import {SearchProductContext, Store} from "../store/SearchProductContext";

export const useSearchProductContext = () => {
  const storeContext = React.useContext(SearchProductContext);

  return {
    ...storeContext.store,
    setStore: (data: Partial<Store>) => {
      storeContext.setStore({ ...storeContext.store, ...data });
    }
  };
};
