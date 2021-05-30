import { v4 as uuid } from 'uuid';
import { IUser, TUserBody, TUserToResponse } from './IUser';

export default class User implements IUser {
  id: string;

  name: string;

  login: string;

  password: string;

  constructor({
    id = uuid(),
    name = 'USER',
    login = 'user',
    password = 'P@55w0rd',
  } = {}) {
    this.id = id;
    this.name = name;
    this.login = login;
    this.password = password;
  }

  static toResponse(user: IUser): TUserToResponse {
    const { id, name, login } = user;
    return { id, name, login };
  }

  static fromRequest(body: TUserBody): User {
    return new User(body);
  }
}
