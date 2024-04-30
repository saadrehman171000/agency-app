import React from "react";
import Image from "next/image";
import image from "@/public/ser2.webp";
import { Button } from "./ui/button";

const ServicesCard = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-10 md:flex-row md:items-center md:justify-between md:px-20 md:gap-10">
      <div>
        <Image src={image} alt="imageServices" width={500} height={500} />
      </div>
      <div className="flex flex-col items-start justify-center gap-10 max-w-md md:px-10 md:py-20">
        <h1 className="font-extrabold text-2xl md:text-4xl tracking-tighter">
          Services Title
        </h1>
        <h1 className="tracking-tighter text-slate-500">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis sunt
          voluptas commodi iure odio perferendis earum consequuntur assumenda
          error dolore vel placeat quasi consectetur, laborum vero, saepe culpa
          veniam eligendi itaque porro soluta accusamus illum. Aperiam
          dignissimos qui recusandae laborum, quam numquam quod quas pariatur
          deleniti tenetur nemo? Illo, magnam.
        </h1>
        <div className="flex items-center justify-between gap-44">
          <Button>Avail Service</Button>
          <h1 className="font-extrabold text-xl">$299</h1>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;