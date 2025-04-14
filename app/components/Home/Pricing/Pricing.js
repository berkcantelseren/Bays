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
    </div>
  );
}
