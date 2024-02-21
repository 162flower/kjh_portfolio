import styled from "styled-components";

const Project = () => {
    const projectList = [
        {
            id: 0,
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
            deploymentLink: 'http://',
            repository: 'http://'
        },
        {
            id: 1,
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
            deploymentLink: 'http://',
            repository: 'http://'
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
            deploymentLink: 'http://',
            repository: 'http://'
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
            deploymentLink: 'http://',
            repository: 'http://'
        },
        {
            id: 4,
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
            deploymentLink: 'http://',
            repository: 'http://'
        },
        {
            id: 5,
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
            deploymentLink: 'http://',
            repository: 'http://'
        },

    ];

    return (
        <Projectwrap>
            <div className="title">
                <h2>PROJECT</h2>
            </div>
            <div className="project_list">
                <ul>
                    {projectList.map((item) =>
                        <li key={item.id} className={item.en_title}>
                            <div className="photo">
                                <img src={item.photo} />
                            </div>
                            <div className="txt">
                                <p className="p_title">
                                    {item.title}
                                    <span>{item.solo_team} Project/{item.web}웹</span>
                                </p>
                                <div className="skills">
                                    {item.skills.map((it, idx) =>
                                        <p key={idx}>
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
                                    <p>{item.deploymentLink}</p>
                                </div>
                                <div className="reposi">
                                    <p className="txt">레포지토리</p>
                                    <p>{item.repository}</p>
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
    .title{
        border-bottom: 1px solid #fff;
        margin-bottom: 70px;
        h2{
            font-size: clamp(28px, 3vw, 40px);
            line-height: 3vw;
            color: #fff;
        }
    }
    .project_list{
        color: #fff;
        li{
            display: flex;
            margin-bottom: 8vw;
            .photo{
                margin-right: 50px;
                width: 50%;
                img{
                    width: 100%;
                }
            }
            .txt{
                width: 50%;
            }
            .p_title{
                font-size: clamp(15px, 2vw, 20px);
                font-weight: 500;
                margin-bottom: 10px;
                span{
                    margin-left: 20px;
                    font-size: clamp(13px, 2vw, 17px);
                    font-weight: 400;
                }
            }
            .skills{
                display: flex;
                margin-bottom: 15px;
                p{
                    margin-right: 10px;
                    font-weight: 700;
                    color: #000;
                    background-color: #fff;
                    padding: 5px 20px 7px 30px;
                    border-radius: 10px;
                }
            }
            .todo_list{
                padding-left: 1vw;
                p::before{
                    content: "-";
                } 
            }
        }
    }
    @media screen and (max-width: 1023px) {
        padding: 0 20px;
    }
    @media screen and (max-width: 767px) {
        .title{
            h2{
                font-size: 3.5vw;
                line-height: 3.5vw;
                color: #fff;
            }
        }
    }
`