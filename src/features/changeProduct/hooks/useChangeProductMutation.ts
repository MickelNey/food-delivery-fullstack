import {useMutation, useQueryClient} from "@tanstack/react-query";
import {ProductService} from "../../../entities/Product/api";
import {ProductAbstract} from "shared/api/types";

export const useChangeProductMutation = () => {
  const queryClient = useQueryClient()
  const { mutateAsync } = useMutation(
    (data: ProductAbstract) => ProductService.update(data),
    {
      onSuccess: (res) => {
        queryClient.resetQueries(["products"])
      },
      onError: (error: any) => {
        alert(error.response.data.message)
      },
    }
  )
  return { mutateAsync }
}
