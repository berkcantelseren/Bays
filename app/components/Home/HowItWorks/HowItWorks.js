import Image from "next/image";
import BoxText from "../../Helper/BoxText";

export default function HowItWorks() {
  return (
    <div className="flex bg-[#1E1E1E] w-[90%] justify-center items-center mx-auto h-[542px]">
      <div className="grid grid-cols-2 gap-40">
        {/* Grid Item 1 */}
        <div className="w-[460] h-[360] flex flex-col justify-start">
          <BoxText>How It Works Section</BoxText>
          <div className="">
            <h1 className="font-semibold text-[44px] text-white text-start">
              Simple, Yet Powerful
            </h1>
          </div>
          {/* List items  */}
          <div>
            <ol className="list-decimal pl-5 space-y-2 mt-10 text-[16px] text-[#ADADAD]">
              <li className="font-semibold mb-3">
                Sign Up:{" "}
                <span className="font-normal">
                  Create an account in just a few clicks.
                </span>
              </li>
              <li className="font-semibold mb-3">
                Customize:{" "}
                <span className="font-normal">
                  Tailor the platform to suit your team’s unique needs.
                </span>
              </li>
              <li className="font-semibold mb-3">
                Collaborate:{" "}
                <span className="font-normal">
                  Start managing tasks, tracking progress, and improving
                  efficiency.
                </span>
              </li>
            </ol>
          </div>
          {/* Button  */}
        </div>
        {/* Grid Item 2 */}
        <div className="bg-[#1F1F1F] gradient-custom w-[516] h-[398] flex justify-center items-center align-center">
          <Image
            src="images/step.svg"
            alt="step icon"
            width={350}
            height={300}
            className="text-gray-500 font-bold"
          />
        </div>
      </div>
    </div>
  );
}
