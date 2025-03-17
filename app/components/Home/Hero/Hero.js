import { Jost } from "next/font/google";

// Fonts
const jost = Jost({ subsets: ["latin"], weight: "800" });
const jostMd = Jost({ subsets: ["latin"], weight: "500" });
const jostSm = Jost({ subsets: ["latin"], weight: "300" });

export default function Hero() {
  return (
    <div className=" flex w-[70%] justify-center mx-auto mt-15 h-[65vh]">
      <div className="text-center">
        <h1
          className={`text-white text-5xl font-semibold mb-3 ${jostMd.className}`}
        >
          Work Smarter,
        </h1>
        <span
          className={`block ml-[-30px] text-white text-5xl font-semibold ${jostMd.className}`}
        >
          Not Harder with{" "}
          <span className={`${jost.className} text-white font-bold`}>BAYS</span>
        </span>
        <p
          className={`text-[16px] text-[#F6E9E9]/60 mt-5 mr-7 ${jostSm.className}`}
        >
          Streamline Workflows, Save Time, and 2x your productivity with BAYS
        </p>
      </div>
    </div>
  );
}
