import BoxText from "../../Helper/BoxText";
import { Jost } from "next/font/google";

const jostMd = Jost({ subsets: ["latin"], weight: "500" });

export default function Pricing() {
  return (
    <div className="flex flex-col w-[90%] justify-center items-center mx-auto mt-40 h-full">
      <div className="text-center md:space-y-3">
        <div className="flex text-center mx-auto">
          <BoxText>Pricing</BoxText>
        </div>
      </div>
      <h1
        className={`text-white text-3xl sm:text-4xl md:text-[40px] font-semibold  ${jostMd.className}`}
      >
        Simple and Transparent Pricing
      </h1>
      {/* 3 Grid Items */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-10 mt-10 p-5 rounded-xl">
        {/* Grid 1 */}
        <div className="w-[408] h-[537] bg-[#1E1E1E] rounded-2xl border border-[#3D3D3F]">
          <div className="justify-center text-center mt-10">
            <h1
              className={`font-semibold text-[23px] text-[#ADADAD] ${jostMd.className}`}
            >
              Standard
            </h1>
          </div>
        </div>
        {/* Grid 2 */}
        <div className="w-[408] h-[537] bg-[#1E1E1E] rounded-2xl border border-[#3D3D3F]">
          <div className="justify-center text-center mt-10">
            <h1
              className={`font-semibold text-[23px] text-[#ADADAD] ${jostMd.className}`}
            >
              Pro Plan
            </h1>
          </div>
        </div>
        {/* Grid 3 */}
        <div className="w-[408] h-[537] bg-[#1E1E1E] rounded-2xl border border-[#3D3D3F]">
          <div className="justify-center text-center mt-10">
            <h1
              className={`font-semibold text-[23px] text-[#ADADAD] ${jostMd.className}`}
            >
              Enterprise
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
