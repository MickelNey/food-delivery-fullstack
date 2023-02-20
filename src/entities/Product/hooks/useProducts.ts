import {useQuery} from "@tanstack/react-query";
import {ProductService} from "../api";
import {ProductAbstract} from "shared/api/types";

export const useProducts = () => {
  const { data, isLoading, isError } = useQuery(
    ['products'],
    () => ProductService.get(),
    {
      onError: (error: any) => {
        alert(error.message)
      },
      select: ({ data }): ProductAbstract[] => {
        return data
      }
    }
  )
  return {data, isLoading, isError}
}
