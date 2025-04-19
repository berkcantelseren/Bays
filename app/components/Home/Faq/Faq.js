"use client";
import { useState } from "react";
import BoxText from "../../Helper/BoxText";
import { Jost } from "next/font/google";

const jostMd = Jost({ subsets: ["latin"], weight: "500" });
const jostSm = Jost({ subsets: ["latin"], weight: "300" });

const faqData = [
  {
    question: "How does the free trial work?",
    answer:
      "You can try the platform for free for 7 days. Cancel anytime during the trial period.",
  },
  {
    question: "Can I switch plans anytime?",
    answer:
      "Yes, you can change your subscription plan anytime from your dashboard settings.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Absolutely. We use industry-standard encryption and security practices to protect your data.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col w-[90%] justify-center items-center mx-auto mt-40 h-full">
      <div className="text-center md:space-y-3">
        <div className="flex text-center mx-auto">
          <BoxText>FAQ</BoxText>
        </div>
      </div>

      <h1
        className={`text-white text-3xl sm:text-4xl md:text-[55px] font-semibold ${jostMd.className}`}
      >
        Got Questions?
      </h1>
      <p className={`text-[16px] text-[#ADADAD] mt-5 ${jostSm.className}`}>
        We’ve Got Answers
      </p>

      <div className="flex flex-col justify-center gap-5 mt-20 w-full max-w-[600px]">
        {faqData.map((item, index) => (
          <div
            key={index}
            className="bg-[#1E1E1E] rounded-2xl border border-[#3D3D3F] transition-all duration-300"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full h-[72px] px-7 flex justify-between items-center"
            >
              <p
                className={`text-[#F6E9E9] text-[16px] text-left ${jostSm.className}`}
              >
                {item.question}
              </p>
              <span className="w-10 h-10 flex items-center justify-center text-center rounded-full bg-[#101010]">
                <span className="text-[#1C54E3] text-[35px] mb-2 font-extralight leading-none">
                  {openIndex === index ? "−" : "+"}
                </span>
              </span>
            </button>

            <div
              className={`transition-all duration-300 ease-in-out overflow-hidden px-7 ${
                openIndex === index
                  ? "max-h-40 py-4 opacity-100"
                  : "max-h-0 py-0 opacity-0"
              }`}
            >
              <p className="text-[#ADADAD] text-sm">{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
      <button
        className={`w-[168] h-[47] bg-[#F6E9E9] text-[#1E1E1E] font-semibold rounded-lg mt-8 cursor-pointer ${jostMd.className}`}
      >
        View All FAQs
      </button>
    </div>
  );
}
