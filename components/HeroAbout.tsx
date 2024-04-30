import Image from "next/image";
import React from "react";
import image from "@/public/ag1.jpg";

const HeroAbout = () => {
  return (
    <div className="max-w-7xl mx-auto w-full mt-32 p-5 px-10 ">
      <div className="flex flex-col md:flex-row items-center justify-between gap-3">
        <div className="flex flex-col items-start justify-center gap-2">
          <h1 className="font-extrabold text-xl md:text-2xl tracking-tighter border-b-4 py-2 border-yellow-500">
            About us
          </h1>
          <h1 className="font-bold tracking-tighter text-3xl md:text-5xl">
            We build bridge between companies and customers
          </h1>
        </div>
        <p className="max-w-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          nobis excepturi, repudiandae et cupiditate odit sequi explicabo ab ea
          nemo eius perspiciatis, commodi culpa ut exercitationem quasi dolores
          laboriosam officia distinctio possimus, quidem quisquam. Aspernatur
          earum facilis rerum excepturi cum nobis eos. Suscipit veniam nobis
          ratione illum magnam laborum officiis.
        </p>
      </div>

      <Image src={image} alt="image" className="mt-10 " />
    </div>
  );
};

export default HeroAbout;
