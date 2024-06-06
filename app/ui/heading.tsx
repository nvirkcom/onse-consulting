import { Bodoni_Moda } from "next/font/google";
import headingLeft from "@/app/assets/icons/heading-left.png";
import headingRight from "@/app/assets/icons/heading-right.png";
import Image from "next/image";

const bodoniModa = Bodoni_Moda({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export default function Heading({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <h2
      className={`${bodoniModa.className} flex gap-4 items-center justify-center sm:text-3xl text-[#ed1b24] text-2xl text-center uppercase`}
    >
      <Image alt="" className="h-10 w-auto" src={headingLeft} />
      {children}
      <Image alt="" className="h-10 w-auto" src={headingRight} />
    </h2>
  );
}
