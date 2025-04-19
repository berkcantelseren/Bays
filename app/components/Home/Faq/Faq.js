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
      <div className="flex flex-col justify-center gap-5 mt-20">
        <button className="w-[600] h-[72] bg-[#1E1E1E] gradient-custom rounded-2xl border border-[#3D3D3F]">
          <p
            className={`text-[#F6E9E9] text-[16px] text-start ml-7 ${jostSm.className}`}
          >
            How does the free trial work?
          </p>
        </button>
        <button className="w-[600] h-[72] bg-[#1E1E1E] gradient-custom rounded-2xl border border-[#3D3D3F]">
          <p
            className={`text-[#F6E9E9] text-[16px] text-start ml-7 ${jostSm.className}`}
          >
            Can I switch plans anytime?
          </p>
        </button>
        <button className="w-[600] h-[72] bg-[#1E1E1E] gradient-custom rounded-2xl border border-[#3D3D3F]">
          <p
            className={`text-[#F6E9E9] text-[16px] text-start ml-7 ${jostSm.className}`}
          >
            Is my data secure?
          </p>
        </button>
      </div>
    </div>
  );
}
