import React from "react";
import Image from "next/image";
import { FaTrashAlt } from "react-icons/fa";
import { RiPriceTag3Line } from "react-icons/ri";
import { FaArrowRight } from "react-icons/fa";

export const Cart = () => {
  return (
    <section className="dark:bg-[#1f1f1f]">
      <div className="container  pt-5 mb-20">
        <h1 className="text-[40px] font-bold">Your Cart</h1>
        <div className="  lg:flex justify-between ">
          <div className="lg:w-7/12 mb-5 lg:mb-0 p-3 border border-gray-300 rounded-2xl h-fit mr-3 ">
            {/* items */}
            <div className="flex    pb-3 mb-3 border-b border-gray-300">
              <div className="w-1/4  flex justify-center items-center rounded-md bg-[#F0EEED] dark:bg-[#f1f1f1b5] mr-3">
                <Image
                  alt=""
                  src={"/shirt.png"}
                  width={75}
                  height={75}
                  className=" object-cover rounded-md"
                />
              </div>
              <div className="w-3/4 relative flex  justify-between">
                <div>
                  <h3 className="text-[20px] font-bold">Product </h3>
                  <h4 className="text-[14px] font-extralight">Size:</h4>
                  <h4 className="text-[14px] font-extralight mb-4">Color:</h4>
                  <h1 className="  text-[24px] font-semibold">$512</h1>
                </div>
                <div className=" relative">
                  <div className="px-3 py-1 cursor-pointer text-[#FF3333] rounded-full">
                    <FaTrashAlt />
                  </div>
                  <div className=" absolute bottom-0 right-0 flex justify-between items-center p-3 bg-gray-100 dark:bg-[#6b7280] w-[126px] h-[44px] rounded-full ">
                    <span className=" cursor-pointer font-light text-[30px]">
                      -
                    </span>
                    <span className="cursor-pointer font-bold text-[20px]">
                      23
                    </span>
                    <span className="cursor-pointer  font-light text-[30px]">
                      +
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex    pb-3 mb-3 border-b border-gray-300">
              <div className="w-1/4  flex justify-center items-center rounded-md bg-[#F0EEED] dark:bg-[#f1f1f1b5] mr-3">
                <Image
                  alt=""
                  src={"/shirt.png"}
                  width={75}
                  height={75}
                  className=" object-cover rounded-md"
                />
              </div>
              <div className="w-3/4 relative flex  justify-between">
                <div>
                  <h3 className="text-[20px] font-bold">Product </h3>
                  <h4 className="text-[14px] font-extralight">Size:</h4>
                  <h4 className="text-[14px] font-extralight mb-4">Color:</h4>
                  <h1 className="  text-[24px] font-semibold">$512</h1>
                </div>
                <div className=" relative">
                  <div className="px-3 py-1 cursor-pointer text-[#FF3333] rounded-full">
                    <FaTrashAlt />
                  </div>
                  <div className=" absolute bottom-0 right-0 flex justify-between items-center p-3 bg-gray-100 dark:bg-[#6b7280] w-[126px] h-[44px] rounded-full ">
                    <span className=" cursor-pointer font-light  text-[40px]">
                      -
                    </span>
                    <span className="cursor-pointer font-bold text-[20px]">
                      23
                    </span>
                    <span className="cursor-pointer font-light text-[30px]">
                      +
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex    pb-3 mb-3 border-b border-gray-300">
              <div className="w-1/4  flex justify-center items-center rounded-md bg-[#F0EEED] dark:bg-[#f1f1f1b5] mr-3">
                <Image
                  alt=""
                  src={"/shirt.png"}
                  width={75}
                  height={75}
                  className=" object-cover rounded-md"
                />
              </div>
              <div className="w-3/4 relative flex  justify-between">
                <div>
                  <h3 className="text-[20px] font-bold">Product </h3>
                  <h4 className="text-[14px] font-extralight">Size:</h4>
                  <h4 className="text-[14px] font-extralight mb-4">Color:</h4>
                  <h1 className="  text-[24px] font-semibold">$512</h1>
                </div>
                <div className=" relative">
                  <div className="px-3 py-1 cursor-pointer text-[#FF3333] rounded-full">
                    <FaTrashAlt />
                  </div>
                  <div className=" absolute bottom-0 right-0 flex justify-between items-center p-3 bg-gray-100 dark:bg-[#6b7280] w-[126px] h-[44px] rounded-full ">
                    <span className=" cursor-pointer  font-light text-[30px]">
                      -
                    </span>
                    <span className="cursor-pointer font-bold text-[20px]">
                      23
                    </span>
                    <span className="cursor-pointer  font-light text-[30px]">
                      +
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* items */}
          </div>
          <div className=" lg:w-5/12 flex flex-col gap-6 p-3 border border-gray-300 rounded-2xl h-fit">
            <h2 className=" text-[24px] font-bold">Order Summary</h2>
            <div className="border-b flex flex-col gap-5 border-gray-300 pb-3 mb-3">
              <div className="flex  justify-between items-center">
                <span className=" text-[20px] text-gray-600 dark:text-gray-200 font-light">
                  Subtotal
                </span>
                <span className="text-[20px] font-bold">$565</span>
              </div>
              <div className="flex justify-between items-center">
                <span className=" text-[20px] text-gray-600 dark:text-gray-200 font-light">
                  Discount (-20%)
                </span>
                <span className="text-[20px] font-bold cursor-pointer text-[#FF3333]">
                  -$113
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className=" text-[20px] text-gray-600 dark:text-gray-200 font-light">
                  Delivery Fee
                </span>
                <span className="text-[20px] font-bold">$15</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[24px] font-normal"> Total</span>
              <span className="text-[24px] font-bold">$467</span>
            </div>
            <div className="flex">
              <div className="w-9/12 flex gap-2 justify-start items-center bg-[#F0F0F0] p-1 rounded-full">
                <RiPriceTag3Line
                  size={24}
                  className=" ml-5 text-gray-400 -rotate-90 "
                />
                <input
                  type="text"
                  placeholder="Add promo code"
                  className=" rounded-full w-full bg-[#F0F0F0] text-gray-600 outline-none px-2"
                />
              </div>
              <button className=" text-[16px] w-3/12 py-2 px-5 rounded-full bg-black text-white ">
                Apply
              </button>
            </div>
            <button className=" flex items-center justify-center w-full text-[16px] py-2 px-5 rounded-full bg-black text-white ">
              Go To Checkout <FaArrowRight size={20} className="ml-3" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
