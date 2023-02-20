import {useMutation, useQueryClient} from "@tanstack/react-query";
import {ProductService} from "../../../entities/Product";

export const useCreateProduct = () => {
  const queryClient = useQueryClient()
  const { mutateAsync } = useMutation(
    (data: FormData) => ProductService.create(data),
    {
      onSuccess: (res) => {
        console.log(res.data)

        queryClient.resetQueries(["products"])
        // queryClient.setQueriesData(
        //   ["products"],
        //   {
        //
        //   })
      },
      onError: (error: any) => {
        alert(error.response.data.message)
      },
    }
  )
  return { mutateAsync }
}
