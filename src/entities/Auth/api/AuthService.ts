import instance from "shared/api/instance";
import {AxiosResponse} from "axios";
import {AuthResponse, IUserRegistration, IUserLogin} from "./types";

export class AuthService {
  static async login(data: IUserLogin): Promise<AxiosResponse<AuthResponse>>{
    return instance.post<AuthResponse>('auth/login', data, {
      headers: { 'Content-Type': 'application/json' },
    })
  }

  static async registration(data: IUserRegistration): Promise<AxiosResponse<AuthResponse>>{
    return instance.post<AuthResponse>('auth/registration', data, {
      headers: { 'Content-Type': 'application/json' },
    })
  }

  static async profile(token: string): Promise<AxiosResponse<AuthResponse>>{
    return instance.get<AuthResponse>(`auth/profile/${token}`)
  }

  static async update(data: AuthResponse): Promise<AxiosResponse<AuthResponse>> {
    return instance.post<AuthResponse>('auth/update', data)
  }
}
