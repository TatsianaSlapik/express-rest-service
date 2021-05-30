export interface IColumns {
  id: string;
  title: string;
  order: number;
}
export type TColumnsBody = Partial<IColumns>;
