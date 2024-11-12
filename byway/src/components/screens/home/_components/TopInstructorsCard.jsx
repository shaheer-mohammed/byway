import React, { useState, useEffect } from "react";
import styled from "styled-components";
import data from "../../../helpers/data.json";

export default function TopInstructorsCard() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1520);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 1520);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const coursesToShow = isMobile
    ? data.instructors.slice(0, 4)
    : data.instructors;

  return (
    <>
      <TopInstructors>
        <TopInstructorWrapper>
          <InstructorsDiv>
            <H21>Top Instructors</H21>
            <SpanButton1>See All</SpanButton1>
          </InstructorsDiv>

          <InstructorsCardDiv>
            {coursesToShow.map((instructor) => (
              <InstructorsCard key={instructor.id}>
                <InstructorsImg>
                  <InstImg
                    src={require(`../../../../assets${instructor.image}`)}
                    alt={instructor.name}
                  />
                </InstructorsImg>
                <InstructorsName>{instructor.name}</InstructorsName>
                <InstructorQuli>{instructor.title}</InstructorQuli>
                <HrLine />
                <RatingDiv>
                  <StarDiv>
                    <StarImg1Div>
                      <StarImg1
                        src={
                          require("../../../../assets/images/star.svg").default
                        }
                        alt="Star Icon"
                      />
                    </StarImg1Div>
                    <Rate>{instructor.rating}</Rate>
                  </StarDiv>
                  <StudentsCount>{instructor.students} Students</StudentsCount>
                </RatingDiv>
              </InstructorsCard>
            ))}
          </InstructorsCardDiv>
        </TopInstructorWrapper>
      </TopInstructors>
    </>
  );
}

const TopInstructors = styled.div`
  margin-bottom: 55px;
`;

const TopInstructorWrapper = styled.div`
  max-width: 85%;
  margin: 0 auto;
`;

const InstructorsDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 24px 0px;
`;
const H21 = styled.h2`
  font-size: 24px;
  font-weight: bold;
  color: #333;
`;

const SpanButton1 = styled.span`
  font-family: Inter;
  font-size: 14px;
  font-weight: 500;
  line-height: 22.4px;
  color: #3b82f6;
  cursor: pointer;
  &:hover {
    color: #0056b3;
  }
`;

const InstructorsCardDiv = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;
  cursor: pointer;
  margin-top: 20px;
  align-items: center;
  text-align: center;

  @media all and (max-width: 1280px) {
      justify-content: center;

  }
`;
const InstructorsCard = styled.div`
  width: 212px;
  padding: 14px;
  gap: 4px;
  border: 1px solid #e2e8f0;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 20px 0px #3b82f61f;
`;

const InstructorsImg = styled.div``;

const InstImg = styled.img`
  display: block;
  width: 100%;
`;

const InstructorsName = styled.h3`
  font-weight: bold;
  margin-bottom: 0px;
  font-size: 18px;
  line-height: 28.8px;
`;
const InstructorQuli = styled.span`
  margin-bottom: 0px;
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
`;

const HrLine = styled.hr`
  width: 100%;
  border: none;
  border-top: 1px solid #e6e6e6;
  margin: 10px 0;
`;

const RatingDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 5px;
`;
const Rate = styled.span`
  font-size: 12px;
  font-weight: 600;
`;

const StarDiv = styled.div`
  display: flex;
  width: 43px;
  height: 20px;
  gap: 4px;
  align-items: center;
`;
const StarImg1Div = styled.div`
  width: 20px;
  height: 20px;
`;
const StarImg1 = styled.img`
  display: block;
  width: 100%;
`;

const StudentsCount = styled.span`
  font-size: 12px;
  font-weight: 600;
  text-align: center;
`;
