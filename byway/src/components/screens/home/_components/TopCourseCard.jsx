import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import data from "../../../helpers/data.json";

export default function TopCourseCard() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1680);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 1680);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Slice the courses data based on screen size
  const coursesToShow = isMobile ? data.courses.slice(0, 3) : data.courses;

  return (
    <TopCourse>
      <TopCourseWrapper>
        <TopDiv>
          <H2>Top Courses</H2>
          <SpanButton>See All</SpanButton>
        </TopDiv>
        <CourseDiv>
          {coursesToShow.map((course) => (
            <Div to={`/singlepage/`} key={course.id}>
              <CourseCard>
                <CourseImg>
                  <Img
                    src={require(`../../../../assets${course.image}`)}
                    alt="Course Preview"
                  />
                </CourseImg>
                <H4>{course.title}</H4>
                <CatSpan>By {course.author}</CatSpan>
                <Ratings>
                  <StarRating>
                    {[...Array(Math.round(course.rating))].map(
                      (_, starIndex) => (
                        <StarImg key={starIndex}>
                          <Img
                            src={
                              require("../../../../assets/images/star.svg")
                                .default
                            }
                            alt="Star Icon"
                          />
                        </StarImg>
                      )
                    )}
                  </StarRating>
                  <RatingText>({course.ratingCount} Ratings)</RatingText>
                </Ratings>
                <CourseDetails>
                  {course.totalHours} Total Hours. {course.lectures} Lectures.{" "}
                  {course.level}
                </CourseDetails>
                <Price>{course.price}</Price>
              </CourseCard>
            </Div>
          ))}
        </CourseDiv>
      </TopCourseWrapper>
    </TopCourse>
  );
}

const TopCourse = styled.section`
  padding: 20px;
`;
const Div = styled(Link)`
  text-decoration: none;
  color: inherit;
  display: block;
`;

const TopCourseWrapper = styled.div`
  max-width: 86%;
  margin: 0 auto;
`;

const TopDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 14px;
`;

const H2 = styled.h2`
  font-size: 24px;
  font-weight: bold;
  color: #333;
`;

const SpanButton = styled.span`
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

const CourseDiv = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 20px;

  @media all and (max-width: 1280px) {
    justify-content: center;
  }
`;

const CourseCard = styled.div`
  width: 306px;
  padding: 14px;
  gap: 4px;
  border: 1px solid #e2e8f0;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 20px 0px #3b82f61f;

  @media all and (max-width: 960px) {
    width: 266px;
  }
  @media (max-width: 768px) {
    width: 240px;
  }
   @media (max-width: 640px) {
    width: 290px;
  }
     @media (max-width: 360px) {
    width: 245px;
  }

`;

const CourseImg = styled.div`
  width: 100%;
  border-radius: 8px;
  margin-bottom: 15px;
`;

const Img = styled.img`
  display: block;
  width: 100%;
`;

const H4 = styled.h4`
  font-weight: bold;
  margin: 10px 0;
  font-size: 18px;
  line-height: 28.8px;
`;

const CatSpan = styled.span`
  margin-bottom: 10px;
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
`;

const Ratings = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const StarRating = styled.div`
  display: flex;
`;

const StarImg = styled.div`
  margin-right: 2px;
`;

const RatingText = styled.span`
  margin-left: 4px;
  font-size: 12px;
  font-weight: 600;
`;

const CourseDetails = styled.span`
  margin-bottom: 10px;
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
`;

const Price = styled.span`
  font-size: 20px;
  font-weight: 600;
  line-height: 30px;
`;
