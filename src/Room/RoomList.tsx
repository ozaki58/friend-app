import React from 'react';
import './Room.css';

interface Room {
  id: number;
  name: string;
  lastMessage: string;
  timestamp: string;
}

interface RoomListProps {
  rooms: Room[];  // ルームの配列をプロパティとして受け取る
}

export const RoomList: React.FC<RoomListProps> = ({ rooms }) => {
  return (
    <div className="room-list-container">
      <h1 className="room-list-title">ルーム一覧</h1>
      <div className="room-list">
        {rooms.map((room) => (
          <div key={room.id} className="room-item">
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
