import { Cart } from "@/components/Cart";
import { Page } from "@/components/home/page";
import Image from "next/image";

export default function Home() {
  return (
    <div className=" dark:bg-slate-200">
      <Page />
      <Cart />
    </div>
  );
}
