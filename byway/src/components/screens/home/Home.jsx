import React from "react";
import Header from "../../includes/Header";
import Spotlight from "./_components/Spotlight";
import Testimonial from "./_components/Testimonial";
import LearningJourney from "./_components/LearningJourney";
import Footer from "../../includes/Footer";
import TopInstructorsCard from "./_components/TopInstructorsCard";
import TopCourseCard from "./_components/TopCourseCard";
import Categories from "./_components/Categories";

export default function Home() {
  return (
    <>
      <Header />
      <Spotlight />
      <Categories />
      <TopCourseCard />
      <TopInstructorsCard />
      <Testimonial />
      <LearningJourney />
      <Footer />
    </>
  );
}
