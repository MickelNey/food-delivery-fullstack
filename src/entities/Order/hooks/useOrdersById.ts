import {useQuery} from "@tanstack/react-query";
import {OrderResponse, OrderService} from "../api";
export const useOrdersById = (id?: string) => {
  const {data, isLoading, isError} = useQuery(
    ['orders_user', id],
    () => OrderService.getByUserId(id || ''),
    {
      onError: (error: any) => {
        alert(error.message)
      },
      select: ({data}): OrderResponse[] => {
        console.log(data)
        return data
      }
    }
  )
  return {data, isLoading, isError}
}
