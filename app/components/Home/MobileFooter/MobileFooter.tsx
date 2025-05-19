import React from "react";

export default function MbFooter() {
  return (
    <div className="flex justify-center items-center text-center ml-17 md:ml-65">
      <div>
        <p className="flex justify-center items-center text-center mt-20 pb-10 text-white text-[16px]">
          Crafted with <span className="text-xl">❤️</span> by
          <a
            href="https://www.linkedin.com/in/berkcantelseren/"
            target="_blank"
            title="Let's connect on LinkedIn"
            className="ml-2 cursor-pointer font-bold  text-[18px]"
          >
            <span className="ml-1 px-3 py-1 rounded-full bg-[#EBD494]/5 text-[16px] font-semibold inline-block transform transition-transform duration-200 hover:scale-105">
              <span className="bg-gradient-to-tr from-[#EBD494] via-[#EBD494]/90  to-white bg-clip-text text-transparent ">
                @pyrismarift
              </span>
            </span>
          </a>
        </p>
      </div>
    </div>
  );
}
