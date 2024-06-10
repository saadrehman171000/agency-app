// Dropdown.tsx
import React from "react";

// Define the structure of a single service object
type Service = {
  name: string;
  link: string;
};

// Define the props expected by the Dropdown component
type DropdownProps = {
  services: Service[];
};

// Functional component using de-structured props with explicit types
const Dropdown: React.FC<DropdownProps> = ({ services }) => {
  return (
    <div className="absolute top-full mt-1 w-56 bg-white shadow-lg z-10">
      {services.map((service, index) => (
        <a
          key={index}
          href={service.link}
          className="block px-4 py-2 text-sm text-black"
        >
          {service.name}
        </a>
      ))}
    </div>
  );
};

export default Dropdown;
