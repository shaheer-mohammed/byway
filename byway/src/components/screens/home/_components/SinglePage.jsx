import React from "react";
import styled from "styled-components";
import SinglePageHeader from "./SinglePageHeader";
import CourseOverview from "./CourseOverview";

export default function SinglePage() {
  return (
    <>
      <SinglePageHeader />

      <Container>
        <ContainerWrapper>
          <DivContainer>
            <Div1>
              <PageNavigation>
                <Span>Home</Span>
                <VectorDiv>
                  <VectorImg
                    src={
                      require("../../../../assets/images/Vector.svg").default
                    }
                    alt="cart"
                  />
                </VectorDiv>
                <Span>Categories</Span>
                <VectorDiv>
                  <VectorImg
                    src={
                      require("../../../../assets/images/Vector.svg").default
                    }
                    alt="cart"
                  />
                </VectorDiv>
                <SpanColor>Introduction to User Experience Design</SpanColor>
              </PageNavigation>
              <Header>Introduction to User Experience Design</Header>
              <SubHeader>
                <SubHeaderDes>
                  This course is meticulously crafted to provide you with a
                  foundational understanding of the principles, methodologies,
                  and tools that drive exceptional user experiences in the
                  digital landscape.
                </SubHeaderDes>
              </SubHeader>
              <RatingDiv>
                <Rating>
                  4.6
                  {Array.from({ length: 5 }).map((_, index) => (
                    <StarImg key={index}>
                      <Img
                        src={
                          require("../../../../assets/images/star.svg").default
                        }
                        alt="Star Icon"
                      />
                    </StarImg>
                  ))}
                </Rating>
                <RatingText>
                  651,651 (ratings) | 22 Total Hours. 155 Lectures. All levels.
                </RatingText>
              </RatingDiv>

              <CourseInfo>
                <InfoDiv>
                  <InfoImg
                    src={require("../../../../assets/images/Ellipse 5.png")}
                    alt="cart"
                  />
                </InfoDiv>
                Created by<SpanName>Ronal Richards</SpanName>
              </CourseInfo>
              <LanguageSection>
                <LangIconDiv>
                  <LangIcon
                    src={
                      require("../../../../assets/images/language.svg").default
                    }
                    alt="Star Icon"
                  />
                </LangIconDiv>
                English, Spanish, Italian, German
              </LanguageSection>
            </Div1>

            <Div2>
              <CardContainer>
                <DivTop>
                  <DivImg>
                    <ImageContainer>
                      <CartImg
                        src={require("../../../../assets/images/img.jpg")}
                      />
                    </ImageContainer>
                  </DivImg>
                </DivTop>
                <DivDown>
                  <DivPrice>
                    <PriceWrapper>
                      <Price>$49.5</Price>
                      <OldPrice>$99.5</OldPrice>
                      <Discount>50% Off</Discount>
                    </PriceWrapper>

                    <Button>Add To Cart</Button>
                    <BuyNowButton>Buy Now</BuyNowButton>
                  </DivPrice>
                  <Hr />
                  <DivMedia>
                    <SocialIcons>
                      <SpanDivMedia>Share</SpanDivMedia>
                      <SocialIconDiv>
                        <SocialIconsContainer>
                          <SocialIcon
                            src={
                              require("../../../../assets/images/facebook.svg")
                                .default
                            }
                            alt="Facebook"
                          />
                        </SocialIconsContainer>
                        <SocialIconsContainer>
                          <SocialIcon
                            src={
                              require("../../../../assets/images/x.svg").default
                            }
                            alt="Facebook"
                          />
                        </SocialIconsContainer>
                        <SocialIconsContainer>
                          <SocialIcon
                            src={
                              require("../../../../assets/images/microsoft.svg")
                                .default
                            }
                            alt="Facebook"
                          />
                        </SocialIconsContainer>
                        <SocialIconsContainer>
                          <SocialIcon
                            src={
                              require("../../../../assets/images/git.svg")
                                .default
                            }
                            alt="Facebook"
                          />
                        </SocialIconsContainer>
                        <SocialIconsContainer>
                          <SocialIcon
                            src={
                              require("../../../../assets/images/google.svg")
                                .default
                            }
                            alt="Facebook"
                          />
                        </SocialIconsContainer>
                      </SocialIconDiv>
                    </SocialIcons>
                  </DivMedia>
                </DivDown>
              </CardContainer>
            </Div2>
          </DivContainer>
        </ContainerWrapper>
      </Container>
      <CourseOverview />
    </>
  );
}

const Container = styled.div`
  background-color: #f8fafc;
`;

const ContainerWrapper = styled.div`
  max-width: 85%;
  margin: 0 auto;
`;

const PageNavigation = styled.div`
  display: flex;
  width: 565px;
  height: 24px;
  gap: 18px;
  padding: 36px 0px;
  padding-bottom: 16px;
  align-items: center;

  @media all and (max-width: 768px) {
    width: 100%;
  }
`;
const Span = styled.span`
  font-size: 17px;
  @media all and (max-width: 768px) {
    font-size: 14px;
  }
  @media all and (max-width: 480px) {
    font-size: 12px;
  }
  @media all and (max-width: 360px) {
    font-size: 11px;
  }
`;
const SpanColor = styled.span`
  color: #2563eb;
  font-size: 17px;
  @media all and (max-width: 768px) {
    font-size: 14px;
  }
  @media all and (max-width: 480px) {
    font-size: 12px;
  }
  @media all and (max-width: 360px) {
    font-size: 11px;
  }
`;

