"use client"
import React, { useEffect, useState } from "react";
import { IoSettingsOutline } from "react-icons/io5";
import { TiMessages } from "react-icons/ti";
import "aos/dist/aos.css";
import Aos from "aos";

const Header = () => {

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <header className="bg-[#fff] col-start-2 col-end-3 mt-2 row-start-1 row-end-2 hidden lg:block">
      {/* product section */}
      <div
      data-aos="fade-down"
        data-aos-duration="500"
        className="flex justify-between px-2 ">
        <h1 className="text-2xl font-semibold">Products</h1>
        <div className="flex gap-5">
          <div className="relative flex items-center">
            <input
              className="w-48 border-2 border-solid border-[#e3e6e9] block px-10 p-1 rounded-md bg-transparent bg-no-repeat bg-[url('/search.png')] bg-contain"
              type="search"
              placeholder="Search..."
            />
          </div>
          <div className=" items-center gap-4 hidden mr-4 lg:flex">
            <div className="ring-2 p-1 ring-[#e3e6e9] rounded-md">
              <TiMessages className="w-5 h-5 " />
            </div>
            <div className="ring-2 p-1 ring-[#e3e5ec] rounded-md">
              <IoSettingsOutline className="w-5 h-5" />
            </div>
          </div>
        </div>
      </div>

      <div>
      
      </div>
    </header>
  );
};



export default Header;
