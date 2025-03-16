import { Jost } from "next/font/google";

const jost = Jost({ subsets: ["latin"], weight: "700" });

export default function Navbar() {
  return (
    <div className="h-[12vh] z-[100] w-full top-0 sticky">
      <div
        className="flex items-center h-full w-[95%] xl:w-[90%] mx-auto bg-[#1E1E1E] mt-5 rounded-xl
      "
      >
        {/* Logo Section  */}
        <div className="flex items-center justify-between align-middle w-[80%] h-[60%] mx-auto">
          <h1
            className={`${jost.className} text-white font-bold text-2xl select-none`}
          >
            BAYS
          </h1>

          <div className="hidden md:flex absolute left-1/2 -translate-x-[75%] space-x-6 text-white font-light">
            <a
              href=""
              className="hover:underline hover:underline-offset-4 decoration-[1px]"
            >
              Home
            </a>
            <a
              href=""
              className="hover:underline hover:underline-offset-4 decoration-[1px]"
            >
              Featuring
            </a>
            <a
              href=""
              className="hover:underline hover:underline-offset-4 decoration-[1px]"
            >
              Pricing
            </a>
          </div>
          <div className="ml-auto flex space-x-4 sm:w-auto justify-end pr-5">
            <a
              href="#_"
              className="relative block w-auto px-6 py-3 overflow-hidden text-base font-semibold text-center text-gray-800 rounded-lg bg-white"
            >
              Login
            </a>
            <a
              href="#_"
              className="relative block w-auto px-8 py-3 overflow-hidden text-base font-semibold text-center text-white rounded-lg bg-black"
            >
              Sign Up
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
