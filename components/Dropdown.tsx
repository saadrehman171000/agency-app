import React from "react";
import Link from "next/link";
type Service = {
  name: string;
  link: string;
};

type DropdownProps = {
  services: Service[];
};

const Dropdown: React.FC<DropdownProps> = ({ services }) => {
  if (!services || services.length === 0) {
    return null; // Return null if no services are passed
  }
  return (
    <div className="absolute z-20 bg-white shadow-md rounded p-2 mt-2">
      {services.map((service, index) => (
        <Link
          key={index}
          href={service.link}
          className="block p-2 hover:bg-gray-100"
        >
          {service.name}
        </Link>
      ))}
    </div>
  );
};

export default Dropdown;
