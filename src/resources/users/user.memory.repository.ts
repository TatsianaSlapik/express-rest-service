import MyDataBase from '../../utils/myDataBase';
import { IUser } from './IUser';

export default class UserRepository {
  TABLE_NAME = 'Users';

  myDB: MyDataBase;

  constructor() {
    this.myDB = new MyDataBase();
  }

  async getAll(): Promise<IUser[]> {
    return this.myDB.getAllEntities(this.TABLE_NAME);
  }

  async get(userId: string): Promise<IUser> {
    const user = await this.myDB.getEntity(this.TABLE_NAME, userId);
    return user;
  }

  async save(user: IUser): Promise<IUser> {
    return this.myDB.saveEntity(this.TABLE_NAME, user);
  }

  async remove(userId: string): Promise<IUser> {
    return this.myDB.removeEntity(this.TABLE_NAME, userId);
  }

  async update(userId: string, user: IUser): Promise<IUser> {
    const entity = await this.myDB.updateEntity(this.TABLE_NAME, userId, user);
    return entity;
  }
}
