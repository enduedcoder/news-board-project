import { render, screen } from '@testing-library/react';
import NewsList from './NewsList';

const WRAPPER_TEST_ID_SELECTOR = 'newslist-container-test-id';

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom') as any),
  useNavigate: () => mockedUsedNavigate,
}));

describe('NewsList', () => {
  it('should render content', () => {
    render(<NewsList />);
    const wrapper = screen.getByTestId(WRAPPER_TEST_ID_SELECTOR);

    expect(wrapper).toBeInTheDocument();
  });
});
