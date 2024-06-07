import { Bodoni_Moda } from "next/font/google";
import { Metadata } from "next";
import Figure from "@/app/ui/figure";
import guate from "@/app/assets/images/guate.jpg";
import Heading from "@/app/ui/heading";
import Image from "next/image";
import kwanlinDunCulturalCentre from "@/app/assets/images/kwanlin-dun-cultural-centre.jpg";
import mp from "@/app/assets/images/mp.jpg";
import muralHazeltonsDowntown from "@/app/assets/images/mural-hazeltons-downtown.jpg";
import muranHonoringOurWomen from "@/app/assets/images/muran-honoring-our-women.jpg";
import ottawaRiver from "@/app/assets/images/ottawa-river.jpg";

export const metadata: Metadata = {
  title: "Services",
};

const bodoniModa = Bodoni_Moda({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export default function Services() {
  return (
    <>
      <div className="flex flex-col gap-16 max-w-[1320px] mt-20 mx-auto px-4 py-16">
        <Heading>Services</Heading>
        <div className="flex flex-col gap-8 lg:flex-row lg:flex-wrap lg:gap-y-16">
          <div className="flex flex-col gap-4 lg:w-[calc(50%-16px)]">
            <Figure
              caption={{
                english: "Hazelton, British Columbia, Canada",
                native: "Gitx̱san Lax̱yip",
              }}
            >
              <Image
                alt="A picturesque street scene captured in this image showcases a vibrant building with a colorful facade standing out against a backdrop of majestic mountains. The architecture is diverse, with a stop sign visible in the foreground and a lamp post adding to the urban charm. The mountains in the distance provide a stunning natural contrast to the man-made structures in the foreground. The color palette is rich and varied, with shades of green, red, and blue dominating the scene. Overall, the image captures a harmonious blend of natural beauty and urban development."
                className="rounded"
                src={muralHazeltonsDowntown}
              />
            </Figure>
            <h3 className={`${bodoniModa.className} text-[#ed1b24] text-2xl`}>
              Indigenous Communities Collaboration
            </h3>
            <p>
              We are knowledgeable in Indigenous relations, engagement and
              protocols. Building strong and respectful partnerships with
              Indigenous Elders, leaders, community members, Nations and all
              levels of governments. We respect the cultural and linguistic
              diversity of First Nations, Métis and Inuit peoples and
              communities.
            </p>
            <p>
              We provide strategic planning, project management and
              communication strategies on how to better engage and collaborate
              with Indigenous leaders, Nations and communities.
            </p>
            <p>
              We focus on small and medium size community projects where we can
              manage and provide quality services within our capacity.
            </p>
            <p>
              We deliver quality research and policy advice on conservation,
              environmental awareness, culture and language preservation, and
              sustainable community development projects in Indigenous
              territories and communities.
            </p>
          </div>
          <div className="flex flex-col gap-4 lg:w-[calc(50%-16px)]">
            <Figure
              caption={{
                english: "Bambang, Bulacan, Philippine",
                native: "Dumagat Traditional Lands",
              }}
            >
              <Image
                alt="In the image, there is a group of children standing next to each other. The children are of different ages and genders, with a mix of boys and girls. One child is holding a toothbrush. Additionally, there is a man present, holding a baby. The children are wearing white shirts and appear to be in a crowded area with other people around. The children seem to be posing for a picture or simply standing together. The image captures a moment of innocence and togetherness among the group of children and the man with the baby."
                className="rounded"
                src={mp}
              />
            </Figure>
            <h3 className={`${bodoniModa.className} text-[#ed1b24] text-2xl`}>
              Non-Profit and Humanitarian Projects
            </h3>
            <p>
              We believe in giving back to less fortunate communities by
              supporting small and grassroots-based education, children and
              youth and environmental health initiatives locally and
              internationally.
            </p>
            <p>
              We provide advice and guidance on developing and launching small
              and grassroot non-profit organizations based on the success of
              launching our own non-profit entity in 2007.
            </p>
            <p>
              With over 30 charitable projects globally, we have seen first hand
              the positive impact non-profit groups can have in communities and
              future generations.
            </p>
            <p>
              We are committed to share our success and challenges to clients
              and partners interested in launching community projects or
              developing their own humanitarian and philanthropy organizations.
            </p>
          </div>
          <div className="flex flex-col gap-4 lg:w-[calc(50%-16px)]">
            <Figure
              caption={{
                english: "Whitehorse, Yukon, Canada",
                native:
                  "Tagish Kwan, Kwanlin Dün First Nation / Ta’an Kwäch’än",
              }}
            >
              <Image
                alt="A wooden sign is depicted with a unique circular native design on it. The design features a bird prominently displayed. The sign is large, measuring 592 pixels wide and 850 pixels tall, positioned at coordinates (1132, 180) on a background that appears to be outdoors. The colors of the sign include shades of brown, gray, and blue. The surrounding environment includes a tree and branches, suggesting a park or natural setting. The overall scene conveys a sense of artistry and cultural significance, with a touch of whimsy from the bird motif."
                className="rounded"
                src={kwanlinDunCulturalCentre}
              />
            </Figure>
            <h3 className={`${bodoniModa.className} text-[#ed1b24] text-2xl`}>
              Project Advice and Analysis
            </h3>
            <p>
              From the start of all projects, we believe in early engagement and
              developing respectful dialogues and continue this to the
              conclusion of any project that requires Indigenous consultation
              and engagement. This includes: draft proposal; proposed
              objectives; strategic advice; implementation; and evaluation.
            </p>
            <p>
              We provide research, analysis and advice on the beginning of
              planning stages and development plans for communities and
              institutions.
            </p>
            <p>
              Our Director and Associates have extensive knowledge in:
              Indigenous engagement and protocols; community development
              projects; species at risk and biodiversity analysis;
              infrastructure and land-use planning; and conservation strategies.
            </p>
          </div>
          <div className="flex flex-col gap-4 lg:w-[calc(50%-16px)]">
            <Figure
              caption={{
                english: "Vancouver, British Columbia, Canada",
                native:
                  "Past and Present. Mural by Corey Bulpitt, Sharifah Marsden and Jerry Whitehead on K'emk'emeláy̓",
              }}
            >
              <Image
                alt="A beautiful mural adorns the side of a building, featuring a woman and a man. The woman is wearing a striking red dress, standing out against the vibrant blue background. The intricate doodle-style artwork showcases native people in a city setting. The colors of the mural include shades of blue, red, and white. The artwork is detailed and captivating, adding a burst of artistic flair to the urban landscape. This mural is a true work of art that captures the essence of cultural diversity and creativity."
                className="rounded"
                src={muranHonoringOurWomen}
              />
            </Figure>
            <h3 className={`${bodoniModa.className} text-[#ed1b24] text-2xl`}>
              Product Development
            </h3>
            <p>
              We consult, research, design and complete Indigenous protocol
              resources and tools for businesses, corporations, governments and
              institutions to increase knowledge on Indigenous history, cultures
              and governance to help strengthen relationships and progress
              reconciliation.
            </p>
            <p>
              We work closely with Indigenous associates and community based
              team members to develop research materials, graphic designs and
              visual representations to create visual marketing and branding
              products that are respectful of Indigenous traditions and artistic
              expressions.
            </p>
            <p>
              We create visual summaries, reports and presentations by using
              various platforms: dashboards; newsletters; social media; and
              blogs as requested by partners and clients.
            </p>
          </div>
          <div className="flex flex-col gap-4 lg:w-[calc(50%-16px)]">
            <Figure
              caption={{
                english: "Ottawa, Ontario, Canada",
                native: "Odaawe, Anishinabe Algonquin Territory",
              }}
            >
              <Image
                alt="A picturesque scene of a serene river winding through a cityscape, with a majestic castle towering in the background. In the foreground, a tower crane stands tall against the sky, overseeing the bustling city below. Boats can be seen peacefully sailing along the river, adding to the charm of the setting. The city is dotted with buildings, factories, and greenery, creating a vibrant and lively atmosphere. The sky above is a calming shade of blue, completing the idyllic scene of urban beauty and natural tranquility blending seamlessly together."
                className="rounded"
                src={ottawaRiver}
              />
            </Figure>
            <h3 className={`${bodoniModa.className} text-[#ed1b24] text-2xl`}>
              Workshops and Sessions
            </h3>
            <p>
              We provide research, consultation, planning and coordination of
              small and medium size training sessions and workshops on
              Indigenous history, reconciliation and de-colonization by engaging
              with our Indigenous associates and partners.
            </p>
            <p>
              We coordinate and facilitate training and awareness on Indigenous
              history and reconciliation, environmental responsibility,
              sustainable community development and youth leadership.
            </p>
            <p>
              Our training and workshops are tailored to the knowledge levels,
              needs, skills and capacity of our partners and clients to ensure
              that information delivered is clear, concise and easily
              implemented within their business and organization cultures.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
