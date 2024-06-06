import { SlArrowRight } from "react-icons/sl";

export default function Hero() {
  return (
    <section className="flex h-screen items-center justify-center relative">
      <video
        autoPlay
        className="absolute h-full left-0 object-cover top-0 w-full z-0"
        loop
        muted
        src="/assets/videos/video.mov"
      ></video>
      <div className="absolute bg-black h-full left-0 opacity-15 top-0 z-10 w-full"></div>
      <p className="drop-shadow-lg flex font-semibold gap-2 items-center sm:gap-4 sm:text-3xl text-white text-xl xl:gap-6 xl:text-4xl z-10">
        Engage <SlArrowRight className="sm:text-lg text-xs xl:text-xl" />{" "}
        Collaborate
        <SlArrowRight className="sm:text-lg text-xs xl:text-xl" /> Deliver
      </p>
    </section>
  );
}
