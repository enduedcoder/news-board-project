import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import NewsItem from '../news-item/NewsItem';
import './NewsList.css';

interface NewsDetailsType {
  CreatedAt: string;
  author: string;
  boardId: string;
  description: string;
  id: string;
  imageURL: string;
  status: string;
  title: string;
}

export default function NewsList() {
  let [draftsData, setDraftsData] = useState<NewsDetailsType[]>([]);
  let [archiveData, setArchiveData] = useState<NewsDetailsType[]>([]);
  let [publishedData, setPublishedData] = useState<NewsDetailsType[]>(
    []
  );
  let [isLoading, setIsloading] = useState(true);
  let { boardId } = useParams();

  useEffect(() => {
    setIsloading(true);

    fetch(`http://localhost:8080/v1/board/${boardId}/news`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setDraftsData(data.drafts);
        setArchiveData(data.archives);
        setPublishedData(data.published);
        setIsloading(false);
      });
  }, [boardId]);

  const renderNewsList = (
    <>
      <h1>Board News</h1>
      <section className="news-content">
        <NewsItem newsData={draftsData} />
        <NewsItem newsData={archiveData} />
        <NewsItem newsData={publishedData} />
      </section>
    </>
  );
  return (
    <>
      {isLoading && <p>Loading Data</p>}

      {!isLoading && renderNewsList}
    </>
  );
}
