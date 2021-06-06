export interface IUser {
  id: string;
  name: string;
  login: string;
  password: string;
}

export type TUserToResponse = Omit<IUser, 'password'>;
export type TUserBody = Partial<IUser>;
