import BoxText from "../../Helper/BoxText";
import { Jost } from "next/font/google";

const jostMd = Jost({ subsets: ["latin"], weight: "500" });
const jostSm = Jost({ subsets: ["latin"], weight: "300" });

export default function Faq() {
  return (
    <div className="flex flex-col w-[90%] justify-center items-center mx-auto mt-40 h-full">
      <div className="text-center md:space-y-3">
        <div className="flex text-center mx-auto">
          <BoxText>FAQ</BoxText>
        </div>
      </div>
      <h1
        className={`text-white text-3xl sm:text-4xl md:text-[55px] font-semibold  ${jostMd.className}`}
      >
        Got Questions?
      </h1>
      <p className={`text-[16px] text-[#ADADAD] mt-5 ${jostSm.className}`}>
        We’ve Got Answers
      </p>
    </div>
  );
}
