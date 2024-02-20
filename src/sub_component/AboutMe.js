import styled from "styled-components";

const AboutMe = () => {

    return (
        <AboutMeWrap>
            <div className="title">
                <h2>ABOUT ME</h2>
            </div>
            <div className="contentBox">
                <div className="photo">
                    <img src="./assets/profile_photo.jpg" />
                </div>
                <div className="info">
                    <p className="name">고주희<span>KO JU HEE</span></p>
                    <div className="strength">
                        <p>독특한 경력을 가진 하라면 하는 깡다구 있는 신입 개발자</p>
                        <p>수년간의 사회생활로 다져진 체력과 일머리</p>
                        <p>체계적, 계획적, 구조화된 것을 좋아하는 타고난 개발자의 특성을 지닌 INFJ</p>
                    </div>
                    <div className="sum_strength">
                        <p>빠르게 변화하는 개발 트랜드 속에서<br />
                            저의 강점을 가지고 빠르게 적응하고 성장해나가는 프론트엔드 개발자가 되겠습니다.</p>
                    </div>
                    <div className="career">
                        <p><span>2023.09~2024.03</span>울산그린컴퓨터아카데미 프론트엔드 실무양성 직업훈련 수료</p>
                        <p><span>2021.12~2023.08</span>울산복지가족진흥사회서비스원 대리(인사담당, 사업담당)</p>
                        <p><span>2014.06~2021.03</span>해군 정보통신 장교 대위 전역(체계담당, 장비획득담당)</p>
                    </div>
                </div>
            </div>
        </AboutMeWrap>
    );
};

export default AboutMe;

const AboutMeWrap = styled.div`
    padding: 0 12.5%;
    .title{
        border-bottom: 1px solid #fff;
        margin-bottom: 30px;
        h2{
            font-size: 2vw;
            line-height: 2vw;
            color: #fff;
        }
    }
    .contentBox{
        display: flex;
        color: #fff;
        .photo{
            width: 30%;
            border: 1px solid #fff;
            border-radius: 50%;
            overflow: hidden;
            margin-right: 20px;
            img{
                width: 100%;
            }
        }
        .name{
            font-size: 1.8vw;
            margin-bottom: 10px;
            span{
                font-size: 1.5vw;
                margin-left: 10px;
            }
        }
        .strength{
            margin-bottom: 10px;
            p{
                font-size: 1.5vw;
                line-height: 2.5vw;
                padding-left: 3vw;
                background-image: url('./assets/icon_check.png');
                background-repeat: no-repeat;
                background-size: 2.5vw;
                
            }
        }
    }
    @media screen and (max-width: 1700px){

    }
    @media screen and (max-width: 1023px) {
        padding: 0 20px;
    }

`