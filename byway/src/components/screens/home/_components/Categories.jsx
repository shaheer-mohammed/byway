import React from "react";
import styled from "styled-components";
import data from "../../../helpers/data.json"; // Import the JSON data

// Import static images
import CatIcon1 from "../../../../assets/images/Cat-Icon1.svg";
import DevelopmentIcon from "../../../../assets/images/devlopment.svg";
import MarketingIcon from "../../../../assets/images/marketing.svg";
import PhysicsIcon from "../../../../assets/images/physics.svg";

export default function Categories() {
  const iconMapping = {
    Astrology: CatIcon1,
    Development: DevelopmentIcon,
    Marketing: MarketingIcon,
    Physics: PhysicsIcon,
  };

  return (
    <TopCategories>
      <TopCategoriesWrapper>
        <TopDiv>
          <H2>Top Categories</H2>
          <SpanButton>See All</SpanButton>
        </TopDiv>
        <CategoryDiv>
          {data.categories.map((category) => (
            <CategoryCard key={category.id}>
              <DivRoundedImg>
                <DivIcon>
                  <IconImg
                    src={iconMapping[category.name]}
                    alt={`${category.name} Icon`}
                  />
                </DivIcon>
              </DivRoundedImg>
              <H4>{category.name}</H4>
              <CatSpan>{category.courseCount} Courses</CatSpan>
            </CategoryCard>
          ))}
        </CategoryDiv>
      </TopCategoriesWrapper>
    </TopCategories>
  );
}

const TopCategories = styled.div`
  margin: 20px 0px;
`;

const TopCategoriesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  max-width: 85%;
  margin: 0 auto;


  @media all and (max-width: 960px) {
    max-width: 89%;
  }
`;

const TopDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 20px;
  align-items: center;
`;

const H2 = styled.h2`
  font-size: 24px;
  font-weight: bold;
  color: #333;
`;

const SpanButton = styled.span`
  font-size: 14px;

  color: #3b82f6;
  cursor: pointer;
  &:hover {
    color: #0056b3;
  }
`;

const CategoryDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px;
  width: 100%;

  @media all and (max-width: 1680px) {
    justify-content: space-around;
  }
   
`;

const CategoryCard = styled.div`
  width: 206px;
  height: 224px;
  padding: 24px 63px 24px 63px;
  gap: 4px;
  border: 1px solid #e2e8f0;
  border-radius: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-shadow: 0px 0px 8px 0px #3b82f61f;

   @media all and (max-width: 960px) {
  width: 186px;

  }
   @media all and (max-width: 768px) {
  width: 146px;

  }
 @media all and (max-width: 640px) {
  width: 126px;

  }
`;

const DivRoundedImg = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
  background-color: #e0f2fe;
`;

const DivIcon = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const IconImg = styled.img`
  display: block;
  width: 100%;
`;

const H4 = styled.h4`
  font-size: 20px;
  font-weight: bold;
  margin: 10px 0;
  text-align: center;
`;

const CatSpan = styled.span`
  font-size: 16px;
  color: #666;
  display: flex;
  justify-content: center;
`;
