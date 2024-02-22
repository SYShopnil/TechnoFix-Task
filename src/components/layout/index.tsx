import { Button, IconStore } from '@src/components/root';
import { BtnColorSchema, IconEnums } from '@src/types/root';
import { ILandingPageLayout } from '@src/types/view';
import React from 'react';

export const Layout = ({ children, tableData }: ILandingPageLayout) => {
  return (
    <div className={`container`}>
      {/* header part */}
      <div
        className={`flex justify-between bg-[#FFFFFF] mt-5 p-4 shadow-md rounded-md`}
      >
        {/* title icon button side part wrapper */}
        <div className={`flex-[0_1_40%]`}>
          <div className={`flex justify-between`}>
            {/* icon and title part wrapper */}
            <div className={`flex justify-center items-center`}>
              <span className="flex-[0_1_10%] mr-8">
                <IconStore
                  iconName={IconEnums.GraduationCap}
                  fill={'#7A67ED'}
                />
              </span>
              <span
                className={`text-center flex-[0_1_90%] text-[1.2rem] font-semibold`}
              >
                All Courses
              </span>
            </div>
            <span className={`flex justify-center items-center`}>
              <Button.RedirectButton
                btnText="Add New Course"
                colorSchema={BtnColorSchema.SolidBgVioletTextWhite}
                isOpenNewTab={false}
                isArrow={false}
                redirectLink=""
              />
            </span>
          </div>
        </div>
        {/* fake wrapper */}
        <div className={`flex-[0_1_40%]`}></div>
        {/* question sign wrapper */}
        <div className={`flex-[0_1_20%] flex justify-center items-end`}>
          <div
            className={`bg-transparent border-[#7A67EE] border-2 border-solid  rounded-full p-2`}
          >
            <IconStore iconName={IconEnums.QuestionSign} fill={'#7A67ED'} />
          </div>
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
};
