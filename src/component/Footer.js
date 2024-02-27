import styled from "styled-components";

const Footer = () => {
    return(
        <FooterWrap>
            Copyright 2024.KOJUHEE. All rights reserved.
        </FooterWrap>
    )
}

export default Footer;

const FooterWrap = styled.div`
    color: #fff;
    text-align: center;
    font-size: clamp(8px, 2vw, 18px);
    margin-bottom: 35vw;
`