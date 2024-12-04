import React from "react";
import styled from "styled-components";

export default function Spotlight() {
  return (
    <>
      <SpotlightSection>
        <DivRight>
          <Title>Unlock Your Potential with Byway</Title>
          <Description>
            Welcome to Byway, where learning knows no bounds. We believe that
            education is the key to personal and professional growth, and we're
            here to guide you on your journey to success.
          </Description>
          <Button>Start your instructor journey</Button>
        </DivRight>
        <DivLeft>
          <DivImg>
            <Img
              src={require("../../../../assets/images/spotlight-removebg.png")}
              alt="Spotlight Image"
            />
          </DivImg>
        </DivLeft>
      </SpotlightSection>
      <Stats>
        <StatsWrapper>
          <StatsDiv>
            <Count>120 +</Count>
            <Span>Courses by our best mentors</Span>
          </StatsDiv>
          <HrLine />
          <StatsDiv>
            <Count>1000 +</Count>
            <Span>Courses by our best mentors</Span>
          </StatsDiv>
          <HrLine />
          <StatsDiv>
            <Count>10 +</Count>
            <Span>Courses by our best mentors</Span>
          </StatsDiv>
          <HrLine />
          <StatsDiv>
            <Count>770 +</Count>
            <Span>Courses by our best mentors</Span>
          </StatsDiv>
        </StatsWrapper>
      </Stats>
    </>
  );
}

const SpotlightSection = styled.section`
  display: flex;
  gap: 7px;
  padding: 24px 10px;
  align-items: center;
  max-width: 85%;
  margin: 0 auto;
  justify-content: space-between;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
  @media all and (max-width: 640px) {
    justify-content: center;
  }
`;

const DivRight = styled.div`
  width: 35%;
  @media all and (max-width: 1280px) {
    width: 45%;
  }
  @media all and (max-width: 1080px) {
    width: 60%;
  }
`;

const Title = styled.h1`
  font-size: 40px;
  font-weight: 700;
  line-height: 48px;

  @media all and (max-width: 768px) {
    font-size: 35px;
    line-height: 42px;
  }
  @media all and (max-width: 680px) {
    font-size: 32px;
  }
  @media all and (max-width: 480px) {
    font-size: 30px;
  }
  @media all and (max-width: 360px) {
    font-size: 28px;
  }
`;

const Description = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 25.6px;
  color: #334155;
  @media all and (max-width: 768px) {
    font-size: 14px;
    font-weight: 400;
    line-height: 20.6px;
  }
  @media all and (max-width: 360px) {
    display: none;
  }
`;

const Button = styled.button`
  background-color: #3B82F6;
  color: white;
  padding: 16px 14px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
  @media all and (max-width: 480px) {
    font-size: 12px;
  }
  @media all and (max-width: 360px) {
    font-size: 10px;
  }
`;

const DivLeft = styled.div`
  width: 40%;
  @media all and (max-width: 768px) {
    width: 55%;
  }
  @media all and (max-width: 640px) {
    width: 55%;
    display: none;
  }
`;

const DivImg = styled.div`
  width: 100%;
`;

const Img = styled.img`
  width: 100%;
  height: auto; 
  display: block; \
`;

const Stats = styled.div`
  width: 100%;
  background-color: #f7f7f7;
  margin-bottom: 26px;
  @media all and (max-width: 640px) {
    display: none;
  }
`;
const StatsWrapper = styled.div`
  padding: 24px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  max-width: 84%;
  margin: 0 auto;

  @media all and (max-width: 1080px) {
    padding: 20px 10px;
  }
  @media all and (max-width: 768px) {
    padding: 0px 10px;
  }
`;

const StatsDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 0;
`;

const Count = styled.h1`
  font-size: 32px;
  font-weight: bold;
  margin: 0;
  color: #333;

  @media all and (max-width: 1080px) {
    font-size: 30px;
  }
  @media all and (max-width: 960px) {
    font-size: 27px;
  }
  @media all and (max-width: 768px) {
    font-size: 24px;
  }
  @media all and (max-width: 640px) {
    font-size: 21px;
  }
`;

const Span = styled.span`
  font-size: 14px;
  color: #666;
  margin-top: 10px;
  text-align: center;

  @media all and (max-width: 960px) {
    font-size: 12px;
  }
  @media all and (max-width: 640px) {
    font-size: 10px;
  }
`;

const HrLine = styled.hr`
  width: 0px;
  height: 55px;
  border: none;
  border-left: 4px solid #ddd;
  margin: 0 20px;
  opacity: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
