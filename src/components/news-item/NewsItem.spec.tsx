import { render, screen } from '@testing-library/react';
import { NewsDetailsType } from '../utils';
import NewsItem from './NewsItem';

const WRAPPER_TEST_ID_SELECTOR = 'news-card-test-id';

const defaultTestProps = {
  newsData: [
    {
      CreatedAt: 'some date',
      author: 'test-author',
      boardId: 'test-board-id',
      description: 'some description',
      id: 'some-id',
      imageURL: 'some url',
      status: 'some-status',
      title: 'some title',
    },
  ],

  onDeleteNews: (arg: NewsDetailsType) => {
    console.log(arg);
  },
};

describe('NewsItem', () => {
  it('should render content', () => {
    render(<NewsItem {...defaultTestProps} />);
    const wrapper = screen.getByTestId(WRAPPER_TEST_ID_SELECTOR);

    expect(wrapper).toBeInTheDocument();
  });

  it('should render title', () => {
    render(<NewsItem {...defaultTestProps} />);
    const titleText = screen.getByText(
      defaultTestProps.newsData[0].title
    );

    expect(titleText).toBeInTheDocument();
  });

  it('should render author', () => {
    render(<NewsItem {...defaultTestProps} />);
    const authorText = screen.getByText(
      defaultTestProps.newsData[0].author
    );

    expect(authorText).toBeInTheDocument();
  });

  it('should render description', () => {
    render(<NewsItem {...defaultTestProps} />);
    const descriptionText = screen.getByText(
      defaultTestProps.newsData[0].description
    );

    expect(descriptionText).toBeInTheDocument();
  });

  it('should render status', () => {
    render(<NewsItem {...defaultTestProps} />);
    const statusText = screen.queryAllByText(
      defaultTestProps.newsData[0].status
    );

    expect(statusText.length).toBeGreaterThan(0);
  });
});
