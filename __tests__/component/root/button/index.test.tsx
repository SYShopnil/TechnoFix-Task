/**
 *  DONE
 *
 *  Check render successfully of not by taking a snapshot
 *  Check the redirect function work perfectly or not
 *  Check Open new tab function work perfectly or not
 *
 */

import { mock_data_redirectButton } from '@root/__mock-props__/component/root/button';
import { Button } from '@src/components/root';
import { render } from '@testing-library/react';

let buttonCounter = 0;

// Mock the 'next/link' module
jest.mock('next/link', () => {
  // Require the actual implementation to mock the 'Link' component correctly
  const nextLink = jest.requireActual('next/link');

  return {
    __esModule: true,
    default: ({ children }: { children: React.ReactNode }) => children,
    // Exporting the original components from 'next/link' if needed
    ...nextLink,
  };
});

describe.each(mock_data_redirectButton)(
  `When Button ${++buttonCounter} component has rendered`,
  (buttons) => {
    it(`Expect it has been rendered successfully`, () => {
      const { getByTestId } = render(<Button.RedirectButton {...buttons} />);
      const buttonElement = getByTestId(buttons.dataTestId || '');
      expect(buttonElement).toBeInTheDocument();
      expect(buttonElement).toMatchSnapshot();
    });

    it(`Expect redirect function worked perfectly`, () => {
      const { getByTestId } = render(<Button.RedirectButton {...buttons} />);
      const buttonElement = getByTestId(buttons.dataTestId || '');

      if (buttons.redirectLink) {
        expect(buttonElement).toHaveAttribute('href', buttons.redirectLink);
      } else {
        expect(buttonElement).toHaveAttribute('href', '/');
      }
    });

    it(`Expect open new tab function worked perfectly`, () => {
      const { getByTestId } = render(<Button.RedirectButton {...buttons} />);
      const buttonElement = getByTestId(buttons.dataTestId || '');

      if (buttons.isOpenNewTab) {
        expect(buttonElement).toHaveAttribute('target', '_blank');
      } else {
        expect(buttonElement).toHaveAttribute('target', '_self');
      }
    });
  }
);
