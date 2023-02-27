import instance from "shared/api/instance";
import {AxiosResponse} from "axios";
import {CategoryType} from "shared/api/types";
import {CategoryResponse} from "./types";

export class CategoryService {
  static async create (data: FormData): Promise<AxiosResponse<CategoryType>> {
    return instance.post<CategoryResponse>('categories', data, {
      headers: { 'Content-Type': 'multipart/form-data' }
    })
  }

  static async getCategories (): Promise<AxiosResponse<CategoryType[]>> {
    return instance.get<CategoryType[]>('categories')
  }

}
