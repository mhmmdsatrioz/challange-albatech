import React from "react";
import CardProduct from "./Card/CardProduct";

import WebsiteDev from "assets/website-development.png";
import MobileApp from "assets/mobile-apps.png";
import DigitalProduct from "assets/digital-product-design.png";
import Maintenance from "assets/maintenance.png";
import CMS from "assets/CMS-development.png";
import Payment from "assets/Payment.png";
import AWS from "assets/aws.png";
import Cloud from "assets/cloud.png";
import Angular from "assets/angular.png";
import CSS from "assets/css.png";
import HTML from "assets/html.png";
import NodeJs from "assets/nodejs.png";
import PHP from "assets/php.png";
import Python from "assets/python.png";
import Reactjs from "assets/react.png";
import Ruby from "assets/ruby.png";
import MongoDB from "assets/mongoDB.png";
import MySQL from "assets/mySql.png";
import PostreSQL from "assets/postgreSql.png";
import SQLServer from "assets/SqlServer.png";

import Arrow from "assets/Arrow.png";

const Products = () => {
  return (
    <div className="h-auto px-[172px]">
      <h1 className="text-[#C4C4C4] text-center">Complete Package</h1>
      <h1 className="font-bold text-center text-[35px]">
        From product design to software continuous delivery
      </h1>
      <div className="w-full pt-[30px] flex flex-wrap gap-5">
        <CardProduct
          border={true}
          title={"Website development"}
          description="High-performance website to reach out more
          your potential customers"
          image={WebsiteDev}
          arrow={Arrow}
        />
        <CardProduct
          title={"Mobile apps development"}
          description="To accelerate your business process"
          image={MobileApp}
          className="w-8"
        />
        <CardProduct
          title={"Digital product design"}
          description="Complete digital product creations from UX prototyping to final UI designs"
          image={DigitalProduct}
          className="w-11"
        />
        <CardProduct
          title={"Maintenance"}
          description="Make sure your digital environment keep online and updated"
          image={Maintenance}
          className="w-10"
        />
        <CardProduct
          title={"CMS development"}
          description="You can update your website content yourself"
          className="w-9"
          image={CMS}
        />
        <CardProduct
          title={"Integrated payment gateway"}
          description="Simplify the payment system with just one step"
          className="w-[50px]"
          image={Payment}
        />
      </div>

      <div className="flex pt-[25px] flex-wrap gap-14 justify-center">
        <img src={AWS} />
        <img src={Cloud} />
        <img src={Angular} />
        <img src={CSS} />
        <img src={HTML} />
        <img src={NodeJs} />
        <img src={PHP} />
        <img src={Python} />
        <img src={Reactjs} />
        <img src={Ruby} />
        <img src={MongoDB} />
        <img src={MySQL} />
        <img src={PostreSQL} />
        <img src={SQLServer} />
      </div>
    </div>
  );
};

export default Products;
