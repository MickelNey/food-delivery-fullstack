import instance from "shared/api/instance";
import {AxiosResponse} from "axios";
import {ProductAbstract, CategoryType} from "shared/api/types";

export class ProductService {
  static async create (data: FormData): Promise<AxiosResponse<ProductAbstract>> {
    return instance.post<ProductAbstract>('products', data, {
      headers: { 'Content-Type': 'multipart/form-data' }
    })
  }

  static async get (): Promise<AxiosResponse<ProductAbstract[]>> {
    return instance.get<ProductAbstract[]>('products');
  }

  static async getById (id: string): Promise<AxiosResponse<ProductAbstract>> {
    return instance.get<ProductAbstract>(`products/${id}`);
  }

  static async getCategories (): Promise<AxiosResponse<CategoryType[]>> {
    return instance.get<CategoryType[]>('categories')
  }

  static async update (data: ProductAbstract): Promise<AxiosResponse<ProductAbstract>> {
    return instance.post<ProductAbstract>('products/update', data, {
      headers: { 'Content-Type': 'application/json'}
    })
  }

  static async remove (id: string) {
    console.log(id)
    return instance.post(`products/remove/${id}`)
  }

}
