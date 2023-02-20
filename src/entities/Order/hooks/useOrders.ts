import {useQuery} from "@tanstack/react-query";
import {OrderResponse, OrderService} from "../api";

export const useOrders = (id?: string) => {
  const {data, isLoading, isError} = useQuery(
    ['orders', id],
    () => OrderService.get(),
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
