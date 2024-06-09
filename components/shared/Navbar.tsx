"use client";
// Navbar.jsx
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import menu from "@/public/menu.svg";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { Button } from "../ui/button";
import Dropdown from "../Dropdown";

const Navbar = () => {
  const TOP_OFFSET = 0;
  const pathname = usePathname();
  const [showBackground, setShowBackground] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= TOP_OFFSET) {
        setShowBackground(true);
      } else {
        setShowBackground(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollToBottom = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  };

  const services = [
    { name: "Service 1", link: "/service1" },
    { name: "Service 2", link: "/service2" },
    { name: "Service 3", link: "/service3" },
  ];

  return (
    <div
      className={`p-5 px-10 w-full font-extralight fixed z-10 ${
        showBackground ? "bg-white shadow-lg ring-1 ring-white/5" : "bg-white"
      }`}
    >
      <div className="flex flex-row items-center justify-between">
        <div>
          <Link href={"/"} className="tracking-tight font-bold text-lg">
            Agency
          </Link>
        </div>
        <div className="hidden md:block">
          <div className="flex gap-10 relative">
            <Link
              className={`${pathname === "/" ? "font-bold" : "text-black"}`}
              href={"/"}
            >
              HOME
            </Link>
            <Link
              className={`${
                pathname === "/about" ? "font-bold" : "text-black"
              }`}
              href={"/about"}
            >
              ABOUT
            </Link>
            <div
              className="relative"
              onMouseEnter={() => setShowDropdown(true)}
              onMouseLeave={() => setShowDropdown(false)}
            >
              <button
                className={`${
                  pathname === "/services" ? "font-bold" : "text-black"
                }`}
              >
                SERVICES
              </button>
              {showDropdown && <Dropdown services={services} />}
            </div>
            <Link
              className={`${
                pathname === "/contact" ? "font-bold" : "text-black"
              }`}
              href={"/contact"}
            >
              CONTACT
            </Link>
            <Link
              className={`${pathname === "/blog" ? "font-bold" : "text-black"}`}
              href={"/blog"}
            >
              BLOG
            </Link>
            {pathname === "/services" && (
              <Button
                onClick={handleScrollToBottom}
                className="text-white font-bold"
              >
                Request to Get Quote
              </Button>
            )}
          </div>
        </div>
        <div className="block md:hidden">
          <Sheet>
            <SheetTrigger className="align-middle">
              <Image
                src={menu}
                alt="menu"
                width={24}
                height={24}
                className="cursor-pointer"
              />
            </SheetTrigger>
            <SheetContent className="flex flex-col gap-6 bg-white md:hidden">
              <Link href={"/"} className="tracking-tight font-bold text-lg">
                Agency
              </Link>
              <Separator className="border border-gray-50" />
              <div className="flex flex-col gap-5">
                <Link
                  className={`${pathname === "/" ? "font-bold" : "text-black"}`}
                  href={"/"}
                >
                  HOME
                </Link>
                <Link
                  className={`${
                    pathname === "/about" ? "font-bold" : "text-black"
                  }`}
                  href={"/about"}
                >
                  ABOUT
                </Link>
                <div
                  className="relative"
                  onMouseEnter={() => setShowDropdown(true)}
                  onMouseLeave={() => setShowDropdown(false)}
                >
                  <button>Services</button>
                  {showDropdown && <Dropdown services={services} />}
                </div>
                <Link
                  className={`${
                    pathname === "/contact" ? "font-bold" : "text-black"
                  }`}
                  href={"/contact"}
                >
                  CONTACT
                </Link>
                <Link
                  className={`${
                    pathname === "/blog" ? "font-bold" : "text-black"
                  }`}
                  href={"/blog"}
                >
                  BLOG
                </Link>
                {pathname === "/services" && (
                  <Button
                    onClick={handleScrollToBottom}
                    className="text-black font-bold"
                  >
                    Request to Get Quote
                  </Button>
                )}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
