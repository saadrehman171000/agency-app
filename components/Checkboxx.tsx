import React from "react";
import { Checkbox } from "./ui/checkbox";

const Checkboxx = ({ label }) => {
  return (
    <div className="items-top flex space-x-2">
      <Checkbox id="terms1" required />
      <div className="grid gap-1.5 leading-none">
        <label
          htmlFor="terms1"
          className="text-white text-sm md:text-md font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          {label}
        </label>
      </div>
    </div>
  );
};

export default Checkboxx;
