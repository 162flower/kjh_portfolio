import styled from "styled-components";
import Nav from "../sub_component/Nav";

const Header = () => {

    return (
        <HeaderWrap>
            <div className="logo">
                <h1>Ko Ju Hee_Portfolio</h1>
            </div>
            <Nav />
        </HeaderWrap>
    );
};

export default Header;

const HeaderWrap = styled.div`
    position: fixed;
    left: 12.5%;
    right: 12.5%;
    display: flex;
    justify-content: space-between;
    z-index: 10;
    .logo{
        width: 35%;
        border: 1px solid #fff;
        border-top: none;
        border-radius: 0 0 3vw 3vw;
        background-color: rgba(0, 0, 0, 0.8);
        text-align: center;
        box-sizing: border-box;
        pointer-events : none;
    }
    .logo h1{
        color: #fff;
        font-size: clamp(9px, 2.3vw, 40px);
        line-height: 3em;
    }
    @media screen and (max-width: 1023px) {
        left: 20px;
        right: 20px;
    }
`