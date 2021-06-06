import { v4 as uuid } from 'uuid';
import Column from '../columns/column.model';
import { IColumns } from '../columns/IColumns';
import { IBoard, TBoardBody } from './IBoard';

export default class Board implements IBoard {
  id: string;

  title: string;

  columns: IColumns[];

  constructor({ id = uuid(), title = 'name', columns = Array<Column>() } = {}) {
    this.id = id;
    this.title = title;
    this.columns = columns;
  }

  static toResponse(board: Board): Board {
    const { id, title, columns } = board;
    return { id, title, columns };
  }

  static fromRequest(body: TBoardBody): Board {
    return new Board(body);
  }
}
