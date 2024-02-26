import { useEffect, useState } from "react";
import styled from "styled-components";

const Top = () => {
    const [topBtn, setTopBtn] = useState(false);
    const scrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
    useEffect(() => {
        const showTopBtn = () => {
            if (window.scrollY > 800) {
                setTopBtn(true);
            } else {
                setTopBtn(false)
            }
        };
        window.addEventListener("scroll", showTopBtn)
        return ()=>{
            window.removeEventListener("scroll", showTopBtn)
        }
    }, []);
    return (
        <>
            {   topBtn &&
                <TopWrap onClick={scrollTop}>
                    ↑
                </TopWrap>
            }
        </>
    )
}

export default Top;

const TopWrap = styled.div`
    position: fixed;
    bottom: 5%;
    right: 13%;
    width: clamp(30px, 5vw, 80px);
    height: clamp(30px, 5vw, 80px);
    text-align: center;
    font-size: clamp(14px, 1.5vw, 20px);
    line-height: clamp(30px, 4.5vw, 80px);
    color: #fff;
    border: 1px solid rgba(255,255,255,0.8);
    border-radius: 50%;
    background-color: rgba(0,0,0,0.8);
    cursor: pointer;
    @media screen and (max-width: 1023px) {
        right: 25px;
    }
`