export enum IconName {
  DownArrow = 'DownArrow',
  GraduationCap = 'GraduationCap',
  QuestionSign = 'QuestionSign',
}

export interface IIconStore {
  iconName: IconName;
  fill?: string;
}
