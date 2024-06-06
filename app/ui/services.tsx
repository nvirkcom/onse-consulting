import { Bodoni_Moda } from "next/font/google";
import guate from "@/app/assets/images/guate.jpg";
import Heading from "@/app/ui/heading";
import Image from "next/image";
import kwanlinDunCulturalCentre from "@/app/assets/images/kwanlin-dun-cultural-centre.jpg";
import mp from "@/app/assets/images/mp.jpg";
import muralHazeltonsDowntown from "@/app/assets/images/mural-hazeltons-downtown.jpg";
import muranHonoringOurWomen from "@/app/assets/images/muran-honoring-our-women.jpg";
import ottawaRiver from "@/app/assets/images/ottawa-river.jpg";

const bodoniModa = Bodoni_Moda({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export default function Services() {
  return (
    <section className="bg-gray-50 border-y">
      <div className="flex flex-col gap-16 max-w-[1320px] mx-auto px-4 py-16">
        <Heading>Services</Heading>
        <Image
          alt="Two young girls are standing next to each other in this image. One girl is wearing a colorful dress and has a green hair clip, while the other girl has a pink flower in her hair. The girls appear to be talking or interacting with each other. Additionally, there is a person holding a banana in the background. The setting seems to be outdoors, possibly in a garden or park. The colors in the image are predominantly shades of pink, blue, and green. The girls seem to be enjoying themselves in each other''s company on a sunny day."
          className="rounded"
          src={guate}
        />
        <div className="flex flex-col gap-8 lg:flex-row lg:flex-wrap lg:gap-y-16">
          <div className="flex flex-col gap-4 lg:w-[calc(50%-16px)]">
            <Image
              alt="A picturesque street scene captured in this image showcases a vibrant building with a colorful facade standing out against a backdrop of majestic mountains. The architecture is diverse, with a stop sign visible in the foreground and a lamp post adding to the urban charm. The mountains in the distance provide a stunning natural contrast to the man-made structures in the foreground. The color palette is rich and varied, with shades of green, red, and blue dominating the scene. Overall, the image captures a harmonious blend of natural beauty and urban development."
              className="rounded"
              src={muralHazeltonsDowntown}
            />
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
          </div>
          <div className="flex flex-col gap-4 lg:w-[calc(50%-16px)]">
            <Image
              alt="In the image, there is a group of children standing next to each other. The children are of different ages and genders, with a mix of boys and girls. One child is holding a toothbrush. Additionally, there is a man present, holding a baby. The children are wearing white shirts and appear to be in a crowded area with other people around. The children seem to be posing for a picture or simply standing together. The image captures a moment of innocence and togetherness among the group of children and the man with the baby."
              className="rounded"
              src={mp}
            />
            <h3 className={`${bodoniModa.className} text-[#ed1b24] text-2xl`}>
              Non-Profit and Humanitarian Projects
            </h3>
            <p>
              We believe in giving back to less fortunate communities by
              supporting small and grassroots-based education, children and
              youth and environmental health initiatives locally and
              internationally.
            </p>
          </div>
          <div className="flex flex-col gap-4 lg:w-[calc(50%-16px)]">
            <Image
              alt="A wooden sign is depicted with a unique circular native design on it. The design features a bird prominently displayed. The sign is large, measuring 592 pixels wide and 850 pixels tall, positioned at coordinates (1132, 180) on a background that appears to be outdoors. The colors of the sign include shades of brown, gray, and blue. The surrounding environment includes a tree and branches, suggesting a park or natural setting. The overall scene conveys a sense of artistry and cultural significance, with a touch of whimsy from the bird motif."
              className="rounded"
              src={kwanlinDunCulturalCentre}
            />
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
          </div>
          <div className="flex flex-col gap-4 lg:w-[calc(50%-16px)]">
            <Image
              alt="A beautiful mural adorns the side of a building, featuring a woman and a man. The woman is wearing a striking red dress, standing out against the vibrant blue background. The intricate doodle-style artwork showcases native people in a city setting. The colors of the mural include shades of blue, red, and white. The artwork is detailed and captivating, adding a burst of artistic flair to the urban landscape. This mural is a true work of art that captures the essence of cultural diversity and creativity."
              className="rounded"
              src={muranHonoringOurWomen}
            />
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
          </div>
          <div className="flex flex-col gap-4 lg:w-[calc(50%-16px)]">
            <Image
              alt="A picturesque scene of a serene river winding through a cityscape, with a majestic castle towering in the background. In the foreground, a tower crane stands tall against the sky, overseeing the bustling city below. Boats can be seen peacefully sailing along the river, adding to the charm of the setting. The city is dotted with buildings, factories, and greenery, creating a vibrant and lively atmosphere. The sky above is a calming shade of blue, completing the idyllic scene of urban beauty and natural tranquility blending seamlessly together."
              className="rounded"
              src={ottawaRiver}
            />
            <h3 className={`${bodoniModa.className} text-[#ed1b24] text-2xl`}>
              Workshops and Sessions
            </h3>
            <p>
              We provide research, consultation, planning and coordination of
              small and medium size training sessions and workshops on
              Indigenous history, reconciliation and de-colonization by engaging
              with our Indigenous associates and partners.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
