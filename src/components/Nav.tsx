"use client";
import React, { ChangeEvent, useState, useTransition } from "react";
import { FaBars } from "react-icons/fa";
import { FaMoon, FaXmark } from "react-icons/fa6";
import { ShopingCart } from "./ShopingCart";
import { User } from "./User";
import { Search } from "./Search";
import Link from "next/link";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { useTheme } from "next-themes";
import { RxSun } from "react-icons/rx";
import { useRouter } from "next/router";

interface NavProps {
  i18n: any;
}
export const Nav: React.FC<NavProps> = ({ i18n }) => {
  const [isOpen, setisOpen] = useState(false);
  const [issopen, setissopen] = useState(false);
  const toggleShop = () => {
    setissopen(!issopen);
  };
  // const [isPending, startTransition] = useTransition();
  // const router = useRouter();

  const handleLanguageChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value;
    // router.replace(`/${nextLocale}`);
    // startTransition(() => {
    // });
  };

  const toggleMenu = () => {
    setisOpen(!isOpen);
  };
  const { resolvedTheme, theme, setTheme } = useTheme();
  return (
    <div className="container relative dark:bg-[#1f1f1f]">
      <div className="py-5 md:py-6  flex justify-between items-center">
        <div className="  flex md:flex-row-reverse justify-center items-center gap-4">
          <div className=" hidden md:flex justify-center items-center gap-6 mx-10 text-[16px]">
            <div className="" onClick={toggleShop}>
              {issopen ? (
                <div className="">
                  <div className="flex  justify-center items-center gap-2">
                    <button>Shop</button>
                    <IoIosArrowUp />
                  </div>
                  <div className=" absolute w-20 rounded-md shadow-md flex flex-col items-center mt-2 gap-2">
                    <Link href={"."}>lazher</Link>
                    <Link href={"."}>jacob</Link>
                    <Link href={"."}>moha</Link>
                  </div>
                </div>
              ) : (
                <div className="flex justify-center items-center gap-2">
                  <button>Shop</button>
                  <IoIosArrowDown />
                </div>
              )}
            </div>
            <Link href={"."}>Brands</Link>
            <Link href={"."}>Arrivals</Link>
            <Link href={"."}>Sale</Link>
          </div>
          {/* mobile mode */}
          <div className="z-10 md:hidden">
            {isOpen ? (
              <div className="  ">
                <div onClick={toggleMenu}>
                  <FaXmark size={24} cursor={"pointer"} />
                </div>
                <div className=" absolute pt-5 flex flex-col justify-start items-center gap-10 bg-slate-200 dark:bg-[#1f1f1f] top-[77.5px] left-0 w-[70%] h-[calc(100vh-77.5px)] text-2xl">
                  <div>
                    <button
                      onClick={() => {
                        setTheme(resolvedTheme === "light" ? "dark" : "light");
                      }}
                      className="border border-gray-400 rounded-md p-2"
                    >
                      {theme === "light" ? <FaMoon /> : <RxSun />}
                    </button>
                  </div>
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
                          <Link href={"."}>moha</Link>
                          <Link href={"."}>jacob</Link>
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
            SHOP.<span>LR7</span>
          </h1>
        </div>
        <div className="w-full flex justify-end items-center gap-3">
          <button
            onClick={() => {
              setTheme(resolvedTheme === "light" ? "dark" : "light");
            }}
            className="border border-gray-400 rounded-md p-2 hidden md:block"
          >
            {theme === "light" ? <FaMoon /> : <RxSun />}
          </button>
          {/* <select onChange={handleLanguageChange} name="" id="">
            <option value="en">English</option>
            <option value="ar">Arabic</option>
            <option value="fr">Franch</option>
          </select> */}
          <Search />
          <User />
          <ShopingCart />
        </div>
      </div>
    </div>
  );
};
