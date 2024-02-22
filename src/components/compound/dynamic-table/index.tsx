import { IFieldName, ITable, ITableData } from '@src/types/view/landing';
import React, { useEffect, useRef, useState } from 'react';
import { Field } from './field';
import { CiMenuBurger } from 'react-icons/ci';
import { DynamicCheckBox } from '@src/components/root';

export const DynamicTable = ({ tableData }: ITableData) => {
  // default value of checkBox
  const defaultCheckBoxData = [
    {
      isCheck: true,
      name: IFieldName.Title,
    },
    {
      isCheck: true,
      name: IFieldName.Categories,
    },
    {
      isCheck: true,
      name: IFieldName.Author,
    },
    {
      isCheck: true,
      name: IFieldName.Date,
    },
    {
      isCheck: true,
      name: IFieldName.Price,
    },
    {
      isCheck: true,
      name: IFieldName.Status,
    },
    {
      isCheck: true,
      name: IFieldName.Action,
    },
  ];
  const [isSideBarVisible, setIsSideBarVisible] = useState<boolean>(true);
  const checkBoxRef = useRef<HTMLDivElement>(null);
  // handle the checkbox data to operate it dynamic way
  const [checkBoxData, setCheckBoxData] =
    useState<
      {
        name: IFieldName;
        isCheck: boolean;
      }[]
    >(defaultCheckBoxData);
  const [selectedFields, setSelectedFields] = useState<IFieldName[]>([]);

  /**
   *
   * This is maintaining the grid system dynamic way
   */
  const totalColumns: number = 14;
  const columnsPerField: number = Math.floor(
    totalColumns / selectedFields.length
  );
  const remainingColumns: number = totalColumns % selectedFields.length;

  const checkBoxHandler = (hitIndex: number) => {
    const newCHeckBox = checkBoxData.map((checkBoxPrevData, ind) => {
      if (ind == hitIndex) {
        checkBoxPrevData.isCheck = !checkBoxPrevData.isCheck;
        if (checkBoxPrevData.isCheck) {
          const newSelectField = [...selectedFields, checkBoxPrevData.name];
          setSelectedFields(newSelectField);
        } else {
          const newSelectField: IFieldName[] = selectedFields.filter(
            (field) => field != checkBoxPrevData.name
          );
          setSelectedFields(newSelectField);
        }
      }
      return checkBoxPrevData;
    });
    setCheckBoxData(newCHeckBox);
  };

  const onClickOutsideCheckBoxHideHandler = (e: MouseEvent) => {
    if (
      checkBoxRef.current &&
      !checkBoxRef.current.contains(e.target as Node)
    ) {
      setIsSideBarVisible(!isSideBarVisible);
    }
  };
  const onClickSiderBarHideHandler = () => {
    setIsSideBarVisible(!isSideBarVisible);
  };

  // this use effect is handling the outside click check box handler
  useEffect(() => {
    document.addEventListener('click', onClickOutsideCheckBoxHideHandler);
    return () => {
      document.removeEventListener('click', onClickOutsideCheckBoxHideHandler);
    };
  }, []);

  // this useEffect is operating the first time checkbox generation
  useEffect(() => {
    const newSelectData: IFieldName[] = [];
    checkBoxData.map((checkData) => {
      if (checkData.isCheck) {
        newSelectData.push(checkData.name);
      }
    });
    setSelectedFields(newSelectData);
  }, []);
  return (
    <div className=" bg-white mt-5 p-5 ">
      {/* table header and side bar wrapper*/}
      <div className={`relative mb-3`}>
        {/* table header */}
        <div className="flex justify-between items-end">
          <div className="">
            <p className="bg-white text-lg font-bold">Table Title</p>
          </div>
          {/* hand burger icon wrappar */}
          <div
            className={`cursor-pointer border hover:border border-white p-3 rounded-full hover:shadow-md hover:border-[#7A67EF] duration-75`}
            onClick={() => onClickSiderBarHideHandler()}
            ref={checkBoxRef}
          >
            <CiMenuBurger fill="#B8B8B8" size={20} />
          </div>
        </div>
        {/* side bar wrapper */}
        {isSideBarVisible && (
          <div className={`absolute right-0 top-0`} ref={checkBoxRef}>
            <DynamicCheckBox
              checkBoxData={checkBoxData}
              checkBoxHandler={checkBoxHandler}
              title="Add or removes columns"
            />
          </div>
        )}
      </div>

      {/* print the field dynamically */}
      <div
        className="grid grid-cols-14 "
        style={{ gridTemplateColumns: 'repeat(14, minmax(0, 1fr))' }}
      >
        {checkBoxData.map((field, index) => {
          return (
            <>
              {field.isCheck && (
                <div
                  key={index}
                  style={{
                    gridColumn: `span ${
                      index === selectedFields.length - 1
                        ? columnsPerField + remainingColumns
                        : columnsPerField
                    }`,
                  }}
                  className="p-2 bg-transparent border-b capitalize"
                >
                  <strong>{field.name}</strong>
                </div>
              )}
            </>
          );
        })}
      </div>

      {/* print the field data dynamically */}
      <div>
        {tableData.map((row: ITable, rowIndex: number) => (
          <div
            key={rowIndex}
            className="grid grid-cols-14 "
            style={{ gridTemplateColumns: 'repeat(14, minmax(0, 1fr))' }}
          >
            {checkBoxData.map((field, index) => (
              <>
                {field.isCheck && (
                  <div
                    key={index}
                    style={{
                      gridColumn: `span ${
                        index === selectedFields.length - 1
                          ? columnsPerField + remainingColumns
                          : columnsPerField
                      }`,
                    }}
                    className="p-2 border-b flex justify-start items-center"
                  >
                    <Field fieldData={row[field.name]} />
                  </div>
                )}
              </>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
