import React from "react";

const Clients = () => {
  return (
    <div className="h-[40vh] items-center bg-black flex flex-col px-[172px]">
      <div className="flex pt-5 justify-center">
        <h1 className="text-yellow text-center font-semibold text-[30px] w-[7   5%]">
          Our Progress Comes with a Collaboration Between Creativity, Ideas, and
          Technology
        </h1>
      </div>
      <div className="flex justify-center items-center  gap-[19rem]">
        <div className="text-white flex flex-col justify-center items-center">
          <h1 className="font-semibold text-[46px]">1000+</h1>
          <p>Design</p>
        </div>
        <div className="text-white flex flex-col justify-center items-center">
          <h1 className="font-semibold text-[46px]">30+</h1>
          <p>Products</p>
        </div>
        {/*  */}
        <div className="text-white flex flex-col justify-center items-center">
          <h1 className="font-semibold text-[46px]">58+</h1>
          <p>Website Development</p>
        </div>
      </div>
    </div>
  );
};

export default Clients;
