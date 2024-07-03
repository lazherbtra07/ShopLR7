import React from "react";
import Image from "next/image";
import { PiStarFourFill } from "react-icons/pi";
import { useTranslations } from "next-intl";
import Link from "next/link";

export const Page = () => {
  const t = useTranslations("hero");
  return (
    <section className=" bg-[#F2F0F1] dark:bg-[#1f1f1f]">
      <div className=" container lg:flex justify-between items-center ">
        <div className="lg:w-1/2 py-12">
          <h1 className="xl:text-[75px] text-center lg:text-start text-[36px] xl:tracking-wide lg:text-[52px] font-bold leading-none mb-8">
            {t("title")}
          </h1>
          <p className="text-[16px] font-light text-center lg:text-start dark:text-gray-300  text-gray-500 mb-8">
            {t("para")}
          </p>
          <button className=" dark:bg-gray-500 w-full lg:w-fit px-12 py-3 bg-black rounded-full text-white text-[16px] font-light mb-12">
            {t("button")}
          </button>
          <div className="flex  ">
            <div className="pr-4 w-full lg:w-fit">
              <h1 className=" lg:text-[35px] font-bold">2,100+</h1>
              <p className="text-[16px] lg:text-[13px] text-gray-400 font-thin">
                {t("undernum1")}
              </p>
            </div>
            <div className="border-l-2 border-r-2 px-4 w-full lg:w-fit">
              <h1 className="lg:text-[35px] font-bold">20,000+</h1>
              <p className="text-[16px] lg:text-[13px] text-gray-400 font-thin">
                {t("undernum2")}
              </p>
            </div>
            <div className="pl-4 w-full lg:w-fit">
              <h1 className="lg:text-[35px] font-bold">35,000+</h1>
              <p className="text-[16px] lg:text-[13px] text-gray-400 font-thin">
                {t("undernum3")}
              </p>
            </div>
          </div>
        </div>
        <div>
          <Link href={"/web"}>lazher</Link>
        </div>
        <div className="relative">
          <PiStarFourFill className="absolute text-gray-400 text-[52px] top-40 left-5 lg:left-14 " />
          <Image
            className="h-[400px] lg:h-[560px] xl:h-[610px]"
            alt=""
            src={"/hero.png"}
            width={500}
            height={800}
          />
          <PiStarFourFill className="absolute text-gray-400 text-[100px]  top-8 right-2 lg:right-10" />
        </div>
      </div>
      <div className="bg-black h-[122px] flex ">
        <div className="container flex flex-wrap justify-center items-center gap-x-4 lg:gap-24 ">
          <Image alt="" src={"/ver.png"} width={134} height={36} />
          <Image alt="" src={"/zara.png"} width={70} height={36} />
          <Image alt="" src={"/guc.png"} width={134} height={36} />
          <Image alt="" src={"/pra.png"} width={134} height={36} />
          <Image alt="" src={"/cal.png"} width={134} height={36} />
        </div>
      </div>
    </section>
  );
};
