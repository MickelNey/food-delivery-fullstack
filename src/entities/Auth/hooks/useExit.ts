import {useAuthContext} from "./useAuthContext";

export const useExit = () => {
  const { setStore } = useAuthContext()
  return () => {
    setStore({isAuth: false})
    localStorage.removeItem('token')
  }
}
