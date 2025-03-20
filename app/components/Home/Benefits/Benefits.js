import Image from "next/image";
import BoxText from "../../Helper/BoxText";
import { Jost } from "next/font/google";

// Fonts

const jostMd = Jost({ subsets: ["latin"], weight: "500" });
const jostSm = Jost({ subsets: ["latin"], weight: "300" });

export default function Benefits() {
  return (
    <div className="flex flex-col w-[60%] justify-center items-center mx-auto mt-15 h-[150h]">
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
      {/* Features Example  */}
      <div className="grid gap-20 grid-cols-3 grid-rows-2 mt-15 justify-center items-center border border-[#1E1E1E] p-5 rounded-xl">
        <div className="col-span-1 row-span-2 bg-rose-200">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil, quis.
        </div>
        <div className="col-span-1 row-span-2 bg-blue-300">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci,
          vitae.
        </div>
        <div className="col-span-1 row-span-2 bg-green-300">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci,
          vitae.
        </div>

        {/* <Image
          src="/images/benefits.svg"
          alt="benefits image"
          width={1056}
          height={578}
        /> */}
      </div>
    </div>
  );
}
