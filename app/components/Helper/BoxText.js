import React from "react";

const BoxText = ({ children }) => {
  return (
    <div>
      <h1 className="w-fit py-1 text-[#1C54E3] font-bold">{children}</h1>
    </div>
  );
};

export default BoxText;
