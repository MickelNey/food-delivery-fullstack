import {useMutation, useQueryClient} from "@tanstack/react-query";
import {ProductService} from "../../../entities/Product/api";

export const useDeleteProductMutation = () => {
  const queryClient = useQueryClient()
  const { mutateAsync } = useMutation(
    (id: string) => ProductService.remove(id),
    {
      onSuccess: (res) => {
        queryClient.resetQueries(["products"])
        // console.log(res.data)
        // queryClient.setQueriesData(
        //   ["products"],
        //   {
        //     data: res.data
        //   }
        // )
      },
      onError: (error: any) => {
        alert(error.response.data.message)
      },
    }
  )

  return { mutateAsync }
}
