"use client";

import { CgMenuRight } from "react-icons/cg";
import { TfiClose } from "react-icons/tfi";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import onseConsultingLogo from "@/app/assets/logos/onse-consulting-logo.svg";

export default function Header({
  font,
  navLinks,
}: {
  font: string;
  navLinks: { href: string; text: string }[];
}) {
  const [navOpen, setNavOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="bg-white border-b fixed left-0 shadow-sm top-0 w-full z-20">
      <div className="2xl:px-0 lg:px-8 max-w-[1320px] md:flex md:items-center md:justify-between md:px-4 mx-auto">
        <div className="flex h-20 justify-between md:p-0 px-4">
          <Link className={`${font} flex gap-2 items-center text-xl`} href="/">
            <Image
              alt="ONSE Consulting logo"
              height="40"
              src={onseConsultingLogo}
              width="40"
            />
            ONSE Consulting
          </Link>
          <button className="md:hidden" onClick={() => setNavOpen(!navOpen)}>
            {navOpen ? (
              <TfiClose className="text-xl" />
            ) : (
              <CgMenuRight className="text-3xl" />
            )}
          </button>
        </div>
        <nav className={`${navOpen ? "" : "hidden"} md:flex`}>
          <ul className="md:flex md:gap-8">
            {navLinks.map(({ href, text }, i) => (
              <li
                className={
                  pathname === href
                    ? "bg-[#ed1b24] font-semibold md:bg-transparent md:text-[#ed1b24] text-white"
                    : ""
                }
                key={i}
              >
                <Link
                  className="block hover:text-[#ed1b24] md:p-0 px-4 py-4 transition"
                  href={href}
                >
                  {text}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
