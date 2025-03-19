import BoxText from "../../Helper/BoxText";
import { Jost } from "next/font/google";

// Fonts

const jostMd = Jost({ subsets: ["latin"], weight: "500" });

export default function Features() {
  return (
    <div className="flex flex-col w-[60%] justify-center items-center mx-auto mt-15 h-[150h] bg-rose-200">
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
    </div>
  );
}
