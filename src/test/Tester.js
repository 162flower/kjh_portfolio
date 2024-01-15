// 6) 라우트로 지정 된 경로간의 이동을 위해 Link 사용. 
// import 시키기.
import {Link} from "react-router-dom";

const Tester = () => {
    return (
        <div className="Tester">
            {/* 7) Link 컴포넌트의 to라는 props에 path값 작성하기. */}
            <Link to={'/'}>Home 바로가기</Link>
            <br />
            <Link to={'/diary'}>Diary 바로가기</Link>
            <br />
            <Link to={'/new'}>New 바로가기</Link>
            <br />
            <Link to={'/edit'}>Edit 바로가기</Link>
        </div>
    );
};

export default Tester;