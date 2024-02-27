import { useState } from "react";
import styled from "styled-components";

const Home = () => {
    const [count, setCount] = useState(8);
    
    return (
        <HomeWrap id="home">
            <div className="txt">
                안녕하세요.<br />
                프론트엔드 신입 개발자<br />
                고주희 입니다.<br />
            </div>
            <div className={ count === 1 ? 'egg_click none':'egg_click'} onClick={
                ()=>{ setCount(count-1)}
            }>
                {
                    count === 1 ?
                        <div className="egg_photo">
                            <img src="./assets/egg.gif"/>
                            <p>Ta-da!</p>
                        </div>
                    : <div className="egg_photo">
                        <img src={`./assets/egg0${count}.png`}/>
                        <p>Click</p>
                      </div>
                }
            </div>
        </HomeWrap>
    );
};

export default Home;

const HomeWrap = styled.div`
    position: relative;
    padding: 0 12.5%;
    padding-top: 15vw;
    height: 45vw;
    min-height: 200px;
    color : #fff;
    font-size: 4vw;
    font-weight: 700;
    line-height: 6vw;
    box-sizing: border-box;
    .txt{
        pointer-events : none;
    }
    .egg_click{
        position: relative;
        position: absolute;
        top: 15vw;
        right: 20%;
        cursor: pointer;
        .egg_photo p{
            text-align: center;
            font-size: clamp(14px, 3vw, 50px);
        }
        &.none{
            pointer-events : none;
        }
    }
    @media screen and (max-width: 1700px){
        .egg_click{
            right: 15%;
        }
    }
    @media screen and (max-width: 1023px) {
        padding: 0 20px;
        padding-top: 20vw;
        margin-bottom: 50vw;
        text-align: center;
        .egg_click{
            position: initial;
            width: 35%;
            margin: 0 auto;
            margin-top: 5vw;
            img{
                width: 100%;
            }
        }
    }
    @media screen and (max-width: 767px) {
        font-size: clamp(18px, 3.5vw, 20px);
    }
    @media screen and (max-width: 500px){
        padding-top: 30vw;
    }
`