"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import imageHero from "@/public/picture.jpg";
import { ReactTyped } from "react-typed";
import one from "@/public/one.jpg";

const Hero = () => {
  const [scrollPosition, getScrollPositon] = useState(
    document.documentElement.scrollTop
  );

  useEffect(() => {
    window.addEventListener("scroll", () => {
      getScrollPositon(document.documentElement.scrollTop);
    });
  }, []);

  return (
    <div className="max-w-7xl mx-auto p-5 px-10 w-full text-center my-52">
      {scrollPosition < 50 ? (
        <Image
          src={imageHero}
          alt="hero"
          layout="fill"
          objectFit="cover"
          className="mt-[4.5rem] fill-red-800"
        />
      ) : (
        <h1 className="font-light tracking-tighter text-5xl md:text-7xl">
          Shape the impact of <br />{" "}
          <ReactTyped
            className="font-light tracking-tighter bg-gradient-to-r from-green-500 via-blue-300 to-blue-500 inline-block text-transparent bg-clip-text pb-10"
            strings={["Emerging Technology"]}
            typeSpeed={80}
            loop
          />
        </h1>
      )}
    </div>
  );
};

export default Hero;
