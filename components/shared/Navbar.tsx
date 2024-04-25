"use client";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import menu from "@/public/menu.svg";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";

const Navbar = () => {
  const TOP_OFFSET = 0;

  const pathname = usePathname();
  const [showBackground, setShowBackground] = useState(false);

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
  return (
    <div
      className={`p-5 px-10 w-full font-extralight fixed ${
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
          <div className="flex gap-10">
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
            <Link
              className={`${
                pathname === "/services" ? "font-bold" : "text-black"
              }`}
              href={"/services"}
            >
              SERVICES
            </Link>
            <Link
              className={`${
                pathname === "/contact" ? "font-bold" : "text-black"
              }`}
              href={"/contact"}
            >
              CONTACT
            </Link>
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
                <Link
                  className={`${
                    pathname === "/services" ? "font-bold" : "text-black"
                  }`}
                  href={"/services"}
                >
                  SERVICES
                </Link>
                <Link
                  className={`${
                    pathname === "/contact" ? "font-bold" : "text-black"
                  }`}
                  href={"/contact"}
                >
                  CONTACT
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
