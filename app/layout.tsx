import "./globals.css";
import { Bodoni_Moda, Raleway } from "next/font/google";
import Footer from "@/app/ui/footer";
import Header from "@/app/ui/header";
import type { Metadata } from "next";

const bodoniModa = Bodoni_Moda({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "ONSE Consulting",
  description: "ONSE Consulting",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const navLinks = [
    { href: "/", text: "Home" },
    { href: "/about", text: "About" },
    { href: "/contact", text: "Contact" },
    { href: "/impact", text: "Impact" },
    { href: "/services", text: "Services" },
  ];

  return (
    <html lang="en">
      <body className={raleway.className}>
        <Header font={bodoniModa.className} navLinks={navLinks} />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
