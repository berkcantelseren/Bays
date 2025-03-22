import Image from "next/image";
import BoxText from "../../Helper/BoxText";
import { Jost } from "next/font/google";

// Fonts

const jostMd = Jost({ subsets: ["latin"], weight: "500" });

export default function Features() {
  return (
    <div className="flex flex-col w-[90%] justify-center items-center mx-auto mt-30 h-[150h]">
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
      <div className="border border-[#383838]/50 rounded-3xl pr-10 pl-10 pb-10 mt-20">
        <div className="grid grid-cols-5 grid-rows-5 mt-15">
          <div className="w-[230] h-[50] rounded-xl text-[#ADADAD] bg-[#1E1E1E] flex items-center justify-center font-semibold">
            Task Management
          </div>
          <div className="w-[230] h-[50] text-[#ADADAD] bg-[#1E1E1E] flex items-center justify-center rounded-xl font-semibold">
            Collaboration Tools
          </div>
          <div className="w-[230] h-[50] text-[#ADADAD] bg-[#1E1E1E] flex items-center justify-center rounded-xl font-semibold">
            Analytics and Reporting
          </div>
          <div className="w-[230] h-[50] text-[#ADADAD] bg-[#1E1E1E] flex items-center justify-center rounded-xl font-semibold">
            Custom Integrations
          </div>
          <div className="w-[230] h-[50] text-[#ADADAD] bg-[#1E1E1E] flex items-center justify-center rounded-xl font-semibold">
            Easy to Use
          </div>
          <div className="col-span-3 row-span-7 bg-[#1E1E1E] rounded-3xl w-[700] h-[385] flex justify-center items-center border border-[#383838]">
            <Image
              src="/images/taskdone.svg"
              alt="task done image"
              width={358}
              height={358}
              className="select-none"
            />
          </div>
          <div className="w-[489] h-[385] col-span-2 row-span-7 bg-[#1E1E1E] rounded-3xl items-center justify-center p-10">
            <h1 className="flex justify-start font-semibold text-2xl text-white">
              Task Management
            </h1>
            <p className="text-[#ADADAD] text-[16px] justify-center flex mt-7">
              a comprehensive solution that simplifies task management, enhances
              collaboration, and drives productivity. By providing a clear
              overview of tasks, seamless assignment capabilities, real-time
              updates, and detailed analytics, our dashboard empowers your team
              to achieve their goals efficiently and effectively.
            </p>
            <button
              type="button"
              class="text-[#1C54E3] mt-20 text-[16px] rounded-lg text-center inline-flex items-center cursor-pointer font-semibold"
            >
              Learn More
              <Image
                src="/images/right-arrow.svg"
                alt="right arrow"
                height={21}
                width={21}
                className="ms-3 mt-1 cursor-pointer"
              />
            </button>
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
