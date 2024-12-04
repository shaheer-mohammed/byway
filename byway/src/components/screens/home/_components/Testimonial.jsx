import React, { useState } from "react";
import styled from "styled-components";
import data from "../../../helpers/data.json";

export default function Testimonial() {
  const [startIndex, setStartIndex] = useState(0);
  const testimonials = data.testimonials;
  const visibleTestimonials = 3;

  const handleNext = () => {
    if (startIndex + visibleTestimonials < testimonials.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  const testimonialsToShow = testimonials.slice(
    startIndex,
    startIndex + visibleTestimonials
  );

  return (
    <TestimonialsSection>
      <TestimonialsSectionWrapper>
        <TestimonialsHeader>
          <TitleDiv>
            <Title>What Our Customers Say About Us</Title>
          </TitleDiv>
          <NavigationDiv>
            <NavButton onClick={handlePrev} disabled={startIndex === 0}>
              <NavButtonDiv>
                <NavButtonImg
                  src={
                    require("../../../../assets/images/Icon-left.svg").default
                  }
                  alt="Quote Icon"
                />
              </NavButtonDiv>
            </NavButton>
            <NavButton
              onClick={handleNext}
              disabled={startIndex + visibleTestimonials >= testimonials.length}
            >
              <NavButtonDiv>
                <NavButtonImg
                  src={
                    require("../../../../assets/images/Icon-right.svg").default
                  }
                  alt="Quote Icon"
                />
              </NavButtonDiv>
            </NavButton>
          </NavigationDiv>
        </TestimonialsHeader>

        <TestimonialsContainer>
          {testimonialsToShow.map((testimonial) => (
            <TestimonialCard key={testimonial.id}>
              <QuoteIcon>
                <QuoteIconDiv>
                  <QuoteIconImg
                    src={
                      require("../../../../assets/images/quotes.svg").default
                    }
                    alt="Quote Icon"
                  />
                </QuoteIconDiv>
              </QuoteIcon>
              <QuoteTextDiv>
                <QuoteText>{testimonial.quote}</QuoteText>
              </QuoteTextDiv>

              <UserDiv>
                <UserImageDiv>
                  <UserImage src={testimonial.image} alt="User Image" />
                </UserImageDiv>

                <UserInfo>
                  <UserName>{testimonial.name}</UserName>
                  <UserTitle>{testimonial.title}</UserTitle>
                </UserInfo>
              </UserDiv>
            </TestimonialCard>
          ))}
        </TestimonialsContainer>
      </TestimonialsSectionWrapper>
    </TestimonialsSection>
  );
}

const TestimonialsSection = styled.section`
  background-color: #f8fafc;
  height: 512px;

  @media all and (max-width: 640px) {
    height: 401px;
  }
  @media all and (max-width: 480px) {
    height: 487px;
  }
  @media all and (max-width: 360px) {
    height: 440px;
  }
`;

const TestimonialsSectionWrapper = styled.section`
  max-width: 85%;
  margin: 0 auto;
`;

const TestimonialsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
  align-items: center;
  gap: 12px;
`;

const TitleDiv = styled.div`
  width: 306px;
`;

const Title = styled.h3`
  font-size: 24px;
  font-weight: bold;
  color: #000000;

  @media all and (max-width: 640px) {
    font-size: 18px;
  }
`;

const NavigationDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 136px;
  gap: 12px;
`;

const NavButton = styled.button`
  background-color: #94a3b8;
  border: none;
  cursor: pointer;
  color: #fff;
  width: 56px;
  height: 40px;
  gap: 10px;
  padding: 10px 16px 10px 16px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: #007bff;
    color: #000;
  }

  @media all and (max-width: 640px) {
    width: 45px;
  }
`;

const NavButtonDiv = styled.div`
  width: 6px;
  height: 12px;
`;
const NavButtonImg = styled.img`
  display: block;
  width: 100%;
`;

const QuoteIcon = styled.span``;

const QuoteIconImg = styled.img`
  display: block;
  width: 100%;
`;

const QuoteIconDiv = styled.div`
  width: 35.66px;
  height: 27.35px;
`;

const QuoteTextDiv = styled.div`
  width: 400px;
  @media all and (max-width: 480px) {
    width: 270px;
  }
  @media all and (max-width: 360px) {
    width: 220px;
  }
`;

const QuoteText = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 25.6px;
  text-align: left;
  @media all and (max-width: 360px) {
    font-size: 12px;
  }
`;

const UserDiv = styled.div`
  display: flex;
  gap: 16px;
`;

const UserImageDiv = styled.div`
  display: flex;
  align-items: center;
`;

const UserImage = styled.img``;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
`;

const UserName = styled.span`
  font-size: 18px;
  font-weight: 600;
  line-height: 28.8px;
  text-align: left;
  @media all and (max-width: 360px) {
    font-size: 15px;
  }
`;

const UserTitle = styled.span`
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  text-align: left;
  @media all and (max-width: 360px) {
    font-size: 12px;
  }
`;

const TestimonialsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 16px;
  overflow: hidden;
  transition: transform 0.5s ease-in-out;
`;

const TestimonialCard = styled.div`
  width: 382px;
  height: 236px;
  padding: 28px;
  gap: 8px;
  border-radius: 16px;
  border: 1px solid #e2e8f0;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 20px 0px #3b82f61f;
  transition: transform 0.5s ease-in-out;

  @media all and (max-width: 640px) {
    width: 367px;
    height: 222px;
    padding: 15px;
    gap: 0px;
  }
  @media all and (max-width: 480px) {
    width: 367px;
    height: 272px;
    padding: 15px;
    gap: 0px;
  }
  @media all and (max-width: 360px) {
    height: 240px;
  }
`;
