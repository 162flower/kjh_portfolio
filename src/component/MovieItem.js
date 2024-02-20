import { useState } from "react";
import MovieModal from "./MovieModal";

const MovieItem = ({id, title, year, viewingRating, runningTime, score, directorName, actorName, story, photo, dummy}) => {

    const [modalState, setModatState] = useState(false);

    const clickBtn = () => {
        setModatState(true);
    }

    const closeModal = () => {
        setModatState(false);
    }

    return (
        <li className="MovieItem">
            <img src={photo} />
            <div className="info">
                <p className="title">
                    <span className={viewingRating==='All'?'vrating allstyle':(viewingRating===12)?'vrating twstyle':(viewingRating===15?'vrating fistyle':'vrating eistyle')}>{viewingRating}</span>
                    <span className="title01">{title}</span>
                </p>
                <p>관람등급 : {viewingRating}{viewingRating==='All'?'':'세 이상'}</p>
                <p>상영시간 : {runningTime}분</p>
                <p>평점 : {score}점</p>
            </div>
            <div className="over">
                <button onClick={clickBtn}>상세보기</button>
            </div>
            <div className={modalState? 'modal open':'modal'}>
                {dummy.map((it)=>(
                    <MovieModal key={it.id} id={id} title={title} year={year} viewingRating={viewingRating} runningTime={runningTime} score={score} directorName={directorName} actorName={actorName} story={story} photo={photo} closeModal={closeModal}/>
                ))}
            </div>
        </li>
    );
};

export default MovieItem;