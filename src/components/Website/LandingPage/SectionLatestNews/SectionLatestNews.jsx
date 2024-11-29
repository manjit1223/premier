import React from "react";
import ImageSlider from "./ImageSlider";

function SectionLatestNews() {
  return (
    <div className="grid gap-8 px-5 mb-10" id="latestNews">
      <p className="abril-fatface text-3xl md:text-5xl text-center">
        Latest News
      </p>
      <ImageSlider />
    </div>
  );
}

export default SectionLatestNews;
