import instance from "./instance";


export interface IUser {
  email: string
  name?: string
  password: string
}

export const service = {
  async get<T>(endpoint: string): Promise<T> {
    const response = await instance.get<T>(endpoint)
    return response.data
  },
  async getAll(endpoint: string) {
    const response = await instance.get(endpoint)
    console.log(response)
  }
}


