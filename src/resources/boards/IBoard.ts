import { IColumns } from '../columns/IColumns';

export interface IBoard {
  id: string;
  title: string;
  columns: IColumns[];
}
export type TBoardBody = Partial<IBoard>;