const VectorDiv = styled.div``;
const VectorImg = styled.img``;
const RatingText = styled.span`
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  color: #334155;
  @media all and (max-width: 640px) {
    font-size: 12px;
  }
`;
const StarImg = styled.div`
  gap: 10px;
`;
const Hr = styled.hr`
  border-bottom: 1px solid #e2e8f0;
  width: 100%;
  border: 1px 0px 0px 0px;
  margin: 30px 0px;
`;

const Img = styled.img``;
const CartImg = styled.img`
  display: block;
  width: 100%;
`;

const LangIconDiv = styled.div``;
const LangIcon = styled.img`
  display: block;
  width: 100%;
`;

const RatingDiv = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 10px;
  @media all and (max-width: 480px) {
    flex-direction: column;
    gap: 0;
    margin: 25px 0px;
  }
`;

const Header = styled.h1`
  font-size: 40px;
  font-weight: 700;
  line-height: 56px;
  letter-spacing: -0.02em;
  text-align: left;
  @media all and (max-width: 640px) {
    font-size: 35px;
  }
   @media all and (max-width: 480px) {
    font-size: 30px;
  }
`;

const SubHeader = styled.div`
  width: 729px;
  height: 78px;
  gap: 0px;
  opacity: 0px;
  margin-bottom: 18px;

  @media all and (max-width: 1280px) {
    width: 600px;
  }
  @media all and (max-width: 1080px) {
    width: 100%;
    height: 92px;
  }
  @media all and (max-width: 480px) {
    width: 100%;
    height: 127px;
  }
  @media all and (max-width: 360px) {
    width: 100%;
    height: 145px;
  }
`;
const SubHeaderDes = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 25.6px;
  text-align: left;
  @media all and (max-width: 640px) {
    font-size: 14px;
  }
`;

const Rating = styled.div`
  font-size: 14px;
  color: #ffcc00;
  margin-bottom: 10px;
  display: flex;
  gap: 3px;
  text-align: center;
`;

const CourseInfo = styled.div`
  font-size: 0.9rem;
  color: #777;
  margin-bottom: 20px;
  display: flex;
  gap: 10px;
  align-items: center;
  margin-bottom: 17px;
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  text-align: left;
`;

const SpanName = styled.span`
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  color: #2563eb;
  text-align: left;
  @media all and (max-width: 640px) {
    font-size: 12px;
  }
`;

const InfoDiv = styled.div``;
const DivTop = styled.div``;
const DivDown = styled.div``;
const InfoImg = styled.img`
  display: block;
  width: 100%;
`;

const DivImg = styled.div``;
const DivPrice = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
const DivMedia = styled.div``;

const LanguageSection = styled.div`
  font-size: 0.9rem;
  color: #777;
  display: flex;
  align-items: center;
  gap: 19px;
  font-size: 14px;
  font-weight: 400;
  margin-bottom: 10px;
  @media all and (max-width: 640px) {
    font-size: 12px;
  }
`;

const ImageContainer = styled.div`
  background-size: cover;
  background-position: center;
  border-radius: 8px;
  margin-bottom: 16px;
  width: 356px;
  height: 200px;
  top: 24px;
  left: 22px;
  gap: 0px;
  border-radius: 8px 0px 0px 0px;
  opacity: 0px;

  @media all and (max-width: 1300px) {
    width: 280px;
    height: 140px;
  }
  @media all and (max-width: 1080px) {
    width: 232px;
    height: 115px;
  }
`;

const PriceWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 6px;
`;

const Price = styled.span`
  font-size: 24px;
  font-weight: bold;
  color: #333;
  margin-right: 8px;
`;

const OldPrice = styled.span`
  font-size: 18px;
  text-decoration: line-through;
  color: #888;
`;

const Discount = styled.span`
  color: #28a745;
  font-weight: bold;
  margin-left: 8px;
`;

const Button = styled.button`
  padding: 10px 24px 10px 24px;
  gap: 6px;
  border-radius: 8px;
  color: white;
  background: #020617;
  line-height: 22.4px;
  &:hover {
    background-color: #444;
  }
`;

const BuyNowButton = styled(Button)`
  background-color: white;
  color: #0f172a;
  font-size: 14px;
  font-weight: 500;
  line-height: 22.4px;
  border: 1px solid #020617;
  &:hover {
    background-color: #999999;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
  opacity: 0px;
`;
const SocialIconDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;
const SocialIconsContainer = styled.div`
  width: 40px;
  height: 40px;
  gap: 0px;
  opacity: 0px;
`;

const SpanDivMedia = styled.span`
  display: flex;
  font-size: 16px;
  font-weight: 500;
  line-height: 25.6px;
  text-align: left;
  color: #0f172a;
`;

const SocialIcon = styled.img`
  cursor: pointer;
  display: block;
  width: 100%;
`;

const DivContainer = styled.div`
  position: relative;
  width: 100%;
  margin: 0 auto;
`;

const Div1 = styled.div`
  width: 60%;
  padding: 20px;
  position: relative;
  @media all and (max-width: 960px) {
    width: 100%;
  }
  @media all and (max-width: 640px) {
    width: 92%;
  }
`;

const Div2 = styled.div`
  width: 358px;
  height: 520px;
  position: absolute;
  top: 20px;
  right: 40px;

  @media all and (max-width: 1300px) {
    width: 282px;
    height: 455px;
    top: 37px;
    right: 8px;
  }

  @media all and (max-width: 1080px) {
    width: 232px;
    height: 427px;
    top: 75px;
    right: 27px;
  }
  @media all and (max-width: 960px) {
    display: none;
  }
`;

const CardContainer = styled.div`
  border-radius: 12px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  padding: 20px;
  width: 100%;
  height: 100%;
  text-align: center;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  gap: 7px;
  justify-content: space-between;
`;
