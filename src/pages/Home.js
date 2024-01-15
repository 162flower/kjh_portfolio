import { useContext, useEffect, useState } from "react";

import MyHeader from "../component/MyHeader";
import MyButton from "../component/MyButton";
import DiaryList from "../component/DiaryList";
import {DiaryStateContext} from "../App"

const Home = () => {
    // App 컴포넌트의 다이어리 전체 목록에 대한 변수
    const diaryList = useContext(DiaryStateContext);

    // 해당 월의 일기 데이터에 대한 상태변수
    const [data, setData] = useState([]);
    const [nowDate, setNowDate] = useState(new Date());
    const head_text = `${nowDate.getFullYear()}년 ${nowDate.getMonth()+1}월`;

    useEffect(()=>{
        const firstDay = new Date(
            nowDate.getFullYear(), nowDate.getMonth(), 1
        ).getTime();
        const lastDay = new Date(
            nowDate.getFullYear(), nowDate.getMonth()+1, 0
        ).getTime();
        setData(
            diaryList.filter((item) => 
                firstDay <= item.date && item.date <= lastDay
            )
        );
    },[diaryList, nowDate]);

    // new Date('2024-02-24') 또는 new Date(2024, 1, 24)
    const increaseMonth = () => {
        setNowDate(
            new Date(nowDate.getFullYear(), nowDate.getMonth() + 1, nowDate.getDate())
        );
    }
    const decreaseMonth = () => {
        setNowDate(
            new Date(nowDate.getFullYear(), nowDate.getMonth() - 1, nowDate.getDate())
        );
    }

    return (
        <div className="Home">
            <MyHeader 
                headTxt={head_text}
                leftChild={
                    <MyButton text={'이전 달'} onClick={decreaseMonth} />
                }
                rightChild={
                    <MyButton text={'다음 달'} onClick={increaseMonth} />
                }
            />
            <DiaryList diaryData={data}/>
        </div>
    );
};

export default Home;