const MovieModal = ({id, title, year, viewingRating, runningTime, score, directorName, actorName, story, photo, closeModal}) => {
    return (
        <div className="MovieModal">
            <button onClick={()=>{closeModal();}}>❌</button>
            <img src={photo} />
            <div>
                <p className="modalidx">{id+1}</p>
                <p className="modaltitle">
                    <span className="mtitle">{title}</span>
                    <span className={viewingRating==='All'?'vrating allstyle':(viewingRating===12)?'vrating twstyle':(viewingRating===15?'vrating fistyle':'vrating eistyle')}>{viewingRating}</span>
                </p>
                <p className="col2">{year}년 / {runningTime}분</p>
                <p className="modalScore">★ {score}점</p>
                <p className="director">감독 : {directorName.map((it)=><span>{it}<span>, </span></span>)}</p>
                <p className="actor">출연진 : {actorName.map((it)=><span>{it}<span>, </span></span>)}</p>
                <p className="story">{story}</p>
            </div>
        </div>
    );
};

export default MovieModal;