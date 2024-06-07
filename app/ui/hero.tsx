import { SlArrowRight } from "react-icons/sl";
import railLake from "@/app/assets/images/rail-lake.jpg";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="flex h-screen items-center justify-center relative">
      <Image
        alt=""
        className="absolute h-full left-0 top-0 w-full z-0"
        src={railLake}
      />
      <div className="absolute bg-black h-full left-0 opacity-15 top-0 z-10 w-full"></div>
      <p className="drop-shadow-lg flex font-semibold gap-2 items-center sm:gap-4 sm:text-3xl text-white text-xl xl:gap-6 xl:text-4xl z-10">
        Engage <SlArrowRight className="sm:text-lg text-xs xl:text-xl" />{" "}
        Collaborate
        <SlArrowRight className="sm:text-lg text-xs xl:text-xl" /> Deliver
      </p>
    </section>
  );
}
