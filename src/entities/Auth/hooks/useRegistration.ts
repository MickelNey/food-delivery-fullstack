import {useMutation} from "@tanstack/react-query";
import {IUserRegistration} from "../api/types";
import {AuthService} from "../api";

export const useRegistration = () => {
  const { mutateAsync } = useMutation(
    (data: IUserRegistration) => AuthService.registration(data),
    {
      onSuccess: (res) => {
        localStorage.setItem('token', res.data.token)
        alert('you logged')
      },
      onError: (error: any) => {
        alert(error.message)
      },
    }
  )

  return { registerAsync: mutateAsync}
}
