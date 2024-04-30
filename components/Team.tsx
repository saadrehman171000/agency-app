import React from "react";
import p1 from "@/public/p1.jpg";
import people from "@/public/person1.jpeg";
import p3 from "@/public/person2.webp";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import team1 from "@/public/team1.jpeg";
import {
  InstagramLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
const Team = () => {
  const brands = [p1, p3, p1, p3];

  return (
    <div className="max-w-7xl mx-auto p-5 px-10 w-full mt-20">
      <div className="flex flex-col items-start justify-center gap-3">
        <h1 className="font-extrabold text-xl md:text-2xl tracking-tighter border-b-4 border-yellow-500 py-2">
          Team
        </h1>
        <h1 className="font-extrabold tracking-tighter text-3xl md:text-5xl">
          Amazing team <br /> members
        </h1>
      </div>
      <div className="mt-10">
        <Carousel className="-z-10">
          <CarouselContent className="-ml-1">
            {brands.map((image, index) => (
              <CarouselItem
                key={index}
                className="pl-1 md:basis-1/2 lg:basis-1/3"
              >
                <div className="p-1">
                  <Card className="max-h-[500px]">
                    <Image
                      src={image}
                      className="object-contain rounded-t-md"
                      alt={`Team ${index}`}
                    />
                    <CardContent className="flex flex-col items-start px-10 py-10 justify-center">
                      <h1 className="font-extrabold text-3xl tracking-tighter">
                        Saad Rehman
                      </h1>
                      <p className="text-gray-500 tracking-tighter">
                        Senior, software engineer at Agency
                      </p>
                      <div className="flex gap-2 mt-10">
                        <InstagramLogoIcon className="w-8 h-8" />
                        <TwitterLogoIcon className="w-8 h-8" />
                        <LinkedInLogoIcon className="w-8 h-8" />
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};

export default Team;
