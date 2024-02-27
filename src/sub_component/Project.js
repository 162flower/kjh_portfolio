import { useState } from "react";
import styled from "styled-components";

const Project = () => {
    const projectList = [
        {
            id: 0,
            title: '트리플',
            en_title: 'triple',
            solo_team: 'Team',
            web: '모바일',
            photo: './assets/projectPhoto_triple.png',
            skills: ['React', 'CSS', 'Figma'],
            todoList: [
                'Figma로 와이어프레임 및 시안을 팀원과 함께 작업하였음',
                '헤더영역, 버튼영역, 푸터영역의 공통적으로 사용되는 컴포넌트를 작업함 ',
                '마이페이지를 작업하였으며, 3개의 탭으로 나누어 더미데이터를 필터링하여 목록이 구성되도록 하였고, 목록에서 삭제하는 기능을 구현함',
                '일정짜기 페이지의 메모추가버튼 클릭시 모달창이 띄어지며 메모를 입력하여 저장할 수 있도록 구현함',
                '여행기, 지난여행, 매거진의 상세페이지를 제작함'
            ],
            deploymentLink: 'https://team-c-triple.firebaseapp.com',
            repository: 'https://github.com/TeamC-Triple/team-c-triple.git'
        },
        {
            id: 1,
            title: 'Movie List',
            en_title: 'MovieList',
            solo_team: 'Solo',
            web: '반응형',
            photo: './assets/projectPhoto_movielist.png',
            skills: ['React', 'CSS', 'Figma'],
            todoList: [
                '더미데이터를 json 형식으로 작성하여 변수로 선언하여 사이트 내용 구성함',
                '연도별 탭을 구성하여 더미데이터를 필터링하여 연도별 영화목록을 구성함',
                '영화의 포스터 목록에 마우스를 호버하였을때 상세보기 버튼이 나타나고, 이를 클릭하였을때 상세페이지가 모달창으로 띄어지도록 하였으며 닫기 버튼도 구현함'
            ],
            deploymentLink: 'https://kjh-movielist-project.web.app',
            repository: 'https://github.com/162flower/kjh_movieList_project.git'
        },
        {
            id: 2,
            title: '웅진책방',
            en_title: 'wjBook',
            solo_team: 'Solo',
            web: '반응형',
            photo: './assets/projectPhoto_wjbook.png',
            skills: ['HTML', 'CSS', 'JavaScript', 'Figma'],
            todoList: [
                '피그마로 와이어프레임 및 시안을 디자인하였고, 이를 통하여시각적으로 코드를 구조화해 볼 수 있었음',
                '기존의 울산책방 사이트와 경쟁사이트를 분석하여 재구성함',
                'JavaScript로 상세검색 페이지를 구현함'
            ],
            deploymentLink: 'https://kjh-wjbook-project.netlify.app',
            repository: 'https://github.com/162flower/kjh_wjBook_project.git'
        },
        {
            id: 3,
            title: '넥슨',
            en_title: 'nexon',
            solo_team: 'Solo',
            web: '반응형',
            photo: './assets/projectPhoto_nexon.png',
            skills: ['HTML', 'CSS', 'JQuery', 'Figma'],
            todoList: [
                '피그마로 와이어프레임 및 시안을 디자인하였고, 이를 통하여시각적으로 코드를 구조화해 볼 수 있었음',
                '기존의 넥슨 사이트와 경쟁사이트를 분석하여 재구성함',
                'slick slider 라이브러리를 사용하여 슬라이드를 구현하였음'
            ],
            deploymentLink: 'https://kjh-nexon-project.netlify.app',
            repository: 'https://github.com/162flower/kjh_nexon_project.git'
        },
        {
            id: 4,
            title: '울산관광웹사이트',
            en_title: 'ulsanTrip',
            solo_team: 'Solo',
            web: 'PC',
            photo: './assets/projectPhoto_ulsanTrip.png',
            skills: ['HTML', 'CSS', 'JQuery', 'Figma'],
            todoList: [
                '피그마로 와이어프레임 및 시안을 디자인하였고, 이를 통하여시각적으로 코드를 구조화해 볼 수 있었음',
                '기존의 울산관광웹사이트와 경쟁사이트를 분석하여 재구성함',
                'slick slider 라이브러리를 사용하여 슬라이드를 구현하였음'
            ],
            deploymentLink: 'https://kjh-ulsantrip-project.netlify.app',
            repository: 'https://github.com/162flower/kjh_ulsanTrip_project.git'
        },
        {
            id: 5,
            title: '로마네',
            en_title: 'romane',
            solo_team: 'Solo',
            web: 'PC',
            photo: './assets/projectPhoto_romane.png',
            skills: ['HTML', 'CSS', 'JQuery', 'PhotoShop'],
            todoList: [
                '프론트엔드 첫 프로젝트',
                '포토샵으로 와이어프레임 및 시안을 디자인하였고, 이를 통하여시각적으로 코드를 구조화해 볼 수 있었음',
                '기존의 로마네 웹사이트와 경쟁사이트를 분석하여 재구성함',
                'slick slider 라이브러리를 사용하여 슬라이드를 구현하였음'
            ],
            deploymentLink: 'https://kjh-romane-project.netlify.app',
            repository: 'https://github.com/162flower/kjh_romane_project.git'
        },
        {
            id: 6,
            title: '포트폴리오 사이트',
            en_title: 'portfolio',
            solo_team: 'Solo',
            web: '반응형',
            photo: './assets/projectPhoto_portfolio.png',
            skills: ['React', 'CSS', 'Figma'],
            todoList: [
                '포트폴리오를 위한 사이트임',
                '피그마으로 와이어프레임 및 시안을 디자인함',
                '앞으로 개발자로서 무궁무진하게 성장하고 발전해나갈 나를 클릭 이벤트를 통하여 알을 깨고 나오는 생명체로  표현하였음',
                '알에서 완전히 깨고나오지 않는 것은 앞으로 다양하게 성장할 것을 의미함'
            ],
            deploymentLink: 'https://kjh-portfolio-aab42.web.app',
            repository: 'https://github.com/162flower/kjh_portfolio.git'
        },
    ];

    const [category, setCategory] = useState('cateAll');
    const [selectCate, setSelectCate] = useState('cateAll');

    const clickBtn = (cateName) => {
        setSelectCate(cateName);
        setCategory(cateName);
    };

    const filterDummy = category === 'cateAll'
        ? projectList : projectList.filter((it) => (it.skills.find((it) => it === category)));

    return (
        <Projectwrap id="project">
            <div className="title">
                <h2>PROJECT</h2>
                <ProjectCate>
                    <ul>
                        <li
                            onClick={() => clickBtn('cateAll')}
                            className={selectCate === 'cateAll' ? 'active' : ''}
                        >
                            전체
                        </li>
                        <li
                            onClick={() => clickBtn('HTML')}
                            className={selectCate === 'HTML' ? 'active' : ''}
                        >
                            HTML
                        </li>
                        <li
                            onClick={() => clickBtn('CSS')}
                            className={selectCate === 'CSS' ? 'active' : ''}
                        >
                            CSS
                        </li>
                        <li
                            onClick={() => clickBtn('JavaScript')}
                            className={selectCate === 'JavaScript' ? 'active' : ''}
                        >
                            JavaScript
                        </li>
                        <li
                            onClick={() => clickBtn('JQuery')}
                            className={selectCate === 'JQuery' ? 'active' : ''}
                        >
                            JQuery
                        </li>
                        <li
                            onClick={() => clickBtn('React')}
                            className={selectCate === 'React' ? 'active' : ''}
                        >
                            React
                        </li>
                        <li
                            onClick={() => clickBtn('TypeScript')}
                            className={selectCate === 'TypeScript' ? 'active' : ''}
                        >
                            TypeScript
                        </li>
                    </ul>
                </ProjectCate>
            </div>
            <div className="project_list">
                <ul>
                    {
                        filterDummy.length === 0 ? <li className="noList"><div className="noList_photo"><img src="assets/noList_img.png" alt="업데이트 예정입니다." /></div><p className="noList_txt">업데이트 예정입니다.</p></li>
                            : filterDummy.map((item) =>
                                <li key={item.id} className={item.en_title}>
                                    <div className="photo">
                                        <img src={item.photo} alt={item.title} />
                                    </div>
                                    <div className="txt">
                                        <p className="p_title">
                                            <span className="tit">{item.title}</span>
                                            <span className="solo_team">{item.solo_team} Project / {item.web}웹</span>
                                        </p>
                                        <div className="skills">
                                            {item.skills.map((it, idx) =>
                                                <p key={idx} className={it}>
                                                    {it}
                                                </p>
                                            )}
                                        </div>
                                        <div className="todo_list">
                                            {item.todoList.map((it, idx) =>
                                                <p key={idx}>
                                                    {it}
                                                </p>
                                            )}
                                        </div>
                                        <div className="deploy_link">
                                            <p className="txt">배포링크</p>
                                            <p className="link"><a href={item.deploymentLink} target="_blank" rel="noopener noreferrer">{item.deploymentLink}</a></p>
                                        </div>
                                        <div className="reposi">
                                            <p className="txt">레포지토리</p>
                                            <p className="link"><a href={item.repository} target="_blank" rel="noopener noreferrer">{item.repository}</a></p>
                                        </div>
                                    </div>
                                </li>
                            )}
                </ul>
            </div>
        </Projectwrap>
    )
};

