import {Store} from "./AuthContext";

export const getInitialAuthState = (): Store => {
  return {
    isAuth: false,
    user: {
      id: '',
      token: '',
      name: '',
      email: '',
      secondName: '',
      phone: '',
      address: '',
      roles: [],
      orders: []
    }
  }
}
