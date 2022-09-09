import Logo from "assets/logo.png";
import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <>
      <div className="px-[172px] fixed z-20 flex items-center justify-between w-full h-[100px] shadow-NavShadow bg-white">
        <div>
          <img src={Logo} className="w-[100px]" />
        </div>

        <div className="flex gap-3 items-center">
          <a href="#">About</a>
          <a href="#">Service</a>
          <a href="#">Portofolio</a>
          <a href="#">Blog</a>
          <a href="#">Career</a>
          <div>
            <button className="bg-[#FFCE07] py-[15px] px-[20px] rounded-[30px]">
              Contact Us
            </button>
          </div>
        </div>
      </div>
      <div className="bg-yellows">{children}</div>
    </>
  );
};

export default Navbar;
