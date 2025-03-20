import Image from "next/image";
import BoxText from "../../Helper/BoxText";
import { Jost } from "next/font/google";

// Fonts

const jostMd = Jost({ subsets: ["latin"], weight: "500" });
const jostSm = Jost({ subsets: ["latin"], weight: "300" });

export default function Benefits() {
  return (
    <div className="flex flex-col w-[90%] justify-center items-center mx-auto mt-15 h-[150h]">
      <div className="text-center md:space-y-3">
        <div className="flex text-center mx-auto">
          <BoxText>Benefits Section</BoxText>
        </div>
      </div>
      <h1
        className={`text-white text-3xl sm:text-4xl md:text-[40px] font-semibold  ${jostMd.className}`}
      >
        Why Choose BAYS?
      </h1>
      <p
        className={` text-sm md:text-[16px] text-[#F6E9E9]/60 mt-5 ${jostSm.className}`}
      >
        Transformed the way we work
      </p>
      {/* 3 Grid Items */}
      <div className="grid grid-cols-3 gap-10 mt-10 p-5 rounded-xl">
        {/* Grid Item 1 */}
        <div className="flex flex-col items-center justify-center w-[408px] h-[434px] bg-[#1E1E1E] rounded-3xl">
          {/* Inner Grid: Icon */}
          <div className="flex justify-center items-center p-16 pr-20 pl-20 gradient-custom rounded-3xl border border-[#3D3D3F]">
            <Image
              src="/images/reminder.svg"
              alt="reminder logo"
              width={140}
              height={140}
              className="select-none"
            />
          </div>
          {/* Inner Grid: Text */}
          <h1 className="mt-4 text-white text-center mb-5 font-semibold text-2xl">
            Time Efficient
          </h1>
          <p className="text-center text-[16px] text-[#ADADAD]">
            Save up to 20 hours per week with{" "}
            <span className="block">automation</span>
          </p>
        </div>

        {/* Grid Item 2 */}
        <div className="flex flex-col items-center justify-center w-[408px] h-[434px] bg-[#1E1E1E] rounded-3xl">
          {/* Inner Grid: Icon */}
          <div className="flex justify-center items-center p-16 pr-20 pl-20 gradient-custom rounded-3xl border border-[#3D3D3F]">
            <Image
              src="/images/repeat.svg"
              alt="reminder logo"
              width={140}
              height={140}
              className="select-none"
            />
          </div>
          {/* Inner Grid: Text */}
          <h1 className="mt-4 text-white text-center mb-5 font-semibold text-2xl">
            All-in-One
          </h1>
          <p className="text-center text-[16px] text-[#ADADAD]">
            Centralized platform for all your tools and{" "}
            <span className="block">data.</span>
          </p>
        </div>
        {/* Grid Item 3 */}
        <div className="flex flex-col items-center justify-center w-[408px] h-[434px] bg-[#1E1E1E] rounded-3xl">
          {/* Inner Grid: Icon */}
          <div className="flex justify-center items-center p-16 pr-20 pl-20 gradient-custom rounded-3xl border border-[#3D3D3F]">
            <Image
              src="/images/create.svg"
              alt="reminder logo"
              width={140}
              height={140}
              className="select-none"
            />
          </div>
          {/* Inner Grid: Text */}
          <h1 className="mt-4 text-white text-center mb-5 font-semibold text-2xl">
            Easy Use
          </h1>
          <p className="text-center text-[16px] text-[#ADADAD]">
            User-friendly interface for quick{" "}
            <span className="block">onboarding</span>
          </p>
        </div>
      </div>
    </div>
  );
}
