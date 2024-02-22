import { Button } from '@src/components/root';
import { BtnColorSchema } from '@src/types/root';
import { IFieldName, IStatusFieldValue, ITableField } from '@src/types/view';
import React from 'react';

interface IField {
  fieldData: ITableField;
}

export const Field = ({ fieldData }: IField) => {
  switch (fieldData.type) {
    case IFieldName.Title: {
      return <Field.Title fieldData={fieldData} />;
    }
    case IFieldName.Action: {
      return <Field.Action />;
    }
    case IFieldName.Status: {
      return <Field.Status fieldData={fieldData} />;
    }
    default: {
      return <Field.Common fieldData={fieldData} />;
    }
  }
};

Field.Title = ({ fieldData: { payload } }: IField) => {
  return (
    <div className="bg-white">
      <p className="bg-white">{payload?.link}</p>
      {payload.topic && <p className="bg-white">Topic: {payload.topic}</p>}
      {payload.lesson && <p className="bg-white">Lesson: {payload.lesson}</p>}
    </div>
  );
};
(Field.Title as React.FC<IField>).displayName = 'FieldTitle';

Field.Common = ({
  fieldData: {
    payload: { value },
  },
}: IField) => {
  return (
    <div>
      <p className="bg-white">{value}</p>
    </div>
  );
};
(Field.Common as React.FC<IField>).displayName = 'FieldCommon';

Field.Status = ({
  fieldData: {
    payload: { value },
  },
}: IField) => {
  return (
    <div className="bg-white">
      <Button.RedirectButton
        colorSchema={
          IStatusFieldValue.Draft == value
            ? BtnColorSchema.SolidBgVioletTextWhite
            : BtnColorSchema.SolidBgWhiteTextGreen
        }
        btnText={
          IStatusFieldValue.Draft == value
            ? IStatusFieldValue.Draft
            : IStatusFieldValue.Publish
        }
        isOpenNewTab={false}
        redirectLink=""
        isArrow={true}
      />
    </div>
  );
};
(Field.Status as React.FC<IField>).displayName = 'FieldStatus';

Field.Action = () => {
  return (
    <div className="bg-white">
      <Button.RedirectButton
        btnText="Edit"
        colorSchema={BtnColorSchema.SolidBgVioletTextWhite}
        isOpenNewTab={false}
        redirectLink=""
        isArrow={false}
      />
    </div>
  );
};

(Field.Action as React.FC).displayName = 'FieldAction';
