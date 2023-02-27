import {useQuery} from "@tanstack/react-query";
import {CategoryService} from "../api";
import {CategoryType} from "shared/api";

export const useCategories = () => {
  const { data, isLoading } = useQuery(
    ['categories'],
    () => CategoryService.getCategories(),
    {
      onError: (error: any) => {
        alert(error.message)
      },
      select: ({ data }): CategoryType[] => {
        return data
      }
    }
  )
  return { data, isLoading }
}
