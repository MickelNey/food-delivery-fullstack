import {useQuery} from "@tanstack/react-query";
import {AuthService} from "../api";
import {useAuthContext} from "./useAuthContext";
import {useNavigate} from "react-router-dom";

interface IProfile {
  email: string;
  name: string;
  roles: accountRole[]
}

type accountRole = 'USER' | 'ADMIN' | 'SELLER' | 'OWNER'

export const useProfile = (route: string) => {
  const { setStore } = useAuthContext()
  const navigate = useNavigate()

  const { data, isLoading, isError } = useQuery(
    ['profile'],
    () => {
      const token = localStorage.getItem('token')
      if (token) {
        return AuthService.profile(token).then(res => res.data)
      }
      throw new Error()
    },
    {
      onError: (error: any) => {
        alert("время сессии истекло")
        setStore({ isAuth: false})
        if (route) navigate(route)
      },
      select: (data) => {
        console.log({
          email: data.email,
          name: data.name,
          roles: data.roles.map((role) => role.value)
        })

        console.log(data)
        return {
          ...data
        }
      }
    }
  )
  return { userData: data, isLoading, isError, setStore}
}
