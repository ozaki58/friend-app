import React, { useState, useEffect } from "react";
import axios from "axios";
import { RoomList } from "../Room/RoomList";

export function RoomGet() {
	const [rooms, setRooms] = useState<any>([]);
	const url = "http://127.0.0.1:8000/rooms";

	const GetData = () => {
		axios.get(url).then((res) => {
			setRooms(res.data);  // APIから取得したデータをセット
		});
	};

    // 初回レンダー時にデータ取得を自動で行う
	useEffect(() => {
		GetData();
	}, []);

    return (
       <>
       <RoomList rooms={rooms} />  {/* 取得したルームデータをRoomListに渡す */}
       </>
    );
}
