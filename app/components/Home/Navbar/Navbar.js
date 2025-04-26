"use client";

import Link from "next/link";
import { useState } from "react";
import { Jost } from "next/font/google";
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import { CgClose } from "react-icons/cg";
import { FaMoon } from "react-icons/fa";

// Fonts
const jost = Jost({ subsets: ["latin"], weight: "800" });

export default function Navbar() {
  const [showNav, setShowNav] = useState(false);
  return (
    <div className="h-[12vh] z-[100] w-full">
      <div
        className="flex items-center h-full w-[95%] xl:w-[90%] mx-auto bg-[#1E1E1E] mt-5 rounded-xl relative border border-[#3D3D3F]
      "
      >
        {/* Logo Section  */}
        <div className="flex items-center justify-between align-middle w-[80%] h-[60%] mx-auto">
          <h1
            className={`${jost.className} text-white font-bold text-2xl select-none`}
          >
            BAYS
          </h1>

          <div className="hidden lg:flex absolute left-1/2 -translate-x-[75%] space-x-6 text-white font-light">
            <a
              href=""
              className="hover:underline hover:underline-offset-4 decoration-[1px]"
            >
              Home
            </a>
            <a
              href="#features"
              className="hover:underline hover:underline-offset-4 decoration-[1px] transition"
            >
              Feature
            </a>
            <a
              href="#pricing"
              className="hover:underline hover:underline-offset-4 decoration-[1px]"
            >
              Pricing
            </a>
          </div>
          <div className="ml-auto hidden lg:flex space-x-4 sm:w-auto justify-end">
            <a
              href="#_"
              className="relative block w-[104] h-[48] px-6 py-3 overflow-hidden text-base font-semibold text-center text-gray-800 rounded-lg bg-white"
            >
              Login
            </a>
            <a
              href="#_"
              className="relative block  h-[47]  w-auto px-8 py-3 overflow-hidden text-base font-semibold text-center text-white rounded-lg bg-black"
            >
              Sign Up
            </a>
          </div>

          {/* Hamburger Menu For lg Below  */}

          <HiMiniBars3BottomRight
            className="w-8 h-8 text-white cursor-pointer lg:hidden"
            onClick={() => setShowNav(true)}
          />

          {/* Maybe Light Mode In Future ?  */}

          {/* <div className="hidden lg:flex group hover:bg-white/25 rounded-xl shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-[12.1px] border border-white/10 p-2 absolute right-8 xl:right-15 w-12 h-12 justify-center items-center cursor-pointer">
            <FaMoon className="w-5 h-5 text-white cursor-pointer group-hover:text-yellow-400 transition-all duration-300" />
          </div> */}
        </div>
      </div>

      {/* Mobile Hamburger Section  */}
      {showNav && (
        <div className="fixed inset-0 bg-[#1E1E1E]/60 z-[1002] items-center justify-center flex">
          {/* Sidebar Menu */}
          <div className="fixed top-0 left-0 h-full w-[50%] sm:w-[60%] bg-[#1E1E1E] p-6 text-white transform transition-all duration-500 delay-300">
            {/* Close Button */}
            <CgClose
              className="absolute top-4 right-5 w-8 h-8 cursor-pointer"
              onClick={() => setShowNav(false)}
            />

            <ul className="space-y-6 mt-10 text-lg">
              <li>
                <Link href="#" onClick={() => setShowNav(false)}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="#" onClick={() => setShowNav(false)}>
                  Featuring
                </Link>
              </li>
              <li>
                <Link href="#" onClick={() => setShowNav(false)}>
                  Pricing
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
