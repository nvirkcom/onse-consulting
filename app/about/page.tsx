import { Bodoni_Moda } from "next/font/google";
import { Metadata } from "next";
import altin from "@/app/assets/images/atlin.jpg";
import guate from "@/app/assets/images/guate.jpg";
import Heading from "@/app/ui/heading";
import Image from "next/image";
import skedan from "@/app/assets/images/skedan.jpg";

export const metadata: Metadata = {
  title: "About",
};

const bodoniModa = Bodoni_Moda({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export default function About() {
  return (
    <>
      <div className="flex flex-col gap-16 max-w-[1320px] mt-20 mx-auto px-4 py-16">
        <Heading>About</Heading>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center">
          <Image
            alt="Three colorful canoes are lined up neatly on the shore of a serene lake. The first canoe, with a red and blue design on the front, stands out with its vibrant colors. In the background, two more canoes can be seen, one with a painted side and a paddle resting on top. The water is crystal clear and reflects the surrounding mountains. The scene is peaceful and inviting, perfect for a day of paddling and enjoying the beauty of nature. A flag flutters in the gentle breeze, adding a touch of patriotism to the tranquil setting."
            className="rounded lg:w-[calc(50%-16px)]"
            height={1080}
            src={altin}
            width={1920}
          />
          <div className="flex flex-col gap-2">
            <h3 className={`${bodoniModa.className} text-[#ed1b24] text-2xl`}>
              Our Focus
            </h3>
            <p>
              ONSE and its Associates are committed to build and improve
              relationships between Indigenous and non-Indigenous peoples,
              communities, governments, businesses, organizations and
              institutions. We focus on socio-economic initiatives, conservation
              and environmental projects, community development, cultural
              preservation and governance structures. Our work begins with
              respectful engagement and honest collaboration to ensure
              successful deliverables for all parties.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-8 lg:flex-row lg:items-center">
          <Image
            alt="A man is seen walking through a dense forest on a trail, surrounded by tall pine trees and lush green grass. He is carrying a backpack on his back and wearing a hat to shield himself from the sun. The man appears to be enjoying a peaceful hike as he explores the natural beauty of the forest. The sun filters through the canopy of trees, casting dappled light on the ground. The scene exudes a sense of tranquility and adventure, capturing the essence of outdoor exploration and connecting with nature."
            className="rounded lg:order-2 lg:w-[calc(50%-16px)]"
            height={1080}
            src={skedan}
            width={1920}
          />
          <div className="flex flex-col gap-2 lg:order-1">
            <h3 className={`${bodoniModa.className} text-[#ed1b24] text-2xl`}>
              Our Mission
            </h3>
            <p>
              ONSE is versed in providing respectful engagement and
              collaboration between Indigenous peoples and non-Indigenous
              communities, organizations, businesses and institutions. ONSE’s
              Founder and Associates have established strong relationships and
              trust with Indigenous community members, organizations, leaders,
              Elders, youth, artists, knowledge holders and wisdom keepers.
              ONSE’s team of subject matter experts have partnered and delivered
              projects with academic institutions, science-based research
              groups, conservation and environmental groups, community
              developers, non-profit entities and Indigenous organizations.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-8 lg:flex-row lg:items-center">
          <Image
            alt="Two young girls are standing next to each other in this image. One girl is wearing a colorful dress and has a green hair clip, while the other girl has a pink flower in her hair. The girls appear to be talking or interacting with each other. Additionally, there is a person holding a banana in the background. The setting seems to be outdoors, possibly in a garden or park. The colors in the image are predominantly shades of pink, blue, and green. The girls seem to be enjoying themselves in each other''s company on a sunny day."
            className="rounded lg:w-[calc(50%-16px)]"
            height={1080}
            src={guate}
            width={1920}
          />
          <div className="flex flex-col gap-2">
            <h3 className={`${bodoniModa.className} text-[#ed1b24] text-2xl`}>
              Diversity, Equity and Inclusion (DEI)
            </h3>
            <p>
              ONSE`s approach to DEI is based on its own value and principle of
              creating a more inclusive, equitable and accessible community.
              ONSE is committed to creating a diverse workforce that is
              reflective of its partners and community. We strive to create an
              environment and culture that respect our associates, partners and
              clients. ONSE will strive `to be the change, we wish to see in the
              world`.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
