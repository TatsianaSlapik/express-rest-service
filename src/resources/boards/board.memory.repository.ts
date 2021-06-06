import MyDataBase from '../../utils/myDataBase';
import { IBoard } from './IBoard';

export default class BoardRepository {
  TABLE_NAME = 'Boards';

  myDB: MyDataBase;

  constructor() {
    this.myDB = new MyDataBase();
  }

  async getAll(): Promise<IBoard[]> {
    return this.myDB.getAllEntities(this.TABLE_NAME);
  }

  async get(boardId: string): Promise<IBoard> {
    const user = await this.myDB.getEntity(this.TABLE_NAME, boardId);
    return user;
  }

  async save(board: IBoard): Promise<IBoard> {
    return this.myDB.saveEntity(this.TABLE_NAME, board);
  }

  async remove(boardId: string): Promise<IBoard> {
    return this.myDB.removeEntity(this.TABLE_NAME, boardId);
  }

  async update(boardId: string, board: IBoard): Promise<IBoard> {
    const entity = await this.myDB.updateEntity(
      this.TABLE_NAME,
      boardId,
      board
    );
    return entity;
  }
}
