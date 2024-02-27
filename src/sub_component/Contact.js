import CopyToClipboard from "react-copy-to-clipboard";
import styled from "styled-components";

const Contact = () => {

    return (
        <ContactWrap id="contact">
            <div className="title">
                <h2>CONTACT</h2>
            </div>
            <div className="contents">
                <p className="email">
                    <span className="txt">Email.</span>
                    <CopyToClipboard className="emailCopy" text="162flower@naver.com" onCopy={()=> alert("클립보드에 복사되었습니다.")}>
                        <span>162flower@naver.com</span>
                    </CopyToClipboard>
                </p>
                <p className="github">
                    <span className="txt">GitHub.</span>
                    <CopyToClipboard className="githubeCopy" text="github.com/162flower" onCopy={()=> alert("클립보드에 복사되었습니다.")}>
                        <span>github.com/162flower</span>
                    </CopyToClipboard>
                </p>
            </div>
        </ContactWrap>
    )
};

export default Contact;

const ContactWrap = styled.div`
    padding: 0 12.5%;
    margin-bottom: 15vw;
    padding-top: 12vw;
    color: #fff;
    .title{
        border-bottom: 1px solid #fff;
        margin-bottom: 3vw;
        pointer-events : none;
        h2{
            font-size: clamp(28px, 3vw, 40px);
            line-height: 3vw;
            color: #fff;
        }
    }
    .contents{
        font-size: clamp(12px, 2.5vw, 32px);
        line-height: 2.5vw;
        padding: 4vw;
        text-align: center;
        border: 1px solid rgba(255,255,255,0.5);
        border-radius: 20px;
        span.txt{
            display: inline-block;
            width: 15%;
            padding-left: 5vw;
            text-align: start;
            background-size: 3vw;
            background-repeat: no-repeat;
            background-position: 0 center;
            pointer-events : none;
        }
        .email{
            margin-bottom: 1.5vw;
        }
        .email span.txt{
            background-image: url(./assets/icon_email.png);
        }
        .github span.txt{
            background-image: url(./assets/icon_github_wh.png);
            background-size: 2.5vw;
            background-position: 0.1vw center;
        }
        .githubeCopy, .emailCopy{
            cursor: pointer;
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
    }
    @media screen and (max-width: 500px){
        padding-top: 20vw;
    }
`