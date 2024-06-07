"use client";

import { Bodoni_Moda } from "next/font/google";
import { usePathname } from "next/navigation";
import haidaHouseAtTllaal from "@/app/assets/images/haida-house-at-tllaal.jpg";
import Image from "next/image";
import Link from "next/link";
import onseConsultingLogo from "@/app/assets/logos/onse-consulting-logo.svg";

const bodoniModa = Bodoni_Moda({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export default function Footer() {
  const pathname = usePathname();

  return (
    <footer
      className="bg-center border-t relative"
      style={{ backgroundImage: `url('${haidaHouseAtTllaal.src}')` }}
    >
      <div className="absolute bg-white/95 h-full left-0 top-0 w-full z-10"></div>
      <div className="2xl:px-0 flex flex-col gap-16 lg:px-8 max-w-[1320px] md:px-4 mx-auto px-4 py-16 relative z-20">
        {(pathname === "/about" || pathname === "/contact") && (
          <div className="flex flex-col gap-2 md:w-1/2 xl:w-1/3">
            <h2 className={`${bodoniModa.className} text-[#ed1b24] text-2xl`}>
              Land Acknowledgement
            </h2>
            <p>
              ONSE Consulting is located in the ancestral, unceded and
              traditional territory of the Coast Salish peoples, specifically
              the Skwxwú7mesh (Squamish), Səl̓ílwətaʔ/Selilwitulh
              (Tsleil-Waututh), and xwməθkwəy̓əm (Musqueam) Nations.
            </p>
            <p>
              ONSE Consulting is grateful to be hosted by diverse Indigenous
              Peoples across British Columbia and acknowledges the diversity of
              governance, languages and cultures of First Nations, Métis and
              Inuit across Canada.
            </p>
          </div>
        )}
        <div className="flex flex-col gap-4 md:flex-row md:gap-0 md:items-start md:justify-between">
          <Link
            className={`${bodoniModa.className} flex gap-2 items-center text-xl`}
            href="/"
          >
            <Image
              alt="ONSE Consulting logo"
              height="40"
              src={onseConsultingLogo}
              width="40"
            />
            ONSE Consulting
          </Link>

          <div className="flex flex-col gap-1">
            <h3 className="font-semibold text-lg">Vancouver</h3>
            <address className="not-italic">
              1663 E 14th Ave,
              <br />
              Vancouver, BC V5N 2C9
            </address>
          </div>
        </div>
      </div>
    </footer>
  );
}
