import React from "react";
import styled from "styled-components";

export default function Header() {
  return (
    <HeaderFull>
      <HeaderContainer>
        <LogoContainer>
          <LogoDiv>
            <LogoImage
              src={require("../../assets/images/Frame 22.svg").default}
              alt="Byway Logo"
            />
          </LogoDiv>
        </LogoContainer>

        <DivEnd>
          <LogoDiv1>
            <LogoImage2
              src={require("../../assets/images/cart.svg").default}
              alt="cart"
            />
          </LogoDiv1>
          <Button1>Log In</Button1>
          <Button2>Sign Up</Button2>
        </DivEnd>
      </HeaderContainer>
    </HeaderFull>
  );
}

const HeaderFull = styled.div`
  border-bottom: 1px solid #e2e8f0;
`;
const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 13px 10px;
  background-color: #fff;
  max-width: 85%;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 15px 20px;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const LogoImage = styled.img`
  width: 100%;
  display: block;
`;

const LogoDiv = styled.div`
  cursor: pointer;
`;

const DivEnd = styled.div`
  display: flex;
  align-items: center;
`;
const LogoImage2 = styled.img`
  width: 100%;
  display: block;
`;

const LogoDiv1 = styled.div`
  cursor: pointer;
  @media all and (max-width: 360px) {
    display: none;
  }
`;

const Button1 = styled.button`
  border: 1px;
  color: #000;
  padding: 10px 12px;
  font-size: 16px;
  cursor: pointer;
  margin-left: 20px;
  border: 1px solid #334155;
  background-color: #fff;

  &:hover {
    color: #5f5c5c;
  }
  @media all and (max-width: 360px) {
    font-size: 12px;
  }
`;

const Button2 = styled.button`
  background-color: #334155;
  color: #fff;
  border: none;
  padding: 10px 12px;
  font-size: 16px;
  cursor: pointer;
  margin-left: 20px;

  &:hover {
    background-color: #5f5c5c;
  }
  @media all and (max-width: 360px) {
    font-size: 12px;
  }
`;
