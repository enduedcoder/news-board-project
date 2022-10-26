import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../ui/card/Card';
import './BoardList.scss';
import { API_BASE_URL } from '../utils';

interface BoardType {
  id: string;
  name: string;
}

export default function BoardList() {
  const [isLoading, setIsLoading] = useState(false);
  const [boardList, setBoardList] = useState<BoardType[]>();
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);

    fetch(`${API_BASE_URL}/board`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setBoardList(data);
        setIsLoading(false);
      });
  }, []);

  const handleClick = (board: BoardType) => {
    navigate(`/board/${board.id}/news`);
  };

  const renderBoardList = boardList?.map((board, i) => (
    <Card key={board.id} onButtonClick={() => handleClick(board)}>
      {board.name}
    </Card>
  ));

  return (
    <>
      {isLoading && <p>Loading Data</p>}

      {boardList && (
        <section className="board-content">{renderBoardList}</section>
      )}
    </>
  );
}
