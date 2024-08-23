import React from "react";
import axios from "axios";

export function UserGet() {
	const [data, setData] = React.useState<any>([]);
	const url = "http://127.0.0.1:8000";

	const GetData = () => {
		axios.get(url).then((res) => {
			setData(res.data);  // res.data だけをセットする
		});
	};

    return (
       <>
       <button onClick={GetData}>Get Data</button>
       {/* 配列やオブジェクトを表示するには、JSON.stringify を使う */}
       <div>{JSON.stringify(data)}</div>
       </>
    );
}
