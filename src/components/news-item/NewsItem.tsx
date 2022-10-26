import React, { useEffect, useState } from 'react';
import AddNews from '../add-news/AddNews';
import Button from '../ui/button/Button';
import Select from '../ui/select/Select';
import './NewsItem.scss';
import { API_BASE_URL, NewsDetailsType } from '../utils';

interface News {
  newsData: NewsDetailsType[];
  onDeleteNews: (args: NewsDetailsType) => void;
}

const options = [
  {
    label: 'Draft',
    value: 'draft',
  },
  {
    label: 'Published',
    value: 'published',
  },
  {
    label: 'Archived',
    value: 'archive',
  },
];

export default function NewsItem({ newsData, onDeleteNews }: News) {
  const [id, setId] = useState<string>(null!);
  const [newsDataArray, setNewsDataArray] =
    useState<NewsDetailsType[]>(newsData);
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    setNewsDataArray(newsData);
  }, [newsData]);

  const handleEditNews = (newsDataItem: NewsDetailsType) => {
    setEditing(true);

    if (newsDataItem.id) {
      setId(newsDataItem.id);
    }
  };

  const handleDeleteNews = (data: NewsDetailsType) => {
    fetch(`${API_BASE_URL}/news/${data.id}`, {
      method: 'DELETE',
    }).then(() => {
      onDeleteNews(data);
    });
  };

  const handleStatusChange = (
    e: any,
    newsDataItem: NewsDetailsType
  ) => {
    fetch(
      `${API_BASE_URL}/news/${newsDataItem.id}/${e.target.value}`,
      {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
      }
    ).then((response) => {
      setNewsDataArray((prevState) => {
        return prevState.map((newsItem) =>
          newsItem.id === newsDataItem.id
            ? { ...newsDataItem, status: e.target.value }
            : newsItem
        );
      });
    });
  };

  const renderUpdatedNews = (data: NewsDetailsType) => {
    setNewsDataArray((prevState) => {
      return prevState.map((newsItem) =>
        newsItem.id === data.id ? data : newsItem
      );
    });
    setEditing(false);
  };

  const toggleForm = (value: boolean) => {
    setEditing(!value);
  };

  return (
    <>
      {newsDataArray.map((newsDataItem) => {
        return (
          <div
            className="news-card"
            key={newsDataItem.id}
            data-testid="news-card-test-id"
          >
            <div
              className="news-header"
              data-testid="news-header-test-id"
            >
              <h4>{newsDataItem.status}</h4>
            </div>

            <Select
              values={options}
              selectedValue={newsDataItem.status}
              onSelectChange={(e) =>
                handleStatusChange(e, newsDataItem)
              }
            />

            <div className="news-body">
              <img
                src={newsDataItem.imageURL}
                alt={`${newsDataItem.title}`}
              />
              <div className="news-details">
                <p className="news-title">
                  <b>Title : </b>
                  {newsDataItem.title}
                </p>

                <p className="news-author">
                  <b>Author : </b>
                  {newsDataItem.author}
                </p>

                <p className="news-description">
                  <b>Description : </b>
                  {newsDataItem.description}
                </p>

                <p className="news-status">
                  <b>STATUS : </b>
                  {newsDataItem.status}
                </p>

                <div className="new-item-button-container">
                  <Button
                    classes="delete-btn"
                    onButtonClick={(e) =>
                      handleDeleteNews(newsDataItem)
                    }
                  >
                    Delete
                  </Button>

                  <Button
                    onButtonClick={(e) =>
                      handleEditNews(newsDataItem)
                    }
                  >
                    Edit
                  </Button>
                </div>
              </div>
            </div>
            {editing && id === newsDataItem.id && (
              <AddNews
                isEdit={editing}
                data={newsDataItem}
                addNews={(data) => renderUpdatedNews(data)}
                onToggleForm={toggleForm}
              />
            )}
          </div>
        );
      })}
    </>
  );
}
