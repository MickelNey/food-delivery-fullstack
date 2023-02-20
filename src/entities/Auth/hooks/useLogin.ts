import {useAuthContext} from "./useAuthContext";
import {useMutation} from "@tanstack/react-query";
import {IUserLogin} from "../api/types";
import {AuthService} from "../api";

export const useLogin = () => {
  const {setStore } = useAuthContext()
  const { mutateAsync } = useMutation(
    (data: IUserLogin) => AuthService.login(data),
    {
      onSuccess: (res) => {
        localStorage.setItem('token', res.data.token)
        alert('you logged')
        setStore({ isAuth: true, user: res.data})
      },
      onError: (error: any) => {
        alert(error.response.data.message)
      },
    }
  )
  return { loginAsync: mutateAsync}
}
