"use client";

import Image from "next/image";
import BoxText from "../../Helper/BoxText";
import { Jost } from "next/font/google";
import { useState } from "react";

// Fonts
const jostMd = Jost({ subsets: ["latin"], weight: "500" });

export default function Features() {
  const [activeFeature, setActiveFeature] = useState("Task Management");

  const features = [
    {
      name: "Task Management",
      description:
        "A comprehensive solution that simplifies task management, enhances collaboration, and drives productivity. By providing a clear overview of tasks, seamless assignment capabilities, real time updates, and detailed analytics, our dashboard empowers your team to achieve their goals efficiently and effectively.",
      image: "/images/taskdone.svg",
    },
    {
      name: "Collaboration Tools",
      description:
        "Enhance teamwork with powerful collaboration tools that streamline communication, facilitate document sharing, and enable real time feedback. Whether remote or in office, our platform ensures seamless interaction, helping teams stay aligned, boost productivity, and create a more collaborative work environment.",
      image: "/images/tools.svg",
    },
    {
      name: "Analytics and Reporting",
      description:
        "Gain valuable insights into your team's performance with advanced analytics and reporting tools. Track key metrics, monitor project progress, and identify trends through real time data visualizations. Make informed decisions and optimize workflows to improve efficiency and business outcomes.",
      image: "/images/report.svg",
    },
    {
      name: "Custom Integrations",
      description:
        "Seamlessly connect your favorite tools and services with our customizable integrations. Automate workflows, synchronize data, and eliminate manual processes by integrating with the platforms your team already relies on. Enhance productivity and create a tailored experience that fits your business requirements perfectly.",
      image: "/images/integration.svg",
    },
    {
      name: "Easy to Use",
      description:
        "Designed with simplicity and efficiency in mind, our user friendly interface ensures a smooth and intuitive experience for all users. Whether you're a beginner or an experienced professional, our platform provides a hassle free experience with minimal learning curve, allowing you to focus on what truly matters your work.",
      image: "/images/easy.svg",
    },
  ];

  // Get active feature data
  const activeFeatureData = features.find(
    (feature) => feature.name === activeFeature
  );

  return (
    <div
      className="flex flex-col w-[90%] justify-center items-center mx-auto mt-30 h-full"
      id="features"
    >
      <div className="text-center md:space-y-3">
        <div className="flex text-center mx-auto">
          <BoxText>Features</BoxText>
        </div>
      </div>
      <h1
        className={`text-white text-3xl sm:text-4xl md:text-[40] font-semibold text-center  ${jostMd.className}`}
      >
        Discover features
      </h1>
      <span
        className={`block text-white text-3xl sm:text-4xl md:text-[40] font-semibold text-center ${jostMd.className}`}
      >
        that help your team achieve more
      </span>
      {/* Features Example  */}
      <div className="border border-[#383838]/50 w-[375px] md:w-auto rounded-3xl pr-10 pl-10 pb-10 mt-20">
        {/* Buttons section */}
        <div className="lg:flex lg:flex-wrap gap-4 w-full lg:justify-start justify-center grid grid-cols-2 md:w-fit mx-auto mt-10">
          {features.map((feature, index) => (
            <div
              key={feature.name}
              className={`${
                index === 4
                  ? "col-span-2 flex justify-center lg:col-span-1 lg:justify-start"
                  : ""
              }`}
            >
              <button
                onClick={() => setActiveFeature(feature.name)}
                className={`w-[150px] md:w-[230px] h-[50px] rounded-xl flex cursor-pointer items-center justify-center font-semibold transition-colors ${
                  activeFeature === feature.name
                    ? "bg-white text-black"
                    : "bg-[#1E1E1E] text-[#ADADAD]"
                }`}
              >
                {feature.name}
              </button>
            </div>
          ))}
        </div>

        {/* Content section */}
        <div className="flex flex-col md:flex-row gap-6 mt-10">
          <div className="bg-[#1E1E1E] rounded-3xl w-full md:w-[700px] h-[385px] flex justify-center items-center border border-[#383838]">
            <Image
              src={activeFeatureData?.image || "/images/taskdone.svg"}
              alt={`${activeFeatureData?.name} image`}
              width={350}
              height={350}
              className="select-none"
            />
          </div>

          <div className="bg-[#1E1E1E] rounded-3xl w-full md:w-[489px] h-auto md:h-[385px] p-10 flex flex-col justify-between">
            <h1 className="font-semibold text-2xl text-white">
              {activeFeatureData?.name}
            </h1>
            <p className="text-[#ADADAD] text-[16px] mt-7">
              {activeFeatureData?.description}
            </p>
            <button
              type="button"
              className="text-[#1C54E3] mt-10 text-[16px] rounded-lg inline-flex items-center font-semibold cursor-pointer"
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
    </div>
  );
}
