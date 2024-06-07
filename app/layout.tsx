import "./globals.css";
import { Raleway } from "next/font/google";
import Footer from "@/app/ui/footer";
import Header from "@/app/ui/header";
import type { Metadata } from "next";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: {
    default: "ONSE Consulting",
    template: "%s - ONSE Consulting",
  },
  description: "ONSE Consulting",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={raleway.className}>
        <Header />
        <main className="text-center">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
