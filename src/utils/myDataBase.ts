import { IUser } from '../resources/users/IUser';
import { ITask } from '../resources/tasks/ITask';
import { IBoard } from '../resources/boards/IBoard';
import Task from '../resources/tasks/task.model';
import Board from '../resources/boards/board.model';
import User from '../resources/users/user.model';

export default class MyDataBase {
  db = {
    Users: Array<IUser | undefined>(),
    Boards: Array<IBoard | undefined>(),
    Tasks: Array<ITask | undefined>(),
  };

  constructor() {
    this.db.Users.push(new User());
    const board = new Board();
    this.db.Boards.push(board);
    this.db.Tasks.push(new Task({ boardId: board.id }));
  }

  tableUsersStructure = (user: IUser): IUser | null => {
    if (user) {
      this.db.Tasks.filter((task) => task).forEach((task) => {
        if (task != null) {
          const tempTask = task;
          tempTask.userId = task.userId === user.id ? '' : task.userId;
        }
      });
    }
    return null;
  };

  tableBoardsStructure = (board: IBoard) => {
    if (board) {
      this.db.Tasks.filter(
        (task: ITask | undefined) => task && task.boardId === board.id
      ).forEach((task) => {
        this.db.Tasks[this.db.Tasks.indexOf(task)] = undefined;
      });
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  tableTasksStructure = () => {};

  getAllEntities = (tableName: string): Array<any> =>
    this.db[tableName].filter((ent) => ent);

  getEntity = (tableName: string, id: string): any => {
    const entities = this.db[tableName]
      .filter((ent) => ent)
      .filter((ent) => ent.id === id);
    return entities[0];
  };

  removeEntity = (tableName: string, id: string): any => {
    const entity = this.getEntity(tableName, id);
    if (entity) {
      this[`table${tableName}Structure`](entity);
      const index = this.db[tableName].indexOf(entity);
      this.db[tableName] = [
        ...this.db[tableName].slice(0, index),
        ...(this.db[tableName].length > index + 1
          ? this.db[tableName].slice(index + 1)
          : []),
      ];
    }
    return entity;
  };

  saveEntity = (tableName: string, entity: any): any => {
    this.db[tableName].push(entity);
    return this.getEntity(tableName, entity.id);
  };

  updateEntity = (tableName: string, id: string, entity: any): any => {
    const oldEnt = this.getEntity(tableName, id);
    if (oldEnt) {
      this.db[tableName][this.db[tableName].indexOf(oldEnt)] = { ...entity };
    }
    return this.getEntity(tableName, id);
  };
}
// added database
