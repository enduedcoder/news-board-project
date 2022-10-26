import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import AddNews from '../add-news/AddNews';
import NewsItem from '../news-item/NewsItem';
import Button from '../ui/button/Button';
import './NewsList.scss';
import { API_BASE_URL, NewsDetailsType } from '../utils';

export default function NewsList() {
  let navigate = useNavigate();
  let [showAddNewsForm, setShowAddNewsForm] = useState(false);
  let [draftsData, setDraftsData] = useState<NewsDetailsType[]>([]);
  let [archiveData, setArchiveData] = useState<NewsDetailsType[]>([]);
  let [publishedData, setPublishedData] = useState<NewsDetailsType[]>(
    []
  );
  let [isLoading, setIsloading] = useState(false);
  let { boardId } = useParams();

  useEffect(() => {
    setIsloading(true);

    fetch(`${API_BASE_URL}/board/${boardId}/news`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setDraftsData(data.drafts);
        setArchiveData(data.archives);
        setPublishedData(data.published);
        setIsloading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [boardId]);

  const handleAddNews = () => {
    setShowAddNewsForm(true);
  };

  const handleGoToPreviousPage = () => {
    navigate('/board');
  };

  const addNews = (data: NewsDetailsType) => {
    switch (data.status) {
      case 'draft':
        setDraftsData([{ ...data }, ...draftsData]);
        break;

      default:
        break;
    }
  };

  const toggleForm = (value: boolean) => {
    setShowAddNewsForm(!value);
  };

  const removeNewsItem = (
    prevData: NewsDetailsType[],
    data: NewsDetailsType
  ) => {
    const updatedDraftsData = prevData.filter(function (value) {
      return value.id !== data.id;
    });

    return updatedDraftsData;
  };

  const handleDeleteNews = (data: NewsDetailsType) => {
    switch (data.status) {
      case 'draft':
        setDraftsData((prevData) => {
          return [...removeNewsItem(prevData, data)];
        });
        break;
      case 'archived':
        setArchiveData((prevData) => {
          return [...removeNewsItem(prevData, data)];
        });
        break;
      case 'published':
        setPublishedData((prevData) => {
          return [...removeNewsItem(prevData, data)];
        });
        break;

      default:
        break;
    }
  };

  return (
    <div
      className="newslist-container"
      data-testid="newslist-container-test-id"
    >
      {isLoading && <p>Loading Data</p>}

      <div className="newslist-button-container">
        <Button
          classes="add-news-btn"
          onButtonClick={handleGoToPreviousPage}
        >
          Previous page
        </Button>
        <Button classes="add-news-btn" onButtonClick={handleAddNews}>
          Add news
        </Button>
      </div>

      {showAddNewsForm && (
        <AddNews addNews={addNews} onToggleForm={toggleForm} />
      )}

      {!isLoading && (
        <>
          <section className="news-content">
            <NewsItem
              newsData={draftsData}
              onDeleteNews={handleDeleteNews}
            />

            <NewsItem
              newsData={publishedData}
              onDeleteNews={handleDeleteNews}
            />

            <NewsItem
              newsData={archiveData}
              onDeleteNews={handleDeleteNews}
            />
          </section>
        </>
      )}
    </div>
  );
}
