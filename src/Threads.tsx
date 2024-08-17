import React, { useState, useRef, useEffect } from 'react';
import './index.css';

interface ThreadsProps {
    userName: string;
    content: string;
    time: string;
    replyCount: number;
}

export const Threads: React.FC<ThreadsProps> = ({ userName, content, time, replyCount }) => {
    const [threads, setThreads] = useState([
        {
            userName: "test",
            content: "test",
            time: "1時間前",
            replyCount: 2
        }
    ]);
    const [newThread, setNewThread] = useState({
        userName: "",
        content: "",
        time: "",
        replyCount: 0
    });

    const threadContainerRef = useRef<HTMLDivElement>(null);

    const submitThread = () => {
        const currentTime = new Date().toLocaleTimeString('ja-JP', { hour: 'numeric', minute: 'numeric' });
        const threadToAdd = {
            ...newThread,
            time: currentTime + "に投稿",
            replyCount: 0
        };
        setThreads([threadToAdd, ...threads]);
        setNewThread({ userName: "", content: "", time: "", replyCount: 0 });
    }

    useEffect(() => {
        if (threadContainerRef.current) {
            threadContainerRef.current.scrollTop = 0;
        }
    }, [threads]);

    return (
        <div className="threads-page">
            <div className="thread-container" ref={threadContainerRef}>
                {threads.map((thread, index) => (
                    <div key={index} className="thread thread-spacing">
                        <div className="thread-header">
                            <div className="user-info">
                                <div className="thread-avatar"></div>
                                <span className="thread-username">{thread.userName}</span>
                            </div>
                            <span className="thread-time">{thread.time}</span>
                        </div>
                        <div className="thread-content">
                            <p>{thread.content}</p>
                        </div>
                        <div className="thread-actions">
                            <button className="action-button">返信数{thread.replyCount}</button>
                        </div>
                    </div>
                ))}
            </div>
            <div className="thread-form-container">
                <div className="thread-form">
                    
                    <input
                        type="text"
                        placeholder="内容"
                        value={newThread.content}
                        onChange={(e) => setNewThread({ ...newThread, content: e.target.value })}
                    />
                    <button onClick={submitThread}>投稿</button>
                </div>
            </div>
        </div>
    )
}