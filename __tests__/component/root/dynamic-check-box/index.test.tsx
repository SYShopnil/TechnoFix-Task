/**
 *  DONE
 *
 *  Check render successfully of not by taking a snapshot
 *
 */

import { dynamicCheckBoxMock } from '@root/__mock-props__/component/root/dynamic-check-box';
import { DynamicCheckBoxDemo } from '@root/stories/components/root/dynamic-check-box/checkbox.stories';
import { render } from '@testing-library/react';

describe(`When Check Box has rendered`, () => {
  it(`Expect it has been rendered successfully`, () => {
    const { getByTestId } = render(
      <DynamicCheckBoxDemo {...dynamicCheckBoxMock} />
    );
    const checkBoxElement = getByTestId(
      dynamicCheckBoxMock.dataTestId || 'checkBoxPicker'
    );
    expect(checkBoxElement).toBeInTheDocument();
    expect(checkBoxElement).toMatchSnapshot();
  });
});
