import {useQuery} from "@tanstack/react-query"
import {ProductService} from "../api"
import {ProductAbstract} from "shared/api/types"

export const useProduct = (id?: string) => {
  const {data, isLoading, isError} = useQuery(
    ['products', id],
    () => ProductService.getById(id || ''),
    {
      onError: (error: any) => {
        alert(error.message)
      },
      select: ({data}): ProductAbstract => {
        return data
      }
    }
  )
  return {data, isLoading, isError}
}
