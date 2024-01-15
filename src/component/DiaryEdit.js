import { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import MyHeader from "../component/MyHeader";
import MyButton from "../component/MyButton";
import EmotionItem from "./EmotionItem";
import { DiaryDispatchContext } from "../App";

import { getStringDate } from "../util/date.js"
import { emotionList } from "../util/emotion.js";

const DiaryEdit = ({isEdit, originData}) => {
    const titleRef = useRef();
    const contentRef = useRef();
    const notiTitleRef = useRef();
    const notiContentRef = useRef();
    
    const navigate = useNavigate();
    const [date, setDate] = useState(getStringDate(new Date()));
    const [emotion, setEmotion] = useState(3);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    
    const { onCreate, onEdit } = useContext(DiaryDispatchContext);

    const handleClickEmotion = (emo) => {
        setEmotion(emo);
    };
    const changeTitle = (e) => {
        setTitle(e.target.value);
        notiTitleRef.current.style.display='none';
    };
    const changeContent = (e) => {
        setContent(e.target.value)
        if(e.target.value.length>10){
        notiContentRef.current.style.display='none';
        };   
    };
    const handleSubmit = () => {
        if(title.length<1){
            titleRef.current.focus();
            notiTitleRef.current.style.display = 'block';
            return;
        }
        if(content.length<10){
            contentRef.current.focus();
            notiContentRef.current.style.display = 'block';
            return;
        }
        if(window.confirm(isEdit?'일기를 수정하시겠습니까?':'새로운 일기를 작성하시겠습니까?')){
            if(!isEdit){
                onCreate(title, content, date, emotion);
            } else{
                onEdit(originData.id, title, content, date, emotion);
            };
        };
        navigate('/');
    };

    useEffect(()=>{
        if(isEdit){
            setDate(getStringDate(new Date(parseInt(originData.date))));
            setEmotion(parseInt(originData.emotion));
            setTitle(originData.title);
            setContent(originData.content);
        }
    },[isEdit, originData])


    return (
        <div className="DiaryEdit">
            <MyHeader
                headTxt={ isEdit ? '일기 수정하기' : '새 일기쓰기'}
                // navigate(-1) 뒤로가기 기능
                leftChild={<MyButton text={'뒤로가기'} onClick={() => {navigate(-1)}}/>}
            />
            <div className="diaryForm">
                <div className="date">
                    <h3>📅 오늘은 언제인가요?</h3>
                    <p>
                        <input
                            type="date"
                            value={date}
                            onChange={(e) => {setDate(e.target.value)}}
                        />
                    </p>
                </div>
                <div className="emotion">
                    <h3>❤️ 오늘의 기분은 어떤가요?</h3>
                    <div className="emotion_list">
                        <ul>
                            {emotionList.map((item) => (
                                <EmotionItem
                                    key={item.emotion_id}
                                    {...item}
                                    click={handleClickEmotion}
                                    isSelect={item.emotion_id===emotion}
                                />
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="title">
                    <h3>☺️ 오늘의 제목</h3>
                    <input 
                        type="text"
                        placeholder="오늘을 한마디로 표현한다면?"
                        ref={titleRef}
                        value={title}
                        onChange={changeTitle}
                    />
                    <p 
                        className="noti" 
                        ref={notiTitleRef}
                    >
                        제목을 반드시 입력해주세요.
                    </p>
                </div>
                <div className="content">
                    <h3>✏️ 오늘의 일기</h3>
                    <textarea 
                        placeholder="오늘은 어떤 하루 였나요?" 
                        ref={contentRef}
                        value={content}
                        onChange={changeContent}
                    ></textarea>
                    <p 
                        className="noti" 
                        ref={notiContentRef}
                    >
                        10글자 이상 입력해주세요.
                    </p>
                </div>
                <div className="btn">
                    <MyButton text={'취소하기'} onClick={()=>{navigate(-1)}}/>
                    <MyButton 
                        text={'작성완료'} 
                        type={'positive'} 
                        onClick={handleSubmit}
                    />
                </div>
            </div>
        </div>
    );
};

export default DiaryEdit;