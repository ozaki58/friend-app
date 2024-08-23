import React, { useState, useEffect } from "react";
import axios from "axios";
import { RoomList } from "../Room/RoomList";

interface RoomSettei {
    privateRoom: boolean;
  }

  
  export const RoomGet: React.FC<RoomSettei> = ({ privateRoom }) => {
	
    const [publicRooms, setPublicRooms] = useState<any>([]);
    const [privateRooms, setPrivateRooms] = useState<any>([]);
    let url = "http://127.0.0.1:8000/";
    if(privateRoom){
        url = "http://127.0.0.1:8000/privateRooms";
    }else{
        url = "http://127.0.0.1:8000/publicRooms";
    }

	const GetPublicData = () => {
		axios.get(url).then((res) => {
			setPublicRooms(res.data);  // APIから取得したデータをセット
		});
	};

    const GetPrivateData = () => {
		axios.get(url).then((res) => {
			setPrivateRooms(res.data);  // APIから取得したデータをセット
		});
	};

    // 初回レンダー時にデータ取得を自動で行う
	useEffect(() => {
        if(privateRoom){
            GetPrivateData();
        } else {
            GetPublicData();
        }
    }, [privateRoom]);

    return (
       <>
       {privateRoom ? <RoomList rooms={privateRooms} privateRoom={privateRoom}/> : <RoomList rooms={publicRooms} privateRoom={privateRoom}/>}  {/* 取得したルームデータをRoomListに渡す */}
       </>
    );
}
