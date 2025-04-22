import { Jost } from "next/font/google";

const jost = Jost({ subsets: ["latin"], weight: "800" });
const jostMd = Jost({ subsets: ["latin"], weight: "500" });
const jostSm = Jost({ subsets: ["latin"], weight: "300" });

export default function Footer() {
  return (
    <div className="h-auto w-[95%] xl:w-[90%] mx-auto items-start grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-5 bg-[#1E1E1E] border border-[#3D3D3F] mt-30 rounded-3xl pt-16 pb-16">
      {/* Section 1*/}
      <div className="space-y-3 ml-20">
        <h1
          className={`text-[#FFFFFF] font-extrabold text-[24px] ${jost.className}`}
        >
          BAYS
        </h1>
        <p className={`text-[#FFFFFF] text-[16px] ${jostSm.className}`}>
          Organize essential
          <span className="block"> navigation links for easy</span>
          <span>access</span>
        </p>
        <p className={`text-[#FFFFFF] text-[14px] mt-5 ${jostSm.className}`}>
          ©2024 BAYS.
          <span className="block">All rights reserved.</span>
        </p>
      </div>
      {/* Section 2*/}
      <div className="space-y-3 inline-block ml-10">
        <h1 className="text-[16px] font-semibold text-[#1C54E3] mb-10">
          Company
        </h1>
        <p className="text-[#FFFFFF] text-[16px] cursor-pointer">About Us</p>
        <p className="text-[#FFFFFF] text-[16px] cursor-pointer">Careers</p>
        <p className="text-[#FFFFFF] text-[16px] cursor-pointer">Blog</p>
      </div>
      {/* Section 3 */}
      <div className="space-y-3">
        <h1 className="text-[16px] font-semibold text-[#1C54E3] mb-10">
          Company
        </h1>
        <p className="text-[#FFFFFF] text-[16px] cursor-pointer">About Us</p>
        <p className="text-[#FFFFFF] text-[16px] cursor-pointer">Careers</p>
        <p className="text-[#FFFFFF] text-[16px] cursor-pointer">Blog</p>
      </div>
      {/* Section 4 */}
      <div className="space-y-3 ml-[-15]">
        <h1 className="text-[16px] font-semibold text-[#1C54E3] mb-10">
          Company
        </h1>
        <p className="text-[#FFFFFF] text-[16px] cursor-pointer">About Us</p>
        <p className="text-[#FFFFFF] text-[16px] cursor-pointer">Careers</p>
        <p className="text-[#FFFFFF] text-[16px] cursor-pointer">Blog</p>
      </div>
      {/* Section 5 */}
      <div className="space-y-3 ml-[-15]">
        <h1 className="text-[16px] font-semibold text-[#1C54E3] mb-10">
          Company
        </h1>
        <p className="text-[#FFFFFF] text-[16px] cursor-pointer">About Us</p>
        <p className="text-[#FFFFFF] text-[16px] cursor-pointer">Careers</p>
        <p className="text-[#FFFFFF] text-[16px] cursor-pointer">Blog</p>
      </div>
    </div>
  );
}
