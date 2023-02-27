import {useMutation} from "@tanstack/react-query";
import {IOrderWithDate, OrderService} from "entities/Order";

export const useGetProfit = () => {

  const { data, isLoading, mutateAsync } = useMutation(
    (data: IOrderWithDate) => OrderService.getProfit(data),
    {
      onSuccess: data => data.data,
      onError: (error: any) => {
        console.log(error.message)
      }
    }
  )

  return { profit: data, isLoading, getProfitAsync: mutateAsync}
}
