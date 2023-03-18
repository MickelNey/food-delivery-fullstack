import instance from "shared/api/instance";
import {AxiosResponse} from "axios";
import {addRoleType, User, IRole} from "./types";


export class UserService {
  static async get(): Promise<AxiosResponse<User[]>> {
    return instance.get<User[]>('users/')
  }

  static async getRoles(): Promise<AxiosResponse<IRole[]>> {
    return instance.get<IRole[]>('roles')
  }

  static async addRole(data: addRoleType) {
    return instance.post('users/role', data)
  }
}
