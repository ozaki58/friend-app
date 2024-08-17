import React, { useState } from 'react';
import { Threads } from '../Threads';
import './Room.css';

interface Room {
  id: number;
  name: string;
  lastMessage: string;
  timestamp: string;
}
export const RoomList = () => {
  const [rooms, setRooms] = useState<Room[]>([
    { id: 1, name: "一般チャット", lastMessage: "こんにちは！", timestamp: "10:30" },
    { id: 2, name: "技術討論", lastMessage: "Reactについて質問があります", timestamp: "11:45" },
    { id: 3, name: "雑談部屋", lastMessage: "今日の天気いいですね", timestamp: "12:15" },
    { id: 4, name: "プロジェクトA", lastMessage: "進捗報告をお願いします", timestamp: "13:00" },
    { id: 5, name: "お知らせ", lastMessage: "明日はミーティングがあります", timestamp: "14:30" },
  ]);

  const [selectedRoom, setSelectedRoom] = useState(null);

  

  const handleBackClick = () => {
    setSelectedRoom(null);
  };

  

  return (
    <div className="room-list-container">
      <h1 className="room-list-title">ルーム一覧</h1>
      <div className="room-list">
        {rooms.map((room) => (
          <div key={room.id} className="room-item" >
            <div className="room-info">
              <h2 className="room-name">{room.name}</h2>
              <p className="last-message">{room.lastMessage}</p>
            </div>
            <span className="timestamp">{room.timestamp}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

