import {
  FaceIcon,
  GitHubLogoIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import React from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { Button } from "./ui/button";
import Image from "next/image";
import map from "@/public/map.webp";

const GetTouch = () => {
  return (
    <div className="max-w-7xl mx-auto px-10 w-full p-5 md:mt-10">
      <div className="flex flex-col md:flex-row items-center justify-center md:items-center md:justify-between px-32">
        <div className="flex flex-col items-center gap-10 justify-center px-20 py-20">
          <div className="flex flex-col items-center justify-center gap-10">
            <h1 className="font-extrabold tracking-tighter text-2xl md:text-3xl border-b-4 border-yellow-500 py-2">
              Get in touch
            </h1>
            <div className="flex items-center justify-center gap-8">
              <InstagramLogoIcon />
              <LinkedInLogoIcon />
              <TwitterLogoIcon />
              <GitHubLogoIcon />
            </div>
          </div>
          <div className="flex flex-col items-start justify-center gap-8">
            <div className="flex items-center justify-center gap-5 px-3 py-2">
              <div>
                <Phone className="bg-yellow-500 rounded-full px-2 py-1 h-[40px] w-[40px]" />
              </div>
              <div className="flex flex-col items-start justify-center">
                <h1 className="font-bold tracking-tighter">+92 123456789</h1>
                <p className="text-gray-500 tracking-tighter">
                  Help phone support
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-5 px-3 py-2">
              <div>
                <Mail className="bg-yellow-500 rounded-full px-2 py-1 h-[40px] w-[40px]" />
              </div>
              <div className="flex flex-col items-start justify-center">
                <h1 className="font-bold tracking-tighter">
                  support@agency.com
                </h1>
                <p className="text-gray-500 tracking-tighter">
                  Help email support
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-5 px-3 py-2">
              <div>
                <MapPin className="bg-yellow-500 rounded-full px-2 py-1 h-[40px] w-[40px]" />
              </div>
              <div className="flex flex-col items-start justify-center">
                <h1 className="font-bold tracking-tighter">
                  5th Avenue, New York, NY.
                </h1>
                <p className="text-gray-500 tracking-tighter">
                  Our office address
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-slate-900 px-24 py-24">
          <div className="flex flex-col items-center justify-center gap-10">
            <Input
              type="text"
              placeholder="Full Name"
              className="placeholder:text-white text-white w-[200px]"
            />
            <Input
              type="email"
              placeholder="Email"
              className="placeholder:text-white text-white"
            />
            <Input
              type="phone"
              placeholder="Phone Number"
              className="placeholder:text-white text-white"
            />
            <Textarea
              typeof="text"
              placeholder="Message"
              className="placeholder:text-white text-white"
            />
          </div>
          <div className="mt-10">
            <Button className="bg-yellow-500 text-black hover:bg-yellow-500 hover:opacity-80">
              Submit
            </Button>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center my-24">
        <Image
          src={map}
          alt="map"
          height={1000}
          width={1000}
          className="rounded-md"
        />
      </div>
    </div>
  );
};

export default GetTouch;
