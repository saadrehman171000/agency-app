import Image from "next/image";
import React from "react";
import Card from "./shared/Card";

const Services = () => {
  return (
    <div className="max-w-7xl p-5 px-10 w-full my-32">
      <div className="flex flex-col gap-2">
        <h1 className="font-light text-5xl md:text-6xl tracking-tighter">
          Services Section
        </h1>
        <p className="text-slate-500 tracking-tighter">
          Elevate your brand with our comprehensive suite of digital solutions,
          tailored to amplify your online presence and drive tangible results.
        </p>
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
  );
};

export default Services;
