export interface IDynamicCheckBox {
  title: string;
  checkBoxData: {
    name: string;
    isCheck: boolean;
  }[];
  checkBoxHandler: (index: number) => void;
  dataTestId?: string;
}
