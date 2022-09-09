import Logo from "assets/logo.png";
import FB from "assets/fb.png";
import IG from "assets/Ig.png";
import LinkedIn from "assets/Linked.png";

const Footer = () => {
  return (
    <div className="h-[55vh] pt-10 px-[172px]">
      <div className="bg-gray w-full h-[1px] "></div>

      <div className="flex justify-between gap-4 pt-10">
        <div className="w-[31%]">
          <img src={Logo} className="w-[140px]" />
          <p className="text-[15px] pt-3">
            Albatech acts as a corporate partner to help digitize their business
            to accelerate trends in remote work.
          </p>

          <div className="flex gap-3 pt-5 items-center">
            <img src={FB} />
            <img src={IG} />
            <img src={LinkedIn} />
          </div>
        </div>

        <div>
          <h1 className="font-semibold text-[1.2rem]">Website</h1>
          <ul className="flex flex-col gap-3">
            <li>About</li>
            <li>Service</li>
            <li>Portofolio</li>
            <li>Blog</li>
            <li>Career</li>
          </ul>
        </div>

        <div className="w-[25%] flex flex-col gap-3">
          <h1 className="font-semibold text-[1.2rem]">Contact</h1>
          <p className="text-[#272727]">
            The Prominence Blok 38D No.25 Jl. Jalur Sutera Barat, Alam Sutera,
            Kota Tangerang, Banten 15143
          </p>
          <div className="flex gap-2">
            <h1 className="font-semibold">P:</h1>
            <p>+62 81 1889 3383</p>
          </div>
          <div className="flex gap-2">
            <h1 className="font-semibold">E:</h1>
            <p>info@albatech.id</p>
          </div>
        </div>
      </div>
      <div className="bg-gray w-full h-[1px] mt-10 "></div>
      <footer className="flex justify-between">
        <p className="text-gray text-[13px]">
          ©PT. Alba Digital Teknologi 2021 | All Rights Reserved
        </p>
        <p className="text-gray text-[13px]">
          Privacy policy | Terms of service
        </p>
      </footer>
    </div>
  );
};

export default Footer;
