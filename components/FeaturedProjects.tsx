import React from "react";
import FeaturedCard from "./shared/FeaturedCard";

const FeaturedProjects = () => {
  return (
    <div className="max-w-7xl p-5 px-10 w-full my-32">
      <div className="flex flex-col gap-2">
        <h1 className="font-light text-5xl md:text-6xl tracking-tighter">
          Featured Projects
        </h1>
        <p className="text-slate-500 tracking-tighter">
          Get inspired by some of the most innovative architecture projects.
          View photos and discover the stories behind the projects.
        </p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <FeaturedCard />
        <FeaturedCard />
        <FeaturedCard />
      </div>
    </div>
  );
};

export default FeaturedProjects;
