import { DynamicTable } from '@src/components/compound';
import { Layout } from '@src/components/layout';
import { ILandingPage } from '@src/types/view/landing';
import React from 'react';

export const LandingPageView = ({ tableData }: ILandingPage) => {
  return (
    <>
      <Layout>
        <DynamicTable tableData={tableData} />
      </Layout>
    </>
  );
};
