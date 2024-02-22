import {
  BtnColorSchema,
  IButton,
  INormalButton,
  IRedirectButton,
} from '@src/types/root';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { IconStore } from '../_icon';
import { IconName } from '@src/types/root/_icon';

//Common layout
const BaseButton = ({ btnText, colorSchema, isArrow }: IButton) => {
  const [fillValue, setFillValue] = useState('');
  const appliedBtnMainWrapperStyle = `flex justify-center items-center `;
  const appliedBtnInnerWrapperStyle = `text-base md:text-base_2  flex justify-center items-center px-[1rem] py-[0.5rem] rounded-[0.563rem]`;
  let appliedBtnBgColorStyle = '';

  const setRootFillValue = {
    initial: '',
    onHover: '',
  };
  switch (colorSchema) {
    case BtnColorSchema.SolidBgVioletTextWhite: {
      appliedBtnBgColorStyle = `bg-[#7A67EF] hover:bg-[transparent]  duration-[0.5s] text-[#FFFAFF] hover:text-[#7A67EF]  border-[0.063rem] border-primary_300 hover:border-[#7A67EF]`;
      setRootFillValue['onHover'] = '#727272';
      setRootFillValue['initial'] = '#FFFAFF';
      break;
    }
    case BtnColorSchema.SolidBgWhiteTextGreen: {
      appliedBtnBgColorStyle =
        'bg-[#EBF5EC] hover:bg-[#449657]  duration-[0.5s] text-[#449657] hover:text-[#EBF5EC]   border-[0.063rem] hover:border-[#EBF5EC] border-[#449657]';
      setRootFillValue['onHover'] = '#EBF5EC';
      setRootFillValue['initial'] = '#449657';
      break;
    }
    case BtnColorSchema.SolidBgGrayTextViolet: {
      appliedBtnBgColorStyle =
        'bg-[#EDEDED] hover:bg-[#7A67EE]  duration-[0.5s] text-[#7A67EE] hover:text-[#EDEDED]   border-[0.063rem] hover:border-[#EDEDED] border-[#7A67EE]';
      setRootFillValue['onHover'] = '#EDEDED';
      setRootFillValue['initial'] = '#7A67EE';
      break;
    }
    default: {
      appliedBtnBgColorStyle = `bg-[transparent] hover:bg-primary_500 duration-[0.5s] text-primary_500 hover:text-neutral_500 border-[0.063rem] border-primary_500`;
    }
  }

  // handle the first time arrow initialize
  useEffect(() => {
    setFillValue(setRootFillValue['initial']);
  }, []);

  return (
    // button main wrapper
    <span
      className={`${appliedBtnMainWrapperStyle} `}
      onMouseEnter={() => setFillValue(setRootFillValue.onHover)}
      onMouseLeave={() => setFillValue(setRootFillValue.initial)}
    >
      <span
        className={`${appliedBtnInnerWrapperStyle} w-[100%] h-[100%] ${appliedBtnBgColorStyle}   `}
      >
        <span>{btnText}</span>
        {/* btn text part wrapper */}
        {isArrow && (
          <span
            className={`ml-[1rem] h-[1.5rem] w-[1.5rem]  flex justify-center items-center`}
          >
            <IconStore iconName={IconName.DownArrow} fill={fillValue} />
          </span>
        )}
      </span>
    </span>
  );
};

//Normal Button
export const Button = (props: INormalButton) => {
  return (
    <span
      onClick={(
        e: React.MouseEvent<HTMLElement> | React.FormEvent<HTMLFormElement>
      ) => props.clickHandler?.(e)}
      data-testid={props.dataTestId}
    >
      <BaseButton {...props} />
    </span>
  );
};

//Redirect Button
Button.RedirectButton = (props: IRedirectButton) => {
  return (
    <Link href={props.redirectLink} passHref>
      <a
        target={props.isOpenNewTab ? '_blank' : '_self'}
        data-testid={props.dataTestId}
      >
        <BaseButton {...props} />
      </a>
    </Link>
  );
};
