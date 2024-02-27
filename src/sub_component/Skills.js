import styled from "styled-components";

const Skills = () => {
    const skillList = [
        {
            id: 0,
            skillName: 'HTML',
            icon: './assets/icon_html.png'
        },
        {
            id: 1,
            skillName: 'CSS',
            icon: './assets/icon_css.png'
        },
        {
            id: 2,
            skillName: 'JavaScript',
            icon: './assets/icon_javascript.png'
        },
        {
            id: 3,
            skillName: 'JQuery',
            icon: './assets/icon_jquery.png'
        },
        {
            id: 4,
            skillName: 'React',
            icon:  './assets/icon_react.png'
        },
        {
            id: 5,
            skillName: 'TypeScript',
            icon: './assets/icon_typescript.png'
        },
        {
            id: 6,
            skillName: 'node.js',
            icon: './assets/icon_nodejs.png'
        },
        {
            id: 7,
            skillName: 'PhotoShop',
            icon: './assets/icon_photoshop.png'
        },
        {
            id: 8,
            skillName: 'Figma',
            icon: './assets/icon_figma.png'
        },
        {
            id: 9,
            skillName: 'VScode',
            icon: './assets/icon_vscode.png'
        },
        {
            id: 10,
            skillName: 'GitHub',
            icon: './assets/icon_github.png'
        },
    ];
    const skillList_etc =[
        {
            id: 0,
            name: 'slick',
            icon: './assets/icon_slick.png'
        },
        {
            id: 1,
            name: 'netlify',
            icon: './assets/icon_netlify.png'
        },
        {
            id: 2,
            name: 'dothome',
            icon: './assets/icon_dothome.png'
        }
    ];

    return (
        <SkillsWrap id="skills">
            <div className="title">
                <h2>SKILLS</h2>
            </div>
            <div className="skillList">
                <ul>
                    {skillList.map((item)=>
                        <li key={item.id} className={item.skillName}>
                            <p className="photo"><img src={item.icon} alt={item.skillName}/></p>
                            <p className="name">{item.skillName}</p>
                        </li>
                    )}
                    <li className="skillListEtc">
                        <div>
                            {skillList_etc.map((item)=>
                                <p key={item.id} className={item.name}>
                                    <img src={item.icon} alt={item.name}/>
                                </p>    
                            )}
                        </div>
                    </li>
                </ul>
            </div>
        </SkillsWrap>
    );
};
export default Skills;

const SkillsWrap = styled.div`
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
    .skillList{
        ul{
            display: flex;
            flex-wrap: wrap;
        }
        color: #fff;
        li{
            flex-grow: 1;
            width: 12%;
            padding: 20px 5px;
            box-sizing: border-box;
            background-color: #fff;
            color: #000;
            text-align: center;
            margin-right: 1.95vw;
            margin-bottom: 40px;
            border-radius: 10px;
            img{
                width: 80%;
            }
            .name{
                font-size: clamp(10px, 1.5vw, 22px);
                font-weight: 600;
                margin-top: 10px;
            }
        }
        li:nth-child(7){
            margin-right: 0;
        }
        .skillListEtc{
            >div{
                height: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            width: 36%;
            padding: 0 2vw;
            box-sizing: initial;
            margin-right: 0;
            p{
                margin: 0 0.5vw;
            }
        }
    }
    @media screen and (max-width: 1023px) {
        padding: 0 20px;
        padding-top: 15vw;
    }
    @media screen and (max-width: 767px) {
        .title{
            h2{
                font-size: clamp(18px, 3.5vw, 20px);
                line-height: 3.5vw;
                color: #fff;
            }
        }
        .skillList{
            li{
                width: 18%;
                padding: 10px 5px;
                margin-right: 2vw;
                margin-bottom: 20px;
                .name{
                    font-size: clamp(10px, 2vw, 15px);
                    font-weight: 500;
                    margin-top: 5px;
                }
            }
            li:nth-child(5), li:nth-child(10){
                margin-right: 0;
            }
            li:nth-child(7){
                margin-right: 2vw;
            }
            .skillListEtc{
                width: 74%;
            }
        }
    }
    @media screen and (max-width: 500px){
        padding-top: 20vw;
    }
`