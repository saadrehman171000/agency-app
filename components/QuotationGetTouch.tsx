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
import { Checkbox } from "@/components/ui/checkbox";
import Checkboxx from "./Checkboxx";

const QuotaionGetTouch = () => {
  return (
    <div className="max-w-7xl mx-auto px-10 p-5 md:mt-10">
      <div className="flex flex-col items-center justify-center gap-2 md:mb-3 mb-3">
        <h1 className="font-extrabold tracking-tighter text-3xl md:text-3xl border-b-8 border-yellow-500 py-2">
          Fill Out The Form To Get Quote
        </h1>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center md:items-center md:justify-between px-32">
        <div className="bg-slate-900 px-24 py-16 w-full">
          <div className="flex flex-col items-start justify-center  space-y-3">
            <div className="flex flex-col items-start justify-start">
              <h1 className="text-white">Name</h1>
            </div>
            <div className="flex space-x-5">
              <Input
                type="text"
                placeholder="First Name"
                className="placeholder:text-white text-white "
              />
              <Input
                type="text"
                placeholder="Last Name"
                className="placeholder:text-white text-white "
              />
            </div>
            <div className="flex flex-col items-start justify-start">
              <h1 className="text-white">Email</h1>
            </div>
            <Input
              type="email"
              placeholder="abc@abc.com"
              className="placeholder:text-white text-white"
            />
            <div className="flex flex-col items-start justify-start">
              <h1 className="text-white">Phone</h1>
            </div>
            <Input
              type="phone"
              placeholder="+123456"
              className="placeholder:text-white text-white"
            />
            <div className="flex flex-col items-start justify-start">
              <h1 className="text-white">
                What kind of leads you are looking to order.
              </h1>
            </div>
            <Checkboxx label="Final Expense Leads" />
            <Checkboxx label="Final Expense Live Transfers" />
            <Checkboxx label="ACA Leads" />
            <Checkboxx label="ACA Live Transfers" />
            <Checkboxx label="Medicare Leads" />
            <div className="flex flex-col items-start justify-start text-sm md:text-md">
              <h1 className="text-white">Enter the number of leads</h1>
            </div>
            <Input
              type="number"
              className="placeholder:text-white text-white"
            />

            <div className="flex flex-col items-start justify-start text-sm md:text-md">
              <h1 className="text-white">Comments</h1>
            </div>
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

export default QuotaionGetTouch;
