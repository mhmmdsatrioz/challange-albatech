import React from "react";
import CardPortofolio from "./Card/CardPortofolio";
import Portofolio1 from "assets/portofolio.png";
import Portofolio2 from "assets/portofolio2.png";
import Portofolio3 from "assets/portofolio3.png";

const Portofolio = () => {
  return (
    <div className="pt-8 px-[172px] w-full h-auto">
      <p className="text-center text-[#C4C4C4]">Portofolio</p>
      <div className="flex justify-center items-center">
        <h1 className="font-semibold text-[34px] text-center w-[39%]">
          The software that we build takes our clients to the next level
        </h1>
      </div>
      <div className="flex items-center justify-center gap-8 pt-9">
        <CardPortofolio
          image={Portofolio1}
          border={true}
          category="Mobile apps"
          title="ILIOS app (B2B E-commerce)"
          description="Has a unique selling point where not all companies offer applications for sales, data collection and management."
        />
        <CardPortofolio
          image={Portofolio2}
          category="Mobile apps"
          title="ILIOS app (B2B E-commerce)"
          description="Has a unique selling point where not all companies offer applications for sales, data collection and management."
        />
        <CardPortofolio
          image={Portofolio3}
          category="Mobile apps"
          title="ILIOS app (B2B E-commerce)"
          description="Has a unique selling point where not all companies offer applications for sales, data collection and management."
        />
      </div>
      <button className=" text-center mx-auto block mt-8 bg-yellow py-3 px-8 rounded-[30px]">
        Learn more
      </button>
    </div>
  );
};

export default Portofolio;
