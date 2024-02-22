import { dynamicCheckBoxMock } from '@root/__mock-props__/component/root/dynamic-check-box';
import { DynamicCheckBox } from '@src/components/root';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import 'tailwindcss/tailwind.css';

export default {
  title: 'Component/Root/CheckBox',
  component: DynamicCheckBox,
} as ComponentMeta<typeof DynamicCheckBox>;

/**
 *
 * Dynamic CheckBox Template
 *
 */
const DynamicCheckBoxTemplate: ComponentStory<typeof DynamicCheckBox> = (
  arg
) => {
  return (
    <div className="container">
      <div className={`h-screen flex justify-center items-center`}>
        <div>
          <DynamicCheckBox {...arg} />
        </div>
      </div>
    </div>
  );
};

/**
 *
 * DYnamic Check box Demos
 *
 */
export const DynamicCheckBoxDemo = DynamicCheckBoxTemplate.bind({});
DynamicCheckBoxDemo.args = dynamicCheckBoxMock;
