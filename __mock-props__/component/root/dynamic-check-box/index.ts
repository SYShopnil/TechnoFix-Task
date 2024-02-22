import { IDynamicCheckBox } from '@src/types/root';

export const checkBoxItemsDataMock: {
  name: string;
  isCheck: boolean;
}[] = [
  {
    isCheck: true,
    name: 'title',
  },
  {
    isCheck: false,
    name: 'categories',
  },
  {
    isCheck: false,
    name: 'price',
  },
  {
    isCheck: true,
    name: 'date',
  },
  {
    isCheck: true,
    name: 'author',
  },
  {
    isCheck: true,
    name: 'status',
  },
  {
    isCheck: true,
    name: 'action',
  },
];
export const dynamicCheckBoxMock: IDynamicCheckBox = {
  checkBoxData: checkBoxItemsDataMock,
  checkBoxHandler: function (index) {
    console.log(index);
  },
  title: 'Add or removes columns',
  dataTestId: 'checkBoxGetter',
};
