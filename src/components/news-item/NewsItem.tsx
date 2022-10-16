import React from 'react';
import './NewsItem.css';

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

interface News {
  newsData: NewsDetailsType[];
}

export default function NewsItem({ newsData }: News) {
  return (
    <>
      {newsData.map((newsDataItem) => {
        return (
          <div className="news-card" key={newsDataItem.id}>
            <div className="news-header">
              <h5>{newsDataItem.status}</h5>
            </div>
            <div className="news-body">
              <h5 className="new-title">{newsDataItem.title}</h5>
              <p>{newsDataItem.boardId}</p>
              <p>{newsDataItem.author}</p>
              <p>{newsDataItem.description}</p>
              <button className="news-delete">Delete</button>
              <button className="news-edit">Delete</button>
            </div>
          </div>
        );
      })}
    </>
  );
}
