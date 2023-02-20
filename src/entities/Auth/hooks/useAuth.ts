import {useAuthContext} from "./useAuthContext";
import {useExit} from "./useExit";
import {useQuery} from "@tanstack/react-query";
import {AuthService} from "../api";

export const useAuth = () => {
  const { setStore, isAuth } = useAuthContext()
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

  return { isAuth, isLoading}

}
