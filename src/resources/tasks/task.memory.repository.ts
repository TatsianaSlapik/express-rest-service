import MyDataBase from '../../utils/myDataBase';
import { ITask } from './ITask';

export default class TaskRepository {
  TABLE_NAME = 'Tasks';

  myDB: MyDataBase;

  constructor() {
    this.myDB = new MyDataBase();
  }

  async getAll(): Promise<ITask[]> {
    return this.myDB.getAllEntities(this.TABLE_NAME);
  }

  async get(taskId: string): Promise<ITask> {
    const user = await this.myDB.getEntity(this.TABLE_NAME, taskId);
    return user;
  }

  async save(task: ITask): Promise<ITask> {
    return this.myDB.saveEntity(this.TABLE_NAME, task);
  }

  async remove(taskId: string): Promise<ITask> {
    return this.myDB.removeEntity(this.TABLE_NAME, taskId);
  }

  async update(taskId: string, task: ITask): Promise<ITask> {
    const entity = await this.myDB.updateEntity(this.TABLE_NAME, taskId, task);
    return entity;
  }
}
