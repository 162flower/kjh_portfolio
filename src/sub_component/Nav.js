import styled from "styled-components";

const Nav = () => {

    return (
        <NavWrap>
            <li>Home</li>
            <li>About Me</li>
            <li>Skills</li>
            <li>Project</li>
            <li>Contact</li>
        </NavWrap>
    );
};

export default Nav;

const NavWrap = styled.ul`
    display: flex;
    justify-content: center;
    color: #fff;
    width: 60%;
    border: 1px solid #fff;
    border-top: none;
    border-radius: 0 0 3vw 3vw;
    background-color: rgba(0, 0, 0, 0.8);
    box-sizing: border-box;
    li{
        font-size: 1.7vw;
        font-weight: 700;
        margin: auto 0;
        margin-left: 2.5vw;
        cursor: pointer;
    }
    li:first-child{
        margin-left: 0;
    }
`