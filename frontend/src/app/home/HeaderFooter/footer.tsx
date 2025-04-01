import React from "react";
import Logo from "../../img/logo";

const Footer = () => {
  return (
    <div className="w-full h-[700px] bg-[#18181B] flex flex-col justify-around items-center">
      {/* Marquee Section */}
      <div className="bg-red-600 w-full h-[92px] overflow-hidden whitespace-nowrap relative flex items-center">
        <div className="flex space-x-8 animate-marquee">
          {[...Array(25)].map((_, i) => (
            <p key={i} className="text-white font-bold text-[30px]">Fresh fast delivered</p>
          ))}
        </div>
        <div className="flex space-x-8 animate-marquee2 absolute left-full">
          {[...Array(45)].map((_, i) => (
            <p key={i} className="text-white font-bold text-[30px]">Fresh fast delivered</p>
          ))}
        </div>
      </div>

      <div className="w-[80%] flex flex-row items-center">
        <div className="flex flex-col justify-between w-[146px]">
          <Logo className="mt-[10%]" />
          <div className="flex flex-col">
            <div className="flex flex-row items-center gap-1 text-[20px] font-bold">
              <p className="text-white">Nom</p>
              <p className="text-red-600">Nom</p>
            </div>
            <p className="text-white">swift delivery</p>
          </div>
        </div>
        <div className="flex flex-row w-full justify-around items-center">
          <div className="flex flex-col gap-4">
            <p className="text-[#71717A]">NOMNOM</p>
            <p className="text-white">Home</p>
            <p className="text-white">Contact us</p>
            <p className="text-white">Delivery zone</p>
          </div>
          <div className="flex flex-row gap-6">
            <div className="flex flex-col gap-4">
              <p className="text-[#71717A]">MENU</p>
              <p className="text-white">Appetizers</p>
              <p className="text-white">Salads</p>
              <p className="text-white">Pizzas</p>
              <p className="text-white">Main dishes</p>
              <p className="text-white">Desserts</p>
            </div>
            <div className="flex flex-col gap-4 mt-10">
              <p className="text-white">Appetizers</p>
              <p className="text-white">Salads</p>
              <p className="text-white">Pizzas</p>
              <p className="text-white">Main dishes</p>
              <p className="text-white">Desserts</p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-[#71717A]">FOLLOW US</p>
            <div className="flex flex-row gap-4"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
