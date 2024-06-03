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
        <div className="bg-slate-900 px-24 py-24 w-full">
          <div className="flex flex-col items-center justify-center gap-10">
            <Input
              type="text"
              placeholder="Full Name"
              className="placeholder:text-white text-white "
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
              placeholder="Service intrested in"
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
    </div>
  );
};

export default GetTouch;
