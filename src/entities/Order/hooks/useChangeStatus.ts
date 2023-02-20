import {useMutation, useQueryClient} from "@tanstack/react-query";
import {IChangeOrderStatus, OrderService} from "../api";

export const useChangeStatus = () => {
  const queryClient = useQueryClient()
  const {mutateAsync, isLoading,} = useMutation(
    (data: IChangeOrderStatus) => OrderService.changeStatus(data),
    {
      onSuccess: () => {
        queryClient.resetQueries(["orders"])
      },
      onError: (e: any) => {
        alert(e.message)
      }
    }
  )

  return { mutateOrderStatus: mutateAsync, isLoading}
}
