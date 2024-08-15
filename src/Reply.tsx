import React from 'react';

interface ReplyProps {
  userName: string;
  content: string;
  time: string;
}

export const Reply: React.FC<ReplyProps> = ({ userName, content, time }) => {
  return (
    <div className="reply">
      <div className="thread-header">
        <div className="user-info">
          <div className="thread-avatar"></div>
          <span className="thread-username">{userName}</span>
        </div>
        <span className="thread-time">{time}</span>
      </div>
      <div className="reply-content">{content}</div>
    </div>
  );
}