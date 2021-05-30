import { IUser } from './IUser';
import UserRepository from './user.memory.repository';
import User from './user.model';

export default class UserService {
  userRepo: UserRepository;

  constructor() {
    this.userRepo = new UserRepository();
  }

  getAll = (): Promise<IUser[]> => this.userRepo.getAll();

  get = (userId: string): Promise<IUser> => this.userRepo.get(userId);

  remove = (userId: string): Promise<IUser> => this.userRepo.remove(userId);

  save = (user: IUser): Promise<IUser> => this.userRepo.save(new User(user));

  update = (userId: string, user: IUser): Promise<IUser> =>
    this.userRepo.update(userId, user);
}
