import BoxText from "../../Helper/BoxText";
import { Jost } from "next/font/google";

// Fonts

const jostMd = Jost({ subsets: ["latin"], weight: "500" });
const jostSm = Jost({ subsets: ["latin"], weight: "300" });

export default function Testimonial() {
  return (
    <div className="flex flex-col w-[90%] justify-center items-center mx-auto mt-30 h-full">
      <div className="text-center md:space-y-3">
        <div className="flex text-center mx-auto">
          <BoxText>Testimonial</BoxText>
        </div>
      </div>
      <h1
        className={`text-white text-3xl sm:text-4xl md:text-[40px] font-semibold  ${jostMd.className}`}
      >
        Trusted by Many
      </h1>
      <p
        className={` text-sm md:text-[16px] text-[#F6E9E9]/60 mt-5 ${jostSm.className}`}
      >
        Turn your visitors into loyal clients with heartfelt testimonials.
      </p>
      <p
        className={` text-sm md:text-[16px] text-[#F6E9E9]/60 ${jostSm.className}`}
      >
        Use{" "}
        <a
          href="https://www.feedspace.io/"
          target="blank"
          className="text-[#1C54E3] "
        >
          Feedspace
        </a>{" "}
        to create a wall of love or testimonial widget for your website
      </p>
    </div>
  );
}
