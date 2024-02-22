/**
 *  DONE
 *
 *  Check render successfully of not by taking a snapshot
 *
 */

import { tableMockData } from '@root/__mock-props__/component';
import { LandingPageView } from '@src/components/view';
import { render } from '@testing-library/react';

describe(`When landing page will view`, () => {
  it(`Expect it has been rendered successfully`, () => {
    const { getByTestId } = render(<LandingPageView {...tableMockData} />);
    const landingPageWrapperElement = getByTestId('landingPagePicker');
    expect(landingPageWrapperElement).toBeInTheDocument();
    expect(landingPageWrapperElement).toMatchSnapshot();
  });
});