export default Project;

const Projectwrap = styled.div`
    padding: 0 12.5%;
    padding-top: 10vw;
    .title{
        position: relative;
        display: flex;
        border-bottom: 1px solid #fff;
        margin-bottom: 2vw;
        pointer-events : none;
        h2{
            font-size: clamp(28px, 3vw, 40px);
            line-height: 3vw;
            color: #fff;
            margin-right: 3vw;
        }
    }
    .project_list{
        color: #fff;
        li{
            display: flex;
            margin-bottom: 5vw;
            padding: 2.5vw 1.5vw;
            border-left: 1px solid rgba(255,255,255,0.5);
            border-right: 1px solid rgba(255,255,255,0.5);
            border-top: 10px solid rgba(255,255,255,0.5);
            border-bottom: 1px solid rgba(255,255,255,0.5);
            border-radius: 10px;
            &.noList{
                display: block;
                text-align: center;
                font-size: clamp(10px, 3vw, 18px);
                padding: 5vw 0 8vw 0;
                .noList_photo{
                    width: 10%;
                    margin: 0 auto;
                    margin-bottom: 1.5vw;
                    img{
                        width: 100%;
                    }
                }
                .noList_txt{

                }
            }
            .photo{
                margin-right: 50px;
                width: 50%;
                img{
                    width: 100%;
                    border: 1px solid rgba(255,255,255,0.5);
                }
            }
            .txt{
                width: 50%;
            }
            .p_title{
                font-size: clamp(18px, 2vw, 25px);
                font-weight: 500;
                margin-bottom: 1vw;
                pointer-events : none;
                .solo_team{
                    margin-left: 1vw;
                    font-size: clamp(10px, 2vw, 17px);
                    font-weight: 400;
                }
            }
            .skills{
                display: flex;
                flex-wrap: wrap;
                margin-bottom: 15px;
                pointer-events : none;
                p{
                    margin-right: 0.5vw;
                    margin-bottom: 1vw;
                    font-size: clamp(12px, 1.5vw, 18px);
                    font-weight: 700;
                    color: #000;
                    background-color: #fff;
                    padding: 8px 20px 11px 40px;
                    border-radius: 10px;
                    background-size: 25px;
                    background-repeat: no-repeat;
                    background-position: 9px 7px;
                    &:last-child{
                        margin-right: 0;
                    }
                }
                .HTML{
                    background-image: url(./assets/icon_html.png);
                }
                .CSS{
                    background-image: url(./assets/icon_css.png);
                }
                .JQuery{
                    background-image: url(./assets/icon_jquery.png);
                }
                .PhotoShop{
                    background-image: url(./assets/icon_photoshop.png);
                }
                .Figma{
                    background-image: url(./assets/icon_figma.png);
                }
                .JavaScript{
                    background-image: url(./assets/icon_javascript.png);
                }
                .React{
                    background-image: url(./assets/icon_react.png);
                }
            }
            .todo_list{
                padding-left: 1vw;
                margin-bottom: 2vw;
                pointer-events : none;
                p{
                    position: relative;
                    font-size: clamp(13px, 2vw, 20px);
                    line-height: 1.5em;
                    margin-bottom: 0.3vw;
                }
                p::after{
                    content: "-";
                    position: absolute;
                    top: 0;
                    left: -1vw;
                } 
            }
            .deploy_link{
                margin-bottom: 1vw;
            }
            .deploy_link, .reposi{
                display: flex;
                align-items: center;
                overflow-wrap: anywhere;
                .txt{
                    flex-basis: 17%;
                    flex-shrink:0;
                    text-align: center;
                    margin-right: 1.5vw;
                    font-size: clamp(10px, 1.5vw, 18px);
                    font-weight: 700;
                    color: #000;
                    background-color: #fff;
                    padding: 1vw 1.5vw;
                    border-radius: 10px;
                    pointer-events : none;
                }
                .link{
                    flex-basis: 83%;
                }
                .link>a{
                    display: block;
                    font-size: clamp(10px, 1.5vw, 18px);
                    line-height: 1em;
                    color: #fff;
                }
            }
        }
    }
    @media screen and (max-width: 1439px) {
        .project_list{
            li{
                display: block;
                padding: 4vw;
                border-radius: 10px;
                .photo{
                    width: 100%;
                    margin-bottom: 2vw;
                }
                .txt{
                    width: 100%;
                }
                .p_title{
                    font-size: clamp(22px, 2vw, 25px);
                    margin-bottom: 1.5vw;
                }
                .deploy_link, .reposi{
                    .txt, .link{
                        font-size: clamp(10px, 1.5vw, 20px);
                    }
                }
            }
        }
    }
    @media screen and (max-width: 1023px) {
        padding: 0 20px;
        padding-top: 15vw;
        .project_list{
            li{
                .skills{
                    p{
                        margin-right: 1vw;
                    }
                }
            }
        }
    }

    @media screen and (max-width: 768px) {
        .title{
            margin-bottom: 12vw;
        }
        .project_list{
            li{
                .p_title{
                    font-size: clamp(14px, 2.8vw, 25px);
                }
                .solo_team{
                    font-size: clamp(10px, 1.2vw, 14px);
                }
            }
        }
    }
    @media screen and (max-width: 500px){
        padding-top: 20vw;
    }
    @media screen and (max-width: 767px) {
        .title{
            h2{
                font-size: clamp(18px, 3.5vw, 20px);
                line-height: 3.5vw;
                color: #fff;
            }
        }
    }
}
`
const ProjectCate = styled.div`
    color: #fff;
    pointer-events : auto;
    ul{
        display: flex;
        margin-top: 0.3vw;
        li{
            padding: 0 1.3vw;
            font-size: clamp(10px, 2vw, 18px);
            line-height: 3vw;
            font-weight: 500;
            cursor: pointer;
        }
        li.active{
            background-color: #fff;
            color: #000;
            border-radius: 10px 10px 0 0;
        }
    }
    @media screen and (max-width: 768px) {
        position: absolute;
        top: 6vw;
        ul{
            width: calc( 100vw - 40px );
            flex-shrink: 0;
            overflow-x: scroll;
            li{
                padding: 2.5vw 3vw;
                line-height: 0.5em;
                margin-bottom: 2vw;
                white-space: nowrap;
            }
            li.active{
                border-radius: 50px;
            }
        }
    }
`