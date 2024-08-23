import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Threads } from '../Threads';
interface Room {
  id: number;
  name: string;
  description: string;
  timestamp: string;
}

export const RoomDetail = () => {
  const { id } = useParams<{ id: string }>();  // URLからルームIDを取得
  const [room, setRoom] = useState<Room | null>(null);

  useEffect(() => {
    // ルームIDを使ってAPIから詳細を取得
    axios.get(`http://127.0.0.1:8000/rooms/${id}`)
      .then((res) => {
        setRoom(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [id]);

  if (!room) return <div>Loading...</div>;

  return (
    <Threads roomName={room.name} userName="test" content="test" time="1時間前" replyCount={2} />
  );
};
