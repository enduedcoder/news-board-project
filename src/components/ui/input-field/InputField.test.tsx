import { render, screen } from '@testing-library/react';
import InputField from './InputField';

const INPUT_TEST_ID_SELECTOR = 'input-test-id';

const defaultTestProps = {
  id: 'input-id',
  inputLabel: 'input-label',
  inputName: 'input-name',
  inputPlaceholder: 'input-placeholder',
  inputValue: 'input-value',
};

describe('InputField', () => {
  it('should render content', () => {
    render(<InputField {...defaultTestProps} />);
    const inputElement = screen.getByTestId(INPUT_TEST_ID_SELECTOR);

    expect(inputElement).toBeInTheDocument();
  });
});
