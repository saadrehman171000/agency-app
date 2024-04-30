import React from "react";

const Banner = () => {
  return (
    <div className="mt-10 max-w-7xl mx-auto w-full p-5 px-10">
      <div className="border-t-2 border-b-2 border-yellow-500 flex flex-col md:flex-row gap-10 items-center justify-between px-10 py-10">
        <div className="flex flex-col gap-2">
          <h1 className="text-5xl font-extrabold tracking-tighter">14+</h1>
          <p>Years of experience</p>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-5xl font-extrabold tracking-tighter">3k</h1>
          <p>Projects done</p>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-5xl font-extrabold tracking-tighter">1k+</h1>
          <p>Client satisfy</p>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-5xl font-extrabold tracking-tighter">20</h1>
          <p>Company trusted us</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
