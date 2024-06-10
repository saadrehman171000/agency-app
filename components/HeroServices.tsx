import React from "react";
import ServicesCard from "./ServicesCard";

const HeroServices = () => {
  return (
    <div className="max-w-7xl mx-auto p-5 px-10 mt-32">
      <div className="flex flex-col items-center justify-center gap-2 ">
        <h1 className="font-extrabold tracking-tighter text-lg md:text-xl">
          Services
        </h1>
        <h1 className="font-extrabold tracking-tighter text-3xl md:text-5xl border-b-8 border-yellow-500 py-2">
          Services that we provide
        </h1>
      </div>
      <div className="flex flex-col items-center justify-center gap-10 md:gap-2 mt-10">
        <ServicesCard />
        <ServicesCard />
        <ServicesCard />
      </div>
    </div>
  );
};

export default HeroServices;
