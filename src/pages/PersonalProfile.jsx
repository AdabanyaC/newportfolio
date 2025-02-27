import React from "react";
import Navbar from "../components/Navbar";
import Introduction from "../components/personal-profile/Introduction";
import TableOfContent from "../components/personal-profile/TableOfContent";
import ExperienceSummary from "../components/personal-profile/ExperienceSummary";
import ProjectsSummary from "../components/personal-profile/ProjectsSummary";
import WorkExperienceFeedback from "../components/personal-profile/WorkExperienceFeedback";
import LogoSlider from "../components/LogoSlider";

const PersonalProfile = () => {
  return (
    <div className="bg-cream-light">
      <Navbar />
      <Introduction />
      <TableOfContent />
      <ExperienceSummary />
      <WorkExperienceFeedback />
      <ProjectsSummary />
      <LogoSlider classNames="bg-cream-light max-w-7xl mx-auto py-24" />
    </div>
  );
};

export default PersonalProfile;
