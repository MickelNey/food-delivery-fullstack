export interface IRole {
  id: number,
  value: string,
  description: string
}

export interface IOrder {
  id: number,
  status: string,
  registrationDate: string,
  time: string,
  customerEmail: string,
  userId: number
}

export interface User {
  token: string
  id: string,
  email: string,
  name: string,
  secondName: string
  phone: string
  address: string
  roles: IRole[],
  orders: IOrder[]
}

export interface addRoleType {
  value: string,
  userId: string,
}
