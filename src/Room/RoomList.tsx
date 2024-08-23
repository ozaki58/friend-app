import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Room.css';

interface Room {
  id: number;
  name: string;
  description: string;
  timestamp: string;
}

interface RoomListProps {
  rooms: Room[];  // ルームの配列をプロパティとして受け取る
  privateRoom: boolean;
}

export const RoomList: React.FC<RoomListProps> = ({ rooms, privateRoom }) => {
  const navigate = useNavigate();

  // ルームクリック時に遷移
  const handleRoomClick = (id: number) => {
    if (privateRoom) {
      navigate(`/privateRooms/${id}`);  // ルームIDに基づいて遷移
    } else {
      navigate(`/publicRooms/${id}`);  // ルームIDに基づいて遷移
    }
  };

  return (
    <div className="room-list-container">
      <h1 className="room-list-title">ルーム一覧</h1>
      <div className="room-list">
        {rooms.map((room) => (
          <div key={room.id} className="room-item" onClick={() => handleRoomClick(room.id)}>
            <div className="room-info">
              <h2 className="room-name">{room.name}</h2>
              <p className="last-message">{room.description}</p>
            </div>
            <span className="timestamp">{room.timestamp}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
