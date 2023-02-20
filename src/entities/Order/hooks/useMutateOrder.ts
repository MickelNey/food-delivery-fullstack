import {useMutation} from "@tanstack/react-query";
import {IOrder} from "../api/types";
import {OrderService} from "../api";

export const useMutateOrder = () => {
  const { mutateAsync } = useMutation(
    (data: IOrder) => OrderService.create(data),
    {
      onSuccess: (res) => {
        console.log(res.data)
      },
      onError: (e: any) => {
        console.log(e.message)
      }
    }
  )
  return { mutateOrderAsync: mutateAsync }

}
