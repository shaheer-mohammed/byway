import React, { useState } from "react";
import styled from "styled-components";
import Testimonial from "./Testimonial";
import TopCourseCard from "./TopCourseCard";
import Footer from "../../../includes/Footer";
import Data from "../../../helpers/data.json";

import Star1 from "../../../../assets/images/star.svg";
import GreyStar from "../../../../assets/images/greystar.svg";

export default function CourseOverview() {
  const [activeTab, setActiveTab] = useState("description");
  const reviews = Data.reviewsData;
  const syllabusData = Data.syllabusData;

  const starData = [
    { rating: 5, percentage: "80%" },
    { rating: 4, percentage: "10%" },
    { rating: 3, percentage: "5%" },
    { rating: 2, percentage: "3%" },
    { rating: 1, percentage: "2%" },
  ];

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  return (
    <>
      <Container>
        <ContainerWrapper>
          <CourseOverviewDiv>
            <Tabs>
              <Tab
                onClick={() => handleTabClick("description")}
                active={activeTab === "description"}
              >
                Description
              </Tab>
              <Tab
                onClick={() => handleTabClick("instructor")}
                active={activeTab === "instructor"}
              >
                Instructor
              </Tab>
              <Tab
                onClick={() => handleTabClick("syllabus")}
                active={activeTab === "syllabus"}
              >
                Syllabus
              </Tab>
              <Tab
                onClick={() => handleTabClick("reviews")}
                active={activeTab === "reviews"}
              >
                Reviews
              </Tab>
            </Tabs>
            <Hr />

            {activeTab === "description" && (
              <>
                <Section>
                  <SectionHeader>Course Description</SectionHeader>
                  <Text>
                    This interactive e-learning course will introduce you to
                    User Experience (UX) design, the art of creating products
                    and services that are intuitive, enjoyable, and
                    user-friendly. Gain a solid foundation in UX principles and
                    learn to apply them in real-world scenarios through engaging
                    modules and interactive exercises.
                  </Text>
                </Section>

                <Section>
                  <SectionHeader>Certification</SectionHeader>
                  <Text>
                    At Byway, we understand the significance of formal
                    recognition for your hard work and dedication to continuous
                    learning. Upon successful completion of our courses, you
                    will earn a prestigious certification that not only
                    validates your expertise but also opens doors to new
                    opportunities in your chosen field.
                  </Text>
                </Section>
              </>
            )}

            {activeTab === "instructor" && (
              <>
                <Section>
                  <SectionHeader>Instructor</SectionHeader>
                  <InstructorContainer>
                    <InstructorInfo>
                      <InstructorName>Ronald Richards</InstructorName>
                      <InstructorTitle>UI/UX Designer</InstructorTitle>
                      <StatsContainer>
                        <InstructorImage>
                          <InstructorImg
                            src={
                              require("../../../../assets/images/span-8.svg")
                                .default
                            }
                            alt="InstructorImage"
                          />
                        </InstructorImage>
                        <StatIconDiv>
                          <StatIcon>
                            <IconImg
                              src={
                                require("../../../../assets/images/achive.svg")
                                  .default
                              }
                              alt="achive"
                            />
                            40,445 Reviews
                          </StatIcon>
                          <StatIcon>
                            <IconImg
                              src={
                                require("../../../../assets/images/cap.svg")
                                  .default
                              }
                              alt="cap"
                            />
                            500 Students
                          </StatIcon>
                          <StatIcon>
                            <IconImg
                              src={
                                require("../../../../assets/images/play.svg")
                                  .default
                              }
                              alt="play"
                            />
                            15 Courses
                          </StatIcon>
                        </StatIconDiv>
                      </StatsContainer>
                    </InstructorInfo>
                  </InstructorContainer>
                  <Text>
                    With over a decade of industry experience, Ronald brings a
                    wealth of practical knowledge to the classroom. He has
                    played a pivotal role in designing user-centric interfaces
                    for renowned tech companies, ensuring seamless and engaging
                    user experiences.
                  </Text>
                </Section>
              </>
            )}

            {/* Syllabus Section */}

            {activeTab === "syllabus" && (
              <>
                <Section>
                  <SectionHeader>Syllabus</SectionHeader>

                  <SyllabusItemDiv>
                    {syllabusData.map((item, index) => (
                      <SyllabusItem key={index}>
                        <RightDiv>
                          <ExpandIcon>
                            <ExpandIconDiv>
                              <ExpandIconImg
                                src={
                                  require("../../../../assets/images/arrow-down.svg")
                                    .default
                                }
                                alt="arrow-down"
                              />
                            </ExpandIconDiv>
                          </ExpandIcon>
                          <LessonTitle>{item.title}</LessonTitle>
                        </RightDiv>
                        <LeftDiv>
                          <LessonInfo>
                            <LessonMeta>
                              {item.lessons} {item.duration}
                            </LessonMeta>
                          </LessonInfo>
                        </LeftDiv>
                      </SyllabusItem>
                    ))}
                  </SyllabusItemDiv>
                </Section>
              </>
            )}
          </CourseOverviewDiv>
        </ContainerWrapper>
      </Container>
      {activeTab === "reviews" && (
        <>
          <ReviewsContainerWrapper>
            <SectionHeader>Reviews</SectionHeader>

            <ReviewsContainer>
              <DivRight>
                <ReviewSummary>
                  <Rating>
                    <Star>
                      <StarImg>
                        <Img
                          src={
                            require("../../../../assets/images/star.svg")
                              .default
                          }
                          alt="Star Icon"
                        />
                      </StarImg>
                      <OverallRating>4.6</OverallRating>
                      <ReviewCount>146,951 reviews</ReviewCount>
                    </Star>
                  </Rating>
                  <BreakdownContainer>
                    {starData.map(({ rating, percentage }, index) => (
                      <StarRow key={index}>
                        {Array.from({ length: 5 }, (_, i) => (
                          <StarImg key={i}>
                            <Img
                              src={i < rating ? Star1 : GreyStar}
                              alt="Star Icon"
                            />
                          </StarImg>
                        ))}
                        <Percentage>{percentage}</Percentage>
                      </StarRow>
                    ))}
                  </BreakdownContainer>
                </ReviewSummary>
              </DivRight>

              <DivLeft>
                {reviews.map((review) => (
                  <ReviewCard key={review.id}>
                    <UserInfo>
                      <UserProfile>
                        <UserImgDiv>
                          <UserImage
                            src={review.image}
                            alt={`${review.name} avatar`}
                          />
                        </UserImgDiv>

                        <UserName>{review.name}</UserName>
                      </UserProfile>

                      <UserDetails>
                        <UserRating>
                          <StarImg>
                            <Img
                              src={
                                require("../../../../assets/images/star.svg")
                                  .default
                              }
                              alt="Star Icon"
                            />
                            {review.rating}
                          </StarImg>
                          <ReviewDate>{review.date}</ReviewDate>
                        </UserRating>
                        <ReviewText>{review.reviewText}</ReviewText>
                      </UserDetails>
                    </UserInfo>
                  </ReviewCard>
                ))}

                <ViewMoreButton>View more Reviews</ViewMoreButton>
              </DivLeft>
            </ReviewsContainer>
          </ReviewsContainerWrapper>
        </>
      )}
      <Testimonial />
      <TopCourseCard />
      <Footer />
    </>
  );
}

