import React from "react";
import TestimonialCard from "./shared/TestimonialCard";

const AboutTestimonial = () => {
  return (
    <div className="max-w-7xl p-5 px-10 mt-20 mx-auto w-full mb-32">
      <div className="flex flex-col items-start justify-center gap-3">
        <h1 className="font-extrabold text-xl md:text-2xl tracking-tighter border-b-4 border-yellow-500 py-2">
          Testimonials
        </h1>
        <h1 className="font-extrabold tracking-tighter text-3xl md:text-5xl">
          What clients say
          <br /> about us
        </h1>
      </div>
      <div className="flex flex-col gap-2 md:flex-row md:gap-2">
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
      </div>
    </div>
  );
};

export default AboutTestimonial;
