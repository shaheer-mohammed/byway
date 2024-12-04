import React from "react";
import styled from "styled-components";

export default function LearningJourney() {
  return (
    <>
      <SectionCon>
        <SectionConWrapper>
          <Container>
            <Card1>
              <RightDiv>
                <ImageWrapper>
                  <ImgDiv>
                    <Image
                      src={require("../../../../assets/images/model-4.jpg")}
                      alt="Instructor"
                    />
                  </ImgDiv>
                </ImageWrapper>
              </RightDiv>

              <LeftDiv>
                <Title>Become an Instructor</Title>
                <Text>
                  Instructors from around the world teach millions of students
                  on Byway. We provide the tools and skills to teach what you
                  love.
                </Text>
                <Button>
                  Start Your Instructor Journey{" "}
                  <Arrow>
                    <ExpandIconDiv>
                      <ExpandIconImg
                        src={
                          require("../../../../assets/images/arrow-right.svg")
                            .default
                        }
                        alt="arrow-down"
                      />
                    </ExpandIconDiv>
                  </Arrow>
                </Button>
              </LeftDiv>
            </Card1>
            <HrLine />
            <Card2>
              <RightDiv1>
                <Title>Transform your life through education</Title>
                <Text>
                  Learners around the world are launching new careers, advancing
                  in their fields, and enriching their lives.
                </Text>
                <Button1>
                  Checkout Courses{" "}
                  <Arrow>
                    <ExpandIconDiv>
                      <ExpandIconImg
                        src={
                          require("../../../../assets/images/arrow-right.svg")
                            .default
                        }
                        alt="arrow-down"
                      />
                    </ExpandIconDiv>
                  </Arrow>
                </Button1>
              </RightDiv1>
              <LeftDiv1>
                <ImageWrapper>
                  <ImgDiv1>
                    <Image
                      src={require("../../../../assets/images/model-6.jpg")}
                      alt="Student"
                    />
                  </ImgDiv1>
                </ImageWrapper>
              </LeftDiv1>
            </Card2>
          </Container>
        </SectionConWrapper>
      </SectionCon>
    </>
  );
}

const SectionCon = styled.section`
  padding: 50px 0;
  @media all and (max-width: 360px) {
    padding: 30px 0;
  }
`;
const SectionConWrapper = styled.div`
  max-width: 65%;
  margin: 0 auto;

  @media all and (max-width: 960px) {
    max-width: 85%;
  }
`;

const Container = styled.div``;

const Card1 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 50px;
  gap: 25px;

  @media all and (max-width: 640px) {
    display: block;
  }
`;

const Card2 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 25px;
  margin-bottom: 25px;

  @media all and (max-width: 640px) {
    display: block;
  }
`;

const LeftDiv = styled.div`
  width: 549px;
  height: 154px;
  gap: 16px;
  opacity: 0px;

  @media all and (max-width: 640px) {
    height: 164px;
    text-align: center;
    width: 420px;
    margin: 0 auto;
  }
  @media all and (max-width: 480px) {
    width: 317px;
  }
  @media all and (max-width: 360px) {
    height: 75px;
    width: 290px;
  }
  @media all and (max-width: 320px) {
    height: 75px;
    width: 280px;
  }
`;

const RightDiv = styled.div``;

const RightDiv1 = styled.div`
  width: 549px;
  height: 154px;
  gap: 16px;
  opacity: 0px;

  @media all and (max-width: 640px) {
    height: 194px;
    text-align: center;
    width: 420px;
    margin: 0 auto;
  }
  @media all and (max-width: 480px) {
    width: 315px;
    height: 260px;
  }
  @media all and (max-width: 360px) {
    width: 280px;
    height: 160px;
  }
`;

const LeftDiv1 = styled.div``;

const ImgDiv = styled.div`
  @media all and (max-width: 640px) {
    width: 300px;
  }
  @media all and (max-width: 480px) {
    width: 250px;
  }
`;

const ImgDiv1 = styled.div`
  @media all and (max-width: 640px) {
    width: 300px;
  }
  @media all and (max-width: 480px) {
    width: 250px;
  }
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Image = styled.img`
  width: 100%;
  display: block;
`;

const Title = styled.h3`
  font-size: 20px;
  font-weight: 600;
  line-height: 30px;
  @media all and (max-width: 360px) {
    font-size: 16px;
  }
`;

const Text = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 25.6px;
  @media all and (max-width: 360px) {
    display: none;
  }
`;

const Button = styled.button`
  width: 248px;
  height: 48px;
  padding: 10px 14px;
  gap: 6px;
  border-radius: 8px;
  opacity: 0px;
  color: #ffffff;
  cursor: pointer;
  display: flex;
  align-items: center;
  background: #020617;
  &:hover {
    background-color: #94a3b8;
  }

  @media all and (max-width: 640px) {
    margin: 0 auto;
  }
  @media all and (max-width: 360px) {
    width: 228px;
    font-size: 12px;
  }
  @media all and (max-width: 320px) {
    font-size: 10px;
  }
`;

const Button1 = styled.button`
  width: 200px;
  height: 48px;
  padding: 10px 23px;
  gap: 6px;
  border-radius: 8px;
  opacity: 0px;
  color: #ffffff;
  cursor: pointer;
  display: flex;
  align-items: center;
  background: #020617;
  &:hover {
    background-color: #94a3b8;
  }

  @media all and (max-width: 640px) {
    margin: 0 auto;
  }
  @media all and (max-width: 360px) {
    width: 170px;
    font-size: 12px;
  }
  @media all and (max-width: 320px) {
    font-size: 10px;
  }
`;
const Arrow = styled.span`
  margin-left: 10px;
  font-size: 16px;
`;
const ExpandIconDiv = styled.div`
  width: 16px;
  height: 12px;
  display: flex;
  align-items: center;
  opacity: 0px;
`;

const ExpandIconImg = styled.img`
  display: block;
  width: 100%;
`;
const HrLine = styled.hr`
  display: none;
  height: 0px;
  opacity: 0px;
  border: 1px solid #e2e8f0;
  margin-top: 30px;
  margin-bottom: 30px;

  @media all and (max-width: 640px) {
    display: block;
  }
`;