const Container = styled.div`
  margin-top: 26px;
  padding: 20px;
`;

const ContainerWrapper = styled.div`
  max-width: 86%;
  margin: 0 auto;
`;

const CourseOverviewDiv = styled.div`
  width: 840px;
  @media all and (max-width: 960px) {
    width: 100%;
  }
`;

const Tabs = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 30px;
  @media all and (max-width: 640px) {
    gap: 14px;
    flex-wrap: wrap;
    justify-content: space-around;
  }
`;

const Hr = styled.hr`
  height: 0px;
  opacity: 0px;
  border: 1px solid #e2e8f0;
  margin-top: 30px;
  margin-bottom: 30px;
`;

const Tab = styled.button`
  padding: 10px 20px;
  background-color: #f1f1f1;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  width: 148px;
  height: 57px;
  padding: 18px 21px 18px 21px;
  gap: 8px;
  border-radius: 8px;
  opacity: 0px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #e0e0e0;
  }
  @media all and (max-width: 640px) {
    font-size: 12px;
    width: 138px;
    height: 47px;
  }
`;

const Section = styled.section`
  margin-bottom: 40px;
`;

const SectionHeader = styled.h2`
  font-size: 20px;
  font-weight: 600;
  line-height: 30px;
`;

const Text = styled.p`
  color: #334155;
  font-size: 16px;
  font-weight: 400;
  line-height: 25.6px;
  @media all and (max-width: 640px) {
    font-size: 14px;
  }
`;

const InstructorContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
`;

const InstructorInfo = styled.div``;

const InstructorName = styled.span`
  font-size: 1.2rem;
  font-weight: bold;
  color: #3498db;
  cursor: pointer;
  &:hover {
  }
`;

const InstructorTitle = styled.p`
  font-size: 1rem;
  color: #555;
`;

const StatsContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 10px;
`;
const InstructorImage = styled.div`
  width: 120px;
  height: 120px;
`;
const InstructorImg = styled.img`
  display: block;
  width: 100%;
  border-radius: 50%;
