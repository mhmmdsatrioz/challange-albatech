import React from "react";

interface IProps {
  image?: any;
  title?: string;
  description?: string;
  category: string;
  border?: boolean;
}

const CardPortofolio: React.FC<IProps> = ({
  image,
  title,
  description,
  category,
  border,
}) => {
  return (
    <div
      className={`w-[310px] h-[345px] outline-none cursor-pointer hover:shadow ${
        border ? "border-[1px] border-yellow" : "border-[1px] border-[#C4C4C4]"
      } rounded-[10px] bg-white`}
    >
      <img src={image} className="" />
      <div className="p-3">
        <p className="text-[#C4C4C4] text-[12px]">{category}</p>
        <h1 className="text-yellow font-semibold">{title}</h1>
        <p className=" text-[13px]">{description}</p>
      </div>
    </div>
  );
};

export default CardPortofolio;
