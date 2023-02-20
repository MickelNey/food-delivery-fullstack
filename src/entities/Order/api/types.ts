export interface IProductInOrder {
  id: string
  volume: number
}

export enum EStatuses {
  PENDING = 'pending',
  PROGRESS = 'progress',
  COMPLETED = 'completed',
  ERROR = 'error',
  CANCEL = 'cancel'
}

export interface IOrder {
  userId?: string | null
  registrationDate: string
  customerEmail: string
  status: EStatuses
  time: string
  products?: IProductInOrder[]
  price: number
}

export interface OrderResponse extends IOrder{
  id: string
}

export interface IChangeOrderStatus {
  orderId: string
  status: EStatuses
}

export interface IOrderWithDate {
  startDate: string
  endDate: string
}

export interface ProfitResponse {
  sum: string
}

export interface ProductRatingResponse {
  id: string
  title: string
  imageUrl: string
  result: number
}

