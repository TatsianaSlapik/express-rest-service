import { v4 as uuid } from 'uuid';
import { IColumns, TColumnsBody } from './IColumns';

export default class Column implements IColumns {
  id: string;

  title: string;

  order: number;

  constructor({ id = uuid(), title = 'name', order = 0 } = {}) {
    this.id = id;
    this.title = title;
    this.order = order;
  }

  static toResponse(column: Column): Column {
    const { id, title, order } = column;
    return { id, title, order };
  }

  static fromRequest(body: TColumnsBody): Column {
    return new Column(body);
  }
}
