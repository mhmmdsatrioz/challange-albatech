import React from "react";

interface IProps {
  image: any;
  title?: string;
  description?: string;
  border?: boolean;
  arrow?: any;
  className?: string;
}

const CardProduct: React.FC<IProps> = ({
  border = false,
  image,
  title,
  description,
  arrow,
  className,
}) => {
  return (
    <div
      className={`bg-white ${
        border
          ? "border-yellow border-[1px] "
          : "border-[1px] border-[#C4C4C4] "
      }rounded p-3 w-[18rem] h-[12rem] cursor-pointer hover:shadow`}
    >
      <img src={image} className={className} />
      <div className="pt-3 flex items-center gap-2 text-yellow font-bold">
        <h1>{title}</h1>
        <img src={arrow} />
      </div>
      <p className="text-[14px]">{description}</p>
    </div>
  );
};

export default CardProduct;
