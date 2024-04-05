// @ts-nocheck
import React, { useState } from "react";
import { BsCart4 } from "react-icons/bs";
import data from "./data/Data";

const ItemMenu = () => {
  const meals = data;
  const li = ["all", "rice", "beans", "fries", "swallow", "others"];
  const [selected, setSelected] = useState();

  return (
    <div className="xl:px-40 px-5 bg-[#fafafa] mt-20">
      <h1 className="capitalize py-6 text-[#da3743] font-bold">menu</h1>

      <div className="md:flex grid md:justify-between items-center">
        <h1 className="xl:text-4xl text-xl whitespace-nowrap font-bold">Current menu</h1>
        <ul className="flex justify-center items-center xl:gap-3 gap-5 capitalize border border-gray-200 px-1 py-2 rounded-lg text-sm">
          {li.map((list, index) => {
            return (
              <div className={selected === list ? "bg-[#DA3743] px-1 py-1 text-white rounded-lg font-bold" : "cursor-pointer"} onClick={() => setSelected(li[index])}>
                {list}
              </div>
            );
          })}
        </ul>
      </div>

      <div className="grid md:grid-cols-3 md:gap-5 gap-2 grid-cols-2 mt-5 mb-10">
        {meals.map((e) => {
          return (
            <div className="shadow-md bg-white rounded-lg xl:mx-0 xl:w-full xl:h-full overflow-x-clip">
              <img src={e.img} alt="" className="xl:w-full xl:h-60 m-auto object-cover" />
              <div className="md:mt-5 md:mb-2 md:p-2 p-1">
                <h1 className="md:ml-5 text-gray-700 font-bold md:text-xl text-sm whitespace-nowrap capitalize">{e.name}</h1>
                <h3 className="md:w-full md:h-10 md:ml-5 mt-2 md:text-sm text-xs text-gray-400">{e.text}</h3>
                <div className="flex justify-between items-center">
                  <p className="w-[93px] h-[32px] xl:ml-5 mt-2 text-xl text-gray-700">{e.price}</p>
                  <BsCart4 className="bg-[#da3743] text-white rounded-xl text-4xl cursor-pointer font-bold p-2 xl:hidden block" />
                  <button className="hidden xl:block bg-[#DA3743] px-3 py-2 text-white rounded-full capitalize font-bold">add to cart</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="pb-20">
        <button className="capitalize btn flex justify-center items-center m-auto bg-[#da3743] text-white font-bold w-32 h-12">full menu</button>
      </div>
    </div>
  );
};

export default ItemMenu;
