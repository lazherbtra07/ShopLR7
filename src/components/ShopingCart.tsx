import React, { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CartModel } from "./CartModel";

export const ShopingCart = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  return (
    <div onClick={() => setIsCartOpen((prev) => !prev)}>
      <div className="relative">
        <div className=" cursor-pointer absolute w-6 h-6 -top-3 -right-3 rounded-full bg-red-600 text-white text-[15px] flex justify-center items-center">
          99
        </div>
        <AiOutlineShoppingCart size={24} cursor={"pointer"} />
      </div>
      {isCartOpen && <CartModel />}
    </div>
  );
};
