import React from "react";

type Props = {
  children: React.ReactNode;
};

const BoxText = ({ children }: Props) => {
  return (
    <div>
      <h1 className="py-1 text-[#1C54E3] text-md mb-5">{children}</h1>
    </div>
  );
};

export default BoxText;
