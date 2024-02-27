import styled from "styled-components";
import { Link } from "react-scroll";

const Nav = () => {
    return (
        <NavWrap>
            <li>
                <Link to="home" spy={true} smooth={true} activeClass="active">
                    Home
                </Link>
            </li>
            <li>
                <Link to="aboutMe" spy={true} smooth={true} activeClass="active">
                    About Me
                </Link>
            </li>
            <li>
                <Link to="skills" spy={true} smooth={true} activeClass="active">
                    Skills
                </Link>
            </li>
            <li>
                <Link to="project" spy={true} smooth={true} activeClass="active">
                    Project
                </Link>
            </li>
            <li>
                <Link to="contact" spy={true} smooth={true} activeClass="active">
                    Contact
                </Link>
            </li>
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
        position: relative;
        font-size: clamp(11px, 1.5vw, 24px);
        font-weight: 700;
        margin: auto 0;
        margin-left: 3.5vw;
        cursor: pointer;
        .active::before{
            content: "";
            display: block;
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            top: -1.5vw;
            width: 0.5vw;
            height: 0.5vw;
            border-radius: 50%;
            background-color: rgba(255,255,255,0.8);
        }
    }
    li:first-child{
        margin-left: 0;
    }
    @media screen and (max-width: 768px){
        li{
            .active::before{
                top: -0.9vw;
                width: 0.8vw;
                height: 0.8vw;
            }
        }
    }
    @media screen and (max-width: 500px){
        border: 0;
        width: 100%;
        padding: 1vw 0;
        
    background-color: transparent;
        li{
            .active::before{
                top: -0.6vw;
                width: 1vw;
                height: 1vw;
            }
        }
    }
`