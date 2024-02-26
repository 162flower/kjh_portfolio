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
                    <span>162flower@naver.com</span>
                </p>
                <p className="github"><span className="txt">GitHub.</span><span>github.com/162flower</span></p>
            </div>
        </ContactWrap>
    )
};

export default Contact;

const ContactWrap = styled.div`
    padding: 0 12.5%;
    margin-bottom: 15vw;
    padding-top: 10vw;
    color: #fff;
    .title{
        border-bottom: 1px solid #fff;
        margin-bottom: 3vw;
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
    }
    @media screen and (max-width: 1023px) {
        padding: 0 20px;
        padding-top: 15vw;
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