import React from "react";
import TestimonialCard from "./shared/TestimonialCard";

const Testimonials = () => {
  return (
    <div className="max-w-7xl mx-auto p-5 px-10 w-full my-32">
      <div className="flex flex-col items-start justify-center gap-2">
        <h1 className="font-extrabold text-5xl md:text-6xl tracking-tighter border-b-4 border-yellow-500 py-2">
          Testimonials
        </h1>
        <p className="text-slate-500 tracking-tighter">
          Our clients speak for us: Incredible attention to detail and unmatched
          expertise. Working with Agency has been a game-changer for our
          business.
        </p>
      </div>
      <div className="flex flex-col gap-2 md:grid md:grid-cols-3 md:gap-3">
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
      </div>
    </div>
  );
};

export default Testimonials;