`;

const StatIconDiv = styled.div`
  gap: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const StatIcon = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 14px;
  font-weight: 400;
`;

const IconImg = styled.img`
  font-size: 1.2rem;
  color: #3498db;
`;

// Syllabus section styling

const SyllabusItemDiv = styled.div`
  border: 1px solid #e2e8f0;
  width: 100%;
  border-radius: 8px;
`;

const SyllabusItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 24px;
  cursor: pointer;
  border-top: 1px solid #e2e8f0;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #f9f9f9;
  }
`;
const RightDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  gap: 16px;
`;
const LeftDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
`;
const LessonInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const LessonTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  @media all and (max-width: 640px) {
    font-size: 15px;
  }
`;

const LessonMeta = styled.span`
  font-size: 14px;
  color: #888;
`;

const ExpandIcon = styled.span`
  font-size: 24px;
  color: #888;
`;
const ExpandIconDiv = styled.div`
  width: 14px;
`;

const ExpandIconImg = styled.img`
  display: block;
  width: 100%;
`;

// ReviewsContainer

const ReviewsContainerWrapper = styled.div`
  max-width: 86%;
  margin: 0 auto;
  margin-bottom: 30px;
`;
const ReviewsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  @media all and (max-width: 1080px) {
    display: block;
  }
`;
const DivRight = styled.div``;

const DivLeft = styled.div`
  width: 949px;
  padding: 24px 22px 24px 24px;
  gap: 0px;
  border-radius: 16px 0px 0px 0px;
  border: 1px 0px 0px 0px;
  opacity: 0px;

  @media all and (max-width: 1360px) {
    width: 720px;
  }
  @media all and (max-width: 1280px) {
    width: 673px;
  }
  @media all and (max-width: 1080px) {
    width: 100%;
    padding: 24px 22px 24px 2px;
  }
  @media all and (max-width: 640px) {
    width: 95%;
  }
`;

const ReviewSummary = styled.div`
  margin-bottom: 20px;
`;

const Rating = styled.div`
  display: flex;
  align-items: center;
  font-size: 2rem;
`;

const Star = styled.span`
  width: 286px;
  display: flex;
  gap: 10px;
  align-items: center;
`;

const OverallRating = styled.span`
  font-size: 20px;
  font-weight: 600;
`;

const ReviewCount = styled.p`
  font-size: 14px;
  font-weight: 500;
`;

const BreakdownContainer = styled.div`
  margin-top: 10px;
`;
const StarImg = styled.div`
  gap: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  color: black;
`;
const Img = styled.img`
  width: 100%;
  display: block;
`;

const StarRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  gap: 2px;
`;

const Stars = styled.span`
  font-size: 1rem;
  margin-right: 10px;
`;

const Percentage = styled.span`
  font-size: 0.9rem;
  color: #555;
`;

const ReviewCard = styled.div`
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
`;
const UserProfile = styled.div`
  gap: 12px;
  opacity: 0px;
  width: 272px;
  display: flex;
  align-items: center;
`;

const UserInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  @media all and (max-width: 768px) {
    flex-direction: column;
    align-items: start;
    gap: 12px;
  }
`;

const UserImgDiv = styled.div``;

const UserImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 10px;
`;

const UserDetails = styled.div`
  display: flex;
  flex-direction: column;
  width: 631px;
  height: 139px;
  gap: 6px;
  opacity: 0px;

  @media all and (max-width: 1360px) {
    height: 100%;
  }
  @media all and (max-width: 1280px) {
    height: 178px;
  }
  @media all and (max-width: 768px) {
    width: 100%;
    height: 138px;
  }
  @media all and (max-width: 640px) {
    height: 148px;
  }
  @media all and (max-width: 540px) {
    height: 172px;
  }
  @media all and (max-width: 480px) {
    height: 192px;
  }
  @media all and (max-width: 360px) {
    height: 255px;
  }
`;

const UserName = styled.span`
  font-size: 1.1rem;
  font-weight: bold;
  color: #333;
`;

const UserRating = styled.span`
  font-size: 0.9rem;
  color: #f39c12;
  display: flex;
  gap: 20px;
`;

const ReviewDate = styled.span`
  font-size: 0.8rem;
  color: #777;
  display: flex;
  align-items: center;
`;

const ReviewText = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 25.6px;
  @media all and (max-width: 640px) {
    font-size: 14px;
  }
  @media all and (max-width: 480px) {
    font-size: 13px;
  }
`;

const ViewMoreButton = styled.button`
  width: 179px;
  height: 48px;
  padding: 10px 24px 10px 24px;
  gap: 6px;
  cursor: pointer;

  border-radius: 8px;
  background-color: white;

  &:hover {
    background-color: #e0e0e0;
  }
`;
