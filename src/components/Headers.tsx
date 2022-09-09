import React from "react";
import Thumbnail from "assets/thumbnail.png";
import Group from "assets/Group.png";
import GroupS from "assets/Group-32.png";

const Headers = () => {
  return (
    <>
      <div className="flex items-center relative">
        <img src={Group} className="top-[21vh] z-[-1] absolute left-[35%]  " />
        <div className="w-[40%] absolute z-10 left-[13.2%] top-[21vh]">
          <h1 className="font-bold absolute top-[80px] text-[50px] bg-white w-[80%] ">
            Build or scale up
          </h1>
          <h1 className="text-[39px] w-[90%] absolute top-[139px]  z-[2]">
            Your development team
          </h1>
          <div className="flex  flex-col gap-2 items-center absolute top-[35vh]">
            <div className="flex gap-2 items-center">
              <div className="h-1 w-11 bg-yellow"></div>
              <p className="text-[1.2rem]">in weeks, not months</p>
            </div>
            <button className="absolute  top-[40px]  left-0 bg-yellow py-3 px-8 rounded-[30px]">
              Book now
            </button>
          </div>
        </div>
        <div>
          <img
            src={Thumbnail}
            className="w-[772px] top-[70px] h-[465px] right-0 absolute "
          />
          <img
            src={GroupS}
            className="absolute right-28 z-[-1] top-[77vh] w-[19rem]"
          />
        </div>
      </div>
    </>
  );
};

export default Headers;
