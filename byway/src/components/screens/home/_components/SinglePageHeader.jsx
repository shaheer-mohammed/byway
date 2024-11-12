import React from "react";
import styled from "styled-components";

export default function SinglePageHeader() {
  return (
    <HeaderFull>
      <HeaderContainer>
        <LogoContainer>
          <LogoDiv>
            <LogoImage
              src={require("../../../../assets/images/Frame 22.svg").default}
              alt="Byway Logo"
            />
          </LogoDiv>
        </LogoContainer>

        <DivEnd>
          <LogoDiv1>
            <LogoImage2
              src={require("../../../../assets/images/cart.svg").default}
              alt="cart"
            />
          </LogoDiv1>
          <LogoDiv2>
            <LogoImage2
              src={require("../../../../assets/images/wishlist.svg").default}
              alt="cart"
            />
          </LogoDiv2>
          <LogoDiv3>
            <LogoImage2
              src={require("../../../../assets/images/bell.svg").default}
              alt="cart"
            />
          </LogoDiv3>
          <ProfileDiv>J</ProfileDiv>
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
  gap: 16px;
`;
const LogoImage2 = styled.img`
  width: 100%;
  display: block;
`;

const LogoDiv1 = styled.div`
  cursor: pointer;
  @media all and (max-width: 480px) {
    display: none;
  }
`;
const LogoDiv2 = styled.div`
  cursor: pointer;
  @media all and (max-width: 480px) {
    display: none;
  }
`;
const LogoDiv3 = styled.div`
  cursor: pointer;
  @media all and (max-width: 480px) {
    display: none;
  }
`;

const ProfileDiv = styled.button`
  border-radius: 50%;
  width: 40px;
  height: 40px;
  gap: 0px;
  background: #334155;
  font-size: 18px;
  font-weight: 500;
  line-height: 19.36px;
  color: white;

  cursor: pointer;
  border: 0px;

  &:hover {
    color: #5f5c5c;
  }
`;
