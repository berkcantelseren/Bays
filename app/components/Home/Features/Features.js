import Image from "next/image";
import BoxText from "../../Helper/BoxText";
import { Jost } from "next/font/google";

// Fonts

const jostMd = Jost({ subsets: ["latin"], weight: "500" });

export default function Features() {
  return (
    <div className="flex flex-col w-[90%] justify-center items-center mx-auto mt-15 h-[150h]">
      <div className="text-center md:space-y-3">
        <div className="flex text-center mx-auto">
          <BoxText>Features</BoxText>
        </div>
      </div>
      <h1
        className={`text-white text-3xl sm:text-4xl md:text-[40px] font-semibold  ${jostMd.className}`}
      >
        Discover features
      </h1>
      <span
        className={`block text-white text-3xl sm:text-4xl md:text-[40px] font-semibold ${jostMd.className}`}
      >
        that help your team achieve more
      </span>
      {/* Features Example  */}
      <div className="border">
        <div className="grid grid-cols-5 grid-rows-5 gap-3 mt-15">
          <div className="w-[230] h-[50] rounded-xl text-[#ADADAD] bg-[#1E1E1E] flex items-center justify-center">
            Task Management
          </div>
          <div className="w-[230] h-[50] text-[#ADADAD] bg-[#1E1E1E] flex items-center justify-center rounded-xl">
            Collaboration Tools
          </div>
          <div className="w-[230] h-[50] text-[#ADADAD] bg-[#1E1E1E] flex items-center justify-center rounded-xl">
            Analytics and Reporting
          </div>
          <div className="w-[230] h-[50] text-[#ADADAD] bg-[#1E1E1E] flex items-center justify-center rounded-xl">
            Custom Integrations
          </div>
          <div className="w-[230] h-[50] text-[#ADADAD] bg-[#1E1E1E] flex items-center justify-center rounded-xl">
            Easy to Use
          </div>
          <div className="col-span-3 row-span-7 bg-[#1E1E1E] rounded-4xl w-[700] h-[385]">
            s
          </div>
        </div>
      </div>
      {/* <div className="mt-15 hidden md:flex justify-center items-center border border-[#1E1E1E] p-5 rounded-xl">
        <Image
          src="/images/features.svg"
          alt="features image"
          width={1272}
          height={558}
        />
      </div> */}
    </div>
  );
}
