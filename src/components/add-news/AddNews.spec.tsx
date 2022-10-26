import { render, screen } from '@testing-library/react';
import AddNews from './AddNews';

const FORM_CONTAINER_TEST_ID = 'form-container-test-id';

const defaultTestProps = {
  addNews: (arg: string) => {},
};

describe('AddNews', () => {
  it('should render content', () => {
    render(<AddNews {...defaultTestProps} />);
    const formContainer = screen.getByTestId(FORM_CONTAINER_TEST_ID);

    expect(formContainer).toBeInTheDocument();
  });
});
