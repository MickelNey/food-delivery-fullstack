import {useQuery} from "@tanstack/react-query";
import {UserService} from "../api";
import {User} from "../api/types";

export const useUsers = () => {
  const { data, isLoading, isError} = useQuery(['users'],
    () => UserService.get(),
    {
      select: ({ data}): User[] => data,
      onError: (e: any) => {
        alert(e.message)
      }
    })

  return { users: data, isError, isLoading}
}
