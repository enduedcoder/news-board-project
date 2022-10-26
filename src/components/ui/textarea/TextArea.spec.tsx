import { render, screen } from '@testing-library/react';
import TextArea from './TextArea';

const TEXTAREA_TEST_ID_SELECTOR = 'text-area-test-id';

const defaultTestProps = {
  id: 'textarea-id',
  textAreaName: 'textarea-name',
  textAreaPlaceholder: 'textarea-placeholder',
};

describe('TextArea', () => {
  it('should render content', () => {
    render(<TextArea {...defaultTestProps} />);
    const textAreaElement = screen.getByTestId(
      TEXTAREA_TEST_ID_SELECTOR
    );

    expect(textAreaElement).toBeInTheDocument();
  });
});
