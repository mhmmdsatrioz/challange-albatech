import CardTestimonial from "@components/Card/CardTestimonial";
import Petik from "assets/Petik.png";
import Avatar from "assets/Avatar.png";
import Group from "assets/Group.png";
import Hipo from "assets/hippo.png";
import HomeLiving from "assets/homeLiving.png";
import Ilios from "assets/Ilios.png";
import Dio from "assets/Dio.png";
import Melandas from "assets/Melandas.png";

const Testimonial = () => {
  return (
    <div className="px-[172px] relative h-auto pt-8 w-full">
      <p className="text-center text-[#C4C4C4]">Testimonial</p>
      <div className="flex justify-center items-center ">
        <h1 className="text-center font-semibold text-[36px] w-[50%]">
          What clients love in working with Albatech Team
        </h1>
      </div>
      {/* PETIK */}
      <div className="">
        <img className="absolute left-0" src={Petik} />
      </div>
      <div className="flex justify-between pt-5 w-full">
        <CardTestimonial avatar={Avatar} />
        <img src={Group} className={"absolute left-[38%]"} />
        <CardTestimonial avatar={Avatar} />
      </div>

      <div className="pt-5 flex items-center gap-10">
        <img src={Hipo} className="w-40" />
        <img src={HomeLiving} className="w-40" />
        <img src={Ilios} className="w-40" />
        <img src={Dio} className="w-40" />
        <img src={Melandas} className="w-40" />
      </div>

      {/* CARD BUILD WITH ALBATECH */}
      <div className="flex items-center justify-center">
        <div className="w-full bg-yellow h-[30vh] rounded-md text-center py-3">
          <p>Is software important for your business?</p>
          <h1 className="pt-5 font-semibold text-[30px]">
            Build it with Albatech
          </h1>
          <button className="mt-5 py-2 px-6 border border-black rounded-[10px]">
            Consultation Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
