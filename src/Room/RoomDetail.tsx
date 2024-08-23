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

export const RoomDetail = (props: { privateRoom: boolean }) => {
  const { id } = useParams<{ id: string }>();  // URLからルームIDを取得
  const [room, setRoom] = useState<Room | null>(null);

  useEffect(() => {
    // ルームIDを使ってAPIから詳細を取得
    if (props.privateRoom) {
      axios.get(`http://127.0.0.1:8000/privateRooms/${id}`)
        .then((res) => {
          setRoom(res.data);
        })
        .catch((err) => {
          console.error(err);
        });
    } else {
      axios.get(`http://127.0.0.1:8000/publicRooms/${id}`)
        .then((res) => {
        setRoom(res.data);
      })
      .catch((err) => {
          console.error(err);
        });
    }
  }, [id]);

  if (!room) return <div>Loading...</div>;

  return (
    <Threads roomName={room.name} userName="test" content="test" time="1時間前" replyCount={2} />
  );
};
