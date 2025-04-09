import Image from "next/image";
import BoxText from "../../Helper/BoxText";
import { Jost } from "next/font/google";
import { Inter } from "next/font/google";

// Fonts

const jostMd = Jost({ subsets: ["latin"], weight: "500" });
const jostSm = Jost({ subsets: ["latin"], weight: "300" });
const interMd = Inter({ subsets: ["latin"], weight: "300" });

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
        className={` text-sm md:text-[16px] text-center text-[#F6E9E9]/60 mt-5 ${jostSm.className}`}
      >
        Turn your visitors into loyal clients with heartfelt testimonials.
      </p>
      <p
        className={` text-sm md:text-[16px] text-center mt-3 md:mt-0 text-[#F6E9E9]/60 ${jostSm.className}`}
      >
        Use{" "}
        <a
          href="https://www.feedspace.io/"
          target="blank"
          className="text-[#1C54E3] "
        >
          Feedspace
        </a>{" "}
        to create a wall of love or testimonial widget for your website.
      </p>
      <div>
        <a
          href="https://www.feedspace.io/"
          className={`w-[326px] h-[47px] bg-[#F6E9E9] rounded-lg mt-10 font-semibold ${jostMd.className} underline underline-offset-2 cursor-pointer flex items-center justify-center`}
        >
          Capture testimonials with Feedspace
        </a>
      </div>
      {/* Grid part  */}
      <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[1px] gap-5 mt-15">
        <div className="bg-white w-[325px] md:w-[345px] h-[214px] row-span-[11] rounded-xl">
          {/* info for 1  */}
          <div className="relative">
            {/* Google Logo */}
            <Image
              src="/images/google-logo.svg"
              alt="Google logo"
              width={17}
              height={17}
              className="absolute top-7 right-5"
            />

            {/* Profile content */}
            <div className="flex py-5 px-5">
              <Image
                src="images/profile1.svg"
                alt="profile picture of someone"
                width={48}
                height={48}
              />
              <div className="ml-3">
                <h1 className="text-[16px] font-medium">Shashi Ranjan</h1>
                <p className="text-[12px] text-[#6B7280]">August 20, 2024</p>
              </div>
            </div>
          </div>
          {/* rating part  */}
          <div className="flex gap-2 ml-6">
            {Array.from({ length: 5 }).map((_, index) => (
              <Image
                key={index}
                src="images/star.svg"
                alt="star icon"
                height={22}
                width={22}
              />
            ))}
          </div>
          <div
            className={`font-light text-[16px] ml-6 mt-3 ${interMd.className}`}
          >
            Very nice friendly staff and amazing{" "}
            <span className="block">food I have never experienced before</span>
            <span className="block">in Hyderabad...</span>
          </div>
        </div>
        <div className="bg-white w-[325px] md:w-[345px] h-[288px] row-span-[14] rounded-xl">
          {/* info for 2  */}
          <div className="relative">
            {/* Trustpilot Logo */}
            <Image
              src="/images/trustpilot.svg"
              alt="Appsumo Logo"
              width={17}
              height={17}
              className="absolute top-7 right-5"
            />

            {/* Profile content */}
            <div className="flex py-5 px-5">
              <Image
                src="images/profile4.svg"
                alt="profile picture of someone"
                width={48}
                height={48}
              />
              <div className="ml-3">
                <h1 className="text-[16px] font-medium">Mrs Sandra S.</h1>
                <p className="text-[12px] text-[#6B7280]">June 14, 2023</p>
              </div>
            </div>
          </div>
          {/* rating part  */}
          <div className="flex gap-2 ml-6">
            <Image
              src="images/star-green.svg"
              width={22}
              height={22}
              alt="trustpilot logo"
            />
            <Image
              src="images/star-green.svg"
              width={22}
              height={22}
              alt="trustpilot logo"
            />
            <Image
              src="images/star-green.svg"
              width={22}
              height={22}
              alt="trustpilot logo"
            />
            <Image
              src="images/star-green.svg"
              width={22}
              height={22}
              alt="trustpilot logo"
            />
            <Image
              src="images/star-green.svg"
              width={22}
              height={22}
              alt="trustpilot logo"
            />
          </div>
          <div
            className={`font-light text-[16px] ml-6 mt-3 ${interMd.className}`}
          >
            <h1 className="font-bold mb-3">Excellent quality</h1>
            Quick delivery, unfortunately one{" "}
            <span className="block">wrong item. Was sent immediatly after</span>
            <span className="block">my complaint and arrived only 2 days</span>
            <span className="block">
              later. Great service! And as always high
            </span>
            <span className="block">quality clothes.</span>
          </div>
        </div>
        <div className="gradient-custom-2 w-[325px] md:w-[353px] h-[235px] row-span-[12] rounded-xl flex flex-col justify-between items-center py-2 mt-2 md:mt-0">
          {/* info for 3  */}
          <div className="justify-center items-center">
            <Image
              src="images/mic.svg"
              alt="mic icon"
              width={51}
              height={51}
              className="text-[#FFFFFF] mt-6"
            />
          </div>
          <div className="justify-center mt-5 block">
            <Image
              src="images/soundwave.svg"
              alt="soundwave icon"
              width={292}
              height={37}
              className="text-[#FFFFFF]"
            />
          </div>
          <div className="bg-white/60 w-[315px] md:w-[337px] h-[41px] text-[#6B7280] rounded-lg mt-5 flex p-4 items-center ">
            <p>December 12, 2024</p>
          </div>
        </div>
        <div className="bg-white w-[325px] md:w-[345px] h-[209px] row-span-[11] rounded-xl mt-1">
          4
        </div>
        <div className="bg-white w-[325px] md:w-[353px] h-[262px] row-span-[13] rounded-xl mt-1">
          {/* info for 5  */}
          <div className="relative">
            {/* Udemy Logo */}
            <Image
              src="/images/udemy.svg"
              alt="Udemy Logo"
              width={17}
              height={17}
              className="absolute top-7 right-5"
            />

            {/* Profile content */}
            <div className="flex py-5 px-5">
              <Image
                src="images/profile2.svg"
                alt="profile picture of someone"
                width={48}
                height={48}
              />
              <div className="ml-3">
                <h1 className="text-[16px] font-medium">Olufadeke Okoba</h1>
                <p className="text-[12px] text-[#6B7280]">January 12, 2024</p>
              </div>
            </div>
          </div>
          {/* rating part  */}
          <div className="flex gap-2 ml-6">
            <Image
              src="images/star.svg"
              width={22}
              height={22}
              alt="full star"
            />
            <Image
              src="images/star.svg"
              width={22}
              height={22}
              alt="full star"
            />
            <Image
              src="images/star.svg"
              width={22}
              height={22}
              alt="full star"
            />
            <Image
              src="images/star.svg"
              width={22}
              height={22}
              alt="full star"
            />
            <Image
              src="images/star-half.svg"
              width={22}
              height={22}
              alt="half star"
            />
          </div>
          <div
            className={`font-light text-[16px] ml-6 mt-3 ${interMd.className}`}
          >
            I am relatively new to Customer Service.{" "}
            <span className="block">The course is enlightening, easy to</span>
            <span className="block">follow with proper visual tools,</span>
            <span className="block">
              especially the last course. Really worth
            </span>
            <span className="block">it.</span>
          </div>
        </div>
        <div className="relative w-[325px] md:w-[346px] h-[260px] row-span-[13] rounded-xl mt-3 overflow-hidden">
          {/* Image */}
          <Image
            src="/images/video1.svg"
            alt="video of yuri drabik image"
            fill
            className="object-cover rounded-xl border border-white"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-[0.2px] inset-x-0.5 gradient-custom-3 rounded-xl overflow-auto"></div>

          {/* Profile Content */}
          <div className="flex py-5 px-5 absolute bottom-0">
            <Image
              src="/images/profile5.svg"
              alt="profile picture of yuri drabik"
              width={53}
              height={53}
            />
            <div className="ml-3">
              <h1
                className={`text-[18px] font-medium text-[#FFFFFF] ${interMd.className}`}
              >
                Yuri Drabik
              </h1>
              <p className="text-[12px] text-[#CBD5E1]">February 05, 2023</p>
            </div>
          </div>
        </div>
        <div className="bg-white w-[325px] md:w-[345px] mt-5 md:mt-1 h-[317px] row-span-[16] md:row-span-[32] rounded-xl">
          {/* info for 7  */}
          <div className="relative">
            {/* Appsumo Logo */}
            <Image
              src="/images/appsumo.svg"
              alt="Appsumo Logo"
              width={17}
              height={17}
              className="absolute top-7 right-5"
            />

            {/* Profile content */}
            <div className="flex py-5 px-5">
              <Image
                src="images/profile3.svg"
                alt="profile picture of someone"
                width={48}
                height={48}
              />
              <div className="ml-3">
                <h1 className="text-[16px] font-medium">wpguide</h1>
                <p className="text-[12px] text-[#6B7280]">September 19, 2024</p>
              </div>
            </div>
          </div>
          {/* rating part  */}
          <div className="flex gap-2 ml-6">
            <Image
              src="images/appsumo.svg"
              width={22}
              height={22}
              alt="appsumo logo"
            />
            <Image
              src="images/appsumo.svg"
              width={22}
              height={22}
              alt="appsumo logo"
            />
            <Image
              src="images/appsumo.svg"
              width={22}
              height={22}
              alt="appsumo logo"
            />
            <Image
              src="images/appsumo.svg"
              width={22}
              height={22}
              alt="appsumo logo"
            />
            <Image
              src="images/appsumo.svg"
              width={22}
              height={22}
              alt="appsumo logo"
            />
          </div>
          <div
            className={`font-light text-[16px] ml-6 mt-3 ${interMd.className}`}
          >
            <h1 className="font-bold mb-3">Amazing feed tool</h1>
            Feedspace is an exceptional tool, easy{" "}
            <span className="block">to use, with a great design and fast</span>
            <span className="block">upload speeds for videos and audio.</span>
            <span className="block">On top of that, they have an</span>
            <span className="block">outstanding team that's quick to</span>
            <span className="block">respond. I highly recommend it!</span>
          </div>
        </div>
        <div className="bg-white w-[325px] md:w-[351px] h-[263px] row-span-[13] md:row-span-[23] rounded-xl mt-4 md:mt-3">
          8
        </div>
        <div className="gradient-custom-2 w-[325px] md:w-[345px] h-[230px] rounded-xl mt-5 flex flex-col justify-between items-center py-2">
          {/* info for 9  */}
          <div className="justify-center items-center">
            <Image
              src="images/mic.svg"
              alt="mic icon"
              width={51}
              height={51}
              className="text-[#FFFFFF] mt-6"
            />
          </div>
          <div className="justify-center mt-5 block">
            <Image
              src="images/soundwave.svg"
              alt="soundwave icon"
              width={292}
              height={37}
              className="text-[#FFFFFF]"
            />
          </div>
          <div className="bg-white/60 w-[315px] md:w-[337px] h-[41px] text-[#6B7280] rounded-lg mt-5 flex p-4 items-center ">
            <p>December 12, 2024</p>
          </div>
        </div>
        {/* use mt for fixing and making it pixel perfect  */}
      </div>
    </div>
  );
}
