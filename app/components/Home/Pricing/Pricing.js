"use client";

import Image from "next/image";
import BoxText from "../../Helper/BoxText";
import { Jost } from "next/font/google";
import { useState } from "react";

const jostMd = Jost({ subsets: ["latin"], weight: "500" });
const jostSm = Jost({ subsets: ["latin"], weight: "300" });

export default function Pricing() {
  const [activePricing, setActivePricing] = useState("Monthly");

  const pricing = [
    // Standard Plan
    {
      name: "Monthly",
      price: "$18",
      time: "/m",
      plan: "Standard",
    },
    {
      name: "Annualy",
      price: "$199",
      time: "/y",
      plan: "Standard",
    },
    // Pro Plan
    {
      name: "Monthly",
      price: "$25",
      time: "/m",
      plan: "Pro",
    },
    {
      name: "Annualy",
      price: "$309",
      time: "/y",
      plan: "Pro",
    },
    // Enterprise Plan
    {
      name: "Monthly",
      price: "$49",
      time: "/m",
      plan: "Enterprise",
    },
    {
      name: "Annualy",
      price: "$549",
      time: "/y",
      plan: "Enterprise",
    },
  ];

  const activePricingDataStandard = pricing.find(
    (plan) => plan.name === activePricing && plan.plan === "Standard"
  );

  const activePricingDataPro = pricing.find(
    (plan) => plan.name === activePricing && plan.plan === "Pro"
  );

  const activePricingDataEnterprise = pricing.find(
    (plan) => plan.name === activePricing && plan.plan === "Enterprise"
  );

  return (
    <div
      className="flex flex-col w-[95%] md:w-[90%] justify-center items-center mx-auto mt-40 h-full"
      id="pricing"
    >
      <div className="text-center md:space-y-3">
        <div className="flex text-center mx-auto">
          <BoxText>Pricing</BoxText>
        </div>
      </div>
      <h1
        className={`text-white text-3xl sm:text-4xl text-center md:text-[40px] font-semibold  ${jostMd.className}`}
      >
        Simple and Transparent Pricing
      </h1>
      {/* 3 Grid Items */}
      <div className="grid grid-cols-1 2xl:grid-cols-3 gap-6 mt-10 p-0 md:p-5 rounded-xl">
        {/* Grid 1 - Standard Plan */}
        <div className="w-[335] h-[537] md:w-[408] md:h-[537] bg-[#1E1E1E] rounded-3xl border border-[#3D3D3F] gradient-custom">
          <div className="justify-center text-center mt-10 relative">
            <h1
              className={`font-semibold text-[23px] text-[#ADADAD] ${jostMd.className}`}
            >
              Standard
            </h1>
            <Image
              src="/images/discount20.svg"
              alt="Discount %20"
              width={48}
              height={22}
              className="absolute bottom-3 right-7"
            />
          </div>
          <div className="text-center justify-center mt-15 flex flex-row">
            <h2
              className={`font-semibold text-[44px] text-[#F6E9E9] ${jostMd.className}`}
            >
              {activePricingDataStandard?.price}
            </h2>
            <h5
              className={`font-semibold text-[23px] text-[#F6E9E9] mt-6 ml-1 ${jostMd.className}`}
            >
              .99
            </h5>
            <p
              className={`font-normal text-[16px] text-[#ADADAD] mt-8 ml-1 ${jostMd.className}`}
            >
              {activePricingDataStandard?.time}
            </p>
          </div>
          <div className="w-[264] h-[39] bg-[#101010] rounded-3xl border border-[#2F2F2F] flex justify-evenly items-center mx-auto mt-10">
            <button
              onClick={() => setActivePricing("Monthly")}
              className={`font-semibold text-[14px] cursor-pointer ${
                jostMd.className
              } ${
                activePricing === "Monthly"
                  ? "text-[#ADADAD]/25"
                  : "text-[#F6E9E9]"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setActivePricing("Annualy")}
              className={`font-semibold text-[14px] cursor-pointer ${
                jostMd.className
              } ${
                activePricing === "Annualy"
                  ? "text-[#ADADAD]/25"
                  : "text-[#F6E9E9]"
              }`}
            >
              Annualy
            </button>
          </div>
          <div className="flex flex-col justify-center text-center mt-10 ml-25 md:ml-30">
            <div className="flex flex-row">
              <Image
                src="images/bluecheck.svg"
                alt="blue checkmark"
                width={20}
                height={20}
              />
              <p
                className={`text-[#F6E9E9] font-normal text-[14px] ml-2 ${jostSm.className}`}
              >
                Task Management
              </p>
            </div>
            <div className="flex">
              <Image
                src="images/bluecheck.svg"
                alt="blue checkmark"
                width={20}
                height={20}
                className="mt-3"
              />
              <p
                className={`text-[#F6E9E9] font-normal text-[14px] ml-2 mt-3 ${jostSm.className}`}
              >
                Basic Analytics
              </p>
            </div>
            <div className="flex">
              <Image
                src="images/bluecheck.svg"
                alt="blue checkmark"
                width={20}
                height={20}
                className="mt-3"
              />
              <p
                className={`text-[#F6E9E9] font-normal text-[14px] ml-2 mt-3 ${jostSm.className}`}
              >
                Limited Integrations
              </p>
            </div>
          </div>
          <div className="justify-center items-center flex mt-12">
            <button
              className={`w-[328] h-[45] bg-[#F6E9E9] text-[#101010] font-semibold rounded-xl cursor-pointer ${jostMd.className}`}
            >
              Buy Now
            </button>
          </div>
        </div>

        {/* Grid 2 - Pro Plan */}
        <div className="w-[335] h-[537] md:w-[408] md:h-[537] bg-[#1E1E1E] rounded-3xl border border-[#3D3D3F] gradient-custom">
          <div className="justify-center text-center mt-10 relative">
            <h1
              className={`font-semibold text-[23px] text-[#ADADAD] ${jostMd.className}`}
            >
              Pro Plan
            </h1>
            <Image
              src="/images/discount15.svg"
              alt="Discount %15"
              width={48}
              height={22}
              className="absolute bottom-3 right-7"
            />
          </div>
          <div className="text-center justify-center mt-15 flex flex-row">
            <h2
              className={`font-semibold text-[44px] text-[#F6E9E9] ${jostMd.className}`}
            >
              {activePricingDataPro?.price}
            </h2>
            <h5
              className={`font-semibold text-[23px] text-[#F6E9E9] mt-6 ml-1 ${jostMd.className}`}
            >
              .99
            </h5>
            <p
              className={`font-normal text-[16px] text-[#ADADAD] mt-8 ml-1 ${jostMd.className}`}
            >
              {activePricingDataPro?.time}
            </p>
          </div>
          <div className="w-[264] h-[39] bg-[#101010] rounded-3xl border border-[#2F2F2F] flex justify-evenly items-center mx-auto mt-10">
            <button
              onClick={() => setActivePricing("Monthly")}
              className={`font-semibold text-[14px] cursor-pointer ${
                jostMd.className
              } ${
                activePricing === "Monthly"
                  ? "text-[#ADADAD]/25"
                  : "text-[#F6E9E9]"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setActivePricing("Annualy")}
              className={`font-semibold text-[14px] cursor-pointer ${
                jostMd.className
              } ${
                activePricing === "Annualy"
                  ? "text-[#ADADAD]/25"
                  : "text-[#F6E9E9]"
              }`}
            >
              Annualy
            </button>
          </div>
          <div className="flex flex-col justify-center text-center mt-10 ml-25 md:ml-30">
            <div className="flex flex-row">
              <Image
                src="images/bluecheck.svg"
                alt="blue checkmark"
                width={20}
                height={20}
              />
              <p
                className={`text-[#F6E9E9] font-normal text-[14px] ml-2 ${jostSm.className}`}
              >
                Advanced Analytics
              </p>
            </div>
            <div className="flex">
              <Image
                src="images/bluecheck.svg"
                alt="blue checkmark"
                width={20}
                height={20}
                className="mt-3"
              />
              <p
                className={`text-[#F6E9E9] font-normal text-[14px] ml-2 mt-3 ${jostSm.className}`}
              >
                Unlimited Integrations
              </p>
            </div>
            <div className="flex">
              <Image
                src="images/bluecheck.svg"
                alt="blue checkmark"
                width={20}
                height={20}
                className="mt-3"
              />
              <p
                className={`text-[#F6E9E9] font-normal text-[14px] ml-2 mt-3 ${jostSm.className}`}
              >
                Priority Support
              </p>
            </div>
          </div>
          <div className="justify-center items-center flex mt-12">
            <button
              className={`w-[328] h-[45] bg-[#F6E9E9] text-[#101010] font-semibold rounded-xl cursor-pointer  ${jostMd.className}`}
            >
              Buy Now
            </button>
          </div>
        </div>

        {/* Grid 3 - Enterprise Plan */}
        <div className="w-[335] h-[537] md:w-[408] md:h-[537] bg-[#1E1E1E] rounded-3xl border border-[#3D3D3F] gradient-custom">
          <div className="justify-center text-center mt-10 relative">
            <h1
              className={`font-semibold text-[23px] text-[#ADADAD] ${jostMd.className}`}
            >
              Enterprise
            </h1>
            <Image
              src="/images/discount30.svg"
              alt="Discount %30"
              width={48}
              height={22}
              className="absolute bottom-3 right-7"
            />
          </div>
          <div className="text-center justify-center mt-15 flex flex-row">
            <h2
              className={`font-semibold text-[44px] text-[#F6E9E9] ${jostMd.className}`}
            >
              {activePricingDataEnterprise?.price}
            </h2>
            <h5
              className={`font-semibold text-[23px] text-[#F6E9E9] mt-6 ml-1 ${jostMd.className}`}
            >
              .99
            </h5>
            <p
              className={`font-normal text-[16px] text-[#ADADAD] mt-8 ml-1 ${jostMd.className}`}
            >
              {activePricingDataEnterprise?.time}
            </p>
          </div>
          <div className="w-[264] h-[39] bg-[#101010] rounded-3xl border border-[#2F2F2F] flex justify-evenly items-center mx-auto mt-10">
            <button
              onClick={() => setActivePricing("Monthly")}
              className={`font-semibold text-[14px] cursor-pointer ${
                jostMd.className
              } ${
                activePricing === "Monthly"
                  ? "text-[#ADADAD]/25"
                  : "text-[#F6E9E9]"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setActivePricing("Annualy")}
              className={`font-semibold text-[14px] cursor-pointer ${
                jostMd.className
              } ${
                activePricing === "Annualy"
                  ? "text-[#ADADAD]/25"
                  : "text-[#F6E9E9]"
              }`}
            >
              Annualy
            </button>
          </div>
          <div className="flex flex-col justify-center text-center mt-10 ml-25 md:ml-30">
            <div className="flex flex-row">
              <Image
                src="images/bluecheck.svg"
                alt="blue checkmark"
                width={20}
                height={20}
              />
              <p
                className={`text-[#F6E9E9] font-normal text-[14px] ml-2 ${jostSm.className}`}
              >
                Custom Features
              </p>
            </div>
            <div className="flex">
              <Image
                src="images/bluecheck.svg"
                alt="blue checkmark"
                width={20}
                height={20}
                className="mt-3"
              />
              <p
                className={`text-[#F6E9E9] font-normal text-[14px] ml-2 mt-3 ${jostSm.className}`}
              >
                Dedicated Account Manager
              </p>
            </div>
            <div className="flex">
              <Image
                src="images/bluecheck.svg"
                alt="blue checkmark"
                width={20}
                height={20}
                className="mt-3"
              />
              <p
                className={`text-[#F6E9E9] font-normal text-[14px] ml-2 mt-3 ${jostSm.className}`}
              >
                Enterprise-level Security
              </p>
            </div>
          </div>
          <div className="justify-center items-center flex mt-12">
            <button
              className={`w-[328] h-[45] bg-[#F6E9E9] text-[#101010] font-semibold rounded-xl cursor-pointer  ${jostMd.className}`}
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
