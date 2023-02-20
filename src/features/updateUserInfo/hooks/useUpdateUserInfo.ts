import {AuthResponse, AuthService, useAuthContext} from "entities/Auth";
import {useMutation} from "@tanstack/react-query";

export const useUpdateUserInfo = () => {
  const { setStore} = useAuthContext()
  const { mutateAsync } = useMutation((data: AuthResponse) => AuthService.update(data))

  const updateUserAsync = async (user: AuthResponse) => {
    return await mutateAsync({
      ...user
    }).then(res => {
      setStore({ user: res.data})
      return res.data
    }).catch((e: any) => {
      alert(e.message)
      return null
    })
  }

  return { updateUserAsync }
}


function get() {
  const orders = []

  return 0
}

