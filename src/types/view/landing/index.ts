/**
 *
 * Demo work
 */

export enum IFieldName {
  Title = 'title',
  Categories = 'categories',
  Price = 'price',
  Date = 'date',
  Author = 'author',
  Status = 'status',
  Action = 'action',
}
export enum IStatusFieldValue {
  Publish = 'publish',
  Draft = 'draft',
}
export interface ITableField {
  type: string;
  payload: {
    link?: string;
    topic?: string;
    lesson?: string;
    value?: string;
  };
}

export interface ITable {
  title: ITableField;
  categories: ITableField;
  price: ITableField;
  date: ITableField;
  author: ITableField;
  status: ITableField;
  action: ITableField;
}
export interface ITableData {
  tableData: ITable[];
}
export interface ILandingLayout {
  children?: React.ReactElement;
  tableData?: ITable[];
}
export interface ILandingPage {
  tableData: ITable[];
}
