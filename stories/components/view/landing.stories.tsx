import { mock_data_redirectButton } from '@root/__mock-props__/component/root/button';
import { dynamicCheckBoxMock } from '@root/__mock-props__/component/root/dynamic-check-box';
import { tableMockData } from '@root/__mock-props__/component/view';
import { Button, DynamicCheckBox } from '@src/components/root';
import { LandingPageView } from '@src/components/view';
import { BtnColorSchema } from '@src/types/root';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import 'tailwindcss/tailwind.css';

export default {
  title: 'Component/View/Landing',
  component: LandingPageView,
} as ComponentMeta<typeof LandingPageView>;

/**
 *
 * Landing Page view Template
 *
 */
const LandingPageViewTemplate: ComponentStory<typeof LandingPageView> = (
  arg
) => {
  return (
    <div>
      <LandingPageView {...arg} />
    </div>
  );
};

/**
 *
 * DYnamic Check box Demos
 *
 */
export const DynamicCheckBoxDemo = LandingPageViewTemplate.bind({});
DynamicCheckBoxDemo.args = tableMockData;
