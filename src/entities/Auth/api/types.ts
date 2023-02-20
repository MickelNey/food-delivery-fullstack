export interface IUserLogin {
  email: string
  password: string
}

export interface IUserRegistration {
  email: string
  name: string
  password: string
}

export interface IUserUpdateInfo {
  email: string,
  name: string,
  secondName: string
  phone: string
  address: string
}

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

export interface AuthResponse {
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
