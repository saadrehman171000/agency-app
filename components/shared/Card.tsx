import Image from "next/image";
import React from "react";
import headphones from "@/public/headphones.png";
import file from "@/public/file.svg";
import { Headset } from "lucide-react";
const Card = () => {
  return (
    <div className="bg-white shadow-2xl rounded-md px-5 py-5 max-w-md">
      <div className="flex flex-col gap-5 items-start justify-center">
        <Headset />
        <h1 className="font-bold text-lg tracking-tighter">
          Customer Support Services
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro,
          perspiciatis voluptas? Sed aliquam sapiente at facere facilis maxime
          voluptatum molestiae!
        </p>
      </div>
    </div>
  );
};

export default Card;
