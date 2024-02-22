import { IDynamicCheckBox } from '@src/types/root';
import React from 'react';

export const DynamicCheckBox = ({
  title,
  checkBoxData,
  checkBoxHandler,
  dataTestId,
}: IDynamicCheckBox) => {
  return (
    <div
      className={`bg-[#FFFFFF] shadow-primary p-4 space-y-4 `}
      data-testid={dataTestId || 'checkBoxPicker'}
    >
      <div>
        <h1 className={`font-semibold text-black`}>{title}</h1>
      </div>
      <div className={`space-y-8`}>
        {checkBoxData.map((item, ind) => {
          return (
            <div key={ind}>
              <label htmlFor={item.name}>
                <span className={`relative`}>
                  <input
                    type="checkbox"
                    onChange={() => checkBoxHandler(ind)}
                    checked={item.isCheck}
                    className={`appearance-none w-5 h-5 border-2 border-gray-300 rounded-md checked:bg-red-500 checked:border-red-600 checked:text-white checked:outline-none checked:relative checked:before:block checked:content-[''] checked:w-5 checked:h-5 checked:border-white checked:border-solid checked:mx-auto`}
                  />
                </span>
                <span
                  className={`ml-2 font-semibold capitalize text-[1.25rem]`}
                >
                  {item.name}
                </span>
              </label>
            </div>
          );
        })}
      </div>
    </div>
  );
};
