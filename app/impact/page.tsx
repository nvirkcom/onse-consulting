import { Bodoni_Moda } from "next/font/google";
import Heading from "@/app/ui/heading";
import Image from "next/image";
import nicaragua from "@/app/assets/images/nicaragua.jpg";

const bodoniModa = Bodoni_Moda({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export default function Impact() {
  return (
    <>
      <div className="flex flex-col gap-16 max-w-[1320px] mt-20 mx-auto px-4 py-16">
        <Heading>Impact</Heading>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center">
          <Image
            alt="A group of children of various ages and genders are sitting at a table in what appears to be a classroom setting. They are all engaged with laptops, some smiling as they work. The scene is bustling with activity as the children focus on their screens. The room is bright with natural light, and there are chairs and a cabinet/shelf in the background. The children are surrounded by laptops, with some placed on the table and others on the floor. The image captures a moment of learning and collaboration as the children use technology for their educational activities."
            className="rounded lg:w-[calc(50%-16px)]"
            height={1080}
            src={nicaragua}
            width={1920}
          />
          <p>
            ONSE is dedicated and committed to assist the Isa Mundo Foundation
            and its projects and community partners. ONSE will support Isa Mundo
            by providing a minimum of 5% of each project’s budget to launch,
            complete and maintain new and on-going initiatives worldwide and
            dedicate time to engage and collaborate with less fortunate
            communities globally.
          </p>
        </div>
      </div>
    </>
  );
}
