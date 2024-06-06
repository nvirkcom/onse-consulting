import { Bodoni_Moda } from "next/font/google";
import { Metadata } from "next";
import Heading from "../ui/heading";
import Image from "next/image";
import squamishLake from "@/app/assets/images/squamish-lake.jpg";

export const metadata: Metadata = {
  title: "Contact",
};

const bodoniModa = Bodoni_Moda({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export default function Contact() {
  return (
    <>
      <section className="2xl:px-0 flex flex-col gap-16 lg:px-8 max-w-[1320px] md:px-4 mt-20 mx-auto px-4 py-16">
        <Heading>Contact</Heading>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center">
          <Image
            alt="A serene scene of a lake nestled in between majestic mountains. The crystal-clear water reflects the towering peaks in the background, creating a breathtaking view. The mountains are partially covered in snow, adding a touch of elegance to the landscape. A few boats can be seen peacefully floating on the calm water, with a lone person swimming nearby. The blue hues of the lake contrast beautifully with the earthy tones of the mountains, creating a harmonious balance of colors. This tranquil setting showcases the beauty of nature and invites viewers to immerse themselves in the peaceful atmosphere."
            className="rounded lg:w-[calc(50%-16px)]"
            height={1080}
            src={squamishLake}
            width={1920}
          />
          <div className="flex flex-col gap-4">
            <h2 className={`${bodoniModa.className} text-[#ed1b24] text-2xl`}>
              ONSE Consulting Inc.
            </h2>
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
      </section>
    </>
  );
}
