import { mock_data_redirectButton } from '@root/__mock-props__/component/root/button';
import { Button } from '@src/components/root';
import { BtnColorSchema } from '@src/types/root';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import 'tailwindcss/tailwind.css';

export default {
  title: 'Component/Root/Buttons',
  component: Button,
  argTypes: {
    btnText: {
      control: 'text',
    },
    redirectLink: {
      control: 'text',
      if: {
        arg: 'redirectLink',
        exists: true,
      },
    },
    colorSchema: {
      control: {
        type: 'select',
      },
      options: [...Object.values(BtnColorSchema)],
    },
    isArrow: {
      control: {
        type: 'boolean',
      },
    },
  },
} as ComponentMeta<typeof Button>;

/**
 *
 * Redirect Button Template
 *
 */
const RedirectButton: ComponentStory<typeof Button.RedirectButton> = (arg) => {
  return (
    <div className="container">
      <div className={`h-screen flex justify-center items-center`}>
        <div>
          <Button.RedirectButton {...arg} />
        </div>
      </div>
    </div>
  );
};

/**
 *
 * Redirect Button Demos
 *
 */
export const RedirectButtonDemoOne = RedirectButton.bind({});
RedirectButtonDemoOne.args = mock_data_redirectButton[0];
