import { IIconStore, IconEnums } from '@src/types/root';
import React from 'react';

import { IoIosArrowDown } from 'react-icons/io';
import { RiGraduationCapFill } from 'react-icons/ri';
import { MdQuestionMark } from 'react-icons/md';

export const IconStore = ({ iconName, fill }: IIconStore) => {
  switch (iconName) {
    case IconEnums.DownArrow: {
      return <IoIosArrowDown />;
    }
    case IconEnums.GraduationCap: {
      return <RiGraduationCapFill fill={fill} size={55} />;
    }
    case IconEnums.QuestionSign: {
      return <MdQuestionMark fill={fill} size={45} />;
    }
    default: {
      return <IoIosArrowDown />;
    }
  }
};
