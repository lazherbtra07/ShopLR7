"use client";
import React from "react";
import Image from "next/image";

export const CartModel = () => {
  const cartItem = true;
  return (
    <div className="  absolute p-4 rounded-md shadow-lg bg-white dark:bg-[#1f1f1f] top-20 right-0  flex flex-col gap-6 z-20 border border-gray-300">
      {!cartItem ? (
        <div>
          <h2 className="text-[20px] font-bold mb-3">Shopping Cart</h2>
          <div className="pb-3 border-b border-gray-300 text-center text-[18px] text-gray-600 dark:text-white">
            Cart is Empty
          </div>
          <div className="mt-2">
            <div className=" mb-1 flex justify-between items-center">
              <h3 className="text-[20px] font-bold">Total:</h3>
              <h2 className="text-right  text-[20px] font-bold">$0.00</h2>
            </div>
            <p className=" mb-2 text-[16px] font-light text-gray-500 text-center">
              Shipping and Taxes calculated at checkout
            </p>
            <div className=" flex justify-between items-center">
              <button className=" py-2 px-5 rounded-full bg-gray-200 text-gray-500 text-[14px]">
                View Cart
              </button>
              <button className=" py-2 px-5 rounded-full bg-black text-white text-[14px]">
                Checkout
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <h2 className="text-[20px] font-bold mb-3">Shopping Cart</h2>
          {/* items */}
          <div className="flex w-screen  md:w-[400px] pb-3 mb-3 border-b border-gray-300">
            <div className="w-1/4  flex justify-center items-center rounded-md bg-[#F0EEED] mr-3">
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
                <h4 className="text-[14px] font-extralight">Color:</h4>
                <h3 className="text-[16px] font-bold">Qty. 2</h3>
              </div>
              <div className=" relative">
                <h1 className="text-right  text-[18px] font-semibold">$512</h1>
                <button className=" absolute bottom-0 right-0  px-3 py-1 text-red-500 rounded-full bg-slate-200">
                  Remove
                </button>
              </div>
            </div>
          </div>
          <div className="flex w-screen  md:w-[400px] pb-3 border-b border-gray-300">
            <div className="w-1/4  flex justify-center items-center rounded-md bg-[#F0EEED] mr-3">
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
                <h4 className="text-[14px] font-extralight">Color:</h4>
                <h3 className="text-[16px] font-bold">Qty. 2</h3>
              </div>
              <div className=" relative">
                <h1 className="text-right  text-[18px] font-semibold">$512</h1>
                <button className=" absolute bottom-0 right-0  px-3 py-1 text-red-500 rounded-full bg-slate-200">
                  Remove
                </button>
              </div>
            </div>
          </div>
          {/* items */}
          <div className="mt-2">
            <div className=" mb-1 flex justify-between items-center">
              <h3 className="text-[20px] font-bold">Total:</h3>
              <h2 className="text-right  text-[20px] font-bold">$812</h2>
            </div>
            <p className=" mb-2 text-[16px] font-light text-gray-400 text-center">
              Shipping and Taxes calculated at checkout
            </p>
            <div className=" flex justify-between items-center">
              <button className=" py-2 px-5 rounded-full bg-gray-200 text-gray-500 text-[14px]">
                View Cart
              </button>
              <button className=" py-2 px-5 rounded-full bg-black text-white text-[14px]">
                Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
