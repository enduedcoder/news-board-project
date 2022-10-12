import React, { useEffect, useState } from 'react';
import Card from '../ui/card/Card';
import './BoardList.css';

interface BoardType {
  id: string;
  name: string;
}

export default function BoardList() {
  const [isLoading, setIsLoading] = useState(false);
  const [boardList, setBoardList] = useState<BoardType[]>();

  useEffect(() => {
    fetch('http://localhost:8080/v1/board')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setBoardList(data);
      });
  }, []);

  const renderBoardList = boardList?.map((board, i) => (
    <Card key={board.id}>{board.name}</Card>
  ));

  return (
    <>
      <section className="board-content">{renderBoardList}</section>
    </>
  );
}
