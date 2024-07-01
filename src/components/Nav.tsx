"use client";
import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { ShopingCart } from "./ShopingCart";
import { User } from "./User";
import { Search } from "./Search";
import Link from "next/link";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

export const Nav = () => {
  const [isOpen, setisOpen] = useState(false);
  const [issopen, setissopen] = useState(false);
  const toggleShop = () => {
    setissopen(!issopen);
  };

  const toggleMenu = () => {
    setisOpen(!isOpen);
  };
  return (
    <div className="container relative">
      <div className="py-5 md:py-6  flex justify-between items-center">
        <div className=" w-1/2 flex md:flex-row-reverse justify-center items-center gap-4">
          <div className=" hidden md:flex justify-center items-center gap-6 ml-10 text-[16px]">
            <div className="" onClick={toggleShop}>
              {issopen ? (
                <div>
                  <div className="flex justify-center items-center gap-2">
                    <h1>Shop</h1>
                    <IoIosArrowUp />
                  </div>
                  <div className=" absolute flex flex-col mt-2 gap-2">
                    <Link href={"."}>lazher</Link>
                    <Link href={"."}>jacob</Link>
                    <Link href={"."}>moha</Link>
                  </div>
                </div>
              ) : (
                <div className="flex justify-center items-center gap-2">
                  <h1>Shop</h1>
                  <IoIosArrowDown />
                </div>
              )}
            </div>
            <Link href={"."}>Brands</Link>
            <Link href={"."}>Arrivals</Link>
            <Link href={"."}>Sale</Link>
          </div>
          {/* mobile mode */}
          <div className="md:hidden">
            {isOpen ? (
              <div className="  ">
                <div onClick={toggleMenu}>
                  <FaXmark size={24} cursor={"pointer"} />
                </div>
                <div className=" absolute pt-5 flex flex-col justify-start items-center gap-10 bg-slate-200 top-[77.5px] left-0 w-[70%] h-[calc(100vh-77.5px)] text-2xl">
                  <Link href={"."}>Brands</Link>
                  <Link href={"."}>Arrivals</Link>
                  <Link href={"."}>On Sale</Link>
                  <div onClick={toggleShop}>
                    {issopen ? (
                      <div>
                        <div className="flex justify-center items-center gap-2">
                          <h1>Shop</h1>
                          <IoIosArrowUp />
                        </div>
                        <div className="flex flex-col mt-5 gap-5">
                          <Link href={"."}>lazher</Link>
                          <Link href={"."}>jacob</Link>
                          <Link href={"."}>moha</Link>
                        </div>
                      </div>
                    ) : (
                      <div className="flex justify-start items-center gap-2">
                        <h1>Shop</h1>
                        <IoIosArrowDown />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ) : (
              <div onClick={toggleMenu}>
                <FaBars size={24} cursor={"pointer"} />
              </div>
            )}
          </div>
          <h1 className="text-[25px] font-bold ">
            Shop.<span>LR7</span>
          </h1>
        </div>
        <div className="w-1/2 flex justify-end items-center gap-3">
          <Search />
          <ShopingCart />
          <User />
        </div>
      </div>
    </div>
  );
};
