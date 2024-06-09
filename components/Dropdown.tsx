// Dropdown.jsx
import React from "react";

const Dropdown = ({ services }) => {
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
