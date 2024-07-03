import React from "react";
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";
import Image from "next/image";
import { useTranslations } from "next-intl";

export const Footer = () => {
  const t = useTranslations("footer");
  return (
    <footer className="my-10 relative">
      <div className="container  ">
        <div className=" md:flex bg-black rounded-3xl text-white py-7 px-8 lg:px-16 justify-between items-center">
          <h1 className=" text-[32px] lg:text-[40px] text-center md:text-start font-bold pb-5 lg:p-0">
            {t("stay1")}
            <br className="hidden md:block" />
            {t("stay2")}
          </h1>
          <div className="lg:w-[30%]">
            <div className="flex gap-x-4  justify-center items-center bg-white py-2 px-4 rounded-full  ">
              <HiOutlineMail size={24} className="text-gray-400 " />
              <input
                className="bg-white w-full outline-none  text-black "
                placeholder={t("email")}
                type="text"
              />
            </div>
            <button className="bg-white w-full mt-4 py-2 px-8 rounded-full text-black text-[16px] font-medium">
              {t("sub")}
            </button>
          </div>
        </div>
      </div>
      <div className="bg-[#F0F0F0] dark:bg-[#1f1f1f] absolute w-full top-[50%] pt-48 lg:pt-32 -z-10">
        <div className="container">
          <div className="border-b border-gray-300 pb-7 flex flex-col md:flex-row md:justify-between justify-center ">
            <div className="">
              <h1 className="text-[28px] font-bold mb-3">SHOP.LR7</h1>
              <p className="text-[14px] font-normal text-gray-400 dark:text-slate-400 mb-5">
                {t("we1")}
                <br className="hidden lg:block" /> {t("we2")}
                <br className="hidden lg:block" />
                {t("we3")}
              </p>
              <div className="text-[22px]  flex justify-start items-center gap-3 mb-6">
                <FaFacebook className="border p-[2px] border-gray-400 rounded-full" />
                <FaInstagram className="border p-[2px] border-gray-400 rounded-full" />
                <FaTwitter className="border p-[2px] border-gray-400 rounded-full" />
                <FaGithub className="border p-[2px] border-gray-400 rounded-full" />
              </div>
            </div>
            <div className="md:flex md:gap-7 ">
              <div className="flex md:gap-7 justify-between">
                <ul className="text-[16px] mb-5 md:mb-0 text-gray-500 dark:text-gray-300 font-normal">
                  <li className="text-black dark:text-white font-medium tracking-widest">
                    {t("co")}
                  </li>
                  <li>{t("co1")}</li>
                  <li>{t("co2")} </li>
                  <li>{t("co3")}</li>
                  <li>{t("co4")} </li>
                </ul>
                <ul className="text-[16px] text-gray-500 dark:text-gray-300 font-normal">
                  <li className="text-black dark:text-white  font-medium tracking-widest">
                    {t("he")}
                  </li>
                  <li>{t("he1")}</li>
                  <li>{t("he2")}</li>
                  <li>{t("he3")}</li>
                  <li>{t("he4")}</li>
                </ul>
              </div>
              <div className="  flex md:gap-7 justify-between">
                <ul className="text-[16px] text-gray-500 dark:text-gray-300 font-normal">
                  <li className="text-black dark:text-white  font-medium tracking-widest">
                    {t("fa")}
                  </li>
                  <li>{t("fa1")}</li>
                  <li>{t("fa2")}</li>
                  <li>{t("fa3")}</li>
                  <li>{t("fa4")}</li>
                </ul>
                <ul className="text-[16px] text-gray-500 dark:text-gray-300 font-normal">
                  <li className="text-black dark:text-white  font-medium tracking-widest">
                    {t("re")}
                  </li>
                  <li>{t("re1")}</li>
                  <li>{t("re2")}</li>
                  <li>{t("re3")}</li>
                  <li>{t("re4")}</li>
                </ul>
              </div>
            </div>
          </div>
          <div className=" flex flex-col md:flex-row md:justify-between items-center    my-5 text-gray-500">
            <h1 className="mb-3 md:mb-0 dark:text-gray-100">{t("sh")}</h1>
            <Image alt="" src={"/pay.png"} width={200} height={50} />
          </div>
        </div>
      </div>
    </footer>
  );
};
