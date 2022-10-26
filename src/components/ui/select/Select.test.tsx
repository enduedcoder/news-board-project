import { render, screen } from '@testing-library/react';
import Select from './Select';

const SELECT_TEST_ID_SELECTOR = 'select-test-id';

const defaultTestProps = {
  values: [
    {
      label: 'Draft',
      value: 'draft',
    },
  ],
  selectedValue: 'draft',
};

describe('Select', () => {
  it('should render content', () => {
    render(<Select {...defaultTestProps} />);
    const selectElement = screen.getByTestId(SELECT_TEST_ID_SELECTOR);

    expect(selectElement).toBeInTheDocument();
  });
});
