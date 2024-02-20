import styled from "styled-components";

const Home = () => {

    return (
        <HomeWrap>
            <div className="txt">
                안녕하세요.<br />
                프론트엔드 신입 개발자<br />
                고주희 입니다.<br />
            </div>
            <div className="egg_click">
                <img src="./assets/egg09.png"/>
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
    margin-bottom: 50px;
    color : #fff;
    font-size: 4vw;
    font-weight: 700;
    line-height: 6vw;
    box-sizing: border-box;
    // background-color: beige;
    .egg_click{
        position: relative;
        position: absolute;
        top: 10vw;
        right: 12.5%;
        cursor: pointer;
    }
    @media screen and (max-width: 1700px){
        .egg_click{
            top: 9vw;
            right: 10vw;
            img{
                width: 32vw;
            }
        }
    }
    @media screen and (max-width: 1023px) {
        padding: 0 20px;
        padding-top: 15vw;
        margin-bottom: 60vw;
        text-align: center;
        .egg_click{
            position: initial;
            width: 70%;
            margin: 0 auto;
            img{
                width: 100%;
            }
        }
    }

`