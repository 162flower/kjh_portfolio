import styled from "styled-components";

const AboutMe = () => {

    return (
        <div id="aboutMe">
            <AboutMeWrap>
                <div className="title">
                    <h2>ABOUT ME</h2>
                </div>
                <div className="contentBox">
                    <div className="photo">
                        <img src="./assets/profile_photo.jpg" alt="프로필 사진" />
                    </div>
                    <div className="info">
                        <p className="name">고주희<span>KO JU HEE</span></p>
                        <div className="strength">
                            <p>독특한 경력을 가진 하라면 하는 깡다구 있는 신입 개발자</p>
                            <p>수년간의 사회생활로 다져진 체력과 일머리</p>
                            <p>체계적, 계획적, 구조화된 것을 좋아하는 타고난 개발자의 특성을 지닌 INFJ</p>
                        </div>
                        <div className="sum_strength">
                            <p>
                                빠르게 변화하는 개발 트랜드 속에서<br />
                                저의 강점을 가지고 빠르게 적응하고 성장해나가는<br />
                                프론트엔드 개발자가 되겠습니다.
                            </p>
                        </div>
                        <div className="career">
                            <p><span>2023.09~2024.03</span>울산그린컴퓨터아카데미 프론트엔드 실무양성 직업훈련 수료</p>
                            <p><span>2021.12~2023.08</span>울산복지가족진흥사회서비스원 대리(인사담당, 사업담당)</p>
                            <p><span>2014.06~2021.03</span>해군 정보통신 장교 대위 전역(체계담당, 장비획득담당)</p>
                        </div>
                    </div>
                </div>
            </AboutMeWrap>
        </div>
    );
};

export default AboutMe;

const AboutMeWrap = styled.div`
    padding: 0 12.5%;
    padding-top: 10vw;
    pointer-events : none;
    .title{
        border-bottom: 1px solid #fff;
        margin-bottom: 3vw;
        h2{
            font-size: clamp(28px, 3vw, 40px);
            line-height: 3vw;
            color: #fff;
        }
    }
    .contentBox{
        display: flex;
        align-items: center;
        color: #fff;
        .photo{
            width: 35%;
            border: 1px solid #fff;
            border-radius: 50%;
            overflow: hidden;
            margin-right: 5vw;
            img{
                width: 100%;
            }
        }
        .info{
            flex-grow: 1;
        }
        .name{
            font-size: clamp(18px, 1.8vw, 30px);
            margin-bottom: 20px;
            span{
                font-size: clamp(15px, 1.5vw, 24px);
                margin-left: 10px;
            }
        }
        .strength{
            margin-bottom: 20px;
            p{
                font-size: clamp(12px, 1.5vw, 24px);
                line-height: 2em;
                padding-left: 2.5vw;
                background-image: url('./assets/icon_check.png');
                background-repeat: no-repeat;
                background-size: clamp(13px, 2.5vw, 28px);
                background-position: 0 0.3vw;
                
            }
        }
        .sum_strength{
            font-size: clamp(12px, 1.5vw, 23px);
            line-height: 1.6em;
            margin-bottom: 20px;
            text-align: center;
            border: 1px solid rgba(255,255,255,0.7);
            border-radius: 20px;
            padding: 10px;
        }
        .career{
            font-size: clamp(12px, 1.5vw, 22px);
            font-weight: 400;
            line-height: 1.7em;
            span{
                margin-right: 1vw;
            }
        }
    }
    @media screen and (max-width: 1023px) {
        padding: 0 20px;
        padding-top: 15vw;
        .photo{
            margin-bottom: 0;
        }
        .contentBox{
            .strength{
                p{
                    font-size: clamp(14px, 2.5vw, 18px);
                    line-height: 1.7em;
                }
            }
            .sum_strength{
                font-size: clamp(14px, 2.5vw, 18px);
            }
            .career{
                font-size: clamp(13px, 2.5vw, 18px);
                line-height: 1.5em;
            }
        }
    }
    @media screen and (max-width: 767px) {
        .title{
            h2{
                font-size: clamp(18px, 3.5vw, 20px);
                line-height: 3.5vw;
                color: #fff;
            }
        }
        .contentBox{
            position: relative;
            display: block;
            .photo{
                position: absolute;
                top: 0;
                width: 10vw;
            }
            .name{
                font-size: clamp(20px, 1.5vw, 25px);
                margin-left: 13vw;
                line-height: 10vw;
            }
            .strength{
                p{
                    font-size: clamp(13px, 2.5vw, 18px);
                    line-height: 1.7em;
                    padding-left: 4vw;
                    background-position: 0 8px;
                }
            }
            .sum_strength{
                font-size: clamp(13px, 2.5vw, 18px);
                text-align: center;
                margin-bottom: 30px;
            }
            .career{
                font-size: clamp(13px, 2.5vw, 18px);
                line-height: 1.5em;
            }
        }
    }
    @media screen and (max-width: 500px){
        padding-top: 20vw;
    }
    @media screen and (max-width: 450px) {
        .career{
            p{
                margin-bottom: 10px;
                color: rgba(255,255,255,0.8);
            }
            span{
                display: block;
                margin-bottom: 3px;
                font-size: clamp(14px, 2.5vw, 18px);
                color: rgba(255,255,255);
            }
        }
    }

`