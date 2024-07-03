import React from "react";
import { FaSearch } from "react-icons/fa";

export const Search = () => {
  return (
    <div className="lg:w-full mr-5">
      <div className="lg:hidden">
        <FaSearch size={24} cursor={"pointer"} />
      </div>
      <div className="hidden  lg:flex bg-[#F0F0F0] rounded-full px-4 py-3">
        <FaSearch className="text-gray-400" size={24} cursor={"pointer"} />
        <input
          placeholder="Search for products..."
          className="bg-[#F0F0F0] text-gray-600 outline-none ml-3 text-[16px] font-normal w-full"
          type="search"
        />
      </div>
    </div>
  );
};
