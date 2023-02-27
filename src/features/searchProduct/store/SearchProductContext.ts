import React from 'react';
import {getInitialSearchState} from "./initial";

export interface Store {
  searchInput: string;
}

export interface StoreContextProps {
  store: Store;
  setStore: React.Dispatch<React.SetStateAction<Store>>;
}

export const SearchProductContext = React.createContext<StoreContextProps>({
  store: getInitialSearchState(),
  setStore: () => ({})
})

