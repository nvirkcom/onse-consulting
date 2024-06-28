import { Bodoni_Moda } from "next/font/google";
import altin from "@/app/assets/images/atlin.jpg";
import Button from "@/app/ui/button";
import Figure from "@/app/ui/figure";
import Heading from "@/app/ui/heading";
import Image from "next/image";
import skedan from "@/app/assets/images/skedan.jpg";

const bodoniModa = Bodoni_Moda({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export default function About() {
  return (
    <section className="flex flex-col gap-16 max-w-[1320px] mx-auto px-4 py-16">
      <Heading>About</Heading>

      <div className="flex flex-col gap-8 lg:flex-row">
        <div className="flex flex-col gap-8 lg:items-center lg:w-[calc(50%-16px)]">
          <Figure
            caption={{
              english: "Atlin, British Columbia, Canada",
              native: "Taku Tlingit River First Nation",
            }}
          >
            <Image
              alt="Three colorful canoes are lined up neatly on the shore of a serene lake. The first canoe, with a red and blue design on the front, stands out with its vibrant colors. In the background, two more canoes can be seen, one with a painted side and a paddle resting on top. The water is crystal clear and reflects the surrounding mountains. The scene is peaceful and inviting, perfect for a day of paddling and enjoying the beauty of nature. A flag flutters in the gentle breeze, adding a touch of patriotism to the tranquil setting."
              className="rounded"
              height={1080}
              src={altin}
              width={1920}
            />
          </Figure>
          <div className="flex flex-col gap-2">
            <h3 className={`${bodoniModa.className} text-[#ed1b24] text-2xl`}>
              Our Focus
            </h3>
            <p>
              ONSE and its Associates are committed to build and improve
              relationships between Indigenous and non-Indigenous communities.
              We acknowledge the unique status, treaty rights and diverse
              governance systems of First Nations, Métis and Inuit peoples and
              communities in Canada and will work in partnership with all levels
              of government.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-8 lg:items-center lg:w-[calc(50%-16px)]">
          <Figure
            caption={{
              english: "Skedans, Haida Gwaii, British Columbia, Canada",
              native: "K’uuna Llnagaay, Xaayda Gwaay.yaay",
            }}
          >
            <Image
              alt="A man is seen walking through a dense forest on a trail, surrounded by tall pine trees and lush green grass. He is carrying a backpack on his back and wearing a hat to shield himself from the sun. The man appears to be enjoying a peaceful hike as he explores the natural beauty of the forest. The sun filters through the canopy of trees, casting dappled light on the ground. The scene exudes a sense of tranquility and adventure, capturing the essence of outdoor exploration and connecting with nature."
              className="rounded"
              height={1080}
              src={skedan}
              width={1920}
            />
          </Figure>
          <div className="flex flex-col gap-2">
            <h3 className={`${bodoniModa.className} text-[#ed1b24] text-2xl`}>
              Our Mission
            </h3>
            <p>
              ONSE is versed in providing respectful engagement and
              collaboration between Indigenous peoples and non-Indigenous
              communities, organizations, businesses and institutions. We aim to
              provide strong due-diligence in ensuring our clients and partners
              understand that providing a culturally rich and inclusive
              environment can lead to successful partnerships and outcomes.
            </p>
          </div>
        </div>
      </div>

      <Button href="/about">Read More</Button>
    </section>
  );
}
