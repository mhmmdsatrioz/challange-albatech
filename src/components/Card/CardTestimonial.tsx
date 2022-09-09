import React from "react";

interface IProps {
  avatar: any;
}
const CardTestimonial: React.FC<IProps> = ({ avatar }) => {
  return (
    <div className="w-[320px] bg-white  h-[201px] flex flex-col gap-4">
      <h1 className="font-semibold text-[33px]">Amazing People</h1>
      <p>
        "They are people who are not only following the tasks, but can work as a
        team. Together."
      </p>
      <div className="flex items-center gap-2">
        <img src={avatar} className="w-12 h-12 rounded-full" />
        <div className="flex flex-col ">
          <h1>Matthijs Piëst</h1>
          <p className="text-gray text-[12px]">COO at WieBetaaltWat</p>
        </div>
      </div>
    </div>
  );
};

export default CardTestimonial;
