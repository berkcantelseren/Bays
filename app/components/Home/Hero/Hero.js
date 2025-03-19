import { Jost } from "next/font/google";
import Image from "next/image";
import { RxTriangleRight } from "react-icons/rx";

// Fonts
const jost = Jost({ subsets: ["latin"], weight: "800" });
const jostMd = Jost({ subsets: ["latin"], weight: "500" });
const jostSm = Jost({ subsets: ["latin"], weight: "300" });

export default function Hero() {
  return (
    <div className=" flex flex-col w-[60%] justify-center mx-auto mt-15 h-[150h]">
      {/* Text Section  */}
      <div className="text-center md:space-y-3">
        <h1
          className={`text-white text-3xl sm:text-4xl md:text-5xl font-semibold  ${jostMd.className}`}
        >
          Work Smarter,
        </h1>
        <span
          className={`block text-white text-3xl sm:text-4xl md:text-5xl font-semibold ${jostMd.className}`}
        >
          Not Harder with{" "}
          <span className={`${jost.className} text-white font-bold`}>BAYS</span>
        </span>
        <p
          className={` text-sm md:text-[16px] text-[#F6E9E9]/60 mt-5 ${jostSm.className}`}
        >
          Streamline Workflows, Save Time, and 2x your productivity with BAYS
        </p>
        <div className="flex gap-5 justify-center mt-10">
          <a
            href="#_"
            className="relative flex items-center justify-center w-auto min-w-[160px] px-6 py-3 overflow-hidden text-base font-semibold text-center text-white rounded-lg bg-[#1E1E1E] whitespace-nowrap"
          >
            Get Started for Free
          </a>
          <a
            href="#_"
            className="relative flex items-center justify-center gap-2 w-auto min-w-[165px] px-6 py-3 overflow-hidden text-base font-semibold text-center text-gray-800 rounded-lg bg-gray-50 whitespace-nowrap"
          >
            <Image
              src="/images/arrow.svg"
              alt="arrow for demo"
              width={20}
              height={20}
            />{" "}
            Watch a Demo
          </a>
        </div>
      </div>
      {/* Demo Example  */}
      <div className="mt-15 hidden md:flex justify-center items-center">
        <Image
          src="/images/demo.svg"
          alt="demo image"
          width={1056}
          height={578}
        />
      </div>
    </div>
  );
}
