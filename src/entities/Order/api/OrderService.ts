import instance from "shared/api/instance";
import {AxiosResponse} from "axios";
import {
  IChangeOrderStatus,
  IOrderWithDate,
  OrderResponse,
  IOrder,
  ProfitResponse, ProductRatingResponse,
} from "./types";

export class OrderService {
  static async create (data: IOrder): Promise<AxiosResponse<OrderResponse>> {
    return instance.post<OrderResponse>('orders', data, {
      headers: { 'Content-Type': 'application/json' }
    })
  }

  static async get(): Promise<AxiosResponse<OrderResponse[]>> {
    return instance.get('orders', {
      headers: { 'Content-Type': 'application/json'}
    })
  }

  static async getByUserId (id: string) {
    return instance.get(`orders/user/${id}`)
  }

  static async changeStatus (data: IChangeOrderStatus): Promise<AxiosResponse<OrderResponse>> {
    return instance.post(`orders/status`, data, {
      headers: { 'Content-Type': 'application/json'}
    })
  }

  static async getProfit(data: IOrderWithDate): Promise<AxiosResponse<ProfitResponse>> {
    return instance.post(`orders/profit`, data, {
      headers: { 'Content-Type': 'application/json'}
    })
  }

  static async getTopProducts(data: IOrderWithDate): Promise<AxiosResponse<ProductRatingResponse[]>> {
    return instance.post(`orders/top`, data, {
      headers: { 'Content-Type': 'application/json'}
    })
  }

}
