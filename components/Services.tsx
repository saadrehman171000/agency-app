import Image from "next/image";
import React from "react";
import Card from "./shared/Card";

const Services = () => {
  return (
    <div className="bg-slate-950 px-10 py-1 my-32 ">
      <div className="max-w-7xl mx-auto p-5 px-10 w-full ">
        <div className="flex flex-col items-start justify-center gap-2">
          <p className="text-white border-b-4 border-yellow-500 py-2">
            Services
          </p>
          <h1 className="font-extrabold text-5xl md:text-6xl tracking-tighter text-white max-w-lg">
            Services will grow your business
          </h1>
        </div>
        <div className="flex flex-col gap-3 md:grid md:grid-cols-3 md:gap-3 mt-10">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
};

export default Services;
