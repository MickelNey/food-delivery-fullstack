import React from 'react';
import {AuthResponse} from '../api/types'
import {getInitialAuthState} from "./initial";

type IUser = AuthResponse

export interface Store {
  user: IUser;
  isAuth: boolean
}

export interface StoreContextProps {
  store: Store;
  setStore: React.Dispatch<React.SetStateAction<Store>>;
}

export const AuthContext = React.createContext<StoreContextProps>({
  store: getInitialAuthState(),
  setStore: () => ({})
})
